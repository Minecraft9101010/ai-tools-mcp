# LeapTalk

Real-time talking-head generator: reference image plus speech audio to a lip-synced avatar video, thousands of times faster than prior avatar models.

- **URL:** not mentioned (GitHub)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes for inference generally; the 200 fps claim is on an H200
- **Availability:** available
- **Last reviewed:** 2026-08-09

## What it does
Generates a lip-synced talking head from any face image and audio in effectively real time — up to 200 fps on an H200. The trade-off is rigidity: motion is noticeably stiffer than frontier avatar generators like Hallo 3 or EchoMimic, which it beats on latency by orders of magnitude.

## When to use it
Live or interactive avatars (streaming, assistants, video chat) where latency matters more than natural body movement. For polished offline avatar videos, slower models still look better.

## Sources
- [New 3D editors, open medical AI, AI symphony, Qwen 3.8, Wan Animate 2: AI NEWS](https://www.youtube.com/watch?v=uJgzFn0GT7M) (2026-08-09) - deep-dive
