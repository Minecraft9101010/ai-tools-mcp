# WeatherNext 2 (Google DeepMind)

Open-sourced hurricane and cyclone forecasting model: track, intensity, and wind structure in one model, up to 15 days out.

- **URL:** not mentioned (GitHub; Nature paper)
- **Pricing:** open-source
- **Platform:** local
- **Local-friendly:** yes for the Mini version (runs in free Google Colab); full model runs a 15-day forecast in under a minute on one TPU
- **Availability:** available
- **Last reviewed:** 2026-08-09

## What it does
Combines storm-track prediction and high-resolution intensity forecasting into a single model, running thousand-member ensembles to estimate probable paths. Trained on ~20 TB of atmospheric data and ~5,000 historical storms; works from 28 km resolution data (about 100x coarser than traditional systems) yet beats leading forecasters with 24+ hours of extra lead time. WeatherNext 2 Mini is a compact Colab-friendly version.

## When to use it
Anything needing tropical cyclone or extreme-weather forecasts: research, risk modeling, or building on top of a state-of-the-art open forecasting stack without supercomputer-grade input data.

## Sources
- [New 3D editors, open medical AI, AI symphony, Qwen 3.8, Wan Animate 2: AI NEWS](https://www.youtube.com/watch?v=uJgzFn0GT7M) (2026-08-09) - deep-dive
