# Kimi K2.7

Kimi's latest open-source flagship: a 1T-parameter MoE coding model edging close to GPT-5.5 and Opus 4.8 while using fewer tokens.

- **URL:** not mentioned (Hugging Face)
- **Pricing:** freemium (open weights; Kimi subscription for hosted use)
- **Platform:** local | API
- **Local-friendly:** no (~600GB at 1T parameters; 32B active per token, but weights need a massive setup)
- **Availability:** available
- **Last reviewed:** 2026-06-14

## What it does
Mixture-of-experts model (1T total, 32B active) that beats K2.6 across benchmarks and sits at the top of the token-efficiency vs performance curve. Tuned to overthink less, follow instructions better, and handle long-horizon coding tasks.

## When to use it
Open-weights alternative to top closed models for agentic and long-horizon coding, either via Kimi's subscription or self-hosted if you have datacenter-class hardware. Pick it when token efficiency matters: it reaches near-frontier performance with less reasoning overhead.

## Sources
- [RIP Claude Fable, open-source AI unleashed, full body avatars, new Google models, new TTS: AI NEWS](https://www.youtube.com/watch?v=SxiRANj0xLs) (2026-06-14) - deep-dive
