# Verification playbook

Run the repository’s actual checks in layers:

1. Focused tests for changed behavior.
2. Types and lint.
3. Build.
4. Full tests and coverage when configured.
5. Secret/dependency/security checks.
6. Diff review.
7. Browser, migration, live-provider, and deployment checks when applicable.

Report each layer separately. Static success is not runtime proof.
