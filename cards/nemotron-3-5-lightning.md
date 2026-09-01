# NeMoTron 3.5 Lightning (NVIDIA)

Small (30B MoE) open-source model that trades some intelligence for being the fastest model in its size class — roughly double Qwen 3.6's speed.

- **URL:** not mentioned (HuggingFace)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (~22GB at FP4)
- **Availability:** available
- **Last reviewed:** 2026-08-16

## What it does
A 30B-parameter mixture-of-experts model with a 1M-token context window. Less intelligent than Qwen 3.6, closer to Qwen 3.5/Gemma 4 on capability, but roughly double Qwen 3.6's output tokens/sec and faster than Gemini 3.6 Flash — the fastest model around the 30B parameter mark in the source video's comparison.

## When to use it
Latency-sensitive local deployments where raw speed matters more than squeezing out maximum intelligence at this size.

## Sources
- [New Deepseek, GLM 5.3, Grok 4.6, LTX 2.5, Qwen 3.8, Gemini 3.7: AI NEWS](https://www.youtube.com/watch?v=62HSUsS0ypo) (2026-08-16) - deep-dive
