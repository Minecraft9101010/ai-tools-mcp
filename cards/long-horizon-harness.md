# Long Horizon Harness

Open-source manager/executor/auditor layer that keeps coding agents on track through hours- or days-long tasks.

- **URL:** not mentioned (GitHub)
- **Pricing:** open-source
- **Platform:** local (wraps existing agent harnesses)
- **Local-friendly:** yes — a framework, not a model
- **Availability:** available
- **Last reviewed:** 2026-08-09

## What it does
Replaces one ever-growing agent context with three roles: a manager picks the next small task from verified progress only, an executor does it in a fresh context, and an auditor independently verifies what actually changed before anything is recorded. Works across Claude Code, Codex CLI, Gemini CLI, Z Code, Kimi Code, and other harnesses. Reported gains: +28.9% on SWE-bench-style eval with Qwen 3.7 in Claude Code, 3x completion rate on OSWorld 2, +7.5% Terminal-Bench (where it also used fewer tokens; elsewhere it trades higher token spend for higher success).

## When to use it
Long-horizon agent runs where context drift bites — agents forgetting goals, repeating work, or falsely claiming completion. Layer it on your existing harness when success rate matters more than token cost.

## Sources
- [New 3D editors, open medical AI, AI symphony, Qwen 3.8, Wan Animate 2: AI NEWS](https://www.youtube.com/watch?v=uJgzFn0GT7M) (2026-08-09) - deep-dive
