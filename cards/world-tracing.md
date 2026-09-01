# World Tracing

Turns a single image or short video into layered 3D geometry that includes hidden surfaces behind what the camera sees.

- **URL:** not mentioned (GitHub)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (models total only 6.2GB)
- **Availability:** available
- **Last reviewed:** 2026-06-14

## What it does
Gives every pixel a stack of 3D points: the visible surface first, then the occluded geometry behind it (the back of an object, the wall behind furniture). The layered point cloud lifts into a textured mesh without retraining, supports 3D edits like adding/removing objects, and can guide video generation with geometry references. Three models: static object, static scene, and moving 3D object.

## When to use it
Image-to-3D work where you need complete geometry, not just a visible-surface depth map: scene reconstruction for editing, mesh extraction, or 3D-guided video generation. Small enough for most consumer GPUs.

## Sources
- [RIP Claude Fable, open-source AI unleashed, full body avatars, new Google models, new TTS: AI NEWS](https://www.youtube.com/watch?v=SxiRANj0xLs) (2026-06-14) - deep-dive
