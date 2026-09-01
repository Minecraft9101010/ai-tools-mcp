# Neva (Baidu Ernie)

Tiny (6.3M parameter) open-source video generator with natively synchronized audio, built on top of Alibaba's Wan 1.2.2 base to add sound that Wan alone can't generate.

- **URL:** not mentioned (GitHub)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes (25GB, FP8 version ~7GB)
- **Availability:** available
- **Last reviewed:** 2026-06-07

## What it does
Generates 720p video with synchronized dual-channel audio (speech, sound, timing, motion) in one pass, using a shared audio-visual space rather than generating video then bolting on sound afterward. Despite being only 6.3M parameters, it reportedly beats the leading open audio-video model LTX 2.3 (19B parameters).

## When to use it
Adding native audio to Wan-based video generation workflows without a much larger model — dialogue scenes, ambient sound, synced motion.

## Sources
- [Full body waifus, AI dreams, realtime AI music, open-source Gemini Omni: AI NEWS](https://www.youtube.com/watch?v=CzxqQJOswvo) (2026-06-07) - deep-dive
