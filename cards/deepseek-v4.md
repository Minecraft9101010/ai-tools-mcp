# DeepSeek V4

Open-source frontier language model with 1.6 trillion parameters and a 1 million token context window, built by a small resource-constrained team.

- **URL:** https://huggingface.co/deepseek-ai
- **Pricing:** open-source (free to download); API pricing available separately
- **Platform:** local | API
- **Local-friendly:** yes, but requires multiple high-end GPUs (pro model is ~600+ GB)
- **Availability:** available (preview released; full version forthcoming)
- **Last reviewed:** 2026-04-26

## What it does
DeepSeek V4 Pro uses a hybrid attention architecture (Compressed Sparse Attention + Heavily Compressed Attention + sliding window) to achieve a 1M token context window at 3.7x lower compute than the previous DeepSeek V3.2. It adds Manifold Constrained Hyperconnections (MHC) to prevent signal explosions at trillion-parameter scale, a custom Muon optimizer for faster stable training, and anticipatory routing for self-stabilizing training runs. On benchmarks it matches top closed models including GPT-5.4 and Gemini 3.1 Pro, and scores a perfect 120/120 on the Putnam 2025 math competition. The smaller Flash variant (284B params) is also available.

## When to use it
Long-context tasks like analyzing large codebases or running multi-hour agentic workflows. A strong open-source alternative to closed frontier models, especially for teams that need local deployment or lower API costs. Best open-source choice for vibe coding per Vibe Code Bench rankings.

## Sources
- [The insane engineering of Deepseek V4](https://www.youtube.com/watch?v=XJUpuOBpT-4) (2026-05-01) - deep-dive
- [The most insane week in AI](https://www.youtube.com/watch?v=ZKfd9S9lOtc) (2026-04-26) - mention
