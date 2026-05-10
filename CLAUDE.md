# NeuroSpect Monorepo

Single repository for the NeuroSpect AI trading platform. Evolving from an ICT trading journal into a full AI coaching, quantitative analysis, and automated trading system.

## Product Hierarchy

```
NeuroSpect (company / product brand)
├── NeuroSpect Coach    — AI coaching product (consumer-facing)
├── NeuroCortex         — Knowledge/retrieval layer
├── NeuroQuant          — Hybrid LLM + quant system
├── NeuroTrader         — Automated trading agent
└── NeuroLLM            — Underlying LLM/AI platform powering all components
```

| Component | Description |
|---|---|
| **NeuroSpect** | Company and product brand. AI trading platform for traders and educators. |
| **NeuroSpect Coach** | Consumer-facing AI coaching product (RAG + ICT knowledge + trade journal). |
| **NeuroCortex** | Knowledge/retrieval layer. Hybrid 3-signal search (keyword + semantic + entity) across all knowledge sources. Powers coaching RAG, cross-wiki intelligence, and agent reasoning. |
| **NeuroQuant** | Hybrid LLM + traditional quant system. ICT feature engineering, market regime detection (HMM), ML model ensemble (LightGBM), LLM narrative reasoning. Confluence scorer combines all signals. |
| **NeuroTrader** | Automated trading agent. Shadow → Paper → Live progression. 5-layer safety architecture. Learns from its mistakes via post-trade LLM analysis and model retraining. |
| **NeuroLLM** | The underlying LLM/AI technology layer powering all NeuroSpect components. RAG, fine-tuning, agent orchestration, prompt management. |

## Directory Structure

### Core Product
- `wiki/` — ICT knowledge base, architecture, transcripts, course content. Source of truth for team knowledge. **Read `wiki/CLAUDE.md` first.**
- `api/` — FastAPI backend. Read `api/CLAUDE.md`.
- `app/` — React 19 + TS frontend. Read `app/CLAUDE.md`.

### Roadmap
- `roadmap/` — **Single source of truth for project state.** Phase definitions, boot prompts, deviations, status dashboard, and the master plan. Read `roadmap/CLAUDE.md`.
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
| 4 | Evaluation & Reliability | A |
| 5 | Private Beta | A |
| 6 | V1 Launch | A |
| 7 | Backtesting Platform | B (Trading Intelligence) |
| 8 | NeuroQuant | B |
| 9 | NeuroTrader Agent | B |
| 10 | Advanced Features | — |

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

## NeuroCortex — Knowledge Layer

NeuroCortex is the hybrid retrieval/intelligence layer that indexes all knowledge sources:

| Source | Indexed For |
|---|---|
| `wiki/` (training content) | RAG coaching, fine-tuning dataset generation |
| `wiki/` (dev docs) | Engineer reference, project context |
| `paul-wiki/`, `vlad-wiki/` | Cross-engineer intelligence |
| `initial-plan/` | Project context |
| Trade journal (PostgreSQL) | Personalized coaching |
| Backtest results (PostgreSQL) | Strategy evaluation |
| Market data context | Real-time coaching enrichment |
| Agent signals (PostgreSQL) | Agent self-improvement |

Search uses 3 signals fused via Reciprocal Rank Fusion:
1. **Keyword/BM25** (tsvector) — catches exact ICT jargon
2. **Semantic** (pgvector embeddings) — catches conceptual similarity
3. **Entity/Tag** — catches instrument, session, strategy references

Cross-wiki intelligence: when an engineer is working on a component, NeuroCortex can surface relevant content from the other engineer's wiki or the team wiki.

## Architecture Patterns

Several patterns proven in production elsewhere should be replicated independently. See `initial-plan/v1-neurollm-plan.md` § *Patterns to Replicate from Zeus Memory* for the full mapping.

## Skills (Slash Commands)

Three skills power the project workflow. Skills generate context at runtime — they read live state, not cached instructions.

| Skill | Purpose |
|---|---|
| `/phase N [plan\|exec]` | Load Phase N boot prompt. Generated from roadmap definition + upstream deviations + Linear tickets + git state + cross-wiki content. Default mode is `exec`. Use `/phase status` to see all phases. |
| `/sync` | End-of-session sync. Updates Linear tickets, regenerates boot prompts, captures deviations, flags cross-wiki content, suggests which `/phase` to run next. **Must be offered before every session ends.** |
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

**Before ending any session that modifies code, wiki, or tickets, offer to run `/sync`.** This is mandatory — documented here, in both personal wiki CLAUDE.mds, and in the `/sync` skill itself.

`/sync` will:
1. Sync Linear ticket status against git
2. Regenerate boot prompts for active phases
3. Update `roadmap/status.md`
4. Capture any deviations from this session
5. Flag cross-wiki content
6. Suggest which `/phase` to run next

## Cross-Cutting Rules

- Cross-cutting changes (touching `wiki/` + `api/` + `app/`) ride in a single PR
- See `wiki/CLAUDE.md` § *Architecture Doc Integrity* for the reconciliation rule
- When in doubt, start in `wiki/` — it's the index and source of truth
- **Always offer `/sync` before ending a session**

## History

This repo was created on 2026-05-02 by merging three predecessor repos via `git filter-repo --to-subdirectory-filter`:

- `neurospect-wiki` → `wiki/`
- `neurospect-api` → `api/`
- `neurospect-app` → `app/`

The predecessor repos are archived on GitHub. Their pre-merge tips are tagged `pre-monorepo-snapshot` for reference.
