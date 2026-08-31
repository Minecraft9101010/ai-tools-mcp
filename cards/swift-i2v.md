# Swift I2V

Efficient image-to-video model that generates up to 81 frames at 2K resolution on a single RTX 4090, using a two-stage sketch-then-refine approach.

- **URL:** not mentioned (GitHub repo; inference code and models planned for release)
- **Pricing:** open-source (planned)
- **Platform:** local
- **Local-friendly:** yes (single RTX 4090 / 24 GB VRAM)
- **Availability:** limited (GitHub up; code/models pending release)
- **Last reviewed:** 2026-05-10

## What it does
Swift I2V generates 2K resolution videos from a single image in two stages: first a low-resolution motion reference is created, then a high-resolution refinement pass produces the final video while using the original image as a guide. Conditional segment-wise generation splits the video into time segments that share context, keeping memory under control. Reduces total compute by 2x vs direct high-resolution generation, outperforms upscaler-based approaches on face and detail preservation.

## When to use it
When you need high-resolution image-to-video generation on consumer hardware without resorting to upscaling. Particularly good for portrait or close-up subjects where upscalers tend to blur faces.

## Sources
- [Self-evolving AI, robot fights, new GPT voice, new local image model, Gemma upgrade: AI NEWS](https://www.youtube.com/watch?v=quxnhOeRz7I) (2026-05-10) - mention
