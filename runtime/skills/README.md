# runtime/skills

Scientific skills, layered:

```text
skills/
  core/      # first-party scientific/review skills, including publication-figures
  external/  # third-party skill packs, fetched by script — git-ignored
  user/      # user-installed / custom skills (live in the runtime workspace)
```

Core skills are bundled as the `skills-core/` app resource and deployed next to
the external pack on every sidecar start; directories without a `SKILL.md` are
skipped.

## Default pack: ai4s-skills (bundled into the installer)

The default scientific skills come from
[ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
(research-explorer, literature-survey, experiment-suite, paper-writer,
integrity-auditor, mindmap-render, ai4s-agent).

How they ship, end to end:

1. `scripts/dev/fetch-skills.sh` (run locally and in CI) downloads the pack at a
   pinned commit into `external/ai4s-skills/`, then applies SciRsc's tracked
   `core/publication-figures/report-skills.patch` with `--fuzz=0`. The patch makes
   `paper-writer`, `literature-survey`, and `experiment-suite` load the local
   `publication-figures` rules, including the companion illustrated-overview workflow,
   reference-image inspection, user-approved style preview, and final-size checks.
2. `apps/desktop/src-tauri/tauri.conf.json` maps that directory to the `skills/`
   app resource; core skills are separately mapped to `skills-core/`.
3. On every sidecar start, `crates/osd-core/src/runtime.rs::deploy_bundled_skills`
   syncs the resource packs into
   the app-private profile's global skills dir (`<xdg-config>/opencode/skills/`),
   which OpenCode scans regardless of project detection. Bundled skill directories
   are replaced on app upgrade; the workspace's own `.opencode/skills/` stays
   reserved for user-installed skills. Skill listing must be workspace-scoped
   (`GET /api/skill?directory=…`) — the SDK does this via its `directory` option.

To bump the pack version, update `AI4S_SKILLS_COMMIT` in `fetch-skills.sh`, retaining
the custom patch. A patch failure means the pinned upstream instructions changed;
reconcile the patch against the new source instead of dropping the scientific rules.

## Refreshing local skill content

Treat source, build resources, and installed runtime skills as distinct copies:

- Edit first-party rules and companion files under `core/`; edit the tracked patch
  for changes to fetched report skills, not the generated `external/` files.
- After changing the patch or pack pin, rerun `bash scripts/dev/fetch-skills.sh` so
  the generated build resource contains the patched instructions. Core content is
  bundled directly from `core/`.
- Rebuild the desktop app using the root README instructions, then launch the rebuilt
  binary (or install the new package). Restarting the old installed app only redeploys
  its old bundled resources; `./launch.sh` never rebuilds them.
- The next sidecar start replaces app-managed skill directories from those resources.
  Stale bundled skills are pruned only when all resource packs deploy successfully;
  the workspace's `.opencode/skills/` remains user-owned.

Keep third-party attribution and licenses with the fetched packs. Do not edit the
installed app-private skills as the durable source of a customization.

## Office pack: Anthropic document skills (bundled into the installer)

The docx / pdf / pptx / xlsx skills come from Anthropic's open-source
[anthropics/skills](https://github.com/anthropics/skills) repo (Apache-2.0;
each skill directory keeps its own `LICENSE.txt`). Same pipeline as above:
`fetch-skills.sh` pins them into `external/anthropic-skills/`, bundled as the
`skills-office/` app resource, deployed by `deploy_bundled_skills`. Bump via
`ANTHROPIC_SKILLS_COMMIT` in `fetch-skills.sh`.

## Browser skill: official agent-browser core guide

`scripts/dev/fetch-agent-browser.sh` fetches both the pinned sidecar and the
official `skill-data/core` directory from the same agent-browser tag. The build
adds only a small Open Science Desktop MCP/lifecycle adapter, bundles the result
as `skills-agent-browser/`, and deploys it as `open-science-browser`. This keeps
the browser workflow version-matched without copying an upstream guide into git.
While the connector is configured, the runtime hides the unrelated legacy
`browser-control` user skill so OpenCode cannot select the wrong transport.

## Third-party skills

Do **not** enable large third-party collections (e.g. ~148 K-Dense skills) by
default. Use curated install, enable by domain, and always surface each skill's
license, dependencies, and risk.

Each skill directory must contain a `SKILL.md`.
