# ML Intern (Hugging Face)

Open-source agentic framework that autonomously reads research papers, trains models, and writes AI code — like a machine learning researcher that lives on your computer.

- **URL:** not mentioned (GitHub released; uses HuggingFace ecosystem)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (runs locally; integrates with HuggingFace)
- **Availability:** available
- **Last reviewed:** 2026-04-26

## What it does
ML Intern is an agentic loop that can take a plain text goal (e.g., "fine-tune the best model for scientific reasoning") and autonomously: search HuggingFace papers, pull datasets from HuggingFace, browse available models, write training code, and run training jobs. Demonstrated result: fine-tuned Qwen 3 on scientific reasoning, achieving 39% on GPQA (graduate-level science questions) vs the original model's 10%, after 10 hours of autonomous work. Emits events for real-time monitoring. Makes full use of the HuggingFace ecosystem as its execution environment.

## When to use it
ML researchers who want to automate the tedious parts of the research loop (literature search, baseline training, benchmark evaluation). Running exploratory fine-tuning experiments overnight. A starting point for building automated ML research pipelines.

## Sources
- [The most insane week in AI](https://www.youtube.com/watch?v=ZKfd9S9lOtc) (2026-04-26) - mention
