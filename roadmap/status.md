---
tags: [roadmap, status, dashboard]
updated: 2026-05-15
---

# NeuroSpect Roadmap Status (v3)

| Phase | Name | Component | Status | Assigned | Revenue Event | Started | Completed |
|---|---|---|---|---|---|---|---|
| 0 | Marketing + Demo | — | in_progress | Paul | Waitlist | 2026-05-10 | — |
| 1 | Trading Data Foundation | Trader Workspace | not_started | Paul | — | — | — |
| 2 | Trader Workspace | Trader Workspace | not_started | Paul | — | — | — |
| 3 | Prop Shield | Prop Shield | not_started | Paul | **Mentor $29 / Trader $99** | — | — |
| 4 | ICT Event Intelligence | ICT Event Engine | not_started | — | — | — | — |
| 5 | EdgeLab Core (5A/5B/5C) | EdgeLab | not_started | — | Research $199 | — | — |
| 6 | AI Trade Review + RAG | Mentor + NeuroCore | not_started | — | Mentor upsell | — | — |
| 7 | Edge Forensics | Edge Forensics | not_started | — | Research retention | — | — |
| 8 | NeuroScore + Leaderboard | NeuroScore | not_started | — | Quant $349 | — | — |
| 9 | NeuroFund Elite Rewards | NeuroFund Elite | not_started | — | Elite retention | — | — |
| 10 | Allocation Watchlist | NeuroFund Elite | not_started | — | — | — | — |
| 11 | Advanced ML Research | NSLM + NeuroQuant + NeuroTrader | not_started | — | Quant/Team $499 | — | — |
| 3-NG | NeuroGraph (Plan → Build) | NeuroGraph | not_started | — | Retention (all tiers) | — | — |

## Dependency Graph

```
Phase 0 (Marketing)
  └─> Phase 1 (Data Foundation)
        ├─> Phase 2 (Workspace) ─> Phase 3 (Prop Shield) ← FIRST REVENUE
        │                              └─> Phase 8 (NeuroScore)
        │                                    └─> Phase 9 (NeuroFund Elite)
        │                                          └─> Phase 10 (Allocation)
        └─> Phase 4 (ICT Events) ─> Phase 5 (EdgeLab) ← SECOND REVENUE
                                        ├─> Phase 7 (Edge Forensics)
                                        └─> Phase 11 (Advanced ML)
  Phase 6 (AI + RAG) depends on: Phase 1 + Phase 2 + Phase 4
  Phase 3-NG (NeuroGraph) depends on: Phase 1 + Phase 2
    └─> Enhances: ALL downstream phases (3-11) — compounds with every interaction
```

## Per-Phase Compliance Gates

| Phase | Compliance Requirement |
|---|---|
| 3 (Prop Shield) | Advisory lockout disclaimer reviewed by counsel |
| 3-NG (NeuroGraph) | GDPR/privacy — memory deletion support required |
| 5 (EdgeLab) | Backtesting disclaimers ("past performance is not indicative...") |
| 6 (AI Trade Review) | Content licensing for private instructor content. ToS + Privacy Policy. "Not financial advice" |
| 9 (NeuroFund Elite) | Full compliance review. Approved/forbidden language audit. Legal counsel review of marketing copy |
| 11 (Advanced ML) | RIA determination before any live signal generation |

## Current Focus

**Phase 0 — Marketing + Demo** is active. Phase 0A (marketing site, interactive demos, product guide) is substantially complete. Phase 0B (CI/CD, Sentry, data model audit) has not started.

**Build order:** `verified data → risk engine → events → backtesting → AI review → forensics → scoring → rewards → ML`

**Critical path to first revenue:** Phase 0 → 1 → 2 → 3 (~16 weeks)

## Phase Execution Commands

Each phase has a slash command: `/ns-phase0` through `/ns-phase11` (plus `/ns-phase5a`, `/ns-phase5b`, `/ns-phase5c`). These are static implementation guides in `.claude/commands/`.

## Linear Integration

- **Workspace:** NeuroSpect-Platform (NEU)
- **Total tickets:** 23 (+ 4 onboarding)
- **Phase 0:** 5 Todo + 1 In Progress (NEU-27), all assigned to Paul
- **Phase 1-4:** 17 tickets in Backlog, all assigned to Paul
- **Phase 5-11:** No tickets yet — create as phases are started
- **Last synced:** 2026-05-15 (v3 roadmap restructure)

## Blockers

_None._

## Notes

- v3 roadmap restructure (2026-05-15): Resequenced from coaching-first to data-foundation-first. Track C (business phases 11-16) eliminated as separate track — compliance embedded per-phase. NeuroFund Elite added as compliance-safe rewards program. Prop Shield added as first paid feature wedge.
- v2 plan archived — see `initial-plan/` for previous versions
- NEU-27: Live trading simulator (`/simulator`) — design handoff delivered, build in progress
- Marketing site in `neurospect-ui/` (React 18 CDN, replaces deprecated `site/`)

---

_This file is updated by `/sync`. Do not edit manually._
