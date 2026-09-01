# GLM 5.3

ZAI's frontier open-weights model for agentic coding and long-horizon tasks, matching Claude Fable 5 and the best GPT on most benchmarks.

- **URL:** not mentioned (GLM coding plan subscription; weights on HuggingFace)
- **Pricing:** freemium (coding plan subscription; weights released free two weeks after launch)
- **Platform:** local | API (API rolling out; usable via Zcode or other coding harnesses)
- **Local-friendly:** no (744B MoE, 40B active; full model 1.5TB, FP8 756GB, smallest Q1 GGUF 217GB)
- **Availability:** available
- **Last reviewed:** 2026-08-17

## What it does
Same 744B-parameter MoE architecture as GLM 5.2, post-trained much harder via ZAI's open-source slime RL infrastructure. Best-in-world on GDPval, Automation Bench, and CyberGym; frontier-level on agentic coding and knowledge work. Runs multi-hour autonomous sessions: it built a working browser-based Windows 11 replica, a Blender V8 engine via MCP, and composed a mixed song in a DAW. No native vision, so it fails image analysis tasks.

## When to use it
Agentic coding, long-horizon autonomous work, and cyber security (it uncovered 2,400+ real vulnerabilities, over 1,000 high-risk). The open-weights alternative when you'd otherwise reach for Claude Fable or GPT 5.6. Avoid it for vision-heavy tasks; comparable Kimi K3 is stronger on visuals, 3D, and deep research.

## Sources
- [New #1 open source AI has reached FRONTIER](https://www.youtube.com/watch?v=ZSNMw8U5h-c) (2026-08-17) - deep-dive
- [Ox Alpha reveal, realtime Minimax, Qwen Next, Hy4, robot olympics: AI NEWS](https://www.youtube.com/watch?v=4wjHNgMLeyY) (2026-08-30) - deep-dive
