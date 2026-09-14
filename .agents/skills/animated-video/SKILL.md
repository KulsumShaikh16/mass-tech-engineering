---
name: animated-video
description: Generate animated motion-graphics videos (MP4/WebM/GIF) — explainer videos, title/lower-third animations, animated infographics, product demo overlays, social clips — by building an HTML/CSS/JS scene and rendering it frame-by-frame with a headless browser and ffmpeg. Use this whenever the user asks for an "animated video," "explainer video," "motion graphics," a video with animated text/shapes/charts, a GIF/MP4 of an animation, or wants to turn a static design into something that moves — even if they don't mention HTML or code. Not for editing/trimming existing footage, AI text-to-video of photorealistic scenes, or voice/lip-sync — flag those as out of scope.
---

# Animated Video Generation

Produce short motion-graphics videos by writing a normal HTML/CSS/JS page that
*represents the animation as a pure function of time*, then mechanically
stepping through that timeline frame-by-frame in a headless browser and
stitching the resulting PNGs into a video with ffmpeg.

This works because HTML/CSS is a capable, precise 2D animation surface and
Claude already writes it well — the only genuinely new trick is capturing it
deterministically instead of screen-recording in real time. Real-time capture
is at the mercy of whatever's slow that moment (a dropped frame, a slow
paint) and produces stutter. Frame-by-frame capture asks "what does the
scene look like at exactly t=1834ms?", renders precisely that, and only then
moves to the next frame — so the output is always perfectly smooth
regardless of how long rendering actually took.

## Setup (check this first)

The renderer needs `playwright` (with its Chromium browser) and `ffmpeg`.

```bash
which ffmpeg || echo "MISSING ffmpeg"
node -e "require('playwright')" 2>&1 || echo "MISSING playwright (try: NODE_PATH=\$(npm root -g) node -e \"require('playwright')\")"
```

If playwright is installed globally rather than in a local `node_modules`,
`require('playwright')` only resolves under Node's CommonJS loader when
`NODE_PATH` points at the global modules directory — so always run
`scripts/render.js` like this:

```bash
NODE_PATH=$(npm root -g) node scripts/render.js --html scene.html --out video.mp4 --duration 4000 --fps 30
```

If neither is available and the environment has no internet access to
install them, say so plainly rather than attempting a silent workaround —
the user needs to know before waiting on something that can't finish.

## Workflow

1. **Clarify the brief** — don't ask exhaustively, but pin down: what the
   video needs to say/show (headline, key points, brand colors if any),
   roughly how long (a 15-30s explainer is a good default for "explainer
   video" with no length given), aspect ratio (16:9 landscape `1920x1080` by
   default; ask if they mention social — 9:16 `1080x1920` for
   Reels/TikTok/Shorts, 1:1 `1080x1080` for feed posts), and output format
   (`mp4` default; `gif` for something meant to loop inline; `webm` if they
   need transparency).

2. **Write the scene as `assets/template.html`'s pattern**: a single HTML
   file where `window.renderFrame(tMs)` is a pure function that sets DOM/CSS
   state for a given millisecond of the timeline. Copy
   `assets/template.html` as a starting point — it demonstrates the load-
   bearing patterns (easing helpers, a scene timeline of `[start, end]`
   windows, staggered entrances, an object animating along a path). Read
   `references/techniques.md` for the animation-writing patterns
   (easing curves, staggering, crossfades, camera-style pans, chart
   animation, syncing to a script/voiceover) before writing a non-trivial
   scene — don't reinvent these from scratch each time.

   The critical discipline: **`renderFrame` must be pure in `t`.** No
   `setTimeout`, `setInterval`, `Date.now()`, or `requestAnimationFrame`
   loops driving state — the renderer calls `renderFrame(t)` directly and
   screenshots whatever that call produces, so if the function reads the
   real clock instead of its argument, frames will all look identical or
   render blank. Everything the scene needs to know about "when" comes from
   the `t` parameter.

   If a scene is simple enough to express as plain CSS `@keyframes` /
   transitions / the Web Animations API instead, that's fine too — skip
   `renderFrame` entirely and the renderer will auto-detect and scrub
   `document.getAnimations()` frame by frame instead. Prefer `renderFrame`
   for anything with more than one or two moving pieces, staggering, or
   data-driven content (bar charts, counters) — it's far easier to reason
   about and debug.

3. **Render a short preview first.** Before committing to the full render,
   render 2-3 seconds at a lower resolution (e.g. `960x540`) to sanity-check
   timing and layout quickly, and pull a couple of frames as PNGs to look at
   directly:
   ```bash
   NODE_PATH=$(npm root -g) node scripts/render.js --html scene.html --out /tmp/preview.mp4 \
     --duration 3000 --fps 24 --width 960 --height 540
   ffmpeg -y -ss 1.0 -i /tmp/preview.mp4 -frames:v 1 /tmp/check.png
   ```
   View `/tmp/check.png` (the `view` tool renders images directly) before
   spending time on a full-resolution, full-length render. This catches
   layout bugs, cut-off text, and bad timing cheaply.

4. **Render the final video** at full duration/resolution once the preview
   looks right:
   ```bash
   NODE_PATH=$(npm root -g) node scripts/render.js --html scene.html \
     --out /mnt/user-data/outputs/video.mp4 --duration 15000 --fps 30 \
     --width 1920 --height 1080
   ```
   Longer or higher-resolution renders take proportionally longer (each
   frame is a real page screenshot) — a 30s clip at 1080p/30fps is 900
   frames and will take a few minutes. Let the user know if a render will
   take a while before starting it.

5. **Present the result** with `present_files` — a video file is only
   reachable to the user once it's in `/mnt/user-data/outputs/` and
   presented, same as any other generated file.

## Script reference (`scripts/render.js`)

```
node scripts/render.js --html <file> --out <file> --duration <ms> [options]

Required:
  --html <path>       HTML file to render (local file, not a URL)
  --out <path>        Output path — extension doesn't control format, --format does
  --duration <ms>      Total length of the animation in milliseconds

Optional:
  --fps <n>            Default 30. Use 24 for a filmic feel, 60 for very smooth motion/fast movement.
  --width / --height   Default 1920x1080. Match to the target aspect ratio.
  --format mp4|webm|gif  Default mp4. Use webm for alpha-channel transparency, gif for short inline loops.
  --transparent         Render with a transparent background (webm/gif only — mp4/H.264 has no alpha).
  --audio <path>        Mux in an audio track (voiceover/music); video length still comes from --duration.
  --keep-frames          Keep the intermediate PNG frames next to the output instead of deleting them (useful for debugging a bad frame).
```

## Common pitfalls

- **Fonts not loaded before the first frame**: if using a custom @font-face,
  make sure it's referenced in the CSS and loaded from a local file (no
  network access to CDNs in this environment) — otherwise early frames may
  render with a fallback font before the swap, which won't be re-captured
  since each frame is only rendered once.
- **Content overflowing the stage**: the `#stage` div (or equivalent root)
  should be sized to exactly `--width` x `--height` in CSS pixels — anything
  outside that box is simply clipped by the viewport, not scaled.
- **Relying on real time anywhere** — see the purity discipline in step 2.
  This is the single most common bug: something looks perfect when opened
  normally in a browser (where real time flows) and then renders as a
  static or garbled video (because `renderFrame` isn't actually driving
  everything).
- **GIFs looking washed out**: ffmpeg's default GIF palette is only 256
  colors; the script already uses `palettegen`/`paletteuse` for a better
  palette, but very colorful/gradient-heavy scenes will still look better
  as mp4/webm than gif.
