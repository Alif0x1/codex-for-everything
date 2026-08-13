---
name: codex-visual-forensics
description: Use when Codex should audit a rendered website or app for visual hierarchy, consistency, responsive behavior, accessibility, interaction quality, performance feel, or AI-generated design patterns, then produce evidence-backed findings and safe fixes.
---

# Codex Visual Forensics

Use this skill for rendered design QA and visual polish. Treat the browser output as evidence: observe first, record specific findings, and only edit after the user asks for fixes or the task explicitly includes implementation.

## 1. Establish scope and evidence

Choose the smallest mode that answers the request:

- **Quick**: homepage or target route plus one key route; first impression and abbreviated checklist.
- **Full**: 5–8 representative routes, responsive captures, interaction sampling, and cross-page consistency.
- **Deep**: 10–15 routes and the important user flows for a pre-launch or major redesign review.
- **Diff-aware**: on a feature branch, inspect `git diff main...HEAD --name-only`, map changed files to affected routes, and review those routes first.
- **Regression**: compare against a supplied or previous baseline; report new, resolved, and changed findings.

Confirm the target URL, local app command, authentication state, viewport sizes, and review mode from the task. Do not guess credentials or bypass an auth boundary. If browser control is unavailable, perform a static review only and label browser evidence as unavailable.

Save screenshots and reports in a user-approved location. Default to a temporary directory such as `$TMPDIR/codex-visual-forensics/<repo>-<timestamp>`; do not create persistent repo artifacts unless requested.

Codex boundary: do not run telemetry, external uploads, Claude hooks, hidden background services, or automatic commits. Use available browser controls and `view_image` for local screenshots when present.

## 2. Capture the baseline before forming opinions

For each page in scope, collect the evidence that is available:

1. Desktop screenshot or browser view.
2. Mobile and tablet screenshots or responsive browser views.
3. Console errors, failed requests, and obvious layout shifts.
4. A short interaction sample: navigation, primary action, form or search, loading, error, empty, and success states where relevant.
5. Rendered values for font families, colors, heading levels, spacing rhythm, visible labels, and interactive target sizes. A 44px minimum touch target is a useful default; note exceptions with context.

Do not claim pixel fidelity, browser coverage, or performance proof without the corresponding evidence. Record missing evidence as a limitation instead of filling the gap with assumptions.

## 3. Write the first impression

Before inspecting implementation details, write in first person and name concrete elements:

- “The page communicates …”
- “I notice …”
- “My eye goes first to …, then …, then …”
- “The page feels … because …”

Run the page-area test: can each major region be named in roughly two seconds? Run the trunk test: can a new user identify the product, current page, major sections, available actions, location in the hierarchy, and search path without guessing?

## 4. Classify the surface

Classify each route as **marketing/landing**, **app UI**, or **hybrid** before applying design rules.

- **Marketing/landing**: one clear brand and message, one visual anchor, a focused CTA group, purposeful section rhythm, and composition before decoration.
- **App UI**: calm surface hierarchy, readable density, clear workspace/navigation/context separation, visible status, and cards only when a card is the interaction.
- **Hybrid**: use landing rules for brand and marketing sections, app rules for functional sections.

Use the existing product, brand, accessibility needs, and design system as the authority. Flag generic patterns as evidence-backed risks, not as automatic failures.

## 5. Audit ten dimensions

Review each page and assign findings an impact: **high**, **medium**, **polish**, or **deferred**. Keep the review to approximately 5–10 strong findings rather than a long list of vague preferences.

1. **Hierarchy and composition** — focal point, scanning order, section purpose, whitespace, above-the-fold clarity, and competing CTAs.
2. **Typography** — family choice, readable measure, heading progression, line wrapping, weight, labels, and contrast.
3. **Spacing and layout** — tokenized rhythm, alignment, grid behavior, overflow, content width, and intentional density.
4. **Color and material** — palette coherence, contrast, accent discipline, borders, shadows, radius language, and theme transitions.
5. **Interaction states** — hover, focus, active, disabled, loading, empty, error, success, feedback, and keyboard operation.
6. **Responsive behavior** — mobile prioritization, touch affordances, navigation, readable type, composition changes, and tablet transitions.
7. **Content quality** — plain-language labels, useful headings, concise copy, visible costs or limitations, and no invented claims.
8. **Motion and performance feel** — motion that explains hierarchy or state, reduced-motion behavior, layout stability, and perceived latency.
9. **Cross-page consistency** — navigation, footer, spacing, buttons, forms, icon family, tone, and component reuse.
10. **Template or AI-slop signals** — default gradients, ornamental icon circles, symmetrical feature grids, centered-everything layouts, decorative blobs, repeated card mosaics, generic hero copy, or motion without a job.

For every finding, use this record:

```text
FINDING-001 · HIGH · Typography · /route
Evidence: screenshot or browser observation
I notice: specific visible issue
Impact: who is blocked, slowed, or misled
I think: why this matters for the product goal
What if: smallest practical improvement
Verification: exact after-state or interaction to re-check
```

Use “I notice”, “I wonder”, “What if”, and “I think … because …” to keep critique observable and actionable. Every high or medium finding needs at least one concrete evidence reference.

## 6. Apply litmus checks

Answer yes or no and explain any no:

- Is the product or brand unmistakable in the first viewport?
- Is there one strong visual anchor?
- Can the page be understood by scanning headings only?
- Does each section have one job?
- Are cards necessary, or are they decorative containers?
- Does motion improve hierarchy, feedback, or atmosphere?
- Would the interface still feel intentional with decorative shadows removed?

Treat these as decision aids, not a replacement for context. A deliberate exception is healthy when it serves the user or brand.

## 7. Score and compare

Give a baseline letter grade from A–F for each dimension and one overall design grade. Give AI-slop signals a separate grade and short verdict. A high-impact finding lowers a category more than a medium finding; polish findings remain visible without distorting the overall score.

If a baseline exists, include a compact regression table:

| Area | Previous | Current | Change | Evidence |
| --- | --- | --- | --- | --- |
| Hierarchy | B | C | Worse | FINDING-003 |

State what was not tested. Scores are heuristics for prioritization, not measured user research or Core Web Vitals.

## 8. Fix loop when authorized

When the task includes fixes:

1. Fix high-impact findings first, then medium, then polish.
2. Map the rendered finding to its responsible route, component, token, or style file only after the observation is recorded.
3. Change the smallest directly related surface. Prefer token or CSS changes over structural refactors.
4. Preserve routes, permissions, persistence, content, analytics boundaries, and existing component ownership.
5. Re-run the affected interaction and capture an after screenshot at the same viewport. Check console errors and responsive behavior again.
6. Classify the result as `verified`, `best-effort`, `reverted`, or `deferred`. If a regression appears, stop and report it; do not silently undo unrelated user work.

Do not bundle unrelated cleanup into a design fix. Do not commit automatically. If the user explicitly asks for commits, keep the commit scope aligned with the findings and use the repository’s Git workflow.

After five fixes, or after any regression, pause for a risk check. If the work has expanded into component behavior, data flow, or unrelated files, show the user what changed and ask whether to continue.

## 9. Report format

Return a concise report with:

1. Scope, mode, routes, viewport sizes, and evidence limitations.
2. First impression and surface classification.
3. Extracted design-system observations.
4. Baseline scores and litmus-check results.
5. Findings ordered by impact, with evidence and specific fixes.
6. Quick wins: 3–5 high-value changes that are small and low-risk.
7. Fix status, changed files, after-evidence, and regression notes when fixes were authorized.
8. Separate static, browser, accessibility, performance, provider, and deployment verification results.

End with a one-line handoff summary such as: `Design review found N issues; M were fixed and verified. Overall grade: B → A.` Never claim a result that the available evidence does not support.

## 10. Final preflight

- Findings are specific, scoped, and tied to user goals.
- Screenshots or browser observations back the important findings.
- Mobile and keyboard behavior are considered where applicable.
- Contrast, visible labels, focus, reduced motion, and touch targets are checked.
- The existing design system is extended rather than replaced casually.
- No generic AI pattern was flagged without explaining why it harms this product.
- Authorized fixes are minimal, re-tested, and reported separately from static checks.
