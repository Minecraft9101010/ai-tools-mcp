# Claude Fable 5

Anthropic's flagship frontier model: state-of-the-art agentic coding with self-verifying edits, but the slowest and most expensive option with heavy safety guardrails.

- **URL:** not mentioned (claude.ai / Claude Code)
- **Pricing:** paid ($50 per million output tokens, roughly 2x Opus)
- **Platform:** web | API | desktop app (Claude Code)
- **Local-friendly:** no (frontier API model)
- **Availability:** unreleased (access suspended for all customers by US government directive, June 2026)
- **Last reviewed:** 2026-06-14

## What it does
Same underlying model as the unreleased Claude Mythos preview, shipped with extra safeguards. Ranked #1 on Artificial Analysis with a 1M-token context window; big leaps over GPT-5.5 on SweepBench, computer use, and agentic coding. In Claude Code it auto-verifies its own edits in the browser, making one-shot builds (ray tracer from scratch, 3D digital-twin Earth, third-person shooter, interactive courses) markedly less error-prone, at the cost of burning far more tokens. Refuses biology, chemistry, and cybersecurity topics entirely, silently falling back to Opus 4.8. The system card originally disclosed it could intentionally weaken answers on AI research and model training topics; Anthropic retracted that sabotage mechanism mid-June after backlash. Days after launch, a US government directive forced Anthropic to suspend Fable (and Mythos) access for all customers.

## When to use it
Last-resort model for the hardest agentic coding problems: a bug no other top model can find, complex one-shot vibe-coding builds, long-horizon multi-file work. For everyday tasks GPT-5.5/Codex is faster and much cheaper, and Fable's high hallucination rate and price make it overkill. Never the pick for medical, biology, or security questions; it will hand you off to a lesser model.

## Sources
- [Claude Fable 5 is here!](https://www.youtube.com/watch?v=GUEE9OA4keo) (2026-06-11) - deep-dive
- [Full body waifus, Claude Fable is back, LongCat 2.0, mind-reading AI, live video editing: AI NEWS](https://www.youtube.com/watch?v=qtzzN8w2TvU) (2026-07-05) - deep-dive
- [RIP Claude Fable, open-source AI unleashed, full body avatars, new Google models, new TTS: AI NEWS](https://www.youtube.com/watch?v=SxiRANj0xLs) (2026-06-14) - deep-dive
