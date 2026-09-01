# Moverse

Turns a single image into an explorable 360-degree panorama world, rendering in real time at 8 fps on one RTX 4090.

- **URL:** not mentioned
- **Pricing:** unknown (release planned)
- **Platform:** local
- **Local-friendly:** yes (runs real-time on a single RTX 4090, 24GB)
- **Availability:** unreleased (code and models in corporate compliance review, ~1 month out)
- **Last reviewed:** 2026-06-14

## What it does
Separates world construction from rendering: expands the input image into a 360-degree panorama, converts it into a 3D Gaussian model as reusable spatial memory, then a video renderer follows your camera path through it. Works across styles: photos, cartoons, oil paintings, Ghibli. Output is blurry and low resolution, but the real-time consumer-GPU performance is the point.

## When to use it
Interactive walkable worlds from a single image on consumer hardware, when responsiveness matters more than fidelity. Wait for the compliance review to clear before expecting code.

## Sources
- [RIP Claude Fable, open-source AI unleashed, full body avatars, new Google models, new TTS: AI NEWS](https://www.youtube.com/watch?v=SxiRANj0xLs) (2026-06-14) - deep-dive
