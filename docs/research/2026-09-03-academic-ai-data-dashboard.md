# Academic AI and Data Research Dashboard Sources

2026-09-03

## Goal

Use this repository as a local-first personal dashboard for academic research across AI and data-intensive fields. Keep research projects, conversations, notebooks, source material, experiments, figures, manuscripts, and provenance in one auditable workbench.

## Foundation decision

Open Science Desktop `v0.5.1` is the foundation. It already provides the requested dashboard rather than merely one research stage:

- named projects and searchable session history;
- local files, notebooks, scientific viewers, and artifact inspection;
- model-agnostic agent sessions through a pinned OpenCode runtime;
- MCP connectors and installable skills;
- local and remote run records;
- append-only provenance;
- manual approvals for commands, deletion, dependency installation, and network access;
- desktop and authenticated gateway interfaces.

Sources: [Open Science Desktop README](https://github.com/ai4s-research/open-science/blob/v0.5.1/README.md), [technical design](https://github.com/ai4s-research/open-science/blob/v0.5.1/docs/TECHNICAL_DESIGN.md), and [tool integration guide](https://github.com/ai4s-research/open-science/blob/v0.5.1/docs/CONNECT_YOUR_TOOLS.md).

The original adoption baseline was tag `v0.5.1`; the current maintenance baseline is `v0.6.0` (`f879a9b3b0bf93794c23370363002979e6fa89e3`, released 2026-10-04). See [upstream maintenance](../agents/upstream.md) for the update procedure. The original source assessment below remains dated 2026-09-03; it is not a new audit of those external projects. Other projects remain external because copying overlapping application code would make updates, licensing, dependency isolation, and provenance harder.

## Source assessment

| Source | Useful role | Decision | License and risk |
| --- | --- | --- | --- |
| [Open Science Desktop](https://github.com/ai4s-research/open-science) | Dashboard, projects, sessions, notebooks, viewers, provenance, MCP, skills, approvals | Adopt as the application foundation | MIT. Active MVP; retain manual approvals and pinned runtime dependencies. |
| [AI4S Research](https://github.com/ai4s-research) | Open Science Desktop, AI4S Skills, and an AI-for-science discovery catalog | Use the bundled AI4S Skills; use the catalog only for discovery | Organization projects have their own licenses. Verify each project directly. |
| [AI4S Skills](https://github.com/ai4s-research/ai4s-skills) | Exploration, literature survey, experiments, paper writing, integrity audit, and orchestration | Already fetched at a pinned commit by `scripts/dev/fetch-skills.sh`; do not clone again | MIT. Citation and figure quotas are workflow targets, not quality evidence. Scope them to each project. |
| [Scientific Agent Skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Broad scientific and data-analysis skill library | Install only a pinned, reviewed subset when a project needs it | Root is MIT, but some vendored skill directories have different terms. The upstream security report requires per-skill review. |
| [Academic Research Skills](https://github.com/Imbad0202/academic-research-skills) | Deep research, drafting, peer review, revision tracking, and end-to-end academic workflows | Do not bundle or install wholesale. Consider its revision/rebuttal ledger and evidence-first re-review concepts only after license review | CC-BY-NC-4.0. Large, Claude/Pi-coupled, network-capable, and mostly duplicative of existing workflows. |
| [PaperBanana](https://github.com/llmsresearch/paperbanana) | Academic diagrams, plots, critique, and iterative figure refinement | Optional isolated MCP service; do not copy its pipeline into the UI | Code is MIT. Reference figures have separate fair-use concerns. Generated plotting code must not run unsandboxed on the host. |
| [OpenDraft](https://github.com/federicodeponte/opendraft) | Source-grounded drafting, DOI checks, citation metadata, and document export | Optional isolated worker or MCP service; ingest only its artifacts and verification data | MIT. Database presence does not prove that a paper supports a claim; human review remains required. |
| [AI-Researcher](https://github.com/HKUDS/AI-Researcher) | Conceptual survey-to-experiment-to-manuscript workflow | Reference concepts only; do not integrate or copy code | No root license was found during review. Its unauthenticated command server and shell execution are unsuitable for this workbench. |
| [Awesome AI for Science](https://github.com/ai4s-research/awesome-ai-for-science) | Discovery catalog for future tools, datasets, and models | Link and independently revalidate candidates; do not vendor the catalog | MIT. Catalog metadata can become stale. |

## Recommended research workflow

1. Create or import one project per research question.
2. Record the objective, constraints, acceptance criteria, and intended evidence before execution.
3. Search literature through identifier-bearing sources such as Crossref, Semantic Scholar, arXiv, PubMed, and bioRxiv/medRxiv.
4. Save source metadata and retrieved material inside the project; never treat a generated citation as verified.
5. Develop analysis in scripts or notebooks with pinned environments and explicit input/output paths.
6. Label every reported number as measured, simulated, illustrative, or externally sourced.
7. Generate deterministic plots from data first. Use PaperBanana only when specialist illustration or critique adds value.
8. Run traceability, statistical-integrity, domain, and publication-figure reviews before drafting conclusions.
9. Use OpenDraft only as an optional first-draft/export stage after the evidence package exists.
10. Require human review for scientific interpretation, citation support, sensitive data, and publication.

## Initial capability set

Keep the first setup small:

- bundled AI4S workflow skills;
- first-party traceability, statistics, domain, large-file, publication-figure, and remote-compute reviews;
- built-in literature connectors;
- notebooks, artifact viewers, projects, history, and provenance;
- no additional K-Dense skills until a concrete project requires one;
- no PaperBanana or OpenDraft service until their capability is needed.

A useful first K-Dense review set, when needed, is `exploratory-data-analysis`, `statistical-analysis`, `statistical-power`, `experimental-design`, `scientific-visualization`, `scikit-learn`, `statsmodels`, `pymc`, `networkx`, and `uncertainty-and-units`. Confirm each exact upstream path, commit, effective license, dependencies, network domains, credential needs, and security status before installation.

## Optional integrations

### PaperBanana

Prefer its existing stdio MCP interface in a non-root container. Mount inputs read-only, expose one writable output directory, cap resources, keep TLS verification enabled, and retain command approval. Record the PaperBanana version, model/provider, prompt, inputs, outputs, iterations, and cost with each result.

Primary sources: [README](https://github.com/llmsresearch/paperbanana/blob/main/README.md), [package metadata](https://github.com/llmsresearch/paperbanana/blob/main/pyproject.toml), [MCP manifest](https://github.com/llmsresearch/paperbanana/blob/main/server.json), and [security policy](https://github.com/llmsresearch/paperbanana/blob/main/SECURITY.md).

### OpenDraft

Prefer a pinned release in an isolated `uv` environment. Expose it as a local job or MCP boundary and return bibliography metadata, verification reports, Markdown, LaTeX, DOCX, and PDF artifacts. Do not merge its agent orchestration or UI into this application.

Primary sources: [README](https://github.com/federicodeponte/opendraft/blob/master/README.md), [architecture](https://github.com/federicodeponte/opendraft/blob/master/docs/ARCHITECTURE.md), [package metadata](https://github.com/federicodeponte/opendraft/blob/master/engine/pyproject.toml), and [changelog](https://github.com/federicodeponte/opendraft/blob/master/CHANGELOG.md).

### Academic Research Skills

The repository shows substantial engineering work: structured research and review modes, tests, evaluations, bounded bibliographic clients, host allowlists, and explicit prompt-injection evaluation. It is not a simple prompt collection. However, its deep-research, paper-writing, citation, statistical, domain, figure, and full-pipeline capabilities substantially overlap this dashboard's bundled AI4S and first-party review skills. Its executable hooks and adapters are also coupled to Claude or Pi; outside Claude, its own Pi wrapper says write-scope enforcement becomes prompt-level rather than structural.

Do not add it to `scripts/dev/fetch-skills.sh` or install its whole pack. If revision support becomes a concrete requirement, independently implement a minimal first-party workflow based on reviewer-comment rows, exact manuscript anchors, status and rationale, nested commitment records, and evidence-first re-review. Keep this dashboard's own review and provenance contracts. Do not copy upstream text or code unless `CC-BY-NC-4.0` attribution, redistribution, modification, and non-commercial-use requirements are acceptable for the intended distribution.

Reviewed at commit `127ff85e4bbfcdd10b95040537b6c6bd7ad17aeb`. Primary sources: [license](https://github.com/Imbad0202/academic-research-skills/blob/127ff85e4bbfcdd10b95040537b6c6bd7ad17aeb/LICENSE), [revision tracking template](https://github.com/Imbad0202/academic-research-skills/blob/127ff85e4bbfcdd10b95040537b6c6bd7ad17aeb/academic-paper/templates/revision_tracking_template.md), [re-review protocol](https://github.com/Imbad0202/academic-research-skills/blob/127ff85e4bbfcdd10b95040537b6c6bd7ad17aeb/academic-paper-reviewer/references/re_review_mode_protocol.md), [Pi wrapper](https://github.com/Imbad0202/academic-research-skills/blob/127ff85e4bbfcdd10b95040537b6c6bd7ad17aeb/pi/wrapper.js), and [prompt-injection evaluation specification](https://github.com/Imbad0202/academic-research-skills/blob/127ff85e4bbfcdd10b95040537b6c6bd7ad17aeb/docs/design/2026-08-13-675-indirect-prompt-injection-behavior-eval-spec.md).

## Integration manifest

Before enabling any external connector or skill, record:

```text
name
upstream repository
version or commit
upstream path
license
required executables and packages
required network domains
required credentials
execution risk
security review date
allowed projects
```

## Safety boundaries

- Store API keys in the OS credential store or app-private provider configuration, never in a project `.env`, provenance, logs, exports, or git.
- Keep manual approval enabled for commands, deletion, dependency installation, networking, and remote execution.
- Treat downloaded papers, web pages, datasets, skills, and tool output as untrusted input.
- Run model-generated code in a restricted environment and inspect it before using its results.
- Do not disable TLS verification.
- Do not expose unauthenticated command servers.
- Verify DOI resolution and claim-level support separately.
- Do not redistribute third-party reference datasets or vendored skills without checking their effective licenses.
- Preserve exact tool versions, inputs, commands, environments, and outputs for reproducibility.

## Deferred work

No extra dashboard, orchestration engine, database, or skill registry is added now. Open Science Desktop already owns those concerns. Add an external integration only when a real research project needs it and a small end-to-end test can verify its value and safety.
