# DeepSeek V4 Flash (DSpark update)

DeepSeek's cheap, fast open-weight model updated with the DSpark architecture — scoring close to GLM 5.2 and Opus 4.8 at roughly 100x lower cost than Claude Opus.

- **URL:** not mentioned (HuggingFace)
- **Pricing:** open-source (free weights; roughly 3 cents per million tokens via API)
- **Platform:** local | API
- **Local-friendly:** no (167GB; community 1-bit GGUF quant brings it to ~82.5GB)
- **Availability:** available
- **Last reviewed:** 2026-08-02

## What it does
An update to DeepSeek's Flash model line adding the DSpark architecture (which improves inference efficiency and throughput), scoring roughly on par with GLM 5.2 and Opus 4.8 on some benchmarks and clearly beating the prior V4 Flash/Pro versions on agentic coding, software engineering, and cybersecurity benchmarks — all at about 100x lower cost than Claude Opus. Community GGUF quantizations (down to ~82.5GB at 1-bit) followed within the same week via Unsloth.

## When to use it
Best-value frontier-adjacent intelligence right now if cost per token matters — coding agents, high-volume API use — and quantized versions bring it into reach of serious local rigs, if not consumer ones.

## Sources
- [New Deepseek, Seedance 2.5, Minimax H3, Gemini Robotics, AMD models: AI NEWS](https://www.youtube.com/watch?v=OrcBSpADCGk) (2026-08-02) - deep-dive
