# BigBang

Experimental "self-evolving" model that generates its own increasingly hard training data via generator, critic, and metacritic agents.

- **URL:** not mentioned (GitHub)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** unknown — based on an open Qwen 3.6 mid-size model; exact VRAM not stated
- **Availability:** available
- **Last reviewed:** 2026-08-09

## What it does
Starts from an open Qwen 3.6 base and replaces human-curated post-training data with an automated loop: generator agents create and solve hard scientific/technical problems, a critic rejects weak examples, and a metacritic verifies the problems actually improve real research performance. Gains over the base model are large — FrontierScience roughly 12 to 46, plus big jumps on Humanity's Last Exam, BrowseComp-style agentic benchmarks, and PaperBench. The loop can be repeated, though returns will eventually plateau.

## When to use it
Research-oriented tasks where a mid-size open model post-trained on synthetic hard problems beats its base — or as a reference implementation if you're exploring synthetic-data self-improvement pipelines.

## Sources
- [New 3D editors, open medical AI, AI symphony, Qwen 3.8, Wan Animate 2: AI NEWS](https://www.youtube.com/watch?v=uJgzFn0GT7M) (2026-08-09) - deep-dive
