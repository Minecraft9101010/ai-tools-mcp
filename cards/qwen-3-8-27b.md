# Qwen 3.8 27B (Alibaba)

Alibaba's latest 27B dense model — reportedly beats Claude Opus 4.6 Max on agentic and knowledge benchmarks while running locally on a single high-end GPU (or ~9GB quantized).

- **URL:** not mentioned (HuggingFace)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (56GB full, 30GB FP8, down to ~9GB at Q2 GGUF via Unsloth)
- **Availability:** available
- **Last reviewed:** 2026-08-16

## What it does
A 27B dense multimodal (image and video understanding) model extendable to a 1M-token context window, built for agentic coding and knowledge work. Outperforms Opus 4.6 Max across most agentic performance, coding, and general-knowledge benchmarks in the source video's comparison. Successor to Qwen 3.6 27B, which had over 7 million downloads and no real competitor at its size.

## When to use it
The default pick for a capable, locally-run mid-sized model — from high-end consumer GPUs down to low/mid-tier GPUs at the smallest GGUF quant.

## Sources
- [New Deepseek, GLM 5.3, Grok 4.6, LTX 2.5, Qwen 3.8, Gemini 3.7: AI NEWS](https://www.youtube.com/watch?v=62HSUsS0ypo) (2026-08-16) - deep-dive
