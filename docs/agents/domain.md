# Domain docs

This repository uses a multi-context layout.

## Consumer rules

1. Read root `CONTEXT-MAP.md` when it exists.
2. Read only context docs relevant to the requested change.
3. Read related system ADRs under `docs/adr/` and context ADRs beside that context.
4. If these files do not exist, proceed silently; `/domain-modeling` creates them when terminology or decisions are resolved.
5. Use glossary terms exactly. Treat missing terminology as a domain-modeling question.
6. Surface conflicts with ADRs explicitly; never silently override a recorded decision.
7. Source code and current tests remain executable truth. Update stale context docs in the same change.

## Context locations

- `apps/desktop/CONTEXT.md` — React UI and Tauri desktop adapter
- `packages/sdk/CONTEXT.md` — OpenCode and ACP runtime boundary
- `packages/shared/CONTEXT.md` — cross-package contracts
- `packages/ui/CONTEXT.md` — reusable interface components
- `crates/osd-core/CONTEXT.md` — headless application core
- `crates/osd-cli/CONTEXT.md` — CLI and server interface
- `runtime/CONTEXT.md` — bundled runtime profile, MCP, and skills

System ADRs live under `docs/adr/`; context ADRs live under `<context>/docs/adr/`. `CONTEXT-MAP.md` routes readers and does not duplicate context glossaries.
