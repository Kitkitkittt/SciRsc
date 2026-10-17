#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
app="$root/target/release/ai4s-workbench"

if [[ ! -x "$app" ]]; then
  printf 'Missing release build: %s\nRun: pnpm --filter @ai4s/desktop tauri build --no-bundle\n' "$app" >&2
  exit 1
fi

exec "$app" "$@"
