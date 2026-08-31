# Recursive Multi-Agent Systems

Open-source framework where AI agents collaborate in latent space (not text), looping their thoughts to refine answers — 2.4-4x faster, 75% fewer tokens, 8%+ accuracy gain.

- **URL:** not mentioned (GitHub + models released)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (models and code released)
- **Availability:** available
- **Last reviewed:** 2026-05-03

## What it does
Instead of agents passing messages in plain text (slow, expensive), agents communicate using their internal latent representations and loop the process multiple rounds before outputting any text. Only the final answer is decoded to text. Supports sequential agents, specialist mixtures, and distillation setups. The system self-corrects over rounds: tested on math problems, it gets the answer wrong in round 1, corrects itself in round 2, and explains it more clearly in round 3. Performance scales monotonically with depth — more loops = better results, unlike text-based systems that plateau.

## When to use it
Building multi-agent AI pipelines where you want maximum reasoning quality per token budget. Tasks requiring iterative refinement: math, complex coding, research synthesis. Use as the backbone for agent swarms where accuracy matters more than interpretability of intermediate steps.

## Sources
- [Robot girlfriends, recursive AI agents, full AI research, Happy Horse: AI NEWS](https://www.youtube.com/watch?v=7r_WJ9xpne0) (2026-05-03) - mention
