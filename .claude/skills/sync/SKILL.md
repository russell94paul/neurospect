---
name: sync
description: "End-of-session sync. Updates Linear tickets, regenerates boot prompts, captures deviations, flags cross-wiki content, and suggests next phase."
---

# /sync — End-of-Session Project State Synchronization

## Usage
```
/sync              # Full sync: Linear + boot prompts + phase status + cross-wiki + skill suggestions
/sync tickets      # Only sync Linear ticket status
/sync boot         # Only regenerate boot prompts for active phases
/sync status       # Only update roadmap status dashboard
```

## What This Skill Does

Single command that keeps the entire project state in sync. **Should be offered to the user before every session ends.**

Performs 7 operations, then suggests which `/phase` skill to run next.

## Engineer Detection

**Before any sync operation, detect which engineer is working this session:**

1. Check `git config user.name` and `git config user.email`
2. Map to Linear user ID and personal wiki:

| Git Author | Linear User ID | Linear Name | Personal Wiki |
|---|---|---|---|
| Paul Russell / paul.russell@aldc.io / paulrussell94@gmail.com | `998ac331-3860-4d1a-b8e2-50f78b739e64` | Paul Russell | `paul-wiki/` |
| Vlad (TBD — add when Vlad's git config is known) | TBD | TBD | `vlad-wiki/` |

3. Use the detected engineer for:
   - Setting `assignee` on Linear tickets touched this session
   - Updating the correct personal wiki
   - Cross-wiki search (search the *other* engineer's wiki)
   - Boot prompt context (who's working on what)

If the engineer cannot be determined, ask: "Who is working this session? [paul/vlad]"

## Steps

### 1. Detect What Changed This Session

Run:
- `git diff --name-only HEAD~5..HEAD` — files changed in recent commits
- `git diff --name-only` — uncommitted changes
- `git log --oneline -5` — recent commit messages
- `git log --format='%an' -1` — detect current engineer

Categorize changes:
- Wiki changes (`wiki/`, `vlad-wiki/`, `paul-wiki/`)
- Code changes (`api/`, `app/`)
- Roadmap changes (`roadmap/`)
- Which phase(s) the changes relate to (by file path or ticket ID in commit message)

### 2. Linear Ticket Sync

Connect to Linear via GraphQL API (`https://api.linear.app/graphql`).

**Auth:** Use `$env:LINEAR_API_KEY` (set in `.claude/settings.local.json` and `api/.env`).

**Fetch all NEU tickets:**
```bash
curl -s -X POST https://api.linear.app/graphql \
  -H "Content-Type: application/json" \
  -H "Authorization: $LINEAR_API_KEY" \
  -d '{"query": "{ issues(filter: { team: { key: { eq: \"NEU\" } } }, first: 100) { nodes { id identifier title description state { id name } assignee { id name } labels { nodes { id name } } priority priorityLabel estimate } } }"}'
```

**Compare against git state and update tickets:**
- PRs merged → transition corresponding tickets to "Done" (state ID: `5bca47c0-83c5-4421-88ba-722b36e091e2`)
- Branches exist for tickets marked "Backlog" → transition to "In Progress" (`bf0eb160-22d8-4ce9-a6ed-231ce4ba4aa8`)
- Tickets marked "In Progress" with no commits in 7+ days → flag as stale

**Assign engineer to tickets worked this session:**
- If a commit message references a ticket (e.g., `NEU-042` or `[NEU-042]`), assign the detected engineer as the ticket's assignee
- If the session touched files that clearly belong to a phase, and that phase has unassigned tickets, suggest assigning them

**Report:**
```
Linear Sync Report (engineer: Paul Russell):
✓ NEU-042 → Done (PR #15 merged)
✓ NEU-043 assigned to Paul Russell
⚠ NEU-055 marked "In Progress" but no branch exists
⚠ NEU-060 no commits in 10 days — still active?
? 2 merged PRs have no matching Linear ticket
```

Ask user to confirm before applying changes.

### 3. Ensure Linear Tickets Are Fully Populated

For each ticket touched or referenced this session, check that all applicable fields are populated. If any are missing, update them via the API.

**Required fields for every ticket:**

| Field | Source | How to Populate |
|---|---|---|
| `title` | Already set at creation | — |
| `description` | Plan section for this ticket | If empty, generate from `roadmap/plan.md` phase section + ticket scope |
| `assignee` | Detected engineer | Set to session engineer if unassigned |
| `priority` | Plan priority (P0-P3) | Map from plan: P0→Urgent(1), P1→High(2), P2→Medium(3), P3→Low(4) |
| `labels` | Phase + component labels | Ensure `phase-N` label + relevant component labels (edgelab, neurograph, rag, etc.) |
| `state` | Git/PR state | Update based on branch/PR/merge status |
| `estimate` | Plan effort estimate | Set if available from plan (story points or hours) |

**GraphQL mutation to update a ticket:**
```bash
curl -s -X POST https://api.linear.app/graphql \
  -H "Content-Type: application/json" \
  -H "Authorization: $LINEAR_API_KEY" \
  -d '{"query": "mutation { issueUpdate(id: \"ISSUE_ID\", input: { assigneeId: \"USER_ID\", priority: 2, description: \"...\", stateId: \"STATE_ID\", labelIds: [\"LABEL_ID_1\", \"LABEL_ID_2\"] }) { success issue { id identifier title } } }"}'
```

**Linear Reference IDs:**

Workflow States:
| State | ID | Type |
|---|---|---|
| Backlog | `55d951d0-f250-419c-8ff9-4b489fa1a138` | backlog |
| Todo | `736c3642-4756-467d-917d-8e6882b54c01` | unstarted |
| In Progress | `bf0eb160-22d8-4ce9-a6ed-231ce4ba4aa8` | started |
| In Review | `0c3b98c6-8efa-43cb-8d22-65b9eb99e0f8` | started |
| Done | `5bca47c0-83c5-4421-88ba-722b36e091e2` | completed |
| Canceled | `22b85f73-283a-4f8c-a4a7-b36cd8a5ab1a` | canceled |
| Duplicate | `712e676f-5423-4b04-9933-3c6fb48cf7e4` | canceled |

Users:
| Name | ID |
|---|---|
| Paul Russell | `998ac331-3860-4d1a-b8e2-50f78b739e64` |

Team:
| Name | ID |
|---|---|
| NEU | `da73b085-fcad-42fb-a970-1e3a72ecd9b3` |

Labels (fetch current list at runtime — labels may change):
```bash
curl -s -X POST https://api.linear.app/graphql \
  -H "Content-Type: application/json" \
  -H "Authorization: $LINEAR_API_KEY" \
  -d '{"query": "{ issueLabels { nodes { id name } } }"}'
```

### 4. Update Phase Status

For each phase in `roadmap/phases/`:
- Count tickets (from Linear)
- Calculate completion percentage
- Determine status:
  - All tickets done → `complete`
  - Any ticket in progress → `in_progress`
  - Has assigned tickets but none started → `planning`
  - No tickets → `not_started`
- Update `roadmap/phases/phase-{N}-{slug}/README.md` frontmatter (including `assigned` field with engineer names)
- Update `roadmap/status.md` dashboard table (include Assigned column)
- Update personal wiki phase READMEs with synced status fields

### 5. Regenerate Boot Prompts for Active Phases

For each phase with status `planning` or `in_progress`:
- Read phase README (goals, scope, exit criteria)
- Read all upstream deviations
- Read current phase deviations
- Read Linear tickets for this phase (include assignee info)
- Read recent git activity for this phase
- Check cross-wiki content

Write updated boot prompts to:
- `roadmap/phases/phase-{N}-{slug}/boot-prompts/planning.md`
- `roadmap/phases/phase-{N}-{slug}/boot-prompts/execution.md`

Boot prompts should include: "**Engineer:** {name} — working on {tickets}" at the top of the phase context section.

Only regenerate for active phases.

### 6. Capture Session Deviations

If code changes were made this session, check whether they deviate from the plan:

- Read the relevant phase README for what was planned
- Compare against what was actually built (the diff)
- If a deviation is detected, ask the user:
  ```
  This session changed [X] which differs from the Phase N plan 
  (plan said Y, you built Z). 
  
  Should I capture this as a deviation in 
  roadmap/phases/phase-N/deviations.md? [y/n]
  ```
- If yes, append the deviation with date, engineer name, planned vs actual, and impact

### 7. Cross-Wiki Flag

Search the **other** engineer's personal wiki for content modified in the last 7 days that relates to what was changed in this session.

If current engineer is Paul → search `vlad-wiki/`
If current engineer is Vlad → search `paul-wiki/`

If matches found:
```
Cross-wiki: Vlad updated vlad-wiki/research/fvg-edge-cases.md 
2 days ago — may be relevant to your FVG detector work in Phase 7.
```

### 8. Suggest Next Skills

Based on everything above, suggest what to run in the next session:

```
Next session suggestions:
  /phase 7 exec    — Continue EdgeLab work (2 open tickets assigned to Paul)
  /phase 2 plan    — Phase 1 deviation needs to be incorporated into Phase 2 plan
  /crossref        — Vlad has new research notes that may affect your work
```

Prioritize:
1. Active phases with open tickets assigned to the current engineer
2. Phases affected by upstream deviations that haven't been incorporated
3. Cross-wiki content that hasn't been reviewed

## Automatic Offer

This skill should be offered at the end of every session that modifies code, wiki, or tickets. The CLAUDE.md files for the root, vlad-wiki, and paul-wiki all mandate this.

Format:
```
Before ending this session — would you like to run /sync?
Engineer: {detected name}
Changes detected: [brief summary of what changed]
```
