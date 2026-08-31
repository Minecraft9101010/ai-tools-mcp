# Zanime

Fully fine-tuned anime image generation model built on Zimage Base, with distilled 4-step generation, GGUF support, and an FP8 variant that fits on consumer GPUs.

- **URL:** not mentioned (HuggingFace; from same team as Zimage)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (FP8 version is 6 GB; GGUF for non-CUDA GPUs; distilled 4-step version)
- **Availability:** available
- **Last reviewed:** 2026-05-03

## What it does
Zanime is Zimage Base fine-tuned from scratch on anime images — not a LoRA, but a fully retrained model. Inherits Zimage's speed and small footprint (6B parameters). The distilled 4-step version generates images in seconds. FP8 variant at 6 GB fits most consumer GPUs. GGUF versions released for non-CUDA hardware. Covers a wide range of anime styles with strong consistency.

## When to use it
Anime image generation on consumer hardware. When you need fast iteration (4-step generation) or need to run on non-Nvidia hardware. Better style range and consistency than LoRA-based anime adapters on top of general models.

## Sources
- [Robot girlfriends, recursive AI agents, full AI research, Happy Horse: AI NEWS](https://www.youtube.com/watch?v=7r_WJ9xpne0) (2026-05-03) - mention
