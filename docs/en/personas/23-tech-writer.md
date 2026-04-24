---
title: "Tech Writer | Agentic SDLC Personas"
description: "The Tech Writer is the persona accountable for documentation that stays current, navigable, and trustworthy. In an AI-native SDLC, the Tech Writer operates a docs-as-code pipeline, not a knowledge-bas"
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-24"
version: "1.0.0"
status: "approved"
locale: "en"
persona_id: "23-tech-writer"
sdlc_phase: "Delivery"
cluster: "enablement"
previous: "22-developer"
next: "24-devrel"
reading_time: 18
tags: ["persona", "tech-writer", "copilot", "docs-as-code", "api-docs"]
---

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="28" height="28" style="vertical-align:-6px;"><rect x="1.5" y="1.5" width="61" height="61" rx="10" ry="10" fill="#F3F2F1" stroke="#605E5C" stroke-width="1.2"/><path d="M22 18h20v28H22z" fill="none" stroke="#605E5C" stroke-width="2.5"/><path d="M27 26h10M27 32h10M27 38h6" stroke="#605E5C" stroke-width="2" stroke-linecap="round"/></svg> Tech Writer

[← Previous: Developer](./22-developer.md) · [↑ Index](../index.md) · [Next: Devrel →](./24-devrel.md)

## Change log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-04-24 | Paula Silva | Initial persona document aligned with Agentic SDLC Personas v1.0.0 |

## Table of contents

1. [Executive summary](#1-executive-summary)
2. [Role and responsibilities](#2-role-and-responsibilities)
3. [Jobs to be done](#3-jobs-to-be-done)
4. [Pain points before AI-native](#4-pain-points-before-ai-native)
5. [AI-native daily workflow](#5-ai-native-daily-workflow)
6. [Recommended primitives](#6-recommended-primitives)
7. [Validated MCPs](#7-validated-mcps)
8. [Real examples](#8-real-examples)
9. [Anti-patterns](#9-anti-patterns)
10. [KPIs and impact metrics](#10-kpis-and-impact-metrics)
11. [Maturity in four levels](#11-maturity-in-four-levels)
12. [Integration with other personas](#12-integration-with-other-personas)
13. [Glossary](#13-glossary)
14. [References](#14-references)

> The Tech Writer is the persona accountable for documentation that stays current, navigable, and trustworthy. In an AI-native SDLC, the Tech Writer operates a docs-as-code pipeline, not a knowledge-base portal.

## 1. Executive summary

The Tech Writer makes the system legible to humans and to AI agents. In an AI-native SDLC, the Tech Writer works inside the Delivery phase with a fixed set of primitives: one docs-curator agent, four slash prompts, scoped instructions, schema-validated hooks, and a curated list of validated MCPs. The primary outputs are MDX and Markdown content in the repository, generated API references, release notes, and a curated table of contents that ships as a static site on Azure Static Web Apps.

## 2. Role and responsibilities

Think of the Tech Writer like the map-maker in a growing city. Streets and buildings appear every week; without the map-maker, newcomers are lost and longtimers forget which street is which. In an AI-native SDLC the code and architecture change daily; without the Tech Writer, the map is two quarters stale and the AI agents hallucinate landmarks that no longer exist.

Primary responsibilities:

- Convert approved specifications into user-facing documentation in MDX or Markdown, committed alongside the code
- Maintain the table of contents, navigation, and search index of the docs site hosted on Azure Static Web Apps
- Generate and review release notes for every production deployment
- Enforce the docs style guide with automated checks in GitHub Actions
- Partner with developers to keep the `CODEMAP.md` and the generated API reference in sync
- Curate content for humans and for AI agents: structured headings, explicit cross-links, predictable metadata
- Operate the Docs Curator agent and the `/spec-to-docs`, `/style-check`, `/toc-refresh`, `/release-note` prompts

## 3. Jobs to be done

1. As a Tech Writer, I want an approved specification converted into a draft doc page in minutes, so that I ship docs with features, not after them.
2. As a Tech Writer, I want the style guide enforced automatically in CI, so that I coach instead of police.
3. As a Tech Writer, I want the table of contents refreshed whenever a new page lands, so that navigation stays coherent as the site grows.
4. As a Tech Writer, I want release notes drafted from merged PRs and linked issues, so that every release has a human-readable summary.
5. As a Tech Writer, I want to detect stale docs automatically when the underlying code changes, so that deprecated guidance disappears before users stumble into it.
6. As a Tech Writer, I want AI agents to read the docs correctly, so that in-product assistants give users accurate answers.

## 4. Pain points before AI-native

1. **Docs land weeks after features**. The feature ships, the blog post goes out, and the reference docs appear a month later with outdated screenshots.
2. **Style drift**. Every writer has a slightly different voice; the final site reads like a committee.
3. **Broken links are caught by users**. Nobody audits navigation; the table of contents references pages that moved or were deleted.
4. **Release notes copy-pasted from commit messages**. Users read internal jargon; the note tells them nothing actionable.
5. **Docs invisible to search and AI**. Without structured metadata, neither the search engine nor the in-product assistant can find the right page.

## 5. AI-native daily workflow

The Tech Writer operates a daily loop. The loop uses GitHub Copilot primitives inside Visual Studio Code, Claude Code at the terminal for long-form drafting, and the Microsoft Learn Docs MCP for grounded references on Microsoft and Azure stacks.

### Morning setup

1. Open Visual Studio Code on the `docs` repository. GitHub Copilot Chat loads the scoped `.github/instructions/docs.instructions.md`.
2. Invoke `/toc-refresh`. The Docs Curator agent reviews the navigation tree, flags pages added without ToC entries, and proposes reorganizations where sections have grown past the readability threshold.
3. Read the overnight digest from GitHub Actions: which PRs touched public API surfaces, which release tags were cut, which style checks failed.

### Midday execution

1. Take a specification from the `specs/` folder. Invoke `/spec-to-docs`. The agent produces a draft MDX page with headings, examples, and cross-links to related content. The Tech Writer edits the draft for voice and accuracy.
2. Run `/style-check` on changed pages. The agent flags tone drift, passive voice overuse, and terms outside the glossary. The Tech Writer accepts or rejects each suggestion.
3. Pair with a developer on an ambiguous topic. Use Claude Code at the terminal to drive through the code and summarize behavior, grounded by the Microsoft Learn Docs MCP where the topic touches Azure or Microsoft 365.

### Afternoon review

1. Run `/release-note` for the upcoming release. The agent ingests merged PRs, linked issues, and incident resolutions, and drafts a human-readable note with sections: new features, fixes, deprecations, breaking changes.
2. Review PRs that touched `docs/` in the main product repo. Ensure every new public surface has a doc page or a link to one.
3. Close the day by pushing changes. GitHub Actions runs the build, the style check, and the link checker; Azure Static Web Apps publishes the updated site.

## 6. Recommended primitives

### Agent

| Agent | File | Purpose |
|-------|------|---------|
| `docs-curator` | `.github/agents/docs-curator.agent.md` | Draft docs from specs, enforce style, refresh the ToC, produce release notes |

The Docs Curator agent uses `claude-sonnet-4-6` by default, with tools `read`, `edit`, `search`, `grep`, `glob`, `bash`. It pulls context from GitHub and Microsoft Learn Docs MCPs. Extended thinking is enabled for long-form style and structure work.

### Slash prompts

| Command | File | Purpose |
|---------|------|---------|
| `/spec-to-docs` | `.github/prompts/spec-to-docs.prompt.md` | Convert an approved spec into a draft MDX page |
| `/style-check` | `.github/prompts/style-check.prompt.md` | Run the style guide against a changed page |
| `/toc-refresh` | `.github/prompts/toc-refresh.prompt.md` | Review and reorganize the table of contents |
| `/release-note` | `.github/prompts/release-note.prompt.md` | Draft a release note from merged PRs and linked issues |

### Instructions scoped

Scoped `applyTo` keeps docs guidance distinct from code guidance.

| Scope (`applyTo`) | File | Purpose |
|-------------------|------|---------|
| `docs/**/*.mdx` | `.github/instructions/docs.instructions.md` | Voice, tone, heading discipline, frontmatter schema |
| `docs/release-notes/**` | `.github/instructions/release-notes.instructions.md` | Release-note structure, user-centric phrasing |
| `docs/reference/**` | `.github/instructions/reference.instructions.md` | API reference conventions, parameter tables, example discipline |

### Hooks

Hooks are zero-token governance for docs artifacts.

- `pre-commit`: reject a page without frontmatter (title, id, updated, summary)
- `post-commit`: regenerate the ToC JSON when a new page lands
- `pre-push`: run the link checker against changed pages; fail on broken internal links

## 7. Validated MCPs

Every MCP below is registered in the MCP catalog. Do not reference any MCP that is not in the catalog.

| MCP | Status | Use in this persona |
|-----|--------|---------------------|
| [Microsoft Learn Docs MCP](https://github.com/microsoftdocs/mcp) | Official | Ground docs on Microsoft 365, Azure, and GitHub topics in current Microsoft Learn content |
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | Official | Read merged PRs, linked issues, and release tags for release-note drafting |
| [Azure MCP Server](https://github.com/Azure/azure-mcp) | Official (Microsoft) | Inspect Azure Static Web Apps deployment status and Application Insights for docs-site errors |
| [Azure DevOps MCP Server](https://github.com/microsoft/azure-devops-mcp) | Official (Microsoft) | Read work items that drive release notes when the team uses Azure Boards |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Official (Microsoft) | Drive end-to-end checks on the docs site after deployment (navigation, search, dark mode) |
| [Microsoft 365 Agents SDK MCP](https://learn.microsoft.com/microsoft-365/agents-sdk/) | Official (Microsoft) | Announce docs updates and release notes into Microsoft Teams channels |

## 8. Real examples

### Example 1: spec to docs for a new endpoint

**Input**: An approved specification `specs/claims-status.md` describes a new endpoint for retrieving claim status.

**Invocation**: `/spec-to-docs specs/claims-status.md`.

**Expected output**:

1. A draft page `docs/reference/claims/status.mdx` with frontmatter, a short overview, the request and response schemas, three examples (happy path, not found, forbidden), and cross-links to the authentication page.
2. A ToC entry proposed in the pre-commit diff; the hook would reject the commit otherwise.
3. A PR titled `docs(claims): add claim status endpoint reference` that links back to the spec and the implementation PR.

### Example 2: release note for version 2.14.0

**Input**: Version 2.14.0 merges 23 PRs and closes 11 issues across three product areas.

**Invocation**: `/release-note v2.14.0`.

**Expected output**:

1. A draft `docs/release-notes/2.14.0.mdx` with four sections: new features (user-centric phrasing), fixes, deprecations, breaking changes.
2. Each claim cites a merged PR and a linked issue; internal jargon is rewritten into user vocabulary.
3. A Teams post via the M365 Agents SDK to the release channel inviting reviewers.
4. Azure Static Web Apps publishes the note to the preview environment; Playwright MCP runs a navigation smoke test before promotion.

## 9. Anti-patterns

1. **Copy-paste release notes from commits**. Commit messages are for engineers; release notes are for users. Mitigation: `release-notes.instructions.md` requires user-centric phrasing and rewrites jargon.
2. **Docs that live outside the repository**. A knowledge-base portal detached from code drifts instantly. Mitigation: every page lives in `docs/` and ships via GitHub Actions to Azure Static Web Apps.
3. **Screenshots that age silently**. Image-based UI docs rot fastest. Mitigation: Playwright MCP regenerates critical screenshots on every docs build.
4. **ToC by hand**. A hand-maintained navigation tree goes stale within a sprint. Mitigation: `/toc-refresh` and the post-commit hook keep the JSON generated.
5. **Style policing in PR reviews**. Manual policing frustrates both sides. Mitigation: `/style-check` runs in CI and comments inline.

## 10. KPIs and impact metrics

| Metric | Baseline (manual) | Target (agentic) | Measurement |
|--------|-------------------|------------------|-------------|
| Time from feature merge to docs merge | 14 days | Under 24 hours | Docs-merge lag dashboard |
| Broken link count in production | Over 40 | Zero | Link checker in GitHub Actions |
| Style check pass rate on first commit | 55 percent | Over 90 percent | CI history |
| Release-note preparation time | 6 hours | Under 45 minutes | Time-to-publish log |
| Docs-site error rate (404 on internal nav) | Over 2 percent | Under 0.2 percent | Application Insights |
| Token efficiency | N/A | Under 150k tokens per week | Copilot usage report |

## 11. Maturity in four levels

| Level | Name | Markers |
|-------|------|---------|
| L1 | Manual | Docs in a separate portal, no style guide, release notes copy-pasted |
| L2 | Assisted | GitHub Copilot Chat for drafting, docs in repo, ad hoc CI checks |
| L3 | Augmented | Docs Curator agent, four slash prompts, scoped instructions, style and link checks in GitHub Actions, site on Azure Static Web Apps |
| L4 | Agentic | Full primitives kit, hooks enforced, Playwright MCP smoke tests on every deploy, Microsoft Learn Docs MCP grounding on Azure topics, maturity scorecard above 80 percent |

## 12. Integration with other personas

- **With Requirements Engineer**: specifications feed `/spec-to-docs`
- **With Developer**: public API changes trigger docs updates
- **With Release Manager**: release tags drive release-note generation
- **With DevRel**: tutorials and demos cross-link to the reference docs
- **With UX Designer**: screenshots and flow diagrams coordinated
- **With InfoSec Officer**: security advisories published with the same pipeline
- **With Product Owner**: user-centric phrasing reviewed before release

## 13. Glossary

- **Docs as code**: the practice of treating documentation sources as code, stored in the repository, reviewed in PRs, built by CI.
- **Frontmatter**: the YAML block at the top of an MDX or Markdown file that carries metadata used by the site generator and by AI agents.
- **ToC (table of contents)**: the generated navigation tree that orders pages for readers and for search.
- **Release note**: a user-facing summary of what changed in a release, written in product-user vocabulary.
- **Style check**: an automated linter that enforces the docs style guide.
- **Link checker**: an automated job that verifies every internal and external link resolves.

## 14. References

- [Microsoft Learn Docs MCP](https://github.com/microsoftdocs/mcp) — the MCP that grounds responses in current Microsoft Learn content
- [Azure Static Web Apps documentation](https://learn.microsoft.com/azure/static-web-apps/) — the host for the docs site, integrated with GitHub Actions
- [GitHub Actions documentation](https://docs.github.com/actions) — authoritative source for CI, style checks, and link checking
- [Microsoft Writing Style Guide](https://learn.microsoft.com/style-guide/welcome/) — tone and clarity guidance for technical writing
- [GitHub Docs documentation](https://docs.github.com/) — reference for repository-driven publishing workflows
