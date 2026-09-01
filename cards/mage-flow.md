# Mage Flow (Microsoft)

Open-source image generator and editor with built-in ControlNet abilities, in the vein of GPT Image or Nano Banana.

- **URL:** not mentioned (models page, linked in video description)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (main model 17.5 GB; needs a mid-to-high-end GPU, 16GB+ VRAM)
- **Availability:** available
- **Last reviewed:** 2026-07-26

## What it does
A 4B parameter model that both generates and edits images: background replacement, camera angle and pose changes, virtual try-on, restyling, and micro-edits by text prompt. ControlNet-style conversions are native in both directions (photo to/from sketch, pose skeleton, Canny edges, depth, segmentation). Strong text rendering and multilingual output; a four-step turbo variant generates in under a second. Self-reported benchmarks put it above Flux Klein on generation, slightly behind on editing.

## When to use it
A local, open alternative to closed editors like GPT Image/Nano Banana, especially when you need ControlNet conversions and image editing in one lightweight model, or fast batch generation via the turbo variant.

## Sources
- [Claude Opus 5, GPT 6 hack, Flux 3, new Gemini, quantum breakthrough, new Qwen: AI NEWS](https://www.youtube.com/watch?v=fMaPaK4gcNE) (2026-07-26) - deep-dive
