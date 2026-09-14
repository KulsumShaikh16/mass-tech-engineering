const { chromium } = require('playwright');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const options = {};
for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith('--')) {
    const key = args[i].substring(2);
    if (i + 1 < args.length && !args[i + 1].startsWith('--')) {
      options[key] = args[i + 1];
      i++;
    } else {
      options[key] = true;
    }
  }
}

if (!options.html || !options.out || !options.duration) {
  console.error("Usage: node render.js --html <file> --out <file> --duration <ms> [options]");
  process.exit(1);
}

const htmlPath = path.resolve(options.html);
const outPath = path.resolve(options.out);
const duration = parseInt(options.duration, 10);
const fps = parseInt(options.fps || '30', 10);
const width = parseInt(options.width || '1920', 10);
const height = parseInt(options.height || '1080', 10);
const format = options.format || (outPath.endsWith('.gif') ? 'gif' : outPath.endsWith('.webm') ? 'webm' : 'mp4');
const transparent = !!options.transparent;
const keepFrames = !!options['keep-frames'];

const totalFrames = Math.ceil((duration / 1000) * fps);
const frameDir = path.join(path.dirname(outPath), 'frames_' + Date.now());

if (!fs.existsSync(frameDir)) {
  fs.mkdirSync(frameDir, { recursive: true });
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  
  await page.goto(`file://${htmlPath}`);
  
  // Disable all CSS animations and transitions for deterministic rendering
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-play-state: paused !important;
        transition: none !important;
      }
    `
  });

  console.log(`Rendering ${totalFrames} frames...`);
  for (let i = 0; i < totalFrames; i++) {
    const tMs = (i / fps) * 1000;
    
    // Call the global renderFrame function if it exists
    await page.evaluate((t) => {
      if (typeof window.renderFrame === 'function') {
        window.renderFrame(t);
      } else {
        // Fallback for Web Animations API
        document.getAnimations().forEach(anim => {
          anim.pause();
          anim.currentTime = t;
        });
      }
    }, tMs);
    
    const framePath = path.join(frameDir, `frame_${String(i).padStart(5, '0')}.png`);
    await page.screenshot({ 
      path: framePath, 
      omitBackground: transparent 
    });
    
    if (i % 10 === 0) {
      process.stdout.write(`\rRendered frame ${i}/${totalFrames}`);
    }
  }
  process.stdout.write(`\rRendered frame ${totalFrames}/${totalFrames}\n`);

  await browser.close();

  console.log('Stitching with ffmpeg...');
  try {
    let ffmpegPath = 'ffmpeg';
    try {
      ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
    } catch (e) {
      console.log('Local @ffmpeg-installer not found, falling back to global ffmpeg');
    }
    
    let ffmpegCmd = '';
    
    if (format === 'mp4') {
      ffmpegCmd = `"${ffmpegPath}" -y -framerate ${fps} -i "${path.join(frameDir, 'frame_%05d.png')}" -c:v libx264 -pix_fmt yuv420p "${outPath}"`;
    } else if (format === 'webm') {
      ffmpegCmd = `"${ffmpegPath}" -y -framerate ${fps} -i "${path.join(frameDir, 'frame_%05d.png')}" -c:v libvpx-vp9 ${transparent ? '-pix_fmt yuva420p' : '-pix_fmt yuv420p'} -b:v 2M "${outPath}"`;
    } else if (format === 'gif') {
      const palettePath = path.join(frameDir, 'palette.png');
      execSync(`"${ffmpegPath}" -y -i "${path.join(frameDir, 'frame_%05d.png')}" -vf palettegen "${palettePath}"`, { stdio: 'ignore' });
      ffmpegCmd = `"${ffmpegPath}" -y -framerate ${fps} -i "${path.join(frameDir, 'frame_%05d.png')}" -i "${palettePath}" -lavfi "paletteuse" "${outPath}"`;
    }

    if (options.audio) {
       // if audio is provided, modify command appropriately or run a second pass
       console.log('Audio is not natively supported in this simplified script yet.');
    }

    execSync(ffmpegCmd, { stdio: 'inherit' });
    console.log(`Video saved to ${outPath}`);
  } catch (e) {
    console.error('Failed to run ffmpeg:', e.message);
  } finally {
    if (!keepFrames) {
      fs.rmSync(frameDir, { recursive: true, force: true });
    }
  }
})();
