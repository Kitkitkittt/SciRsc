# Context map

Read only the contexts relevant to the requested change. Context glossaries and ADRs are created lazily when terminology or durable decisions are resolved.

| Context | Code | Current authoritative context |
| --- | --- | --- |
| Desktop application | `apps/desktop/` | `AGENTS.md`, `docs/PRD.md`, `docs/TECHNICAL_DESIGN.md` |
| Agent SDK and ACP | `packages/sdk/` | `packages/sdk/README.md`, `docs/TECHNICAL_DESIGN.md` |
| Shared contracts | `packages/shared/` | `docs/TECHNICAL_DESIGN.md` |
| Shared UI | `packages/ui/` | `docs/TECHNICAL_DESIGN.md` |
| Headless core | `crates/osd-core/` | `docs/TECHNICAL_DESIGN.md`, `README.md` |
| CLI and gateway server | `crates/osd-cli/` | `README.md`, `docs/APP_OPERATOR.md` |
| Runtime, connectors, and skills | `runtime/` | `runtime/skills/README.md`, `runtime/opencode-profile/README.md`, `docs/CONNECT_YOUR_TOOLS.md` |
| Product-wide behavior | repository root | `AGENTS.md`, `docs/PRD.md`, `docs/REQUIREMENTS.md`, `docs/TECHNICAL_DESIGN.md` |
| SciRsc source selection | `docs/research/` | `docs/research/2026-09-03-academic-ai-data-dashboard.md`, `docs/agents/upstream.md` |

When a context gains a `CONTEXT.md`, add it here and treat it as that context's canonical glossary. System ADRs belong in `docs/adr/`; context ADRs belong in `<context>/docs/adr/`.
