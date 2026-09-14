# Project

One-line description of what this is and who it is for. Replace this.

## Stack

bun, Vite, vitest, oxlint, oxfmt, TypeScript strict. `bun run verify` runs
everything CI runs.

## CI and merge policy

CI, review, risk tiers, and auto-merge come from `JimmayVV/fleet-ci` (see its
PLAYBOOK.md). PRs are labeled `risk:low`, `risk:medium`, or `risk:high`:

- low auto-merges on green
- medium auto-merges on green plus a clean Claude review verdict
- high waits for a human: anything under `.github/`, the `high-paths` listed in
  `.github/workflows/risk.yml`, diffs over 600 lines, Dependabot majors

Before merging a medium or high PR by hand, read the review bot's findings and
fold them in or reply on the PR saying why not.

## Decisions

Architecture decisions live in `docs/adr/`, one file per decision, numbered.
