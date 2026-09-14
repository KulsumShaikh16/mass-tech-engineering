# Animation Techniques

This document outlines standard patterns for creating motion graphics using pure function-of-time rendering (`renderFrame(t)`).

## The Core Concept: Map and Ease

Every animation involves taking the current time `t`, mapping it to a `[0, 1]` progress value for a specific window of time, and then easing that progress value.

```javascript
const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
const mapTime = (t, start, end) => clamp((t - start) / (end - start), 0, 1);

// Standard easing
const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);
const easeInOutCubic = x => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
```

## 1. Staggering

To animate a list of items sequentially, use their index to offset the start time.

```javascript
const items = document.querySelectorAll('.list-item');
items.forEach((item, index) => {
  const start = 1000 + (index * 200); // 200ms stagger
  const end = start + 800; // 800ms duration per item
  
  const p = mapTime(tMs, start, end);
  const ease = easeOutCubic(p);
  
  item.style.opacity = p;
  item.style.transform = `translateX(${50 * (1 - ease)}px)`;
});
```

## 2. Counting/Data Animation

Because we have exact time, we can animate numbers exactly.

```javascript
const p = mapTime(tMs, 1000, 3000);
const ease = easeOutCubic(p);
const value = Math.floor(ease * 100); // Counts 0 to 100
document.getElementById('counter').innerText = `${value}%`;

// Bar chart
document.getElementById('bar').style.width = `${ease * 100}%`;
```

## 3. Camera Pans (Moving the Stage)

To simulate a camera moving, translate or scale a wrapper container.

```javascript
const p = mapTime(tMs, 5000, 8000);
const ease = easeInOutCubic(p);

// "Camera" moves right by moving world left
const xOffset = -500 * ease; 
document.getElementById('world-container').style.transform = `translateX(${xOffset}px) scale(${1 + 0.5*ease})`;
```

## 4. Path Animation

Moving along a circular or complex path.

```javascript
const p = mapTime(tMs, 1000, 5000);
const angle = p * Math.PI * 2; // Full circle
const radius = 200;

const x = Math.cos(angle) * radius;
const y = Math.sin(angle) * radius;

el.style.transform = `translate(${x}px, ${y}px)`;
```

## 5. Sequencing Scenes

For longer videos, clear the stage and bring in new elements at specific timestamps.

```javascript
if (tMs < 5000) {
  // Scene 1 logic
  document.getElementById('scene1').style.display = 'block';
  document.getElementById('scene2').style.display = 'none';
} else {
  // Scene 2 logic
  document.getElementById('scene1').style.display = 'none';
  document.getElementById('scene2').style.display = 'block';
}
```
