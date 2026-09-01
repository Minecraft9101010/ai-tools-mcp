# HY4 Preview (Tencent)

Tencent's best model yet — a 770B open-source MoE that reaches the frontier of open models, released as a preview.

- **URL:** not mentioned (HuggingFace)
- **Pricing:** open-source (Apache 2)
- **Platform:** local
- **Local-friendly:** no (1.56TB full; community 1-bit GGML is 229GB)
- **Availability:** available
- **Last reviewed:** 2026-08-30

## What it does
770B parameters with 49B active, borrowing gated DeepSeek sparse attention, an index cache, and identity hyperconnections between layers. Huge jump over HY3: beats Qwen 3.8 Max and DeepSeek V4 Pro, scores close to GLM 5.3 and Kimi K3, and ties GLM 5.3 Flash on Arena's web dev leaderboard — all as a preview model.

## When to use it
One of the best open models for web dev if you have multi-GPU hardware for the 229GB quant. Otherwise treat it as the signal that Tencent has caught up to the open frontier; the finished (non-preview) release is the one to watch.

## Sources
- [Ox Alpha reveal, realtime Minimax, Qwen Next, Hy4, robot olympics: AI NEWS](https://www.youtube.com/watch?v=4wjHNgMLeyY) (2026-08-30) - deep-dive
