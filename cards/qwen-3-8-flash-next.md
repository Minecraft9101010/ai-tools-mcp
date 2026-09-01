# Qwen 3.8 Flash Next

Alibaba's tiny open-weights flash model (125B total, 6B active) previewing the Qwen 4 architecture — frontier-adjacent performance at 10 cents per task.

- **URL:** not mentioned (HuggingFace; also via Alibaba's API)
- **Pricing:** freemium (open weights; very cheap API, ~9x cheaper than GPT)
- **Platform:** local | API
- **Local-friendly:** no for the full model (360GB; FP8 186GB), borderline via Unsloth's 72.5GB 1-bit GGUF on an RTX 6000
- **Availability:** available
- **Last reviewed:** 2026-08-30

## What it does
Early preview of the upcoming Qwen 4 architecture: a 51B N-gram embedding lookup memory, gated DeltaNet in three of every four layers compressing context into a small memory state, and Qwen sparse attention in the rest for precise retrieval. Beats DeepSeek V4 Flash and Opus 4.6 Max on average across agentic/coding benchmarks; tied with Gemini 3.7 Flash on Artificial Analysis, one point under GLM 5.3 Flash despite being far smaller.

## When to use it
Cheap high-volume agent workloads and web dev (it beats GLM 5.3 Max on Arena web dev, tied with GPT 5.6 Soul). GLM 5.3 Flash still edges it on raw scores; this wins on size and as a look at where Qwen 4 is going.

## Sources
- [Ox Alpha reveal, realtime Minimax, Qwen Next, Hy4, robot olympics: AI NEWS](https://www.youtube.com/watch?v=4wjHNgMLeyY) (2026-08-30) - deep-dive
