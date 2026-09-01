# Ornith 1.5

Open-source model family (9B, 35B MoE, 397B MoE) trained through a self-improvement loop where the system invents and verifies its own training tasks.

- **URL:** not mentioned (HuggingFace)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes for the 9B (18.8GB, and GGUFs down to under 6GB); no for the 397B (794GB)
- **Availability:** available
- **Last reviewed:** 2026-08-23

## What it does
Built on a closed loop: the system proposes new problems, builds the scaffolds to solve and verify them, generates solutions, and feeds the results back as RL training data. The 397B flagship beats GLM 5.2 (twice its size) across agentic coding and knowledge-work benchmarks and edges close to Opus 4.8; the 35B beats Qwen 3.6 on most benchmarks (though Qwen 3.8 already exists).

## When to use it
The 9B (or its sub-6GB 4-bit GGUF) is a solid addition to a local LLM lineup alongside Qwen 3.8, reaching down to low-end GPUs. The flagship needs stacked accelerators.

## Sources
- [New AI waifus, new Deepseek, realtime worlds, Happy Shrimp, tiny TTS: AI NEWS](https://www.youtube.com/watch?v=rQ4yX5qNYdY) (2026-08-23) - deep-dive
