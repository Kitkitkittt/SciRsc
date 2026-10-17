# Upstream maintenance

## Repository identity

`Kitkitkittt/SciRsc` is an independent public repository based on Open Science Desktop. Preserve upstream copyright and the MIT license.

- `origin`: `https://github.com/Kitkitkittt/SciRsc.git`
- `upstream`: `https://github.com/ai4s-research/open-science.git`
- baseline: Open Science Desktop `v0.6.0`, commit `f879a9b3b0bf93794c23370363002979e6fa89e3`

SciRsc-specific decisions and source audits live in `docs/research/2026-09-03-academic-ai-data-dashboard.md`.

## Updating from upstream

1. Start from a clean `main`; fetch `upstream` branches and tags.
2. Read the target release notes, `PROGRESS.md`, and the full baseline-to-target diff.
3. Create `upstream/vX.Y.Z`; never merge a release directly into `main`.
4. Preserve SciRsc agent docs, source audits, manual approval defaults, credential isolation, SDK boundary, and gateway/mobile support.
5. Review dependency, schema, config, migration, license, bundled-skill, connector, and runtime-version changes before resolving conflicts.
6. Run `pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, and applicable Rust checks.
7. Update this baseline, the source audit, and `PROGRESS.md` with verified results.
8. Review the final diff before merging or pushing.

Prefer tagged upstream releases. Do not copy code from assessed external projects unless their audit permits it. Keep PaperBanana and OpenDraft isolated, K-Dense skills selective and pinned, Academic Research Skills reference-only pending license review, and AI-Researcher code excluded.
