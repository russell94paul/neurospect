---
phase: 0
name: "Research & Validation"
status: in_progress
track: "A (Coaching)"
assigned: [paul]
started: 2026-05-10
completed: null
tickets_total: 5
tickets_done: 0
created: 2026-05-09
updated: 2026-05-10
---

# Phase 0: Research & Validation

Validate first customer, prototype RAG, select tech stack, confirm editorial curation timeline.

## Goals

_See `roadmap/plan.md` Phase 0 for detailed goals._

## Exit Criteria

_See `roadmap/plan.md` Phase 0 for exit criteria._

## Deliverables

### Research & Technical Validation
- Instructor content access agreement (gate)
- RAG prototype with wiki content
- Vector DB: pgvector
- Embedding model: text-embedding-3-small
- 50 Q&A evaluation pairs

### Marketing Site (`site/`)

Static marketing/waitlist site deployed separately from the product app.

Pages:
- `/` — Landing (hero, pain points, features, waitlist)
- `/compare` — Competitive Intelligence (capability matrix, subscription stack, workflow friction)
- `/performance` — Performance Lab (illustrative equity curves, KPI analytics, trade marker analysis)
- `/workflows` — Trader tier profiles
- `/architecture` — System diagram
- `/pricing` — Pricing tiers

Tech: Astro 5.8 + Tailwind 3.4 + Chart.js (performance page only)
Deploy: Cloudflare Pages (TBD)

## Deviations

_None yet. Captured in `deviations.md` as implementation progresses._
