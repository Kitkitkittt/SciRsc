# apps/desktop

The Tauri 2 + React + TypeScript + Vite desktop application for SciRsc, based on Open Science Desktop.

## Layout

- `src/` — the React frontend.
  - `app/` — routes, shell layout, and context providers.
  - `components/` — reusable UI, including the sidebar, split-pane sessions, integrated
    terminal, notebook, thread/trajectory, file viewers, and settings.
  - `features/` — research, chat, runtime, skills, project, and settings modules.
  - `lib/` — SDK/runtime bridge, persisted project/screen layout, session state,
    streaming event handling, theme, and other shared frontend logic.
  - `i18n/` — interface translations and locale configuration.
- `src-tauri/` — native desktop commands, terminal/notebook integration, and packaging.
- `../../crates/osd-core/` — shared workspace, OpenCode sidecar, and gateway services,
  also used by the headless server.

## State strategy

- UI and project/screen/pane layout state → Zustand; layout persists in local storage.
- Server / runtime state → TanStack Query.
- Streaming agent events → SDK event handling and frontend session stores.

The frontend talks to the agent runtime only through `packages/sdk` (`OpenCodeClient`).

## Depends on

`packages/ui`, `packages/shared`, `packages/sdk`, and `crates/osd-core`; at runtime,
the app starts the bundled, pinned OpenCode sidecar in an app-private profile.
The gateway serves the same UI to authenticated browser and mobile clients.

## Local development

Follow the root [build instructions](../../README.md#build-from-source) to fetch
sidecars and skills before running Tauri. The repository's `./launch.sh` runs the
existing release binary; it does not rebuild it.
