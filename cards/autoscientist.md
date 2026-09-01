# Autoscientist

Open-source agentic framework where multiple AI research agents self-organize into a decentralized lab, exploring ideas in parallel over long runs with shared memory of what's worked and what's failed.

- **URL:** not mentioned (GitHub)
- **Pricing:** open-source
- **Platform:** local | API
- **Local-friendly:** unknown
- **Availability:** available
- **Last reviewed:** 2026-05-31

## What it does
Unlike single-hypothesis research agents, Autoscientist runs a shared state (current best solution, experiment log, discussion forum, and a dead-end registry of ideas that didn't work) that all agents read and write to. Analyst-type agents review past experiments and forum discussion to write hypothesis notes and track dead ends; experimenter-type agents propose and run experiments (applying code changes, training, evaluating) and report results back. On BioML-bench (24 biomedical ML tasks spanning imaging, drug discovery, and protein engineering), it beat other agentic research frameworks. Code is released.

## When to use it
Automating open-ended, multi-direction research exploration where a single-agent hypothesis loop would get stuck re-testing dead ends — the shared-state design is built specifically to avoid wasting compute on ideas that already failed.

## Sources
- [Self-improving AI, Opus 4.8, Nvidia bangers, game-ready 3D models, juggling robots: AI NEWS](https://www.youtube.com/watch?v=RdqYvdT74i0) (2026-05-31) - deep-dive
