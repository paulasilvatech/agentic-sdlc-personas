---
title: "paulasilvatech Design System"
description: "Complete visual and editorial design system for all content and code outputs by Paula Silva, covering tokens, typography, color, layout, components, and format rules across decks, sites, docs, diagrams, and media."
author: "Paula Silva, AI-Native Software Engineer"
github: "@paulanunes85 | @paulasilvatech"
site: "agenticdevops.platform.com"
linkedin: "https://www.linkedin.com/in/paulanunes/"
date: "2026-04-22"
version: "1.0.0"
status: "approved"
locale: "en"
tags: ["design-system", "tokens", "typography", "brand", "paulasilvatech", "agentic-devops"]
---

# paulasilvatech Design System

> A single source of truth for every pixel, word, and component across all formats: decks, sites, playbooks, diagrams, landing pages, social media, and code outputs.

## Change Log

| Version | Date       | Author      | Changes         |
|---------|------------|-------------|-----------------|
| 1.0.0   | 2026-04-22 | Paula Silva | Initial version, extracted from Context Platform Stack showcase |

## Table of Contents

- [1. Brand Identity](#1-brand-identity)
- [2. Color Tokens](#2-color-tokens)
- [3. Typography](#3-typography)
- [4. Spacing and Layout](#4-spacing-and-layout)
- [5. Components](#5-components)
- [6. Layer Color Mapping](#6-layer-color-mapping)
- [7. Dark Mode](#7-dark-mode)
- [8. Format Rules by Output Type](#8-format-rules-by-output-type)
- [9. Editorial Standards](#9-editorial-standards)
- [10. File Naming and Versioning](#10-file-naming-and-versioning)
- [References](#references)

---

## 1. Brand Identity

Paula Silva is an AI-Native Software Engineer and Global Black Belt at Microsoft Americas, pioneering software development with AI and Agentic DevOps.

### Brand Statement

**"Pioneering software development with AI and Agentic DevOps"**

### Brand Mark

The four-square logo is the primary brand mark. It is a 2x2 grid of colored squares in the four core palette colors: Red (top-left), Green (top-right), Blue (bottom-left), Yellow (bottom-right). Gap between squares: 2px. Square size: 14x14px at standard scale.

```
[R][G]
[B][Y]
```

Rendered in HTML:

```css
.brand__squares {
  display: grid;
  grid-template-columns: 14px 14px;
  grid-template-rows: 14px 14px;
  gap: 2px;
}
```

### Author Attribution

All materials must include one of these attribution lines:

- **Standard:** `Paula Silva, AI-Native Software Engineer`
- **Full:** `Paula Silva, AI-Native Software Engineer | Global Black Belt, Microsoft Americas`
- **Compact (header/footer):** `@paulasilvatech`

### Contact and Links

| Channel  | Value |
|----------|-------|
| GitHub   | [@paulanunes85](https://github.com/paulanunes85) |
| GitHub   | [@paulasilvatech](https://github.com/paulasilvatech) |
| LinkedIn | [linkedin.com/in/paulanunes](https://www.linkedin.com/in/paulanunes/) |
| Site     | [agenticdevops.platform.com](https://agenticdevops.platform.com) |
| Email    | paulasilva@microsoft.com |

---

## 2. Color Tokens

All colors are defined as CSS custom properties (design tokens) on `:root`. Always use the token names in code, never raw hex values directly in component styles.

### Core Palette (4-color system)

These four colors are the visual spine of the entire system. They map to the four layers of the Context Platform Stack and repeat across every format.

| Token | Hex | Usage |
|-------|-----|-------|
| `--c-red-500`    | `#F25022` | Intent layer, alerts, primary accent |
| `--c-red-700`    | `#B33816` | Red hover state, dark mode red |
| `--c-red-50`     | `#FFF0EB` | Red tint backgrounds |
| `--c-green-500`  | `#7FBA00` | Platform layer, success states |
| `--c-green-700`  | `#5A8500` | Green hover state |
| `--c-green-50`   | `#F1F8E3` | Green tint backgrounds |
| `--c-blue-500`   | `#00A4EF` | Infra layer, links, primary brand |
| `--c-blue-700`   | `#0076AC` | Blue hover state |
| `--c-blue-50`    | `#E5F6FD` | Blue tint backgrounds |
| `--c-yellow-500` | `#FFB900` | Context layer, warnings, highlights |
| `--c-yellow-700` | `#B88500` | Yellow hover state |
| `--c-yellow-50`  | `#FFF7E0` | Yellow tint backgrounds |

Extended Microsoft brand:

| Token | Hex | Usage |
|-------|-----|-------|
| MS Blue | `#0078D4` | Microsoft product UI, Word/Office exports |

### Neutral Scale (light mode)

| Token | Hex | Usage |
|-------|-----|-------|
| `--ink`     | `#1A1A1A` | Primary text |
| `--ink-2`   | `#3A3A3A` | Secondary text, subtitles |
| `--ink-3`   | `#737373` | Muted text, captions, metadata |
| `--paper`   | `#FFFFFF` | Card backgrounds, content areas |
| `--bg`      | `#F7F7F5` | Page background |
| `--bg-alt`  | `#ECECE8` | Hover states, alternate rows |
| `--rule`    | `#E5E5E0` | Light borders, dividers |
| `--rule-2`  | `#CECEC7` | Medium borders, card edges |

### CSS Token Block (copy-paste ready)

```css
:root {
  --c-red-50: #FFF0EB;     --c-red-500: #F25022;   --c-red-700: #B33816;
  --c-green-50: #F1F8E3;   --c-green-500: #7FBA00; --c-green-700: #5A8500;
  --c-blue-50: #E5F6FD;    --c-blue-500: #00A4EF;  --c-blue-700: #0076AC;
  --c-yellow-50: #FFF7E0;  --c-yellow-500: #FFB900;--c-yellow-700: #B88500;

  --ink: #1A1A1A;     --ink-2: #3A3A3A;   --ink-3: #737373;
  --paper: #FFFFFF;   --bg: #F7F7F5;      --bg-alt: #ECECE8;
  --rule: #E5E5E0;    --rule-2: #CECEC7;

  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, Helvetica, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;

  --measure: 680px;
}
```

---

## 3. Typography

### Font Stack

| Role       | Font          | Weights   | Usage |
|------------|---------------|-----------|-------|
| Body       | Inter         | 300-700   | All prose, UI labels, navigation |
| Monospace  | JetBrains Mono| 400, 500  | Code, metadata bars, kickers, eyebrows |
| Office     | Segoe UI      | 400-600   | Word docs, PowerPoint, Excel exports only |

Google Fonts import:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Type Scale

| Role          | Size (px / rem) | Weight | Letter-spacing | Line-height | Notes |
|---------------|-----------------|--------|----------------|-------------|-------|
| Display       | `clamp(40,5vw,60px)` | 500 | `-0.025em` | `1.02` | Hero titles only |
| H1 Section    | `clamp(30,3.2vw,42px)` | 500 | `-0.02em` | `1.1` | Section headings |
| H2            | `22-24px` | 500 | `-0.015em` | `1.2` | Card titles, sub-sections |
| H3            | `18-20px` | 500 | `-0.01em`  | `1.3` | Sub-headings |
| Body          | `17.5px` | 400 | `-0.003em` | `1.62` | Main prose |
| Lead          | `18-20px` | 400 | `0`        | `1.55` | Subtitles, section leads |
| Small / Meta  | `13-15px` | 400 | `0`        | `1.5` | Captions, dates |
| Kicker / Label| `11-12px` | 500 | `0.12-0.14em` | - | UPPERCASE labels (mono) |
| Code          | `14px` | 400 | `0`        | `1.6` | JetBrains Mono |

### Key Rules

- Use `text-wrap: balance` on headings and `text-wrap: pretty` on body paragraphs.
- Never use `font-weight: 700` (bold) for headings. Use `500` (medium) for distinction.
- Keep reading columns at `--measure: 680px` (approximately 66 characters).
- Use `-webkit-font-smoothing: antialiased` on `body`.

---

## 4. Spacing and Layout

### Spacing Scale

The system uses an 8px base unit. Common values:

| Token   | Value | Usage |
|---------|-------|-------|
| `4px`   | xs    | Icon gaps, tight inline spacing |
| `8px`   | sm    | Internal component padding |
| `14px`  | md-   | Button gaps, list spacing |
| `16px`  | md    | Card internal padding unit |
| `24px`  | lg    | Section sub-spacing, grid gaps |
| `28-32px` | xl  | Card padding |
| `36-40px` | 2xl | Section header margin |
| `48px`  | 3xl   | Container padding, large gaps |
| `80px`  | 4xl   | Section vertical padding |
| `96px`  | 5xl   | Hero top padding |

### Layout Grid

| Context       | Max Width | Side Padding | Grid |
|---------------|-----------|--------------|------|
| Standard page | `1200px`  | `48px`       | auto |
| Reading column| `680px`   | `48px`       | single |
| Hero grid     | `1200px`  | `48px`       | `1.35fr 1fr` |
| Card grid     | `1200px`  | -            | `repeat(auto-fit, minmax(320px, 1fr))` |

### Border Radius

| Component | Radius |
|-----------|--------|
| Cards, panels | `10px` |
| Buttons | `6px` |
| Badges, tags | `4px` |
| Pills | `999px` |
| Color dots | `50%` |

---

## 5. Components

### Buttons

Two variants: `primary` and `ghost`.

```css
.btn {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 14px 24px; border-radius: 6px;
  font-family: var(--font-sans); font-size: 15px; font-weight: 500;
  border: 1px solid transparent;
  transition: background 0.15s, color 0.15s, border-color 0.15s, transform 0.15s;
}
.btn--primary { background: var(--ink); color: #fff; }
.btn--primary:hover { transform: translateY(-1px); background: #000; }
.btn--ghost { background: transparent; color: var(--ink); border-color: var(--rule-2); }
.btn--ghost:hover { background: var(--bg-alt); }
```

### Cards

Cards always have: a 4px accent bar at top in the layer color, a body with title + description + metadata footer, and hover state with `translateY(-3px)` and box-shadow.

```css
.card {
  background: var(--paper); border: 1px solid var(--rule);
  border-radius: 10px; overflow: hidden;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.25s;
}
.card:hover {
  transform: translateY(-3px);
  border-color: var(--card-accent);
  box-shadow: 0 10px 24px rgba(0,0,0,0.05);
}
.card__accent { height: 4px; background: var(--card-accent); }
.card__body { padding: 28px; }
```

### Navigation / Meta Bar

Sticky top bar. Monospace font. Contains brand mark + site title on left, tool buttons (theme toggle, language switcher) on right.

```css
.meta-bar {
  background: var(--paper); border-bottom: 1px solid var(--rule-2);
  padding: 16px 32px; position: sticky; top: 0; z-index: 100;
  backdrop-filter: blur(8px);
  font-family: var(--font-mono); font-size: 13px; letter-spacing: 0.08em;
}
```

### Eyebrow / Kicker Labels

Used above section titles and card kickers. Always monospace, uppercase, with a colored dot.

```html
<span class="eyebrow">
  <span class="dot"></span> SECTION LABEL
</span>
```

```css
.eyebrow {
  font-family: var(--font-mono); font-size: 12px;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--c-blue-700); font-weight: 500;
  display: inline-flex; align-items: center; gap: 10px;
}
.eyebrow .dot {
  width: 6px; height: 6px;
  background: var(--c-blue-500); border-radius: 50%;
}
```

### Layer Number Badge

28x28px colored square badge with monospace number. Used in stack diagrams and layer lists.

```css
.layer-badge {
  width: 28px; height: 28px;
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: 4px;
  font-family: var(--font-mono); font-size: 11px; font-weight: 600;
  color: #fff; letter-spacing: 0.02em;
}
.layer-badge--blue   { background: var(--c-blue-500); }
.layer-badge--green  { background: var(--c-green-500); }
.layer-badge--yellow { background: var(--c-yellow-500); color: var(--ink); }
.layer-badge--red    { background: var(--c-red-500); }
```

---

## 6. Layer Color Mapping

This mapping is canonical and must be consistent across every format (deck slides, site pages, playbook chapter headers, diagram nodes, card accents).

| Layer | Number | Color Token | Hex | Semantic Meaning |
|-------|--------|-------------|-----|-----------------|
| Infra       | 01 | `--c-blue-500`   | `#00A4EF` | Infrastructure, runtime, compute |
| Platform    | 02 | `--c-green-500`  | `#7FBA00` | Platform services, governance |
| Context     | 03 | `--c-yellow-500` | `#FFB900` | Data, knowledge, RAG |
| Intent      | 04 | `--c-red-500`    | `#F25022` | Agent goals, optimization |
| Neutral/Meta| -- | `--ink`          | `#1A1A1A` | Introduction, appendix, integration |

---

## 7. Dark Mode

The system supports dark mode via a `data-theme="dark"` attribute on `<html>`. Dark mode overrides only the neutral tokens. Core palette colors remain unchanged.

```css
[data-theme="dark"] {
  --ink:    #F0F0F0;   --ink-2:  #C7C7C2;   --ink-3: #A8A8A4;
  --paper:  #1C1C1A;   --bg:     #141414;
  --bg-alt: #242420;   --rule:   #2E2E2A;    --rule-2: #3A3A36;
}
```

### Dark Mode Toggle (JavaScript)

```javascript
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

// On load: restore preference
(function() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
```

---

## 8. Format Rules by Output Type

Each output format has its own editorial contract. Content that belongs in one format should not be forced into another.

### Deck (HTML Presentation)

- 1 to 2 ideas maximum per slide.
- No long paragraphs. No lists with 10+ items.
- Always anchor each slide with a diagram, data visualization, or interactive element.
- Dense prose belongs in the playbook, not the deck.
- Navigation: keyboard arrows, overview mode, real-time language switcher.
- Maximum 90 minutes of live talk time.

### Playbook / Doc (HTML or Markdown)

- Full prose, step-by-step explanations, complete code examples.
- Tables, diagrams, academic citations inline.
- H2 per major topic, H3 per subtopic.
- TOC sticky left, on-page nav right, reading progress bar.
- Dark mode, local search (keyboard `/` to focus).
- Print-friendly: page-break per chapter.

### Site (Astro Multi-page)

- Home page: executive summary style (deck-like).
- Chapter pages: playbook-style (deep prose).
- 9 chapters x 3 locales = 27 MDX files minimum.
- Interactive components: Terminal sim, VSCode sim, Copilot chat sim, live gauges.
- Pagefind search, dark mode, scroll-spy TOC.

### Landing Page (Single HTML)

- Hero with four-layer diagram visual.
- Format cards linking to each output format.
- Stack overview section with layer badges.
- Author bio and links.
- Minimal, fast-loading, no build step.

### Diagrams and Flowcharts

- Use Mermaid for version-controlled diagrams (flowchart, sequence, state, gantt).
- Layer color mapping applies to node backgrounds and edge colors.
- Node IDs must be ASCII-safe (no spaces, accents, or special characters).
- No border-fill classDef in FigJam-targeted Mermaid (use border-only styling).
- SVG diagrams: hand-crafted markup following `svg-paulasilvatech` skill.

### Icons

- Inline SVG only. No external icon library dependencies.
- `stroke: currentColor; stroke-width: 2; fill: none` for line icons.
- Standard icon size: `16x16px` inline, `20x20px` standalone.

---

## 9. Editorial Standards

These rules apply to all content regardless of format.

### Voice and Tone

- Professional but casual, with a light personal touch.
- Always didactic: use analogies, examples, and real-world comparisons to explain complex topics.
- Content must be educational, innovative, and interactive when possible.
- Write for the reader who is expert in their domain but new to AI engineering.

### Grammar Rules

- Never use em dashes. Use a comma, period, colon, or semicolon instead.
- Always use full product names: "GitHub Copilot" not "Copilot", "Azure AI Foundry" not "AI Foundry".
- Sentence case for headings (not Title Case for body headings).
- ISO date format in frontmatter and metadata: `2026-04-22`.
- Reading time in frontmatter: approximate, in minutes.

### Language

- Default output language: English.
- Produce PT-BR and ES versions when content is public, publishable, or explicitly requested.
- Locale codes: `en`, `pt-br`, `es`.
- File suffix for locale: `_en.md`, `_pt-br.md`, `_es.md`.

### Research and References

- Never invent metrics, KPIs, ROI figures, or statistics.
- Credible sources: Gartner, IDC, McKinsey, Forrester, HBR, Microsoft Learn, GitHub Blog, Anthropic Blog, IEEE, ACM, official vendor documentation.
- Academic papers: prioritize Aug/2025 through 2026. If no source within the period exists, flag explicitly and provide the most recent available.
- All references as hyperlinks with descriptive anchor text, never bare URLs.
- `## References` section at the end of every document.

---

## 10. File Naming and Versioning

### Naming Pattern

```
{Title}_v{version}_{YYYY-MM-DD}_{locale}.{ext}
```

Examples:

```
Design_System_paulasilvatech_v1.0.0_2026-04-22_en.md
Context_Platform_Stack_Deck_v2.1.0_2026-04-22_pt-br.html
Infra_Layer_Architecture_Diagram_v1.0.0_2026-04-22_en.svg
```

### Versioning Rules (Semantic)

| Bump | When |
|------|------|
| Major `X.0.0` | Breaking visual changes, full rewrites, scope changes |
| Minor `1.X.0` | New sections, new components, significant content additions |
| Patch `1.0.X` | Typos, color corrections, minor clarifications |

### Directory Structure

```
project-root/
├── docs/
│   ├── en/          # English markdown docs
│   ├── pt-br/       # Portuguese docs
│   └── es/          # Spanish docs
├── assets/
│   ├── diagrams/    # SVG and Mermaid files
│   └── images/      # Static images
├── decks/           # HTML presentation files
├── sites/           # Astro or standalone HTML sites
└── archive/         # Previous versions (never delete, always archive)
```

### Archive Rule

Never overwrite a versioned file. Before creating a new version:
1. Copy the current file to `archive/` with its current filename.
2. Create the new file with the bumped version number and today's date.
3. Update the Change Log table in the new file.

---

## References

- [Inter Font — Google Fonts](https://fonts.google.com/specimen/Inter)
- [JetBrains Mono — Google Fonts](https://fonts.google.com/specimen/JetBrains+Mono)
- [paulasilvatech GitHub](https://github.com/paulasilvatech)
- [Anthropic Prompt Engineering Overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
- [Context Platform Stack Showcase — README](https://github.com/paulasilvatech/context-platform-stack)
- [Semantic Versioning 2.0.0](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)
