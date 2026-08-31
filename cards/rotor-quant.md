# Rotor Quant

Open-source KV cache compression algorithm that beats Google Turbo Quant on speed, quality, and parameter efficiency.

- **URL:** not mentioned (paper released)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (reduces GPU memory and speeds up inference)
- **Availability:** available
- **Last reviewed:** 2026-06-01

## What it does
Compresses KV cache vectors using Clifford rotators on small 3-number chunks instead of one large matrix multiply. Achieves 10x+ memory compression, 28% faster decoding, 5.3x faster prefill, using 44x fewer parameters versus Turbo Quant. Reduces operations per vector from ~16,000 to ~200.

## When to use it
Any local LLM deployment where long context causes GPU memory to spike. Drop-in improvement over Google Turbo Quant.

## Sources
- [Claude Mythos, Deepseek v4, HappyHorse, Meta's new AI, realtime video games: AI NEWS](https://youtube.com/watch?v=1_5sSJK2rU0) (2026-04-12) - mention
