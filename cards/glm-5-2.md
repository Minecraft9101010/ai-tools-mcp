# GLM 5.2

ZAI's fully open-weights flagship: the new #1 open-source model, beating GPT-5.5 and Gemini 3.1 Pro on multiple coding benchmarks and edging close to Opus 4.8.

- **URL:** https://chat.z.ai (free chat) / Hugging Face (weights)
- **Pricing:** freemium (MIT open weights + free chat; paid GLM coding plans for hosted agentic use)
- **Platform:** web | API | local
- **Local-friendly:** no for the full model (753B, 1.51TB); Unsloth GGUF quants (1-bit 223GB, 2-bit 245GB) fit multi-GPU or Mac Studio rigs, still beyond a single consumer GPU
- **Availability:** available
- **Last reviewed:** 2026-06-21

## What it does
753B-parameter model with a 1M-token context window under an MIT license, using index-share sparse attention (2.9x compute reduction) and an improved MTP layer (up to 20% longer decoding). Tops open models on Deep Swe (46.2, not close), beats GPT-5.5 and Gemini 3.1 Pro on SweBench Pro, Terminal Bench, Frontier Swe, and Humanity's Last Exam, and beats even Opus 4.8 and Fable 5 on front-end/design leaderboards. In practice it needs minimal hand-holding: one-shot ray tracer from scratch, V8 engine and watch 3D models, multi-tool promo video builds. No native vision (falls back to external VLM tools). Post-launch data: best open model on Artificial Analysis by a wide margin, #3 on the new AA Briefcase long-horizon knowledge-work benchmark, lowest hallucination rate among frontier models (roughly half Fable's, a third of GPT-5.5's), at about half GPT-5.5's cost and a fifth of Opus 4.8's; weaker on LM Arena (10th) and LiveBench reasoning/instruction-following.

## When to use it
Best open-source pick for agentic coding and front-end work as of June 2026, especially with Claude Fable banned and Anthropic gatekeeping. Use via the free chat, ZAI's Z Code harness, or plug it into Claude Code/Codex/Open Claw with a coding plan API key. Self-hosting needs datacenter hardware; skip it for vision tasks (MiniMax M3 is the multimodal open alternative).

## Sources
- [RIP Claude Fable, open-source AI unleashed, full body avatars, new Google models, new TTS: AI NEWS](https://www.youtube.com/watch?v=SxiRANj0xLs) (2026-06-14) - mention
- [New #1 open-source AI model is here! GLM 5.2](https://www.youtube.com/watch?v=6d__WOpZswY) (2026-06-17) - deep-dive
- [New robot waifus, GLM 5.2 craze, AI spas, new world models, new science agents: AI NEWS](https://www.youtube.com/watch?v=kkLlzQqa7MY) (2026-06-21) - deep-dive
