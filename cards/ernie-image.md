# Ernie Image

Baidu's open-source image generator — currently the top-ranked open-source image model, beating Z Image, Qwen Image, and Flux 2 Klein.

- **URL:** https://huggingface.co (models downloadable; GGUF versions via Unsloth)
- **Pricing:** open-source
- **Platform:** local (ComfyUI)
- **Local-friendly:** yes (full model: ~16-20 GB VRAM; GGUF compressed: as low as 3 GB VRAM)
- **Availability:** available
- **Last reviewed:** 2026-06-01

## What it does
Text-to-image generator with strong prompt adherence, text rendering accuracy, and detail quality. Comes in a base model (more steps, higher quality) and turbo model (fewer steps, slightly lower quality but barely noticeable difference). Supports prompt enhancement toggle that rewrites your prompt before generating. Uses Mistral 3B text encoder and Flux 2 VAE. GGUF compressed variants available for low-VRAM users (Q2K at 3.18 GB up to 16 GB).

## When to use it
Best open-source option for photorealistic or detailed artistic image generation. Outperforms other open-source models on text rendering, complex compositions, infographics, and artistic styles. Use ComfyUI with the built-in Ernie Image Turbo template. Weak on anatomy and complex physics compared to Z Image.

## Sources
- [New BEST local AI image generator is here!](https://youtube.com/watch?v=A_nAU8h9YOY) (2026-04-16) - deep-dive
