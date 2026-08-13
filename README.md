# Codex for Everything

Codex-native engineering, design, delegation, verification, and delivery workflows adapted from WorldFlowAI's [Everything Claude Code](https://github.com/WorldFlowAI/everything-claude-code) collection.

This repository is intentionally Codex-first. Skills are the runtime surface. Role cards, playbooks, rules, contexts, scripts, tests, examples, and MCP templates support the workflow without registering Claude-only slash commands or event hooks.

## Install in Codex

From GitHub:

```bash
codex plugin marketplace add Alif0x1/codex-for-everything
codex plugin add codex-for-everything@codex-for-everything
```

From a local checkout:

```bash
codex plugin marketplace add .
codex plugin add codex-for-everything@codex-for-everything
```

Start a new Codex task after installation so the updated skill cache is loaded.

## Runtime skills

- `codex-workflow` — maps planning, TDD, review, verification, build-fix, learning, and checkpoints to Codex behavior
- `project-onboarding` — maps architecture, commands, data boundaries, and verification paths
- `agent-delegation` — bounded role-based parallel work and evidence merging
- `context-budget` — compact, lossless checkpoints and retrieval discipline
- `delivery-gate` — separates static checks from browser, migration, provider, and deployment proof
- `git-workflow` — safe staging, commit, push, and remote verification
- `backend-patterns` and `frontend-patterns` — production implementation patterns
- `codex-design-compass` — design read, calibrated three-dial scale, implementation loop, and visual preflight
- `codex-visual-forensics` — rendered design QA, evidence-backed findings, responsive review, and safe fix loop
- `codex-diagram-forge` — Mermaid-first diagrams with validated SVG/PNG output and optional Excalidraw editing
- `coding-standards` — maintainable TypeScript, JavaScript, React, and Node.js conventions
- `tdd-workflow` — test-first feature and bug-fix workflow
- `security-review` — auth, input, API, secret, payment, upload, and sensitive-data review
- `verification-loop` — build, types, lint, tests, security, and diff gates
- `eval-harness` — capability, regression, model, and human evaluation design
- `continuous-learning` — explicit, reviewable capture of validated reusable patterns
- `strategic-compact` — context checkpoints at logical task boundaries
- `clickhouse-io` — ClickHouse analytics patterns
- `project-guidelines-example` — project-specific guidance template

## Codex harness layout

```text
codex-for-everything/
├── .codex-plugin/plugin.json       # Codex runtime manifest
├── .agents/plugins/marketplace.json # Local Codex marketplace entry
├── plugins/codex-for-everything/skills/ # Runtime skills
├── agents/                          # Bounded role contracts
├── commands/                        # Codex workflow playbooks, not slash commands
├── rules/                           # Always-follow project guidance
├── hooks/                           # Codex boundary documentation; no Claude events
├── scripts/                         # Dependency-light deterministic utilities
├── tests/                           # Node and Python structural checks
├── contexts/                        # Development, review, and research context
├── examples/                        # Project AGENTS and contract templates
├── mcp-configs/                     # Credential-free optional MCP templates
└── marketplace.json                 # Root marketplace parity metadata
```

## Operating model

1. Onboard with `project-onboarding`.
2. State the objective, design read, constraints, and acceptance checks.
3. Use TDD and bounded delegation where useful.
4. Implement with existing project primitives and provider boundaries.
5. Run focused checks, then `delivery-gate` and `verification-loop`.
6. Review the diff and report static, browser, live-service, migration, and deployment evidence separately.

## Validation

The repository has no runtime dependencies:

```bash
npm test
npm run validate
```

The checks validate marketplace parity, plugin metadata, all 20 skills, Claude-runtime exclusion, checkpoint generation, and the repository structure. Codex plugin and skill validators can be run when the local Codex tooling is available.

The visual review workflow is a Codex-native adaptation of [gstack's design-review skill](https://github.com/garrytan/gstack/blob/main/design-review/SKILL.md), with Codex browser evidence, local screenshot handling, and explicit authorization boundaries.

The diagram workflow is a Codex-native adaptation of [gstack's diagram skill](https://github.com/garrytan/gstack/tree/main/diagram), with Mermaid as the source of truth, renderer capability checks, and safe local artifact handling.

## Boundaries

- No credentials, tokens, customer data, or provider secrets belong in this repository.
- `hooks/hooks.json` is documentation-only; Codex does not load Claude event hooks from it.
- `commands/` contains reusable playbooks and is not registered as Claude slash commands.
- Static build or test success does not prove authenticated browser behavior, migrations, email, webhooks, live providers, or production deployment.
