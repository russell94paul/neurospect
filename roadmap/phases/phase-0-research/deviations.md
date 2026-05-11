---
phase: 0
name: "Research & Validation"
created: 2026-05-09
updated: 2026-05-10
---

# Phase 0 Deviations

## Deviation: Marketing site added as Phase 0 deliverable
- **Planned:** Marketing-site boot prompt existed but was explicitly scoped as "NOT part of the Phase 0-10 roadmap." Phase 0 deliverables were research-only (RAG prototype, vector DB, embeddings, eval pairs).
- **Actual:** Marketing site formally added to Phase 0. Built 6 pages: landing (`/`), compare (`/compare`), performance lab (`/performance`), workflows, architecture, pricing. Tech stack: Astro 5.8 + Tailwind 3.4 + Chart.js. Compare page is pure HTML/CSS; performance page uses Chart.js for interactive equity curves, radar charts, and analytics dashboards. All performance data is synthetic/illustrative.
- **Impact on future phases:** Phase 3 "landing page" deliverable now clarified as the product app landing page (in `app/`), distinct from the marketing site (in `site/`). Phase 0 now has two parallel work streams: (1) technical validation and (2) marketing/waitlist. No impact on Phase 1+ technical work.
- **Date:** 2026-05-10
- **Engineer:** Paul Russell

## Deviation: Live Trading Simulator added as Phase 0 deliverable
- **Planned:** Marketing site was a static 6-page waitlist site with pre-rendered charts and mock data.
- **Actual:** Live Trading Simulator (`/simulator`) added as a major new page. Runs all 4 trader tiers simultaneously against pre-scripted market events with real-time candlestick chart, tier reasoning animations, trade logging, loss analysis with mistake identification, concept review references, and improvement actions. Requires candlestick charting library (lightweight-charts or custom Canvas), event-driven playback engine, and ~3 pre-scripted trading scenarios with full tier action data. Design spec at `design-handoff/08-live-simulator.md`.
- **Impact on future phases:** No impact on Phase 1+ technical work. Simulator uses synthetic data and runs entirely client-side. The simulation data model (TierAction, SimulationEvent) may inform the actual EdgeLab event schema in Phase 7, but they are independent implementations.
- **Date:** 2026-05-10
- **Engineer:** Paul Russell
