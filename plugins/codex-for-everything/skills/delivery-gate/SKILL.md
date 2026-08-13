---
name: delivery-gate
description: Use before handoff, commit, release, or deployment to separate static checks from runtime and external-service proof.
---

# Delivery gate

Use a layered evidence report:

1. Focused tests for changed behavior.
2. Typecheck, lint, build, and full tests where configured.
3. Security, dependency, and diff review.
4. Browser, mobile, migration, email, webhook, provider, deployment, or production checks when applicable.

Mark each item `PASS`, `FAIL`, `NOT RUN`, or `NOT APPLICABLE` with the command or evidence source. Never turn a build pass into a claim that an authenticated or external workflow works.

Before delivery, check scope, secrets, generated files, migrations, tenant boundaries, accessibility, and rollback/recovery implications.
