# Next N2

Open-source agentic model family (Qwen 3.5 base) built on one consistent reasoning pattern across search, coding, and tool use, with adaptive reasoning depth.

- **URL:** not mentioned (GitHub)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** no for Pro (397B, 794GB); the 35B Mini (~70GB) is borderline and still above single consumer-GPU range
- **Availability:** available
- **Last reviewed:** 2026-06-14

## What it does
Treats reasoning as something to be used for action rather than separate behaviors per task, and decides when to think harder instead of forcing expensive reasoning on everything. Beats leading open models like DeepSeek V4 and GLM 5.1 on agentic and coding benchmarks (33.6 on Deep Sweet). Two variants: Pro (397B MoE, 17B active) and Mini (35B, 3B active).

## When to use it
Open-source agentic workloads where reasoning cost matters: the adaptive reasoning avoids burning tokens on easy steps. Mini is the accessible entry point; Pro needs serious hardware.

## Sources
- [RIP Claude Fable, open-source AI unleashed, full body avatars, new Google models, new TTS: AI NEWS](https://www.youtube.com/watch?v=SxiRANj0xLs) (2026-06-14) - deep-dive
