---
tags: [roadmap, status, dashboard]
updated: 2026-05-10
---

# NeuroSpect Roadmap Status

| Phase | Name | Status | Assigned | Tickets | Started | Completed |
|---|---|---|---|---|---|---|
| 0 | Research & Validation | in_progress | Paul | 0/6 | 2026-05-10 | — |
| 1 | Knowledge Base & RAG MVP | not_started | Paul | 0/8 | — | — |
| 2 | Market Context & Trade Integration | not_started | Paul | 0/2 | — | — |
| 3 | Product MVP | not_started | Paul | 0/6 | — | — |
| 4 | Evaluation, Reliability & Prompt Infrastructure | not_started | Paul | 0/1 | — | — |
| 5 | Private Beta | not_started | — | 0/0 | — | — |
| 6 | V1 Launch | not_started | — | 0/0 | — | — |
| 7 | NeuroSpect EdgeLab Foundation | not_started | — | 0/0 | — | — |
| 8 | Hybrid Model Research + NeuroQuant Promotion | not_started | — | 0/0 | — | — |
| 9 | NeuroTrader Agent | not_started | — | 0/0 | — | — |
| 10 | Advanced Features | not_started | — | 0/0 | — | — |

### Track C: Business & Operations

| Phase | Name | Status | Assigned | Tickets | Started | Completed |
|---|---|---|---|---|---|---|
| 11 | Content Licensing & IP Strategy | not_started | — | 0/0 | — | — |
| 12 | Regulatory & Compliance Framework | not_started | — | 0/0 | — | — |
| 13 | Go-to-Market & User Acquisition | not_started | — | 0/0 | — | — |
| 14 | Retention, Analytics & Coaching Quality | not_started | — | 0/0 | — | — |
| 15 | Competitive Intelligence & Moat Strategy | not_started | — | 0/0 | — | — |
| 16 | Team Scaling & Org Design | not_started | — | 0/0 | — | — |

### Cross-Track Dependencies

| Business Phase | Gates | Parallel With |
|---|---|---|
| 11 (Content Licensing) | **Phase 1** (can't ingest without rights) | Phases 0-1 |
| 12 (Regulatory) | **Phase 3** (ToS/Privacy), **Phase 9** (RIA) | Phases 2-3 |
| 13 (Go-to-Market) | **Phase 6** (launch requires GTM) | Phases 4-6 |
| 14 (Retention) | — | Phases 4-6 |
| 15 (Competitive) | — | Phases 5-7 |
| 16 (Team Scaling) | — | Phases 6-8 |

## Current Focus

**Phase 0 — Research & Validation** is active. Marketing site built with 6 pages + design handoff package. NEU-27 (live trading simulator) is In Progress. Next: technical validation (RAG prototype, vector DB, embedding model).

**⚠ Gate Warning:** Phase 11 (Content Licensing) is `not_started` but gates Phase 1 (RAG MVP). Content licensing work should begin before Phase 0 completes.

## Linear Integration

- **Workspace:** NeuroSpect-Platform (NEU)
- **Total tickets:** 23 (+ 4 onboarding)
- **Phase 0:** 5 Todo + 1 In Progress (NEU-27), all assigned to Paul
- **Phase 1-4:** 17 tickets in Backlog, all assigned to Paul
- **Phase 5-16:** No tickets yet
- **Last synced:** 2026-05-10 (Track C phases added, NEU-27 → In Progress, Phase 0 tickets → Todo)

## Blockers

_None._

## Notes

- NEU-27: Live trading simulator (`/simulator`) — design handoff delivered, build in progress
- NEU-23 ("Build landing page") is Phase 3 product app landing page, not the marketing site
- Marketing site build (commit `0cdc3c3`) has no dedicated Linear ticket — tracked as Phase 0 deliverable in README
- Track C phases (11-16) added 2026-05-10 — business/operations track running parallel to engineering

---

_This file is updated by `/sync`. Do not edit manually._
