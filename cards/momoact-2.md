# MomoAct 2

Open-source robotics foundation model by Allen AI that reasons about the world in 3D before taking action, with strong real-world manipulation results.

- **URL:** https://huggingface.co/allenai
- **Pricing:** open-source
- **Platform:** local (embedded in robots/systems)
- **Local-friendly:** yes (models on HuggingFace; dataset and training code to be released)
- **Availability:** available
- **Last reviewed:** 2026-05-10

## What it does
MomoAct 2 is an open robotics foundation model trained on 700 hours of bimanual robotics data (two-arm tasks: folding towels, scanning groceries, charging phones). It makes action decisions in ~180ms vs the original version's slower inference. In zero-shot real-world tests it outperforms Nvidia's Groot and other vision-language-action models. Designed for robots that need to reason about why and how to manipulate objects.

## When to use it
Embedding into robotic systems that need to handle diverse real-world manipulation tasks rather than fixed programmed actions. Research into open robotics foundations as a starting point for fine-tuning on specific tasks.

## Sources
- [Self-evolving AI, robot fights, new GPT voice, new local image model, Gemma upgrade: AI NEWS](https://www.youtube.com/watch?v=quxnhOeRz7I) (2026-05-10) - mention
