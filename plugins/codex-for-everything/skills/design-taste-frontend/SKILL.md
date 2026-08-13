---
name: design-taste-frontend
description: Use for frontend landing pages, portfolios, and redesigns when Codex needs a deliberate design direction, calibrated variance, restrained motion, and an anti-template preflight.
---

# Codex Design Taste

Use this skill for visual frontend work. It is intentionally compact and Codex-native: inspect the existing product first, make design decisions explicit, implement with the project’s stack, and verify the rendered result.

## 1. Design read

Before editing, state one line:

> Reading this as: `<page kind>` for `<audience>`, with a `<vibe>` language, using `<design system or aesthetic>`.

Infer from the brief, existing UI, brand assets, audience, accessibility needs, and referenced products. Ask one concise question only when two plausible directions would materially change the result. Otherwise proceed with an explicit assumption.

For a redesign, audit the current route, layout ownership, component primitives, tokens, responsive behavior, and interaction states before changing them. Preserve routes, permissions, persistence, content, and working behavior unless the user asked to change them.

## 2. Design scale

Set these exact variables before implementation. Values range from 1 to 10:

- `DESIGN_VARIANCE`: 1 = symmetrical and restrained; 10 = highly asymmetric and expressive.
- `MOTION_INTENSITY`: 1 = static; 10 = cinematic or physics-heavy.
- `VISUAL_DENSITY`: 1 = spacious; 10 = information-dense.

Codex default: `DESIGN_VARIANCE: 6`, `MOTION_INTENSITY: 4`, `VISUAL_DENSITY: 4`.

The Codex default favors clear hierarchy, production-safe motion, and maintainable composition. Override it from the brief:

| Direction | Variance | Motion | Density |
| --- | ---: | ---: | ---: |
| Calm, editorial, Linear-like | 5 | 3 | 3 |
| Mainstream SaaS landing | 6 | 4 | 4 |
| Premium consumer | 7 | 5 | 3 |
| Agency, experimental, Awwwards | 9 | 7 | 3 |
| Developer portfolio | 6 | 4 | 4 |
| Trust-first or accessibility-critical | 3 | 2 | 5 |
| Redesign, preserve | existing | existing | existing |
| Redesign, overhaul | existing + 2 | existing + 2 | existing |

Use the variables as constraints, not decoration. High variance must change composition; high motion must communicate hierarchy, narrative, feedback, or state; high density must improve scanning rather than add cards.

## 3. Foundation selection

Inspect `package.json`, existing tokens, and current component libraries before importing anything. Use one design system per surface:

- Shopify admin: Polaris.
- Microsoft enterprise: Fluent UI.
- IBM analytics: Carbon.
- GitHub-style developer surface: Primer.
- Public-sector: GOV.UK Frontend or USWDS.
- Existing Tailwind product: its current token and component layer.
- No established system: native CSS/Tailwind with a small documented token set.

Do not recreate an official system’s components in ad hoc CSS. Do not add a library without checking the dependency and using the repository’s package manager.

## 4. Visual rules

### Typography

- Choose a readable sans display family by default; use a serif only when the brief or brand genuinely calls for editorial, luxury, heritage, or publication character.
- Keep one type family or a deliberate, documented pairing. Do not mix a random serif word into a sans headline.
- Headline: short, high-contrast, and usually no more than two lines at desktop.
- Body: readable measure, approximately 55–75 characters per line.
- If italic display text contains `y`, `g`, `j`, `p`, or `q`, reserve descender clearance with relaxed leading and bottom padding.

### Color and material

- Use one base palette and no more than one primary accent unless the existing brand requires more.
- Avoid automatic AI-purple gradients, random neon glows, and black shadows on light surfaces.
- Lock the accent across the whole page. Validate text/button contrast to WCAG AA.
- Use cards only when elevation communicates hierarchy. Prefer spacing, borders, or dividers for related content.
- Choose one radius language and apply it consistently.

### Layout

- At `DESIGN_VARIANCE > 4`, avoid a centered hero by default. Prefer a split, left-aligned, asymmetric, or visual-led composition unless the message is intentionally a manifesto.
- Use CSS Grid for multi-column layouts and declare the mobile collapse in the same component.
- Do not repeat the same image/text zigzag more than twice in a row.
- Vary section composition deliberately: full-width visual, split, editorial stack, grid, or focused interaction. Do not make every section a card grid.
- Limit small uppercase eyebrows to approximately one per three sections. Headlines should carry hierarchy without labels everywhere.
- Keep one page theme. Do not alternate unrelated light and dark sections without an explicit narrative reason.

### Content and states

- Default section shape: headline ≤ 8 words, supporting copy ≤ 25 words, and one visual or CTA.
- Never invent precise metrics, product claims, customer logos, or technical specifications. Mark mock data clearly.
- Implement loading, empty, error, hover, focus, active, and success states for interactive UI.
- Use real product screenshots, approved assets, or generated assets when a visual is essential. Do not build fake screenshots from decorative rectangles.

## 5. Motion and performance

Only animate when the motion communicates hierarchy, storytelling, feedback, or state change. If the selected motion cannot be implemented reliably, lower `MOTION_INTENSITY` rather than shipping partial effects.

- Respect `prefers-reduced-motion`; provide a static equivalent.
- Keep continuous pointer/scroll values out of React state. Use the project’s existing motion primitive or CSS where appropriate.
- Keep interactive motion local to a client component in Next.js. Keep static composition server-rendered where possible.
- Avoid perpetual animation on informational content, layout shifts, and expensive blur/filter stacks.
- Verify responsive behavior, keyboard focus, and Core Web Vitals-sensitive surfaces.

## 6. Codex implementation loop

1. Inspect route ownership, existing components, tokens, assets, and package dependencies.
2. State the design read and the three scale values.
3. Define the smallest component/token changes that satisfy the brief.
4. Implement with existing primitives before creating new ones.
5. Test functional states and responsive breakpoints.
6. Inspect a rendered screenshot or browser view when available; use `view_image` for local screenshots.
7. Run the project’s focused checks and review the diff for accidental scope expansion.

For visual QA, compare at least five concrete points: copy, layout, type scale, palette, spacing, asset treatment, responsive behavior, motion, and interaction states. Report mismatches instead of claiming pixel fidelity without evidence.

## 7. Preflight

Before handoff, confirm:

- Design read and scale are explicit.
- Existing routes, permissions, persistence, and adjacent surfaces remain intact.
- Typography, accent, radius, theme, and icon family are consistent.
- No default hero, bento, gradient, eyebrow, or card-grid pattern slipped in without justification.
- Mobile collapse, focus, contrast, reduced motion, loading, empty, and error states are covered.
- Assets are real or clearly marked placeholders.
- Build, types, lint, tests, and visual/browser checks are reported separately.
