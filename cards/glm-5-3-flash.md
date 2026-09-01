# GLM 5.3 Flash

ZAI's small open-weights model with vision (revealed as the stealth "Ox Alpha" on OpenRouter) — near-frontier intelligence at a fraction of anyone's price.

- **URL:** not mentioned (HuggingFace; was free as "Ox Alpha" on OpenRouter)
- **Pricing:** freemium (open weights; extremely cheap API, ~9 cents per task)
- **Platform:** local | API
- **Local-friendly:** no (328GB full model; Unsloth 1-bit GGUF is 93GB — very high-end consumer hardware only)
- **Availability:** available
- **Last reviewed:** 2026-08-30

## What it does
320B total parameters, 18B active MoE, and the first GLM with vision — images, documents, and video analysis, which also makes it much better at front-end work. Beats GLM 5.2 and Opus 4.8 on benchmarks and matches mid-size GPT 5.6 Terra, with among the lowest hallucination rates measured (20% vs Opus 5's 60%). Linear plus sparse attention cuts attention compute ~3x and KV cache 4.4x; served entirely on Chinese AI chips.

## When to use it
Deploying agents that churn through millions of tokens daily — the best intelligence-per-cost option available, dozens of times cheaper than Kimi K3, Grok 4.6, or GPT. Also the GLM to pick when you need vision, which the full GLM 5.3 lacks.

## Sources
- [Ox Alpha reveal, realtime Minimax, Qwen Next, Hy4, robot olympics: AI NEWS](https://www.youtube.com/watch?v=4wjHNgMLeyY) (2026-08-30) - deep-dive
