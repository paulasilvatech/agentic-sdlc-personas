---
title: "Changelog | Agentic SDLC Personas"
description: "Release history following Keep a Changelog and Semantic Versioning."
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-24"
version: "1.1.0"
status: "approved"
---

# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] — 2026-04-24

### Added
- Full EN MDX content for all 24 personas (200–245 lines each, 16 sections per persona)
- PT-BR translations for all 24 personas (site MDX)
- ES translations for all 24 personas (site MDX)
- `docs/en/personas/*.md` — full persona documents with SVG icons, navigation, and changelogs (24 files)
- `persona-kits/*/PERSONA.md` — quick-reference cards for all 24 personas
- Microsoft 365 Agents SDK MCP added to catalog
- Docker-based local development workflow (`docker-compose.yml`, `LOCAL_DEV.md`)

### Changed
- MCP catalog v1.1.0 — scoped to Microsoft / Azure / GitHub Platform stack only
- Removed third-party vendor MCPs: Atlassian, Linear, Notion, Figma, Sentry, Slack, Grafana, Terraform (HashiCorp), Snyk
- Pending evaluation list updated with Azure-native candidates

### Fixed
- Design system tokens applied to Astro site
- Forbidden tool references removed from all persona content

## [1.0.0] — 2026-04-23

### Added
- Repository governance files (LICENSE MIT, CONTRIBUTING, Code of Conduct, SECURITY, CITATION.cff)
- GitHub issue templates: bug report, doc improvement, MCP request, new persona
- Pull request template
- GitHub Actions: `deploy.yml` (Astro → GitHub Pages), `validate.yml`
- Astro site with Starlight theme, trilingual routing (EN/PT/ES), Pagefind search
- `docs/STYLE_GUIDE.md` and `docs/DESIGN_SYSTEM.md`
- `docs/primitives/` — six foundational primitives documented
- `docs/registry/mcp-catalog.md` — initial validated MCP catalog (16 servers)
- `docs/research/` — model routing research and persona architecture output
- `persona-kits/` — 24 directories with `.github/agents/`, `.github/prompts/`, `mcp.json`
- Developer persona (22) as canonical reference implementation
- `FUNDING.yml` with GitHub Sponsors

[1.1.0]: https://github.com/paulasilvatech/agentic-sdlc-personas/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/paulasilvatech/agentic-sdlc-personas/releases/tag/v1.0.0
