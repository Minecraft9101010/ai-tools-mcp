# Nvidia Neotron 3 Super

Nvidia's open-source agentic language model with a 1M token context window.

- **URL:** https://developer.nvidia.com/nim (via Nvidia NIM)
- **Pricing:** open-source (weights + datasets released)
- **Platform:** local | API
- **Local-friendly:** no — 120B total parameters (MoE, 12B active); too large for most consumer setups
- **Availability:** available
- **Last reviewed:** 2026-03-20

## What it does
Mixture-of-experts LLM with 120B parameters (only 12B active at inference time) and a 1M token context window — one of the largest context windows among open-source models. Outperforms similar-sized open-source competitors (GPT-o OSS, Qwen 3.5 122B) on self-reported benchmarks for instruction following, math, coding, science, and agentic tasks. Underperforms top open-source models like Qwen 3.5 and Kimi 2.5 on third-party leaderboards.

## When to use it
Agentic workflows requiring very long context (full codebases, thousands of pages of documents) where open weights are a requirement. Best positioned for enterprise/research settings with the compute to serve it.

## Sources
- [AI maps, realtime 3D worlds, multi-shot videos, new TTS, new anime model: AI NEWS](https://www.youtube.com/watch?v=qWzo3ws0uWU) (2026-03-20) - deep-dive
