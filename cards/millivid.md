# MilliVid

Long-video generation that stays consistent far past the usual 5-20 second limit, via a hierarchical coarse-to-fine autoencoder.

- **URL:** not mentioned
- **Pricing:** unknown
- **Platform:** local (planned)
- **Local-friendly:** unknown
- **Availability:** unreleased (code expected around June 12, paper releasing at time of recording)
- **Last reviewed:** 2026-06-14

## What it does
Represents each frame at multiple levels of detail, coarse layout and semantics down to fine texture, and generates video in a coarse-to-fine rollout. This lets it remember scene structure much longer than current models, which lose consistency or forget the scene when extended.

## When to use it
Long-form AI video where scene consistency over minutes matters more than short-clip fidelity. Check whether the code has landed.

## Sources
- [RIP Claude Fable, open-source AI unleashed, full body avatars, new Google models, new TTS: AI NEWS](https://www.youtube.com/watch?v=SxiRANj0xLs) (2026-06-14) - deep-dive
