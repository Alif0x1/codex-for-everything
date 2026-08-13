---
name: codex-diagram-forge
description: Use when Codex should turn an English explanation, flow, architecture, or Mermaid source into a clear, editable diagram with validated source and shareable rendered artifacts.
---

# Codex Diagram Forge

Use this skill for architecture diagrams, process flows, system maps, decision trees, sequence diagrams, and other visual explanations. Mermaid is the source of truth; rendered artifacts are evidence that the diagram actually works.

## 1. Clarify the visual contract

Before authoring, identify:

- **Audience**: developer, operator, product team, executive, or end user.
- **Question**: what should the viewer understand or decide after looking at it?
- **Scope**: one flow, one system boundary, one user journey, or several diagrams.
- **Direction**: left-to-right for pipelines and processes; top-to-bottom for hierarchy and ownership; sequence diagrams for time-ordered messages.
- **Output**: source only, rendered SVG/PNG, editable Excalidraw when supported, or all available artifacts.

If the request is ambiguous but a safe interpretation is obvious, state the assumption and proceed. Ask one concise question only when the audience or scope would materially change the diagram.

## 2. Choose the smallest useful diagram

Prefer one readable diagram over an exhaustive graph. Keep the primary view to roughly 5–15 nodes. If the system needs more, split it into an overview and focused detail diagrams, then explain the split.

- Use `flowchart LR` for pipelines and handoffs.
- Use `flowchart TD` for hierarchy, ownership, or layered architecture.
- Use `sequenceDiagram` for request/response and event timing.
- Use `stateDiagram-v2` for lifecycle transitions.
- Use `erDiagram` for data relationships.
- Use `gantt` only for schedule or dependency timelines.

Do not force every concept into a flowchart. Choose the notation that reduces explanation. Keep node labels short; put nuance in edge labels or a nearby legend. Use stable IDs and avoid punctuation that makes Mermaid parsing fragile.

## 3. Author the Mermaid source

Write the `.mmd` source first. Apply these rules:

- One primary reading direction; avoid unnecessary crossing edges.
- Use subgraphs for meaningful boundaries such as browser, API, worker, database, or external provider.
- Label trust, ownership, protocol, or state transitions when they affect understanding.
- Distinguish user actions, system actions, data stores, and external systems with consistent shapes or class styles.
- Use explicit error, retry, timeout, and fallback paths when they are part of the real behavior.
- Do not invent services, data, metrics, or guarantees. Mark assumptions and unknowns in a note or legend.
- Keep sensitive values, credentials, customer data, and internal tokens out of diagram source and labels.

For architecture diagrams, show system boundaries and data direction. For user flows, show the user goal, decision points, success path, and meaningful failure paths. For sequence diagrams, include actors, messages, response/error paths, and timing only when it changes the decision.

## 4. Render with available Codex tools

Use the strongest available local renderer in this order:

1. A repository-provided diagram command or existing Mermaid renderer.
2. An available Codex browser control with a local, bundled renderer.
3. A project-approved Mermaid or diagram tool already present in dependencies.
4. Source-only delivery when no renderer is available.

Keep rendering offline when possible. Never add a CDN or download an unapproved dependency just to render a diagram. If a renderer is unavailable, deliver the valid `.mmd` and clearly say that SVG/PNG/Excalidraw could not be verified.

The normal artifact set is:

```text
<slug>.mmd          # editable source of truth
<slug>.svg          # crisp documentation artifact
<slug>.png          # preview for chat, issues, or READMEs
<slug>.excalidraw   # optional editable scene for supported flowcharts
```

Use a short kebab-case slug of no more than 40 characters. In a repository, default to a user-approved `diagrams/` directory; otherwise use a temporary directory such as `$TMPDIR/codex-diagrams/`. Do not create persistent artifacts in the repository unless the task calls for them.

## 5. Validate the diagram before delivery

Do not call a source file a finished diagram until it has been rendered or the renderer limitation has been reported. Check:

- Mermaid syntax parses without errors.
- The output is readable at normal document width and at a smaller preview size.
- Nodes and labels do not overlap or clip.
- Arrows have an unambiguous direction and labels are attached to the intended edge.
- The legend, title, and boundary labels explain non-obvious notation.
- The visual order matches the intended narrative.
- Error, retry, and external-system paths are not visually hidden.
- The diagram does not expose secrets or unapproved sensitive information.

For a rendered artifact, inspect the SVG/PNG with the image viewer when available. If the diagram is too dense, do not merely shrink the font; split the diagram, shorten labels, or remove detail that does not serve the stated question.

## 6. Excalidraw and round-trip rules

When the local renderer supports Mermaid-to-Excalidraw conversion, generate `.excalidraw` for flowcharts and verify that the scene opens or contains valid elements. Sequence, state, ER, and Gantt diagrams may render to SVG/PNG without being Excalidraw-editable; state that limitation instead of generating a misleading file.

Mermaid remains canonical. If a user edits the Excalidraw scene, preserve the edited scene for visual use; if they want future re-rendering from source, update the `.mmd` too. Do not overwrite a user-edited scene silently.

## 7. Iterate safely

When the user requests changes:

1. Restate the visual or semantic change in one sentence.
2. Edit the Mermaid source, not only the raster output.
3. Re-render every affected artifact.
4. Re-check syntax, readability, direction, and the changed relationship.
5. Show the updated preview and list the artifact paths.

Do not commit automatically. If the user asks for a commit, include only the diagram artifacts and related documentation, and use the repository’s Git workflow. Keep the source and rendered outputs synchronized.

## 8. Delivery format

Return:

1. The diagram’s purpose and audience.
2. The notation and layout choice.
3. Artifact paths, including which are editable.
4. Validation status: rendered, inspected, source-only, or blocked.
5. Any assumptions, unsupported diagram-type limitations, or sensitive-data exclusions.

For a complete render, say that the `.mmd` is the source of truth and that the `.svg`/`.png` are generated views. Mention Excalidraw editability only when it was actually generated and checked.

## Final preflight

- The diagram answers one clear question.
- The source is readable, valid, and preserved.
- Labels and edges are concise and unambiguous.
- Boundaries, ownership, data flow, and failure paths are represented where relevant.
- The output was rendered and visually inspected, or the limitation is explicit.
- Source, SVG, PNG, and optional Excalidraw artifacts are synchronized.
- No credentials, private data, invented facts, hidden network dependency, or automatic commit slipped into the workflow.
