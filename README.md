# fleet-template

Starter for a new TypeScript project in the fleet. Created from
`JimmayVV/fleet-template`. After creating the repo:

1. `bun install`, then `bun run verify`.
2. Edit `high-paths` in `.github/workflows/risk.yml` for this project.
3. Repo settings: enable auto-merge, add the `CLAUDE_CODE_OAUTH_TOKEN`
   secret, and apply the default-branch ruleset from
   `JimmayVV/fleet-ci/rulesets/default-branch.json`. The `/new-project`
   skill does all three.
4. Replace this README and the first line of CLAUDE.md.
