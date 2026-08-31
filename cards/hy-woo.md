# HY Woo (HunyuanCustom)

Tencent's open-source image editor specialized in clothing swap and style transfer.

- **URL:** https://github.com/Tencent/HunyuanCustom
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** no — base model requires 8x40GB or 4x80GB VRAM; distilled version planned
- **Availability:** available (base model); distilled checkpoint coming soon
- **Last reviewed:** 2026-03-13

## What it does
Takes reference images to swap outfits, transfer styles, and composite looks onto a subject photo. Creates a tiny LoRA on the fly from reference images and injects it into the image generator for high consistency. Beats most open-source image editors including Flux 2 and LongCat; competitive with GPT Image 1.5 and C-Dream 4.5. Only loses to Nano Banana 2/Pro.

## When to use it
Fashion/e-commerce imagery, costume visualization, creative style compositing where you have reference photos of garments or looks you want applied to a subject.

## Sources
- [LTX 2.3, GPT 5.4, CUDA agent, realtime AI videos, new image models, 360 videos: AI NEWS](https://www.youtube.com/watch?v=KRE8JqTAEQk) (2026-03-13) - deep-dive
