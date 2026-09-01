# DejaVu (NVIDIA)

Tiny NVIDIA 3D reconstruction model that turns multiple photos into a full 3D scene by reusing one transformer block repeatedly instead of stacking layers.

- **URL:** not mentioned (GitHub/HuggingFace)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (117M params, ~468MB)
- **Availability:** available
- **Last reviewed:** 2026-06-07

## What it does
Takes multiple images of a scene and reconstructs it in 3D (as a Gaussian splat with camera positions), reusing the same transformer block repeatedly rather than stacking many layers. At only 117M parameters it matches the performance of Depth Anything Three, a model roughly 10x its size. Code, training/eval scripts, and weights all released.

## When to use it
Fast, lightweight 3D scene reconstruction from a handful of photos when you don't have the compute budget for a much larger reconstruction transformer.

## Sources
- [Full body waifus, AI dreams, realtime AI music, open-source Gemini Omni: AI NEWS](https://www.youtube.com/watch?v=CzxqQJOswvo) (2026-06-07) - deep-dive
