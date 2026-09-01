# MRFlow

Training-free, model-agnostic speedup for image generation: generate low-res, upscale, then one high-res cleanup step. Up to 21x faster.

- **URL:** not mentioned (code and ComfyUI plugin released)
- **Pricing:** open-source
- **Platform:** local (ComfyUI plugin available)
- **Local-friendly:** yes (works with existing local image models, no retraining, no custom GPU kernels)
- **Availability:** available
- **Last reviewed:** 2026-07-05

## What it does
Generates the image at low resolution, upscales it, adds slight noise, and has the original model spend one final high-resolution step sharpening details. Speedups: ~21x on Z Image Turbo, ~9x on Flux Klein, ~10x on Qwen Image, with quality holding up well. Completely training-free and works across different image models.

## When to use it
Cutting local image generation to roughly one second per image on models you already run. The ComfyUI plugin makes it a drop-in for existing workflows.

## Sources
- [Full body waifus, Claude Fable is back, LongCat 2.0, mind-reading AI, live video editing: AI NEWS](https://www.youtube.com/watch?v=qtzzN8w2TvU) (2026-07-05) - deep-dive
