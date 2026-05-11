# Phase 0: Research & Validation — Execution Boot Prompt

_Generated 2026-05-10 by `/sync`. Do not edit manually._

## Phase Context

**Phase:** 0 — Research & Validation
**Track:** A (Coaching)
**Status:** in_progress
**Engineer:** Paul Russell — working on marketing site + Phase 0 research
**Assigned:** Paul
**Exit Criteria:** RAG prototype returns relevant passages for **80%+ of test questions**.

## What to Build

Validate first customer, prototype RAG, select tech stack, confirm editorial curation timeline.

### Deliverables (by priority)

| # | Deliverable | Priority | Status |
|---|---|---|---|
| 1 | Instructor content access agreement | Gate | Unresolved |
| 2 | RAG prototype with wiki content (retrieval quality benchmarked) | P0 | Not started |
| 3 | Vector DB selected (pgvector recommended) | P0 | Not started |
| 4 | Embedding model selected (text-embedding-3-small recommended) | P0 | Not started |
| 5 | 50 Q&A evaluation pairs | P0 | Not started |
| 6 | Competitive teardown (Price Action Lover, ICT GPTs) | P1 | Not started |
| 7 | Linear workspace set up | P1 | Done (22 tickets created) |
| 8 | CI/CD pipeline (GitHub Actions) | P1 | Not started |
| 9 | Sentry error monitoring | P1 | Not started |
| 10 | Marketing site (Astro + Tailwind + Chart.js) | P1 | Done (6 pages built) |
| 11 | Live Trading Simulator (`/simulator`) | P1 | Not started — design spec in `design-handoff/08-live-simulator.md` |

## Active Linear Tickets

All Phase 0 tickets are in **Backlog**, assigned to **Paul**:

| Ticket | Priority | Title |
|---|---|---|
| NEU-5 | P1 Urgent | Set up pgvector on existing PostgreSQL |
| NEU-6 | P1 Urgent | Evaluate embedding models (OpenAI 3-small vs BGE-M3) |
| NEU-7 | P2 High | Research chunking strategies for ICT content |
| NEU-8 | P2 High | Set up CI/CD pipeline (GitHub Actions) |
| NEU-9 | P2 High | Set up Sentry error monitoring |

**Suggested execution order:** NEU-5 → NEU-6 → NEU-7 → (NEU-5+6+7 feed the RAG prototype) → NEU-8 → NEU-9

## Key Files to Create or Modify

| File / Directory | Purpose | Exists? |
|---|---|---|
| `api/app/models/wiki_chunk.py` | SQLAlchemy model for wiki chunks + pgvector column | No |
| `api/app/coach/rag/` | RAG retrieval pipeline module | No |
| `api/app/coach/rag/ingest.py` | Wiki content → chunks → embeddings pipeline | No |
| `api/app/coach/rag/retrieve.py` | Hybrid retrieval (BM25 + semantic + entity) | No |
| `api/app/routers/chat.py` | Coaching chat API endpoint | No |
| `api/alembic/versions/` | Migration: pgvector extension + wiki_chunks table | Exists (dir) |
| `evals/phase0/` | 50 Q&A evaluation pairs + eval harness | No |
| `wiki/concepts/architecture/rag-pipeline.md` | Architecture doc for RAG decisions | No |

## Technical Decisions Made

### From planning sessions

- **Vector DB:** pgvector (plan recommendation) — avoid separate service for small corpus
- **Embedding model:** Evaluate OpenAI text-embedding-3-small vs BGE-M3 (NEU-6)
- **Transcript pipeline:** Manual + Whisper (decided during kickoff)
- **Monorepo structure:** api/ + app/ + wiki/ merged (done)
- **Retrieval architecture:** 3-signal hybrid search via Reciprocal Rank Fusion (keyword/BM25 + semantic/pgvector + entity/tag) — see `roadmap/plan.md` §27

### Open technical questions

- **Chunking strategy** for ICT content — concepts are interconnected, naive chunking loses context (NEU-7)
- **Auth provider** — Discord-only or add email/password? (inform Phase 3)
- **Billing model** — per-instructor or platform-wide? (inform Phase 3)

## What Already Exists (head start)

| Asset | Location |
|---|---|
| ICT knowledge base (5 concepts + 7 entry models + 5 course modules) | `wiki/concepts/business-logic/`, `wiki/concepts/entry-models/`, `wiki/concepts/course/` |
| Transcript pipeline architecture | `wiki/concepts/architecture/transcript-pipeline.md` |
| Source transcripts (20+ files) | `wiki/sources/neurospect/` |
| Live commentary concepts | `wiki/concepts/business-logic/ict-live-commentary.md` |
| AI coach system prompt template | `wiki/concepts/ai-coach/system-prompt-template.md` |
| Linear workspace (22 tickets, Phase 0-4) | NeuroSpect-Platform (NEU) |

## Upstream Deviations

No upstream deviations — Phase 0 is the first phase. Plan assumptions are current.

## Current Phase Deviations

### Marketing site scope expansion (2026-05-10)
- **Planned:** Marketing-site boot prompt existed but was explicitly "NOT part of the Phase 0-10 roadmap"
- **Actual:** Marketing site formally added as Phase 0 deliverable. Built 6 pages including `/compare` (competitive intelligence) and `/performance` (illustrative trader performance analytics with Chart.js). Added Chart.js as the only JS dependency.
- **Impact:** Phase 0 now has two work streams: (1) technical validation (RAG, pgvector, embeddings) and (2) marketing site (waitlist capture, product positioning). Both can proceed in parallel.

## Cross-Wiki Notes

- **Vlad's wiki:** Phase 0 page scaffolded but empty — no personal research notes yet.
- **Paul's wiki:** Phase 0 in_progress. Marketing site notes added (2026-05-10). Has a prompt-versioning research note (`paul-wiki/components/prompt-versioning-module.md`) tagged phase 3+ — not directly relevant to Phase 0.

## Critical Gate

**Instructor content access agreement** — This is the single gate for the entire project. No evidence it has been resolved. Phase 0 technical work (pgvector, embeddings, chunking) can proceed in parallel, but the RAG prototype cannot be validated against real instructor content without this agreement.

## Reference

- `roadmap/plan.md` §20 — Phase 0 GitHub issues
- `roadmap/plan.md` §27 — NeuroCore architecture (3-signal hybrid search)
- `wiki/concepts/ai-coach/system-prompt-template.md` — Draft coaching prompt
- `wiki/concepts/architecture/transcript-pipeline.md` — Transcript processing decisions

---

_Load this prompt when starting an implementation session for Phase 0._
