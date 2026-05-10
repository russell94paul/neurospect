---
name: phase
description: "Load a phase boot prompt. Usage: /phase N [plan|exec] or /phase status. Generates runtime context from roadmap definitions, deviations, git state, and cross-wiki content."
---

# /phase — Load Phase Boot Prompt

## Usage
```
/phase N          # Load Phase N context (e.g., /phase 1)
/phase N plan     # Load planning boot prompt for Phase N
/phase N exec     # Load execution boot prompt for Phase N (default)
/phase status     # Show status of all phases
```

## What This Skill Does

Generates a runtime boot prompt for the requested phase by assembling context from live sources. The output is never stale because it reads current state, not cached instructions.

## Steps

### 1. Parse Arguments

Extract the phase number from `$ARGUMENTS`. If no number provided, show usage. If `status` is the argument, show all phase statuses and exit.

Default mode is `exec` (execution boot prompt). If `plan` is specified, generate the planning boot prompt instead.

### 2. Read Phase Definition

Read `roadmap/phases/phase-{N}-{slug}/README.md` for the canonical phase definition (goals, scope, exit criteria, status, assignments).

The slug mapping:
- 0=research, 1=rag-mvp, 2=market-context, 3=product-mvp, 4=evaluation
- 5=beta, 6=launch, 7=backtesting, 8=neuroquant, 9=neurotrader, 10=advanced

### 3. Read Upstream Deviations

Read `roadmap/phases/phase-{M}-*/deviations.md` for ALL phases M < N. Extract any deviations that affect Phase N. These are critical — they represent what was actually built vs what was planned.

If no deviations exist upstream, note "No upstream deviations — plan assumptions are current."

### 4. Read Current Phase Deviations

Read `roadmap/phases/phase-{N}-{slug}/deviations.md` for any deviations already captured in the current phase.

### 5. Check Linear Tickets (if available)

Query the Linear GraphQL API using the `LINEAR_API_KEY` environment variable. If the env var is not set, skip this step and note: "Linear API key not configured — set LINEAR_API_KEY in .claude/settings.local.json."

Run this curl command (replace `{N}` with the phase number):

```bash
curl -s -X POST https://api.linear.app/graphql \
  -H "Content-Type: application/json" \
  -H "Authorization: $LINEAR_API_KEY" \
  -d '{"query": "{ issues(filter: { labels: { name: { eq: \"phase-{N}\" } } }) { nodes { id identifier title state { name } assignee { name email } priority priorityLabel labels { nodes { name } } } } }"}'
```

If the API call fails (no key, auth error, network error), skip gracefully and note the error.

If available, extract:
- Total tickets for this phase
- Tickets assigned to current user
- Tickets in progress
- Blocked tickets with blocker descriptions

### 6. Check Git State and Create Feature Branch (exec mode)

Run:
- `git log --oneline -20` — recent commits relevant to this phase
- `git branch --list "feat/NEU-*" "feat/phase-*"` — active feature branches
- `git status` — uncommitted changes

Identify any commits or branches that relate to Phase N based on ticket IDs or phase keywords.

**For execution mode only:** If not already on a phase or ticket feature branch, offer to create one:

1. `git fetch origin`
2. `git checkout development && git pull origin development`
3. Create the branch:
   - If a specific ticket was requested (e.g., `/phase 0 exec NEU-5`): `git checkout -b feat/NEU-5-pgvector`
   - Otherwise use the phase branch: `git checkout -b feat/phase-{N}-{slug}`
4. If a matching branch already exists (e.g., `feat/phase-0-research`), check it out instead of creating a new one.

Ask the user to confirm before creating the branch. Skip this step for `plan` and `status` modes.

### 7. Read Relevant Code State (for execution mode)

Based on the phase, identify key files that should exist or have been modified:

- Phase 0: `roadmap/`, wiki content files
- Phase 1: `api/app/coach/rag/`, `api/app/models/wiki_chunk.py`, `app/src/pages/chat.tsx`
- Phase 2: `api/app/coach/tools/`, economic calendar integration
- Phase 3: `api/app/routers/billing.py`, Stripe integration, landing page
- Phase 4: `evals/`, `api/app/coach/rag/evaluator.py`
- Phase 5-6: deployment configs, monitoring
- Phase 7: `api/app/backtest/`, `api/app/models/backtest_run.py`
- Phase 8: `api/app/neuroquant/`, `api/app/models/agent_performance.py`
- Phase 9: `api/app/agent/`, `api/app/models/agent_config.py`

Check which of these exist and report their state.

### 8. Check Cross-Wiki Content

Search the other engineer's personal wiki for pages tagged with phase-N related concepts. Surface up to 3 relevant pages as "FYI — the other engineer has notes on this."

### 9. Assemble and Output

**For planning mode (`/phase N plan`):**

Output a structured boot prompt containing:
- Phase N goals and scope (from README)
- Exit criteria
- Upstream deviations that affect this phase
- Open questions and decisions to make
- Relevant wiki content pointers
- Cross-wiki notes from the other engineer

**For execution mode (`/phase N exec`):**

Output a structured boot prompt containing:
- Phase N goals and what to build
- Key files to create or modify (with existence check)
- Technical decisions already made (from deviations + phase README)
- Active Linear tickets assigned to this user
- Recent relevant git activity
- Upstream deviations that change assumptions
- Cross-wiki notes from the other engineer

**For status mode (`/phase status`):**

Read `roadmap/status.md` and display the phase table. Also check Linear for ticket counts per phase if available.

### 10. Write Cached Copy

After generating, write the assembled boot prompt to:
- `roadmap/phases/phase-{N}-{slug}/boot-prompts/planning.md` (if plan mode)
- `roadmap/phases/phase-{N}-{slug}/boot-prompts/execution.md` (if exec mode)

This keeps the Obsidian-readable copy in sync for engineers who browse the roadmap wiki.

## End of Session

At the end of any session where `/phase` was used, remind the user:
"Run `/sync` before ending this session to update phase status and boot prompts."
