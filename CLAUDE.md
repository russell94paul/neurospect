# Neurospect Monorepo

Single repository for the Neurospect ICT trading journal and AI coach. Three sibling directories:

- `wiki/` — knowledge base, decisions, transcripts, course content. **Read `wiki/CLAUDE.md` for any docs, strategy, or transcript work.**
- `api/` — FastAPI backend (formerly the `neurospect-api` repo). Read `api/CLAUDE.md`.
- `app/` — React 19 + TS frontend (formerly the `neurospect-app` repo). Read `app/CLAUDE.md`.

When in doubt, start in the wiki — it's the index and the source of truth for design decisions.

Cross-cutting changes (an architecture decision that touches `wiki/` + `api/` + `app/`) ride in a single PR. See `wiki/CLAUDE.md` § *Architecture Doc Integrity* — that rule is the entire reason this is a monorepo.

## History

This repo was created on 2026-05-02 by merging three predecessor repos via `git filter-repo --to-subdirectory-filter`:

- `neurospect-wiki` → `wiki/`
- `neurospect-api` → `api/`
- `neurospect-app` → `app/`

The predecessor repos are archived on GitHub. Their pre-merge tips are tagged `pre-monorepo-snapshot` for reference. See `wiki/processes/distributed-workflow/active/monorepo-migration.md` for the migration record.
