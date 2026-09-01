# DeepSWE (benchmark)

Coding-agent benchmark built to resist saturation and contamination, testing real multi-file software engineering work instead of solved GitHub issues.

- **URL:** not mentioned
- **Pricing:** unknown
- **Platform:** unknown
- **Local-friendly:** unknown
- **Availability:** available
- **Last reviewed:** 2026-05-31

## What it does
Tasks are written from scratch across 91 active open-source repos in TypeScript, Go, Python, JavaScript, and Rust, with short realistic prompts (shorter than SWE-bench) but reference solutions requiring far more code and files touched. Uses handwritten behavioral verifiers that check whether the software actually behaves correctly rather than matching one specific implementation. In results, GPT-5.5 scored highest, followed by Claude models, then Gemini 3.5 Flash, with open-source models (Kimi K2.6, GLM) scoring notably worse.

## When to use it
Evaluating whether a coding agent can handle messy, realistic, multi-file engineering tasks rather than isolated bug fixes — a harder and less contaminated signal than SWE-bench.

## Sources
- [Self-improving AI, Opus 4.8, Nvidia bangers, game-ready 3D models, juggling robots: AI NEWS](https://www.youtube.com/watch?v=RdqYvdT74i0) (2026-05-31) - mention
