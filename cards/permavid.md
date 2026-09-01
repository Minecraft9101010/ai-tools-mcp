# Permavid

Video editing model with persistent memory: keeps edits consistent across long videos by remembering appearance and 3D structure separately.

- **URL:** not mentioned (GitHub)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** no (29GB, built on Wan 2.1 + VACE; needs a high-end GPU)
- **Availability:** available
- **Last reviewed:** 2026-06-21

## What it does
Uses two memory banks, one for what things look like, one for the 3D structure behind the scene, so a global edit (style change) keeps geometry stable while a local edit (object swap) stays remembered without disturbing the rest. Fixes the usual failure where a generated-video edit is forgotten later in the clip. The 400GB+ training dataset is also released.

## When to use it
Long AI-video edits where consistency over time is the problem: adding or replacing objects, restyling a whole video. Built on Wan 2.1 and VACE, so it fits existing open video pipelines.

## Sources
- [New robot waifus, GLM 5.2 craze, AI spas, new world models, new science agents: AI NEWS](https://www.youtube.com/watch?v=kkLlzQqa7MY) (2026-06-21) - deep-dive
