# Phase 0: Research & Validation — Planning Boot Prompt

_Generated 2026-05-10 by `/phase 0 plan`. Do not edit manually._

## Phase Context

**Phase:** 0 — Research & Validation
**Track:** A (Coaching)
**Status:** not_started
**Estimated effort:** 2 engineers x 3 weeks = 6 engineer-weeks

## Goals

Validate first customer, prototype RAG, select tech stack, confirm editorial curation timeline.

## Deliverables

| # | Deliverable | Priority |
|---|---|---|
| 1 | Instructor content access agreement | Gate |
| 2 | RAG prototype with wiki content (retrieval quality benchmarked) | P0 |
| 3 | Vector DB selected (pgvector recommended in plan) | P0 |
| 4 | Embedding model selected (text-embedding-3-small recommended) | P0 |
| 5 | 50 Q&A evaluation pairs | P0 |
| 6 | Competitive teardown (Price Action Lover, ICT GPTs) | P1 |
| 7 | Linear workspace set up | P1 |
| 8 | CI/CD pipeline (GitHub Actions) | P1 |
| 9 | Sentry error monitoring | P1 |

## Exit Criteria

RAG prototype returns relevant passages for **80%+ of test questions**.

## Upstream Deviations

No upstream deviations — Phase 0 is the first phase. Plan assumptions are current.

## Current Phase Deviations

None captured yet.

## What Already Exists (head start from kickoff workstream)

The kickoff workstream (Apr 18-22) completed significant Phase 0 groundwork:

| Asset | Status | Location |
|---|---|---|
| ICT knowledge base (5 concept pages + 7 entry models + 5 course modules) | Populated | `wiki/concepts/business-logic/`, `wiki/concepts/entry-models/`, `wiki/concepts/course/` |
| Transcript pipeline architecture | Decided (manual + Whisper) | `wiki/concepts/architecture/transcript-pipeline.md` |
| Source transcripts (20+ files) | Ingested | `wiki/sources/neurospect/` |
| Live commentary concepts | Captured | `wiki/concepts/business-logic/ict-live-commentary.md` |
| Monorepo structure (api + app + wiki) | Merged | Root directory |
| AI coach system prompt template | Drafted | `wiki/concepts/ai-coach/system-prompt-template.md` |

## Open Questions & Decisions to Make

### Critical (gates)

1. **Instructor content access commitment** — Single gate for the entire project.
2. **IP / content license agreement** — Needed before ingesting content into a product.

### Technical (Phase 0 scope)

3. **pgvector vs external vector DB** — Plan recommends pgvector. Validate for corpus size.
4. **Embedding model** — OpenAI text-embedding-3-small vs BGE-M3. Trade-off: cost vs vendor lock-in vs latency.
5. **Chunking strategy for ICT content** — ICT concepts are interconnected. Naive chunking loses context.

### Product (inform future phases)

6. **Auth provider** — Discord-only or add email/password?
7. **Billing model** — Per-instructor or platform-wide?
8. **Existing journal preservation** — Coaching augments or replaces the journal?
9. **Compliance posture** — Legal counsel before beta?

## Relevant Wiki Content

- `wiki/concepts/architecture/transcript-pipeline.md` — Transcript processing
- `wiki/concepts/ai-coach/system-prompt-template.md` — Draft coaching prompt
- `wiki/concepts/ai-coach/chart-analysis-boot-prompt.md` — Chart analysis approach
- `wiki/processes/distributed-workflow/active/kickoff.md` — Kickoff session history
- `wiki/processes/distributed-workflow/active/course-and-kb.md` — Active KB workstream
- `roadmap/plan.md` §20 — Initial GitHub issues (5 are Phase 0)
- `roadmap/plan.md` §22 — NeuroCortex architecture (3-signal hybrid search)

## Cross-Wiki Notes

- **Vlad's wiki:** Phase 0 page exists but empty — no personal research notes yet.
- **Paul's wiki:** Phase 0 page exists but empty — no personal research notes yet.

## Suggested Planning Agenda

1. Resolve gate questions (instructor commitment, IP agreement)
2. Set up Linear workspace and import Phase 0 tickets
3. Assign work lanes (Paul vs Vlad)
4. Validate pgvector decision
5. Define eval pair format and start building 50-pair dataset
6. Competitive teardown of existing ICT AI tools

---

_Load this prompt when starting a planning/design session for Phase 0._
