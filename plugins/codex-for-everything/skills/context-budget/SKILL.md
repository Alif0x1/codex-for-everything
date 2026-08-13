---
name: context-budget
description: Use when a Codex task is large, multi-phase, or approaching context pressure and needs compact, lossless checkpoints.
---

# Context budget

Keep the context useful by preserving decisions and discarding repetition.

## Checkpoint before compaction

Record the objective, current phase, decisions, changed files, checks and results, open risks, and next action. Use `node scripts/codex/checkpoint.mjs` when a durable file is appropriate.

## Retrieval discipline

- Search narrow paths first and exclude generated directories.
- Read the smallest relevant file ranges before broad scans.
- Keep raw logs out of the final context after extracting the actionable error.
- Summarize repeated tool output once; preserve exact commands and failure text only when needed.

Do not compact during tightly coupled implementation or while actively resolving a first error.
