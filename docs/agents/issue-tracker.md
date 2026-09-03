# Issue tracker: GitHub

Issues and specs live in the public `Kitkitkittt/SciRsc` GitHub repository. Use `gh -R Kitkitkittt/SciRsc` so the `upstream` remote cannot receive accidental writes.

## Operations

- Create: `gh issue create -R Kitkitkittt/SciRsc --title "..." --body "..."`
- Read: `gh issue view -R Kitkitkittt/SciRsc <number> --comments`
- List: `gh issue list -R Kitkitkittt/SciRsc --state open --json number,title,body,labels,comments`
- Comment: `gh issue comment -R Kitkitkittt/SciRsc <number> --body "..."`
- Label: `gh issue edit -R Kitkitkittt/SciRsc <number> --add-label "..."` or `--remove-label "..."`
- Close: `gh issue close -R Kitkitkittt/SciRsc <number> --comment "..."`

## Pull requests as a triage surface

**PRs as a request surface: no.**

## Skill conventions

- “Publish to the issue tracker” means create a GitHub issue in `Kitkitkittt/SciRsc`.
- “Fetch the relevant ticket” means read that issue and its comments.
- A bare `#42` may be an issue or PR; try `gh pr view -R Kitkitkittt/SciRsc 42`, then `gh issue view -R Kitkitkittt/SciRsc 42`.
- `/wayfinder` uses one `wayfinder:map` issue, linked child issues, native dependencies when available, and `Blocked by:` lines otherwise.
- Claim work by assigning the issue to `@me`; resolve it with a result comment before closing.
