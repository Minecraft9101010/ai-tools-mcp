# Neotron 3 Nano Omni (Nvidia)

Open-source 30B mixture-of-experts model from Nvidia that handles video, audio, images, and text together in one model, with only 3B active parameters at inference time.

- **URL:** not mentioned (fully open source; models, datasets, training recipes released)
- **Pricing:** open-source
- **Platform:** local | API
- **Local-friendly:** yes (3B active params; full model 66.1 GB; quantized versions expected)
- **Availability:** available
- **Last reviewed:** 2026-05-03

## What it does
Neotron 3 Nano Omni is Nvidia's open multimodal model that processes video, audio, images, and text simultaneously in one unified model. At 30B parameters with 3B active (MoE), it delivers over 9x higher system capacity for video reasoning and 7x for multi-document tasks vs a dense baseline. Handles OCR, document understanding, video understanding, and audio understanding. Compresses video intelligently by summarizing important content while preserving temporal motion. Designed to integrate into agentic systems like OpenClaw.

## When to use it
Agentic workflows that need to process diverse input types (video, audio, docs) without managing separate specialized models. Strong for document-heavy tasks with visual and audio context. Good foundation for multimodal agents that need efficiency at scale.

## Sources
- [Robot girlfriends, recursive AI agents, full AI research, Happy Horse: AI NEWS](https://www.youtube.com/watch?v=7r_WJ9xpne0) (2026-05-03) - mention
