# Cube Composer

Converts standard single-camera video into navigable 360-degree scenes.

- **URL:** not mentioned
- **Pricing:** open-source
- **Platform:** local | web (demo on project site)
- **Local-friendly:** yes — open-source with GitHub install instructions; requires consumer GPU
- **Availability:** available
- **Last reviewed:** 2026-03-13

## What it does
Takes an ordinary video and reconstructs it as a full equirectangular 360-degree scene viewable from any angle, including VR. Upscales output to 4K. Uses a diffusion model that decomposes the scene into a cube-map with six faces, then uses sparse attention to maintain temporal and spatial consistency. Outperforms competitors Argus and Viewpoint on output quality.

## When to use it
Creating VR-ready content from regular video, generating 360 panoramic views for real estate or travel from existing footage, previs for immersive experiences.

## Sources
- [LTX 2.3, GPT 5.4, CUDA agent, realtime AI videos, new image models, 360 videos: AI NEWS](https://www.youtube.com/watch?v=KRE8JqTAEQk) (2026-03-13) - deep-dive
