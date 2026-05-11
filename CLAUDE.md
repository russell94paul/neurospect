# NeuroSpect Monorepo

Single repository for the NeuroSpect AI trading platform. Evolving from an ICT trading journal into a full AI coaching, quantitative analysis, and automated trading system.

## Product Hierarchy

```
NeuroSpect (company / product brand)
├── NeuroSpect Mentor   — Consumer-facing AI coaching product
├── NeuroCore          — Knowledge/retrieval layer
├── NSLM                — NeuroSpect Language Model (ICT-aware model family)
├── NeuroSpect EdgeLab  — Research, backtesting, and model experimentation engine
├── NeuroQuant          — Production model layer
└── NeuroTrader Agent   — Automated trading agent
```

| Component | Description |
|---|---|
| **NeuroSpect** | Company and product brand. AI trading research and coaching platform for traders and educators. |
| **NeuroSpect Mentor** | Consumer-facing AI coaching product. RAG + ICT knowledge + trade journal + personalized coaching with source-grounded citations and deterministic rule validation. |
| **NeuroCore** | Knowledge/retrieval layer. Hybrid 3-signal search (keyword + semantic + entity) across all knowledge sources. Powers coaching RAG, cross-wiki intelligence, and agent reasoning. Source-grounded ICT memory. |
| **NSLM** | NeuroSpect Language Model. ICT-aware LLM/model family trained and adapted from private mentorship content, wiki content, structured ICT playbooks, and evaluation feedback. Prompt-versioned, model-versioned, evaluated through EdgeLab. |
| **NeuroSpect EdgeLab** | Event-driven research, backtesting, quant feature engineering, NSLM prompt/model experimentation, and hybrid model evaluation engine. Tests strategies, evaluates NSLM versions, ranks features, promotes validated models to NeuroQuant. |
| **NeuroQuant** | Production model layer. Consumes validated features and models promoted from EdgeLab. Regime-aware scoring, model ensembles, confluence decisions. |
| **NeuroTrader Agent** | Automated trading agent. Shadow → Paper → Live progression. 5-layer safety architecture. Gated by EdgeLab evidence and NeuroQuant scoring. |

## Directory Structure

### Core Product
- `wiki/` — ICT knowledge base, architecture, transcripts, course content. Source of truth for team knowledge. **Read `wiki/CLAUDE.md` first.**
- `api/` — FastAPI backend. Read `api/CLAUDE.md`.
- `app/` — React 19 + TS frontend. Read `app/CLAUDE.md`.

### Roadmap & Research
- `roadmap/` — **Single source of truth for project state.** Phase definitions, boot prompts, deviations, status dashboard, and the master plan. Read `roadmap/CLAUDE.md`.
- `research/` — Engineering research artifacts (benchmarks, evaluations, prototype findings). Organized by phase. NOT product content — that goes in `wiki/`. Read `research/README.md`.
- `initial-plan/` — Historical archive of original plan versions (read-only).

### Personal Wikis (Obsidian Vaults)
- `vlad-wiki/` — Vlad's personal working wiki.
- `paul-wiki/` — Paul's personal working wiki.

Both personal wikis share identical structure:

```
{vlad,paul}-wiki/
├── research/            # Research notes (any domain)
├── decisions/           # Decision records (DEC-NNN-short-title.md)
├── journal/             # Daily/weekly working notes (YYYY-MM-DD.md)
├── components/          # Per-component working docs
├── phases/              # Personal view of roadmap phases
│   ├── README.md        # Phase index with synced status (who's working on what)
│   ├── phase-0-research/
│   │   ├── README.md    # Personal status + notes (references roadmap/ for canonical def)
│   │   └── tickets/     # One subfolder per Linear ticket
│   │       └── NEU-042-rag-retrieval-pipeline/
│   │           ├── README.md      # Ticket implementation notes, blockers, decisions
│   │           └── boot-prompt.md # Ticket-specific boot prompt (optional, for complex tickets)
│   ├── phase-1-rag-mvp/
│   └── ...
└── scratch/             # Temporary notes (gitignored)
```

They are **personal working memory** — drafts, research-in-progress, daily notes. Mature content gets promoted to `wiki/` via `promote: true` frontmatter tag.

## Roadmap Phases

| Phase | Name | Track |
|---|---|---|
| 0 | Research & Validation | A (Coaching) |
| 1 | Knowledge Base & RAG MVP | A |
| 2 | Market Context & Trade Integration | A |
| 3 | Product MVP | A |
| 4 | Evaluation, Reliability & Prompt Infrastructure | A |
| 5 | Private Beta | A |
| 6 | V1 Launch | A |
| 7 | NeuroSpect EdgeLab Foundation | B (Trading Intelligence) |
| 8 | Hybrid Model Research + NeuroQuant Promotion | B |
| 9 | NeuroTrader Agent | B |
| 10 | Advanced Features | — |
| 11 | Content Licensing & IP Strategy | C (Business & Operations) |
| 12 | Regulatory & Compliance Framework | C |
| 13 | Go-to-Market & User Acquisition | C |
| 14 | Retention, Analytics & Coaching Quality | C |
| 15 | Competitive Intelligence & Moat Strategy | C |
| 16 | Team Scaling & Org Design | C |

Track C phases run **parallel** to engineering tracks and have cross-track gates (e.g., Phase 11 gates Phase 1; Phase 12 gates Phases 3 and 9).

### Where Phase Information Lives

| Content | Location | Maintained By |
|---|---|---|
| Phase definition (goals, scope, exit criteria) | `roadmap/phases/phase-N/README.md` | Manual + `/sync` |
| Planning boot prompt | `roadmap/phases/phase-N/boot-prompts/planning.md` | `/sync` (generated) |
| Execution boot prompt | `roadmap/phases/phase-N/boot-prompts/execution.md` | `/sync` (generated) |
| Deviations from plan | `roadmap/phases/phase-N/deviations.md` | Manual + `/sync` |
| Status dashboard | `roadmap/status.md` | `/sync` (generated) |
| Personal ticket notes | `{vlad,paul}-wiki/phases/phase-N/tickets/NEU-NNN-title/` | Manual |
| Ticket-specific boot prompt | `{vlad,paul}-wiki/phases/phase-N/tickets/NEU-NNN-title/boot-prompt.md` | Optional, manual or `/sync` |
| Personal phase status view | `{vlad,paul}-wiki/phases/phase-N/README.md` | `/sync` (synced from roadmap + Linear) |

### Ticket Subfolder Convention

Each Linear ticket gets a subfolder (not a flat file) in the personal wiki:

```
tickets/NEU-042-rag-retrieval-pipeline/
├── README.md        # Implementation notes, decisions, blockers
└── boot-prompt.md   # Ticket-specific boot prompt (for complex multi-session tickets)
```

Ticket README frontmatter:

```yaml
---
linear_id: NEU-NNN
title: Short title
status: backlog | in_progress | review | done
assignee: vlad | paul
priority: P0 | P1 | P2 | P3
phase: N
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

Ticket-specific boot prompts are optional — only create them for complex tickets that span multiple sessions and need persistent implementation context.

## Wiki Conventions

All three wikis (`wiki/`, `vlad-wiki/`, `paul-wiki/`) follow the same conventions:
- YAML frontmatter on every page: `tags`, `created`, `updated`
- `[[wikilinks]]` for internal cross-references within the same wiki
- Absolute paths for cross-wiki references
- One page per entity/concept — update existing rather than duplicate
- `corpus_type` frontmatter field on `wiki/` pages: `training` (for LLM/RAG), `development` (for engineers), or `both`

### Promotion Workflow (personal → team wiki)
1. When a personal wiki page is ready to become team knowledge, add `promote: true` to its frontmatter
2. A lint/skill catches promoted pages and suggests moving them to `wiki/`
3. After promotion, the personal wiki page becomes a stub linking to the canonical `wiki/` page

## NeuroCore — Knowledge Layer

NeuroCore is the hybrid retrieval/intelligence layer that indexes all knowledge sources:

| Source | Indexed For |
|---|---|
| `wiki/` (training content) | RAG coaching, fine-tuning dataset generation |
| `wiki/` (dev docs) | Engineer reference, project context |
| `paul-wiki/`, `vlad-wiki/` | Cross-engineer intelligence |
| `initial-plan/` | Project context |
| Trade journal (PostgreSQL) | Personalized coaching |
| EdgeLab experiments (PostgreSQL) | Strategy evaluation, NSLM evaluation |
| Market data context | Real-time coaching enrichment |
| Agent signals (PostgreSQL) | Agent self-improvement |

Search uses 3 signals fused via Reciprocal Rank Fusion:
1. **Keyword/BM25** (tsvector) — catches exact ICT jargon
2. **Semantic** (pgvector embeddings) — catches conceptual similarity
3. **Entity/Tag** — catches instrument, session, strategy references

Cross-wiki intelligence: when an engineer is working on a component, NeuroCore can surface relevant content from the other engineer's wiki or the team wiki.

## Architecture Patterns

Several patterns proven in production elsewhere should be replicated independently. See `initial-plan/v1-neurollm-plan.md` § *Patterns to Replicate from Zeus Memory* for the full mapping.

## Skills (Slash Commands)

Four skills power the project workflow. Skills generate context at runtime — they read live state, not cached instructions.

| Skill | Purpose |
|---|---|
| `/phase N [plan\|exec]` | Load Phase N boot prompt. Generated from roadmap definition + upstream deviations + Linear tickets + git state + cross-wiki content. Default mode is `exec`. Use `/phase status` to see all phases. |
| `/sync` | End-of-session sync. Updates Linear tickets, regenerates boot prompts, captures deviations, flags cross-wiki content, checks Track C gates, suggests which `/phase` to run next. **Must be offered before every session ends.** |
| `/lint` | Cross-artifact consistency check. Detects drift between CLAUDE.md files, roadmap phases, status dashboard, plan.md, skill mappings, and product naming. **Must be offered before every session ends.** |
| `/crossref [query]` | Search across all wikis for content relevant to current work or a specific topic. Surfaces notes from the other engineer, canonical wiki definitions, and roadmap deviations. |

### How Boot Prompts Work

Boot prompts are **generated by skills at runtime**, not hand-written. The `/phase` skill assembles context from:
- Phase definition (`roadmap/phases/phase-N/README.md`)
- All upstream deviations (`roadmap/phases/phase-{0..N-1}/deviations.md`)
- Current phase deviations
- Active Linear tickets (if connected)
- Recent git activity
- Cross-wiki content from the other engineer

When a phase's implementation deviates from the plan, `/sync` captures it in `deviations.md`. The next phase's `/phase` call automatically incorporates those deviations. No manual boot prompt maintenance needed.

Cached copies are written to `roadmap/phases/phase-N/boot-prompts/` so they're browsable in Obsidian, but the skills always regenerate from live state.

### End-of-Session Behavior

**Before ending any session that modifies code, wiki, or tickets, offer to run both `/sync` and `/lint`.** This is mandatory.

```
Before ending this session:
1. /sync  — Update tickets, boot prompts, and phase status from this session's work
2. /lint  — Check that all roadmap artifacts are consistent
```

**Why both?** As you work, you add ideas, rename components, and reorganize phases. These changes touch `CLAUDE.md`, `status.md`, phase READMEs, and skill definitions — but not always all of them at once. `/sync` captures *what you did this session*. `/lint` catches *drift between artifacts* that accumulated while you worked. Running both ensures the next session inherits clean, consistent context.

`/sync` will:
1. Sync Linear ticket status against git
2. Regenerate boot prompts for active phases
3. Update `roadmap/status.md`
4. Capture any deviations from this session
5. Check Track C cross-track gates
6. Flag cross-wiki content
7. Suggest which `/phase` to run next

`/lint` will:
1. Verify phase tables match across all CLAUDE.md files and status.md
2. Check phase directories are complete (README, deviations, boot-prompts)
3. Detect product/component naming drift across documents
4. Validate frontmatter on all phase READMEs
5. Verify cross-track gate declarations are consistent
6. Check file references and wikilinks resolve
7. Flag stale artifacts that may need updating

## Cross-Cutting Rules

- Cross-cutting changes (touching `wiki/` + `api/` + `app/`) ride in a single PR
- See `wiki/CLAUDE.md` § *Architecture Doc Integrity* for the reconciliation rule
- When in doubt, start in `wiki/` — it's the index and source of truth
- **Always offer `/sync` + `/lint` before ending a session**

## History

This repo was created on 2026-05-02 by merging three predecessor repos via `git filter-repo --to-subdirectory-filter`:

- `neurospect-wiki` → `wiki/`
- `neurospect-api` → `api/`
- `neurospect-app` → `app/`

The predecessor repos are archived on GitHub. Their pre-merge tips are tagged `pre-monorepo-snapshot` for reference.
