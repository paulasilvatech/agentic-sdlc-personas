---
title: "Contributing | Agentic SDLC Personas"
description: "How to contribute new personas, primitives, MCP recommendations, or documentation improvements."
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-23"
version: "1.0.0"
status: "approved"
---

# Contributing to Agentic SDLC Personas

Thank you for considering a contribution. This project is a public framework of persona kits that operationalize GitHub Copilot and Claude Code primitives across the full SDLC. Contributions are welcome from engineers, architects, designers, technical writers, and practitioners of Agentic DevOps worldwide.

## Sumário

1. [Code of conduct](#1-code-of-conduct)
2. [Ways to contribute](#2-ways-to-contribute)
3. [Development setup](#3-development-setup)
4. [Repository conventions](#4-repository-conventions)
5. [Documentation standards](#5-documentation-standards)
6. [MCP validation policy](#6-mcp-validation-policy)
7. [Persona kit structure](#7-persona-kit-structure)
8. [Pull request process](#8-pull-request-process)
9. [Commit message format](#9-commit-message-format)
10. [Recognition](#10-recognition)

## 1. Code of conduct

All interactions in this project are governed by the [Code of Conduct](./CODE_OF_CONDUCT.md). Be kind, be constructive, assume good intent.

## 2. Ways to contribute

You can contribute in several ways:

- **New persona kit**: propose a persona that is missing from the 24 default personas (for example, Developer Advocate specialization, Platform Product Manager, AI Red Teamer)
- **Improve an existing kit**: sharper prompts, richer instructions, better examples, more accurate MCP recommendations
- **Add a validated MCP**: if you know an official MCP server that fits one of the personas, submit it following the MCP validation policy below
- **Translate documentation**: help keep the EN, PT-BR and ES versions in sync
- **Report an issue**: bug, broken link, outdated reference, accessibility problem
- **Share case studies**: real-world application of a persona kit in production

## 3. Development setup

```bash
# Clone the repository
git clone https://github.com/paulasilvatech/agentic-sdlc-personas.git
cd agentic-sdlc-personas

# Install site dependencies
cd site
npm install

# Run locally
npm run dev

# Build static site
npm run build
```

The Astro site lives in `site/`. Persona kits live in `persona-kits/`. Documentation lives in `docs/`.

## 4. Repository conventions

Every contribution must follow these conventions:

| Convention | Rule |
|------------|------|
| **Language** | English is the default. Public content must also exist in PT-BR and ES. |
| **File naming** | `{Title}_v{version}_{YYYY-MM-DD}_{locale}.{ext}` for versioned artifacts. Persona files use kebab-case. |
| **Dates** | ISO format: `2026-04-23` |
| **Frontmatter** | Every `.md` file in `docs/` must have YAML frontmatter with title, description, author, date, version, status |
| **Headings** | Sentence case. Never Title Case for body headings. |
| **Lists** | CommonMark. Blank line before any list. |
| **Icons** | Only allowed in H1 of a document. Never in body headings, lists, or inline text. |
| **No em dashes** | Use comma, period, colon, or middle dot. |

## 5. Documentation standards

Every persona document and every chapter follows the repository style guide at [`docs/STYLE_GUIDE.md`](./docs/STYLE_GUIDE.md). Key requirements:

1. YAML frontmatter with all required fields
2. Change log table with version history
3. Numbered table of contents
4. 14 canonical sections for persona documents
5. Previous / Next / Index navigation at top and bottom
6. Footer with attribution and links
7. Descriptive hyperlinks only, never bare URLs
8. References section with sources from Aug 2025 to 2026 when possible

## 6. MCP validation policy

No MCP server is recommended in this repository without validation.

**Acceptance criteria for a new MCP**:

1. The MCP must have a public, active official repository or hosted endpoint
2. The MCP must be one of: official (from the product vendor), Anthropic reference, or a widely adopted community server with 500+ GitHub stars and maintained within the last 6 months
3. The MCP entry in `docs/registry/mcp-catalog.md` must include: name, official link, status badge, persona mapping, validation date
4. Any `mcp.json` file in a persona kit that references the MCP must point only to the catalog entry and include a comment with the validated URL

To propose a new MCP, open an issue using the `mcp-request` template and include your evidence.

## 7. Persona kit structure

A persona kit follows this canonical layout:

```
persona-kits/NN-persona-slug/
├── README.md              # Kit overview, quickstart, full kit table, references
├── PERSONA.md             # One-page executive persona summary
├── CHANGELOG.md           # Kit-level changelog
├── install.sh             # Cross-platform install script
├── mcp.json               # Validated MCPs only, matching docs/registry/mcp-catalog.md
├── hooks.json             # Optional, zero-token governance
├── .github/
│   ├── agents/
│   │   └── <persona>.agent.md
│   ├── prompts/
│   │   └── <command>.prompt.md
│   └── instructions/
│       └── <scope>.instructions.md
├── examples/              # Two or three end-to-end input/output cases
├── tests/
│   └── schema.json        # JSON Schema check for agent and prompt files
└── skills/                # Optional lazy-loaded skills
```

## 8. Pull request process

1. Fork the repository and create a feature branch: `feature/persona-<slug>` or `fix/<short-description>`
2. Make your changes following the conventions above
3. Run the validation scripts: `npm run validate` in the repository root (runs markdownlint, link-check, MCP validation, schema check)
4. Update `CHANGELOG.md` under `[Unreleased]` with your change
5. Open a pull request using the PR template
6. Make sure CI is green, address review comments
7. A maintainer merges with a squash commit

## 9. Commit message format

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):

```
<type>(<scope>): <short summary>

<body>

<footer>
```

Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `ci`.

Examples:

```
feat(persona): add ML AI Engineer kit with LangSmith and MLflow MCPs
docs(developer): add Monday morning section with five concrete actions
fix(mcp-catalog): update Atlassian MCP endpoint after SSE deprecation
```

## 10. Recognition

All contributors are credited in the release notes of each version. Major contributions (full new persona, substantial doc improvement, new language translation) earn a mention in the project README.

---

Paula Silva, AI-Native Software Engineer · [@paulasilvatech](https://github.com/paulasilvatech) · [agenticdevops.platform.com](https://agenticdevops.platform.com)
