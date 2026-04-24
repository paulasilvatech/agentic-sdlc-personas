---
title: "UX Designer | Agentic SDLC Personas"
description: "The UX Designer is the persona that curates the design system and guards accessibility. In an AI-native SDLC, the UX Designer operates a stack of validated primitives that turn design decisions into m"
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-24"
version: "1.0.0"
status: "approved"
locale: "en"
persona_id: "08-ux-designer"
sdlc_phase: "Design"
cluster: "product"
previous: "07-engineering-manager"
next: "09-scrum-master"
reading_time: 19
tags: ["persona", "ux-designer", "copilot", "design-system", "accessibility"]
---

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="28" height="28" style="vertical-align:-6px;"><rect x="1.5" y="1.5" width="61" height="61" rx="10" ry="10" fill="#FDECEA" stroke="#E74856" stroke-width="1.2"/><circle cx="32" cy="32" r="12" fill="none" stroke="#E74856" stroke-width="2.5"/><circle cx="32" cy="32" r="5" fill="#E74856"/></svg> UX Designer

[← Previous: Engineering Manager](./07-engineering-manager.md) · [↑ Index](../index.md) · [Next: Scrum Master →](./09-scrum-master.md)

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

> The UX Designer is the persona that curates the design system and guards accessibility. In an AI-native SDLC, the UX Designer operates a stack of validated primitives that turn design decisions into machine-readable tokens and enforceable gates.

## 1. Executive summary

The UX Designer produces and governs the design system, the information architecture, and the accessibility guarantees for every user-facing surface. In an AI-native SDLC the UX Designer operates inside the Design phase with a fixed set of primitives: one design system curation agent, four slash prompts, scoped instructions, schema-validated hooks, and a curated list of validated MCPs. Primary outputs are the token map, the component pattern library, accessibility scan reports, and the information architecture that the Developer and QA Engineer implement against.

## 2. Role and responsibilities

Think of the UX Designer like the editor of a design language. They do not ship every screen, but every screen that ships has to match the typography, spacing, color, motion, and accessibility rules they authored. In an AI-native SDLC the design language lives as machine-readable tokens, the pattern library is consumable by agents, and the UX Designer is accountable for the fact that the product looks and feels coherent from the first sketch to the rendered page.

Primary responsibilities:

- Author and maintain the design token map under `docs/design-system/tokens/` for color, typography, spacing, radius, motion, and elevation
- Govern the component pattern library under `docs/design-system/patterns/` with usage rules and accessibility notes
- Run accessibility scans on every front-end PR via Playwright MCP and axe-core integrations
- Maintain the information architecture under `docs/ia/` that binds user journeys to pages and components
- Operate the Design System Curator agent and the `/token-map`, `/a11y-scan`, `/pattern-lib`, `/ia-review` prompts
- Align design decisions with the Enterprise Architect's principles, the Product Owner's spec, and the Azure Static Web Apps deployment target
- Publish the design review digest to the product Teams channel for stakeholder visibility

## 3. Jobs to be done

1. As a UX Designer, I want the token map to be the source of truth, so that every component and page reads from the same palette and scale.
2. As a UX Designer, I want accessibility to be gated on PR, so that WCAG violations never reach production.
3. As a UX Designer, I want the pattern library to be consumable by agents, so that Copilot proposes components from our system, not from the open web.
4. As a UX Designer, I want the information architecture to bind journeys to pages, so that every screen has a named context and purpose.
5. As a UX Designer, I want design tokens to regenerate the CSS and the Static Web App theme on merge, so that intent and output stay aligned.
6. As a UX Designer, I want the design review digest to surface violations and patterns weekly, so that debt is managed, not accumulated.

## 4. Pain points before AI-native

1. **Tokens trapped in a design tool**. Colors and spacing live in a design file and are copied by hand into CSS. Drift is guaranteed.
2. **Accessibility checked at release**. WCAG violations land in production because scans run only in the staging environment.
3. **Pattern library as PDF**. Developers and agents cannot consume static documents. They invent components off-system.
4. **Information architecture as a wireframe**. Pages and journeys are drawn, not linked. Analytics tagging happens ad-hoc.
5. **Design debt invisible**. Divergences from the system pile up without a scan to surface them.

## 5. AI-native daily workflow

The UX Designer operates a fixed loop each day. The loop uses GitHub Copilot primitives inside Visual Studio Code and Claude Code at the terminal, plus a small catalog of validated MCPs for external context.

### Morning setup

1. Open the design system repository in Visual Studio Code. GitHub Copilot Chat loads `AGENTS.md` and the scoped design system instructions.
2. Pull the latest `main` and review overnight component PRs against the pattern library.
3. Run `/a11y-scan` via Playwright MCP to produce the current accessibility report across the staged Azure Static Web App preview environments.
4. Review the design system dashboard generated from GitHub MCP telemetry.

### Midday execution

1. **Token authoring**. Invoke `/token-map` on any new or revised token. The Design System Curator agent produces the token file, regenerates the CSS export, and updates the Azure Static Web Apps theme bundle.
2. **Pattern authoring**. Invoke `/pattern-lib` on new components or revised usage rules. The agent produces a pattern document with props, accessibility notes, and a primed example.
3. **Information architecture**. Invoke `/ia-review` when a new journey or page is proposed. The agent updates the IA map under `docs/ia/` and binds the page to named components from the pattern library.
4. **Cross-persona consultation**. Raise design debates in the product Teams channel via the Microsoft 365 Agents SDK MCP, with pattern links as the canonical citation.

### Afternoon review

1. Invoke `/a11y-scan` as the final sweep on all open front-end PRs. Block merge on any critical WCAG violation detected by Playwright MCP and axe-core.
2. Open a pull request on token, pattern, or IA changes. GitHub Copilot Code Review comments on token consistency and accessibility annotations.
3. Publish the daily design digest to the product Teams channel via the Microsoft 365 Agents SDK, summarizing new tokens, pattern revisions, and open violations.
4. Update the design system changelog and regenerate the Azure Static Web App preview so stakeholders can click through the current state.

## 6. Recommended primitives

### Agent

| Agent | File | Purpose |
|-------|------|---------|
| `design-system-curator` | `.github/agents/design-system-curator.agent.md` | Author tokens, curate the pattern library, run accessibility scans, and govern information architecture |

The Design System Curator uses `claude-sonnet-4-6` by default. Tools: `read`, `edit`, `search`, `grep`, `glob`, `bash` scoped to token-build scripts. Extended thinking is disabled because iterative design tasks benefit from short, fast loops.

### Slash prompts

| Command | File | Purpose |
|---------|------|---------|
| `/token-map` | `.github/prompts/token-map.prompt.md` | Author or revise tokens and regenerate the CSS and Static Web App theme |
| `/a11y-scan` | `.github/prompts/a11y-scan.prompt.md` | Run accessibility checks via Playwright MCP and axe-core |
| `/pattern-lib` | `.github/prompts/pattern-lib.prompt.md` | Author or revise a component pattern with props and accessibility notes |
| `/ia-review` | `.github/prompts/ia-review.prompt.md` | Review and update the information architecture map for a journey |

### Instructions scoped

Scoped `applyTo` reduces token cost by approximately 68 percent compared to global instructions.

| Scope (`applyTo`) | File | Purpose |
|-------------------|------|---------|
| `docs/design-system/tokens/**/*.json` | `.github/instructions/tokens.instructions.md` | Token schema, naming rules, and regeneration contract |
| `docs/design-system/patterns/**/*.md` | `.github/instructions/patterns.instructions.md` | Pattern document template, props, accessibility annotations |
| `docs/ia/**/*.md` | `.github/instructions/ia.instructions.md` | Information architecture schema, journey-to-page binding, analytics tagging |

### Hooks

Hooks cost zero LLM tokens. They are the strongest governance layer for design.

- `pre-commit`: reject any token file that breaks the naming schema or any pattern without accessibility annotations
- `post-commit`: regenerate the CSS export, Static Web App theme bundle, and pattern index
- `pre-merge`: run `/a11y-scan` on the PR preview deployment and block merge on critical WCAG violations

## 7. Validated MCPs

| MCP | Purpose | Owner |
|-----|---------|-------|
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Drive accessibility scans and visual regressions against preview deployments | Microsoft (official) |
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | Read front-end PRs, Actions runs, and preview deployment metadata | GitHub (official) |
| [Azure MCP Server](https://github.com/Azure/azure-mcp) | Inspect Azure Static Web Apps preview environments and configuration | Microsoft (official) |
| [Microsoft Learn Docs MCP](https://github.com/microsoftdocs/mcp) | Ground design decisions in Microsoft Fluent and accessibility guidance | Microsoft (official) |
| [Microsoft 365 Agents SDK MCP](https://learn.microsoft.com/microsoft-365/agents-sdk/) | Publish design digests to Teams and ingest stakeholder feedback from Outlook | Microsoft (official) |

## 8. Real examples

### Example 1: new primary color and accessible contrast

**Input**: A brand refresh introduces a new primary color. The color must pass WCAG AA contrast against the existing neutral palette.

**Invocation**: `/token-map` followed by `/a11y-scan`.

**Expected output**:

1. Updated `docs/design-system/tokens/color/primary.json` with the new value and contrast matrix annotations.
2. Regenerated CSS variables in the Azure Static Web App theme bundle.
3. An accessibility scan report confirming AA contrast across 14 interactive surfaces, with three flagged surfaces that need pattern revision.
4. A pull request with Copilot Code Review comments on token naming and pattern impact.

### Example 2: accessibility gate on a new checkout flow

**Input**: A new checkout journey with five pages introduced under `src/checkout/`.

**Invocation**: `/ia-review` followed by `/a11y-scan`.

**Expected output**:

1. Updated `docs/ia/checkout.md` binding the five pages to named patterns and analytics events.
2. A Playwright MCP accessibility run against the Static Web App preview with zero critical violations, two minor label issues, and three keyboard navigation warnings.
3. Three issues filed via the GitHub MCP for the warnings, assigned to the Developer with pattern links as the remediation reference.
4. A blocked merge until critical violations close, unblocked once warnings have an owner and a follow-up issue.

## 9. Anti-patterns

1. **Copy-paste design tokens**. Values diverge across repos and platforms. Mitigation: token files are the single source, regenerated by hook.
2. **Accessibility as a release checklist**. Violations land in production before the checklist runs. Mitigation: `pre-merge` hook runs `/a11y-scan` on every PR preview.
3. **Pattern library as PDF**. Developers invent components off-system. Mitigation: the pattern library is markdown and the primed-context pack links patterns by name.
4. **Journeys drawn, not mapped**. Pages ship without named context, analytics, or accessibility annotations. Mitigation: `/ia-review` binds every page to pattern and analytics references.
5. **Design debt tolerated**. Divergences accumulate without a scan. Mitigation: weekly design digest surfaces divergence counts with owners.

## 10. KPIs and impact metrics

| KPI | Baseline | Target | Measurement |
|-----|----------|--------|-------------|
| Critical WCAG violations at release | 6 per release | 0 | Playwright MCP scan report |
| Token adoption, components reading from the token map | 55 percent | 100 percent | CSS variable usage audit |
| Pattern library adoption, components authored from patterns | 45 percent | > 90 percent | Pattern usage audit |
| IA coverage, pages with journey and analytics binding | 30 percent | 100 percent | IA linter in GitHub Actions |
| Design debt items closed per week | 3 | > 8 | Digest summary |
| Preview-to-approval cycle time | 3 days | < 1 day | GitHub PR timestamps |

## 11. Maturity in four levels

| Level | Name | Markers |
|-------|------|---------|
| L1 | Manual | Tokens in a design tool, patterns in PDF, accessibility at release |
| L2 | Assisted | Copilot used to polish pattern prose, tokens copy-pasted to CSS |
| L3 | Augmented | Design System Curator agent, four slash prompts, scoped instructions, Playwright MCP, a11y scans on PR |
| L4 | Autonomous | Full primitives kit, hooks enforced, token regeneration automated, IA bindings standard, weekly digest live |

## 12. Integration with other personas

- **From Product Owner**: approved `SPECIFICATION.md` with user-facing acceptance criteria that the IA must honor
- **From Enterprise Architect**: principles that constrain visual and accessibility policy
- **To Developer**: tokens, patterns, and primed-context packs that make component work deterministic
- **To QA Engineer**: accessibility scans as a first-class test suite alongside functional tests
- **To DevOps Engineer**: Azure Static Web Apps preview environment requirements for accessibility scans
- **To Tech Writer**: pattern library and token map as the canonical source for UI documentation
- **To DevRel**: public-facing design system artifacts for developer audiences

## 13. Glossary

- **Design token**: a named, machine-readable value for color, typography, spacing, radius, motion, or elevation.
- **Pattern**: a documented component with props, usage rules, and accessibility annotations.
- **Information architecture**: the mapping from user journeys to pages and components, with analytics and accessibility bindings.
- **Accessibility scan**: automated sweep via Playwright MCP and axe-core that checks pages against WCAG criteria.
- **Design debt**: divergence between shipped surfaces and the design system, measured and managed weekly.
- **Token map**: the generated, versioned export of all tokens consumed by CSS, components, and the Azure Static Web App theme bundle.

## 14. References

- [Microsoft Fluent design system](https://learn.microsoft.com/fluent-ui/web-components/) — canonical Microsoft design patterns and tokens
- [Azure Static Web Apps documentation](https://learn.microsoft.com/azure/static-web-apps/) — deployment platform for preview-environment accessibility scans
- [Playwright documentation](https://playwright.dev/docs/accessibility-testing) — automated accessibility testing guidance
- [GitHub Copilot documentation](https://docs.github.com/en/copilot) — agent mode, prompts, and instructions
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) — normative accessibility specification
