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

Performs 5 operations, then suggests which `/phase` skill to run next.

## Steps

### 1. Detect What Changed This Session

Run:
- `git diff --name-only HEAD~5..HEAD` — files changed in recent commits
- `git diff --name-only` — uncommitted changes
- `git log --oneline -5` — recent commit messages

Categorize changes:
- Wiki changes (`wiki/`, `vlad-wiki/`, `paul-wiki/`)
- Code changes (`api/`, `app/`)
- Roadmap changes (`roadmap/`)
- Which phase(s) the changes relate to (by file path or ticket ID in commit message)

### 2. Linear Ticket Sync

Attempt to connect to Linear (via `linear` CLI or API).

If available:
- Fetch all NeuroSpect project issues
- Compare against git state:
  - PRs merged → close corresponding tickets (ask user to confirm)
  - Branches exist for tickets marked "backlog" → suggest moving to "in progress"
  - Tickets marked "in progress" with no commits in 7+ days → flag as potentially stale
- Report discrepancies:
  ```
  Linear Sync Report:
  ✓ NEU-042 closed (PR #15 merged)
  ⚠ NEU-055 marked "in progress" but no branch exists
  ⚠ NEU-060 no commits in 10 days — still active?
  ? 2 merged PRs have no matching Linear ticket
  ```
- Ask user to confirm changes before applying

If Linear not available, skip and note: "Linear not connected. Run `linear auth` to enable ticket sync."

### 3. Update Phase Status

For each phase in `roadmap/phases/`:
- Count tickets (from Linear if available, or from personal wiki ticket folders)
- Calculate completion percentage
- Determine status:
  - All tickets done → `complete`
  - Any ticket in progress → `in_progress`
  - Has assigned tickets but none started → `planning`
  - No tickets → `not_started`
- Update `roadmap/phases/phase-{N}-{slug}/README.md` frontmatter
- Update `roadmap/status.md` dashboard table
- Update personal wiki phase READMEs (`vlad-wiki/phases/*/README.md`, `paul-wiki/phases/*/README.md`) with synced status fields

### 4. Regenerate Boot Prompts for Active Phases

For each phase with status `planning` or `in_progress`:
- Read phase README (goals, scope, exit criteria)
- Read all upstream deviations
- Read current phase deviations
- Read Linear tickets for this phase
- Read recent git activity for this phase
- Check cross-wiki content

Write updated boot prompts to:
- `roadmap/phases/phase-{N}-{slug}/boot-prompts/planning.md`
- `roadmap/phases/phase-{N}-{slug}/boot-prompts/execution.md`

Only regenerate for active phases — don't waste time on phases that haven't started or are complete.

### 5. Capture Session Deviations

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
- If yes, append the deviation with date, planned vs actual, and impact on future phases

### 6. Cross-Wiki Flag

Search the other engineer's personal wiki for content modified in the last 7 days that relates to what was changed in this session.

If matches found:
```
Cross-wiki: Paul updated paul-wiki/research/fvg-edge-cases.md 
2 days ago — may be relevant to your FVG detector work in Phase 7.
```

### 7. Suggest Next Skills

Based on everything above, suggest what to run in the next session:

```
Next session suggestions:
  /phase 7 exec    — Continue backtesting work (2 open tickets)
  /phase 2 plan    — Phase 1 deviation needs to be incorporated into Phase 2 plan
  /crossref        — Paul has new research notes that may affect your work
```

Prioritize:
1. Active phases with open tickets assigned to this user
2. Phases affected by upstream deviations that haven't been incorporated
3. Cross-wiki content that hasn't been reviewed

## Automatic Offer

This skill should be offered at the end of every session that modifies code, wiki, or tickets. The CLAUDE.md files for the root, vlad-wiki, and paul-wiki all mandate this.

Format:
```
Before ending this session — would you like to run /sync?
Changes detected: [brief summary of what changed]
```
