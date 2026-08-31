# Doc to LoRA / Text to LoRA (Sakana AI)

Sakana AI's method for compressing documents or instructions into persistent LoRA adapters so LLMs can reference them without re-reading.

- **URL:** https://github.com/SakanaAI (search DocToLoRA)
- **Pricing:** open-source (free)
- **Platform:** local
- **Local-friendly:** yes (designed for local LLM use)
- **Availability:** available
- **Last reviewed:** 2026-03-05

## What it does
Two related tools: Doc to LoRA compresses a document (including images) into a small LoRA adapter that a text model can query without seeing the full document again. Text to LoRA does the same for complex instruction sets you want the model to follow persistently. Both address the LLM context-loss problem over long conversations.

## When to use it
When you have a long document or a complex multi-step prompt that you need an LLM to reference repeatedly across a long session. More efficient than copy-pasting into every prompt, and works with documents longer than the model's context window.

## Sources
- [Realtime AI waifus, Qwen 3.5, persistent memory, multiplayer gameplay, new image models: AI NEWS](https://www.youtube.com/watch?v=8grIT-xK50M) (2026-03-05) - mention
