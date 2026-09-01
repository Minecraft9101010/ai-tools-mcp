# MAC (Multi-Agent CAD)

Open-source multi-agent system that turns a text prompt into a printable 3D CAD file at a fraction of the cost of prior text-to-CAD approaches.

- **URL:** not mentioned (project page with install instructions)
- **Pricing:** open-source (pays per-prompt LLM API costs; cost per example is listed in their docs)
- **Platform:** local
- **Local-friendly:** yes — it orchestrates an LLM of your choice rather than running a heavy model itself
- **Availability:** available
- **Last reviewed:** 2026-08-09

## What it does
Generates CAD files (ready for 3D printing) from text descriptions of objects with varied shapes and articulations. The multi-agent design makes it roughly 10x cheaper than running the same task without the system, and versus the earlier text-to-CAD model CADSkills it uses 116x fewer tokens, costs 13x less, and passes more often. Model-agnostic: demoed with Qwen but any LLM slots in.

## When to use it
3D printing or CAD workflows where you want parametric, printable geometry from a prompt instead of a mesh from a generic 3D generator. The right pick when token cost matters or you want to bring your own model.

## Sources
- [New 3D editors, open medical AI, AI symphony, Qwen 3.8, Wan Animate 2: AI NEWS](https://www.youtube.com/watch?v=uJgzFn0GT7M) (2026-08-09) - deep-dive
