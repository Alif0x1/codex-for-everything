---
name: strategic-compact
description: Use for compaction checkpoints at logical Codex task boundaries.
---

# Strategic Compact Skill

Suggests context compaction at strategic points in a Codex task rather than relying on arbitrary auto-compaction.

## Why Strategic Compaction?

Auto-compaction triggers at arbitrary points:
- Often mid-task, losing important context
- No awareness of logical task boundaries
- Can interrupt complex multi-step operations

Strategic compaction at logical boundaries:
- **After exploration, before execution** - Compact research context, keep implementation plan
- **After completing a milestone** - Fresh start for next phase
- **Before major context shifts** - Clear exploration context before different task

## Codex workflow

Use a compaction checkpoint when one of these boundaries is reached:

- Exploration is complete and implementation is about to begin.
- A milestone is verified and the next phase is independent.
- The task is switching from investigation to review or handoff.

Before compacting, preserve the current objective, decisions, changed files, verification results, and next action in the task context. Do not compact during a tightly coupled implementation or while actively resolving an error.

## Best Practices

1. **Compact after planning** - Once plan is finalized, compact to start fresh
2. **Compact after debugging** - Clear error-resolution context before continuing
3. **Don't compact mid-implementation** - Preserve context for related changes
4. **Use judgment** - A checkpoint is a suggestion, not a requirement

## Related

- [The Longform Guide](https://x.com/affaanmustafa/status/2014040193557471352) - Token optimization section
- Codex task context and project notes - For state that survives compaction
