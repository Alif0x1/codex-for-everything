---
name: project-onboarding
description: Use at the start of work in an unfamiliar repository to map architecture, commands, data boundaries, and verification paths.
---

# Project onboarding

Start with a small map, not a broad dump:

- Locate the package manifest, application entrypoints, route/layout ownership, tests, and deployment configuration.
- Identify package manager and documented commands.
- Trace auth, tenancy, persistence, migrations, queues, and external providers.
- Inspect project-local `AGENTS.md`, README, and relevant config.
- Run the cheapest health check that proves the repository is runnable.

Return observed facts, inferred risks, likely change surfaces, and the next focused check. Do not modify code during onboarding unless explicitly asked.
