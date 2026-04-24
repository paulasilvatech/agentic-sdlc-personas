# Context Platform Stack · Astro site showcase

This is the **Astro site format** of the Context Platform Stack showcase. It is the canonical template for building trilingual, content-rich documentation sites with the paulasilvatech Design System. Copy this directory and swap the content to create a new showcase.

## What you get

- **Trilingual** EN (default), PT (`/pt`), ES (`/es`) with locale-aware routing and path rewriting
- **9 chapters per language** (27 MDX files total) covering introduction, 5 technical chapters, references, glossary, about
- **Rich interactive components** including animated terminal, VSCode simulation, GitHub Copilot chat simulation, live intent-debt gauge, and live maturity-radar chart
- **Pagefind search** built into the Astro production build, keyboard-activated with `/`
- **Dark mode** with FOUC prevention, system preference detection, user override persistence
- **Right-sidebar TOC** with scroll-spy, responsive to viewport width
- **Per-chapter accent palette** using the four-color core palette from the DS
- **Pure static output**, no runtime dependencies, deployable to any static host

## Directory layout

```
site-astro/
├── astro.config.mjs           # Astro + MDX + Tailwind + i18n config
├── package.json                # Dependencies and scripts
├── tailwind.config.mjs         # Tailwind with DS tokens
├── tsconfig.json               # TS config with path aliases
├── public/
│   ├── tokens.css              # Copy of DS tokens, served at /tokens.css
│   └── favicon.svg             # Four-colored squares logo
└── src/
    ├── components/
    │   ├── content/            # MDX building blocks (Callout, StatRow, KeyValueTable, HomePage)
    │   ├── diagrams/           # SVG diagrams (StackDiagram)
    │   ├── interactive/        # Terminal, VSCodeSim, CopilotChat, IntentDebtSim, MaturityAssessment
    │   └── layout/             # Site chrome (Header, Sidebar, TOC, Footer, SearchOverlay, etc.)
    ├── content/
    │   ├── config.ts           # Content collection schema
    │   └── chapters/           # 9 MDX files × 3 locales
    │       ├── en/
    │       ├── pt/
    │       └── es/
    ├── i18n/                   # en.json, pt.json, es.json
    ├── layouts/                # BaseLayout, ChapterLayout
    ├── lib/i18n.ts             # Locale helpers, chapter metadata, URL builders
    ├── pages/
    │   ├── index.astro         # EN landing (default locale)
    │   ├── chapter/[slug].astro # EN dynamic chapter route
    │   ├── pt/                 # PT pages mirror EN structure
    │   └── es/                 # ES pages mirror EN structure
    └── styles/global.css       # Prose typography, Pagefind UI skin, focus rings
```

## Getting started

```bash
# From this directory
npm install
npm run dev        # localhost:4321
```

Production build with Pagefind index:

```bash
npm run build      # Outputs to dist/, includes Pagefind search index
npm run preview    # Serve the built site locally
```

## How to adapt for a new showcase

1. **Copy this directory** to `showcases/<your-theme>/site-astro/`
2. **Update `astro.config.mjs`** with the new basePath
3. **Edit the content collection** in `src/content/chapters/<locale>/*.mdx`, keeping the frontmatter shape but rewriting the body
4. **Update `src/lib/i18n.ts`** with the new chapter metadata (titles, accents, ordering)
5. **Tweak `src/i18n/*.json`** for site title, tagline, navigation labels
6. **Adjust `StackDiagram.astro`** if the showcase has a different visual spine

Interactive components (Terminal, VSCodeSim, CopilotChat, IntentDebtSim, MaturityAssessment) are theme-agnostic. Use them as-is from any MDX file.

## Format contract

This showcase is the **Astro site** format, which means:

- **Long-form** content with chapters, prose, embedded interactive widgets
- **Executive home page** with hero, chapter grid, audience list
- **Trilingual** by default (EN + PT + ES)
- **Search-indexable** via Pagefind
- Companion to the **deck** format (one-file HTML presentation) and the **document** format (markdown playbook, planned)

See the parent `../README.md` for the full format taxonomy.

## Content conventions

- **Always** use full product names (GitHub Copilot, not Copilot)
- **Never** use em-dashes. Use period, comma, or `·` instead
- **Sentence case** for headings
- **ISO dates** (2026-04-22, not April 22, 2026) in frontmatter
- **Reading time** is approximate, in minutes
- **Accent colors** map to layer (blue=infra, green=platform, yellow=context, red=intent, neutral=integration/appendix)

## Tech stack

| Concern | Choice |
|---|---|
| SSG | Astro 4.16 |
| Content | MDX (Astro content collections) |
| Styling | Tailwind + DS tokens |
| Search | Pagefind (client-side, no backend) |
| Fonts | Inter (sans), JetBrains Mono (mono) via Google Fonts |
| Icons | Inline SVG only, no icon library |
| Analytics | None by default, add your own |
| Deployment | Any static host (Cloudflare Pages, Netlify, Vercel, GitHub Pages) |

## Known limitations

- **Pagefind index** must be regenerated on every build (handled automatically)
- **Interactive components** are isolated Astro islands; their state does not persist across navigation
- **Dark mode** uses `data-theme` on `<html>`, not Tailwind's `dark:` variant prefix
- **Language switcher** assumes mirror paths across locales; custom per-locale routes will need extra logic

## License

MIT. See the root repository for details.
