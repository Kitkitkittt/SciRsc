# Swarm-ready handoff

Repository: `Kitkitkittt/SciRsc`. Contract: `swarm-ready/v1`. Source inspection: 2026-11-23.
Default branch: `main`. Inspected base: [54ee364612cc](https://github.com/Kitkitkittt/SciRsc/commit/54ee364612cc403324d511e66496d0fcda51f190).

**Status: documented; runtime qualification is unverified.** This file defines an agent workflow. It does not install a shell command, enroll the repository in a scheduler, certify test success, or activate VMs. Follow the current user task and existing repository instructions; retain prior authorization within its actual scope.

## Invoke

Give the working agent this prompt:

```text
swarm ready: <one measurable repository objective>
Read SWARM_READY.md and the applicable AGENTS.md. Continue the current owned
work or ready issue, establish the baseline and acceptance check, then prepare
a bounded worker handoff. Use existing authorized tools and capacity. Report
what is documented, implemented, tested, and observed separately.
```

If a `swarm-ready` skill is installed, load it. Otherwise execute the documented workflow directly. Treat the phrase as an agent instruction unless the installed CLI explicitly advertises it. Inspect help/version before using optional command adapters.

## Repository starting point

Read [AGENTS.md](AGENTS.md) and route through [CONTEXT-MAP.md](CONTEXT-MAP.md)
to the affected context. `CLAUDE.md` is a symlink to `AGENTS.md`; maintain the
pointer and the rules in `AGENTS.md` only. Follow the
[local issue tracker rules](docs/agents/issue-tracker.md) and record verified
milestones in [PROGRESS.md](PROGRESS.md).

This documentation slice is [issue #4](https://github.com/Kitkitkittt/SciRsc/issues/4)
on the existing branch for [PR #3](https://github.com/Kitkitkittt/SciRsc/pull/3).
The v0.6.0 upgrade ([issue #1](https://github.com/Kitkitkittt/SciRsc/issues/1),
[PR #2](https://github.com/Kitkitkittt/SciRsc/pull/2)) owns its own branch and
runtime evidence. Follow the [upstream maintenance rules](docs/agents/upstream.md)
for that work, not this documentation PR.

Select one bounded workspace, SDK or research-workflow issue and preserve the existing desktop/gateway architecture.

Partition independent layers behind current interfaces. Verify the impacted desktop and gateway behavior where applicable; local fixtures do not prove all operating systems or installed releases.

The base above is an inspection snapshot, not a permanent working branch. Refresh the actual target branch, current issues, incumbent worker and applicable nested instructions before editing. Preserve unrelated changes and upstream/fork boundaries.

## Execution logic

1. **Recover context.** Read the current issue, work order and last evidence-backed handoff. Keep useful work and the active worker. Record source commit, unresolved criteria and the next action; avoid repeating completed investigation.
2. **Define success.** State one outcome, baseline, target, changed paths, verification command and expected result. Keep acceptance criteria and reference data fixed unless the user changes the requirement.
3. **Bound the attempt.** Reuse the existing owner/task/attempt identities, action scope, resource limits, time/cost budget and retry allowance. Do not demand a new user-written permission receipt for already authorized work. If a real capability or grant is missing, name the exact blocked action and continue independent work.
4. **Partition only useful work.** Use one writer per branch/worktree and non-overlapping change scope. Reuse the existing task ledger and dependency graph. Reserve verification capacity before adding workers; avoid recursive worker growth and duplicate coordinators.
5. **Implement and measure.** Make the smallest coherent change. Use differential checks when a trusted reference exists, and deterministic failure simulation when it materially improves reproduction. Record the seed/configuration and counterexamples. Do not weaken tests, rewrite baselines or hide pre-existing failures to claim success.
6. **Verify and integrate.** Verify the exact returned commit independently in a clean environment. Recheck the final integrated revision when changes interact. Follow existing review, merge and deployment rules; a green worker report alone cannot override them. Use the narrowest checks that resolve a concrete risk.
7. **Checkpoint and finish.** Save candidate SHA, evidence, measured outcome, remaining blockers and a precise next action before context/lease expiry. Reconcile lost or duplicate completions before retrying. Release only the run's owned resources after preserving evidence. Stop when the requested outcome is met or a concrete blocker prevents the next required action.

## Verification starting point

**Documentation checks for PR #3.** From the repository root, confirm the
agent pointer and reciprocal link, review the command map against both package
manifests, and check the diff for whitespace:

```sh
git ls-files --error-unmatch -- AGENTS.md CLAUDE.md SWARM_READY.md \
  CONTEXT-MAP.md PROGRESS.md docs/agents/issue-tracker.md docs/agents/upstream.md \
  package.json apps/desktop/package.json .github/workflows/build.yml \
  .github/workflows/finalize-macos-notarization.yml
git ls-tree HEAD -- CLAUDE.md
git show HEAD:CLAUDE.md
git diff --check
```

Expect both link directions to resolve, `CLAUDE.md` to have mode `120000`
with target `AGENTS.md`, and `git diff --check` to produce no output and exit 0.

**For separately scoped application changes.** The [workspace manifest](package.json)
declares Node 20+ and pnpm 9.4.0; root scripts target `@ai4s/desktop`. The
[desktop manifest](apps/desktop/package.json) expands them as follows:

| Command | Desktop action |
| --- | --- |
| `pnpm run lint` | ESLint |
| `pnpm run typecheck` | TypeScript `tsc --noEmit` |
| `pnpm run test` | Non-watch `vitest run` |
| `pnpm run build` | TypeScript check, ACP server bundle, then Vite build |

Use these commands only when applicable to that change; they are not release,
Tauri startup, gateway, or cross-platform acceptance. This documentation slice
requires no dependency install, app build, live gateway, or provider connection.
Do not run the release or notarization workflows for it.

## Required handoff result

Return a concise record with `repository`, `objective`, `issue_or_work_order`, `base_sha`, `candidate_sha`, `owner`, `task_id`, `attempt_id`, `worker/session`, `branch/worktree`, `changed_paths`, `environment`, `resource/budget limits`, `acceptance`, `commands_and_results`, `evidence_refs`, `known_failures`, `blocker_owner`, `next_action`, and `cleanup_status`. Use null/unknown when a field is unavailable; never manufacture evidence or authority.

Keep documentation readiness, command availability, source tests, live environment qualification and accepted outcome as separate states. Count verified outcomes, regressions, elapsed time, cost and human interventions. Commits, lines, tokens and worker count describe activity only.
