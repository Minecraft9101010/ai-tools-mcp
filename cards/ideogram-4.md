# Ideogram 4

Open-weights image generator that replaces text prompting with a bounding-box canvas for precise control over layout, text, and composition.

- **URL:** not mentioned (HuggingFace)
- **Pricing:** freemium (free to run locally for non-commercial use; commercial use requires contacting Ideogram's sales team for a license)
- **Platform:** local (ComfyUI)
- **Local-friendly:** yes (as little as 6GB VRAM via ComfyUI's automatic CPU offloading, though total model download across the diffusion, unconditional, text encoder, and VAE weights is roughly 28GB)
- **Availability:** available
- **Last reviewed:** 2026-06-09

## What it does
Instead of relying purely on a text prompt, Ideogram 4 uses a drag-and-drop bounding-box canvas: you place objects, text, and background elements at specific positions and describe each one individually, and the model generates an image matching that exact layout. Handles dense scenes with many elements (posters, manga panels, product shots) with strong prompt adherence, accurate text rendering across font styles, and broad pop-culture/character knowledge. Not censored, but prompts submitted without any bounding boxes drawn get blocked by a safety filter regardless of content — drawing boxes is required to generate at all. Purely text-to-image; cannot take a reference image as input, though a generated image can be set as a canvas background to reposition elements while keeping the same seed.

## When to use it
Compositions that need precise control over where each element sits (posters, manga/comic panels, multi-character scenes, ad layouts) rather than hoping a text prompt lands correctly. The bounding-box workflow has a learning curve and generation is noticeably slower than Z Image or Flux Klein (roughly a minute per image), but composition control and prompt adherence exceed both. Skip it for quick single-prompt generation, or for any commercial project without first securing a license.

## Sources
- [New BEST local AI image generator is here!](https://www.youtube.com/watch?v=OA4gchz1Zcs) (2026-06-09) - deep-dive
