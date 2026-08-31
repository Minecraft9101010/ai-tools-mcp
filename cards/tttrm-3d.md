# TTTRM (3D Scene Reconstruction)

Test-time training model that reconstructs detailed 3D scenes from a set of photos using fast-weight learning.

- **URL:** https://huggingface.co (search TTTRM)
- **Pricing:** open-source (free; ~4GB model)
- **Platform:** local
- **Local-friendly:** yes (under 4GB, fits most consumer GPUs)
- **Availability:** available
- **Last reviewed:** 2026-03-05

## What it does
TTTRM (Test Time Training for Long Context Autoregressive 3D Reconstruction) takes multiple photos of an object or scene and converts them into a high-quality 3D Gaussian splat. Uses test-time training to compress photo information into fast weights on the spot, producing more detailed and consistent 3D representations than prior methods like 3D GS.

## When to use it
Creating accurate 3D models from real-world photos (objects, rooms, scenes) without specialized capture equipment. Small enough (~4GB) to run on a standard consumer GPU.

## Sources
- [Realtime AI waifus, Qwen 3.5, persistent memory, multiplayer gameplay, new image models: AI NEWS](https://www.youtube.com/watch?v=8grIT-xK50M) (2026-03-05) - mention
