# LongCat 2.0 (Meituan)

Open-source 1.6T-parameter MoE frontier model from Meituan, notable for being trained entirely without Nvidia GPUs.

- **URL:** not mentioned (GitHub + Hugging Face)
- **Pricing:** open-source (MIT license)
- **Platform:** local | API
- **Local-friendly:** no (FP8 weights exceed 2TB; needs stacked enterprise GPUs until community quants land)
- **Availability:** available
- **Last reviewed:** 2026-07-05

## What it does
1.6 trillion parameter mixture-of-experts model (48B active) built for agentic coding and long-context work, benchmarking close to top closed models (GPT 5.5, Claude Opus) on Terminal Bench and similar agentic/reasoning tests. Trained and deployed entirely on AI ASIC "super pods" (rumored Huawei) with no rollbacks or loss spikes, a first for frontier-scale training off Nvidia hardware. Works with any agent harness (Claude Code, Open Claw, Open Code, Hermes) and runs on NPUs as well as GPUs.

## When to use it
An open frontier-class model for agentic coding via API or serious self-hosted infrastructure. Too large for consumer hardware; watch for community quantized versions.

## Sources
- [Full body waifus, Claude Fable is back, LongCat 2.0, mind-reading AI, live video editing: AI NEWS](https://www.youtube.com/watch?v=qtzzN8w2TvU) (2026-07-05) - deep-dive
