# Fix Anything

Cleanup system for broken 3D renders — feeds a degraded Gaussian splat, NeRF, mesh, or sparse-point render through a video model to repair it.

- **URL:** not mentioned (code released)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (implemented as a LoRA on Wan 2.1, which runs on most consumer GPUs)
- **Availability:** available
- **Last reviewed:** 2026-08-30

## What it does
3D reconstructions often fall apart away from familiar camera angles: holes, floating geometry, blur. Fix Anything takes the degraded render and uses a pre-trained video model (a LoRA for Wan 2.1) to produce a cleaner, more realistic scene while preserving the camera path and 3D structure. Works with mesh and sparse-point inputs too.

## When to use it
Salvaging Gaussian splatting or NeRF captures that look fine from the original viewpoints but break elsewhere — real-estate scans, drone captures, photogrammetry cleanup.

## Sources
- [Ox Alpha reveal, realtime Minimax, Qwen Next, Hy4, robot olympics: AI NEWS](https://www.youtube.com/watch?v=4wjHNgMLeyY) (2026-08-30) - deep-dive
