# One Video One World

Turns a normal video into an animated 3D world with each object reconstructed as its own simulation-ready mesh.

- **URL:** not mentioned (code released)
- **Pricing:** open-source (own code MIT, but depends on components under non-commercial licenses)
- **Platform:** local
- **Local-friendly:** no (over 40GB VRAM recommended)
- **Availability:** available
- **Last reviewed:** 2026-08-30

## What it does
A pipeline of existing foundation models — Qwen3-VL for scene understanding, SAM 3 for segmentation, Flux 2 for inpainting hidden object parts, HY 3D Gen for reconstruction, plus camera/pose estimators — that separates a video into individual 3D meshes, works out object relationships and motion, and renders a fully animated scene.

## When to use it
Converting real footage into simulation-ready 3D scenes: game or sim asset extraction, robotics environments, digital twins of filmed spaces. Mind the non-commercial licenses on the underlying components.

## Sources
- [Ox Alpha reveal, realtime Minimax, Qwen Next, Hy4, robot olympics: AI NEWS](https://www.youtube.com/watch?v=4wjHNgMLeyY) (2026-08-30) - deep-dive
