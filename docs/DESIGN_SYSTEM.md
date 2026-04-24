---
title: "Design System | Agentic SDLC Personas"
description: "Canonical visual design system: tokens, typography, components, iconography and cluster color mapping for the paulasilvatech Agentic SDLC Personas framework."
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-23"
version: "1.0.0"
status: "approved"
locale: "en"
tags: ["design-system", "tokens", "typography", "iconography", "accessibility"]
---

# paulasilvatech Design System

> Single source of truth for the visual language used across the Agentic SDLC Personas site, persona kits, diagrams and any derivative material. Any UI that deviates is either corrected or rejected in review.

[Back to docs index](./en/index.md) · [Style Guide](./STYLE_GUIDE.md) · [Contributing](../CONTRIBUTING.md)

## Change log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-04-23 | Paula Silva | Initial design system extracted from `site/public/tokens.css` and `site/src/styles/global.css` |

## Table of contents

1. [Principles](#1-principles)
2. [Color tokens](#2-color-tokens)
3. [Cluster color mapping](#3-cluster-color-mapping)
4. [Typography](#4-typography)
5. [Spacing, radius, elevation](#5-spacing-radius-elevation)
6. [Components](#6-components)
7. [Iconography](#7-iconography)
8. [Dark mode](#8-dark-mode)
9. [Accessibility](#9-accessibility)
10. [Implementation](#10-implementation)

---

## 1. Principles

1. **Editorial, not decorative.** The system borrows from long-form publishing: generous whitespace, a single measure for reading, neutral surfaces, accent color used as signal.
2. **Four-square brand mark.** Red / Green / Blue / Yellow in a 2×2 grid. The four colors are functional — each maps to a persona cluster.
3. **Accent as semantic.** Color always carries meaning (cluster, status, emphasis). Never decorative.
4. **Light first, dark parity.** Light mode is the default, dark mode must match on contrast, never invert brand hues.
5. **System fonts when Inter is not loaded.** Typography degrades gracefully; brand is not held hostage by the network.

---

## 2. Color tokens

All tokens are defined in [`site/public/tokens.css`](../site/public/tokens.css) and consumed via CSS custom properties. Do **not** hardcode hex values in components.

### 2.1 Brand ramps

| Token | Light | Dark-safe | Usage |
|-------|-------|-----------|-------|
| `--c-red-50`    | `#FFF0EB` | same | Card background (product / security cluster) |
| `--c-red-500`   | `#F25022` | same | Accent / icon stroke / brand square |
| `--c-red-700`   | `#B33816` | same | Gradient stop, hover, AA text on white |
| `--c-green-50`  | `#F1F8E3` | same | Card background (build / quality cluster) |
| `--c-green-500` | `#7FBA00` | same | Accent |
| `--c-green-700` | `#5A8500` | same | Hover / AA text on white |
| `--c-blue-50`   | `#E5F6FD` | same | Card background (operations cluster) |
| `--c-blue-500`  | `#00A4EF` | same | Accent |
| `--c-blue-700`  | `#0076AC` | same | Hover / AA text on white |
| `--c-yellow-50` | `#FFF7E0` | same | Card background (architecture / data cluster) |
| `--c-yellow-500`| `#FFB900` | same | Accent / "spark" motif on persona icons |
| `--c-yellow-700`| `#B88500` | same | Hover / AA text on white |

### 2.2 Neutral surfaces

| Token     | Light     | Dark      | Role |
|-----------|-----------|-----------|------|
| `--ink`   | `#1A1A1A` | `#F0F0F0` | Body text |
| `--ink-2` | `#3A3A3A` | `#C7C7C2` | Secondary text |
| `--ink-3` | `#737373` | `#A8A8A4` | Metadata, captions |
| `--paper` | `#FFFFFF` | `#1C1C1A` | Card / content surface |
| `--bg`    | `#F7F7F5` | `#141414` | Page background |
| `--bg-alt`| `#ECECE8` | `#242420` | Alternate surface (enablement cluster, callouts) |
| `--rule`  | `#E5E5E0` | `#2E2E2A` | Dividers, borders |
| `--rule-2`| `#CECEC7` | `#3A3A36` | Stronger borders, inputs |

---

## 3. Cluster color mapping

Every persona belongs to exactly one cluster. The cluster determines icon accent, card tint and navigation grouping. This mapping is duplicated in [`site/src/lib/personas.ts`](../site/src/lib/personas.ts) and must stay in sync with this table.

| Cluster | Accent token | Bg token | Personas |
|---------|--------------|----------|----------|
| **Product & business** | `--c-red-500` | `--c-red-50` | 01 Product Owner · 02 Business Manager · 03 Requirements Engineer · 08 UX Designer · 18 InfoSec · 19 Compliance Auditor |
| **Architecture & data** | `--c-yellow-500` | `--c-yellow-50` | 04 Enterprise Architect · 05 Software Architect · 06 Technical Lead · 15 Data Engineer · 16 ML/AI Engineer · 21 DBA |
| **Build & quality** | `--c-green-500` | `--c-green-50` | 13 Platform Engineer · 14 QA Engineer · 17 UAT Analyst · 22 Developer |
| **Operations** | `--c-blue-500` | `--c-blue-50` | 11 DevOps · 12 Release Manager · 20 SRE |
| **Enablement** | `--ink-2` | `--bg-alt` | 07 Engineering Manager · 09 Scrum Master · 10 Project Manager · 23 Technical Writer · 24 DevRel |

---

## 4. Typography

| Role | Font | Weight | Size | Line-height | Tracking |
|------|------|--------|------|-------------|----------|
| Display H1 | Inter | 500 | 64 / 72 px | 1.05 | -0.02em |
| H2 | Inter | 500 | 40 / 48 px | 1.1 | -0.02em |
| H3 | Inter | 500 | 28 / 32 px | 1.2 | -0.02em |
| Body | Inter | 400 | 17 px | 1.62 | -0.003em |
| Caption / meta | Inter | 500 | 14 px | 1.5 | 0 |
| Eyebrow | JetBrains Mono | 500 | 12 px | 1.3 | 0.14em uppercase |
| Code / pre | JetBrains Mono | 400-500 | 15 px | 1.55 | 0 |

Reading measure is capped at `--measure: 680px`. Paragraphs never exceed it.

Stacks (graceful fallback):
- Sans: `'Inter', -apple-system, BlinkMacSystemFont, Helvetica, sans-serif`
- Mono: `'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace`

---

## 5. Spacing, radius, elevation

Spacing scale (rem): `0.25 · 0.5 · 0.75 · 1 · 1.5 · 2 · 3 · 4 · 6 · 8 · 12`.

Radius:
- `4px` — inline chips, code inline
- `8px` — inputs, small cards
- `10px` — persona icon tiles, medium cards
- `16px` — hero / feature cards
- `999px` — pills

Elevation: flat by default. Use a 1px border from `--rule` or `--rule-2` before reaching for a shadow. Shadow (when necessary): `0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)`.

---

## 6. Components

### 6.1 Brand mark

The 2×2 four-square logo. Implemented as `.brand__squares` with child `i.r`, `i.g`, `i.b`, `i.y`. 14×14 px squares, 2px gap. Colors pulled from brand tokens — never redefined inline.

### 6.2 Eyebrow

Short uppercase label preceding a section title. Class `.eyebrow`, optional leading `.dot` colored by cluster accent.

### 6.3 Button

```
.btn            /* base */
.btn--primary   /* ink background, paper text */
.btn--ghost     /* transparent, rule border */
```

Min target size: 44×44 px. Gap between icon and label: 10 px.

### 6.4 Persona card

- Surface: `--paper` on `--bg`
- Border: 1px `--rule`
- Radius: 16 px
- Header strip: 6px height in cluster accent
- Icon tile: 64×64 px, radius 10 px, background `--c-{cluster}-50`, SVG icon inside
- Title: H3, `--ink`
- Tagline: body, `--ink-2`, max 2 lines

---

## 7. Iconography

### 7.1 Persona icons

- Location: [`site/public/icons/personas/`](../site/public/icons/personas/)
- Naming: `NN-kebab-name.svg` matching the persona `slug` in `personas.ts` (e.g. `01-product-owner.svg`, `16-ml-ai-engineer.svg`).
- Format: SVG, `viewBox="0 0 64 64"`, rounded frame `rx="10"`.
- Fill: linear gradient from `--c-{cluster}-500` (top) to `--c-{cluster}-700` (bottom), ID per icon.
- Spark detail: a small `--c-yellow-500` triangle or chevron signifies the "agent" motif. Optional for enablement cluster.
- Background plate: `--c-{cluster}-50` tile with 1px `--c-{cluster}-500` stroke at 25% opacity.
- Accessibility: every icon includes `<title>` and `<desc>`. `role="img"` on `<svg>`.

All 24 icons are generated to meet the contract above; any new persona must ship its icon in the same PR.

### 7.2 UI icons

Use [Lucide](https://lucide.dev/) at 1.5px stroke, 20 / 24 px. Never recolor Lucide strokes outside of `--ink`, `--ink-2`, `--ink-3`, or cluster accents.

---

## 8. Dark mode

Dark mode is activated via `[data-theme="dark"]` on `<html>`. Brand ramps do **not** change; only neutrals invert. Icons read correctly against `--paper` in both modes because gradients use mid-tones of the ramps.

Contrast targets (WCAG 2.2):
- Body text vs background: ≥ 7:1 (AAA)
- Secondary text: ≥ 4.5:1 (AA)
- Non-text UI (borders, icons): ≥ 3:1

---

## 9. Accessibility

1. Focus-visible is always present. `outline: 2px solid var(--c-blue-500); outline-offset: 2px;`
2. Color is never the only channel. Cluster is also communicated through position, icon glyph and text.
3. Every persona icon includes `<title>` and `<desc>`.
4. `prefers-reduced-motion` disables all transitions longer than 120 ms.
5. Minimum touch target: 44×44 px.
6. Link underline is persistent in body text; only headings and nav may rely on weight + color.

---

## 10. Implementation

Single source of truth:

- **Tokens** — [`site/public/tokens.css`](../site/public/tokens.css)
- **Global styles** — [`site/src/styles/global.css`](../site/src/styles/global.css)
- **Persona data & cluster map** — [`site/src/lib/personas.ts`](../site/src/lib/personas.ts)
- **Persona icons** — [`site/public/icons/personas/`](../site/public/icons/personas/)

Rules:

1. Never hardcode hex values in components or in SVG files committed under `site/`. Use tokens.
2. If a token is missing, add it to `tokens.css` and this document in the same PR.
3. Any new component must list its tokens and class names in section 6 before merging.
4. Persona icons must be 64×64 and follow the gradient/spark contract in section 7.1.
5. This document and `tokens.css` are versioned together. A breaking token rename is a major version bump here.

---

_Maintained by Paula Silva. Contributions follow the [Style Guide](./STYLE_GUIDE.md) and [Contributing](../CONTRIBUTING.md) guidelines._
