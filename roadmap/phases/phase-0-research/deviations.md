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
