---
title: "Technical Lead | Agentic SDLC Personas"
description: "The Technical Lead is the persona that engineers context for the squad. In an AI-native SDLC, the Technical Lead operates a stack of validated primitives that make the team's agents fast, cheap, and c"
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-24"
version: "1.0.0"
status: "approved"
locale: "en"
persona_id: "06-technical-lead"
sdlc_phase: "Design"
cluster: "architect"
previous: "05-software-architect"
next: "07-engineering-manager"
reading_time: 19
tags: ["persona", "technical-lead", "copilot", "context-engineering", "code-review"]
---

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="28" height="28" style="vertical-align:-6px;"><rect x="1.5" y="1.5" width="61" height="61" rx="10" ry="10" fill="#FFF8E1" stroke="#FFB900" stroke-width="1.2"/><circle cx="32" cy="26" r="8" fill="none" stroke="#FFB900" stroke-width="2.5"/><path d="M20 48c0-8 5.4-12 12-12s12 4 12 12" fill="none" stroke="#FFB900" stroke-width="2.5"/></svg> Technical Lead

[← Previous: Software Architect](./05-software-architect.md) · [↑ Index](../index.md) · [Next: Engineering Manager →](./07-engineering-manager.md)

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

> The Technical Lead is the persona that engineers context for the squad. In an AI-native SDLC, the Technical Lead operates a stack of validated primitives that make the team's agents fast, cheap, and correct.

## 1. Executive summary

The Technical Lead owns the team-level primitives catalog: `AGENTS.md`, scoped instructions, prompts, skills, hooks, and the routing table that binds them. In an AI-native SDLC the Technical Lead operates inside the Design phase with a fixed set of primitives: one context auditing agent, four slash prompts, scoped instructions, schema-validated hooks, and a curated list of validated MCPs. Primary outputs are the audited context budget, the scope-split plan for large tasks, primed context packs for new features, and the squad primitives kit.

## 2. Role and responsibilities

Think of the Technical Lead like the chief of staff for a surgical team. They do not hold the scalpel, but they make sure the instruments are sterile, labeled, and within reach before the surgeon starts. In an AI-native SDLC the instruments are agents, prompts, instructions, skills, and hooks, and the Technical Lead is accountable for the fact that the squad reaches for the right tool without reading the whole repository every time.

Primary responsibilities:

- Author and maintain `AGENTS.md`, the root prompt for every agent in the repository
- Curate the squad's scoped instructions to keep the context budget low
- Govern the prompt catalog, consolidating duplicates and retiring stale commands
- Run context audits on every squad repository to detect bloat and leaks
- Split oversized tasks into parallelizable units with clear scope boundaries
- Operate the Context Auditor agent and the `/audit-context`, `/scope-split`, `/prime-context`, `/team-primitives` prompts
- Align primitives with the Enterprise Architect's principles and the Software Architect's CODEMAP

## 3. Jobs to be done

1. As a Technical Lead, I want the squad's context budget to stay under threshold, so that agents are fast and affordable.
2. As a Technical Lead, I want oversized tasks split into parallelizable units, so that the squad delivers in hours, not sprints.
3. As a Technical Lead, I want context primed before a Developer starts a feature, so that Copilot and Claude Code find the right files immediately.
4. As a Technical Lead, I want the squad primitives kit to be a single directory, so that onboarding a new engineer costs minutes.
5. As a Technical Lead, I want scoped instructions to carry `applyTo` patterns, so that token cost scales with the diff, not the repo.
6. As a Technical Lead, I want context audits to run on every PR, so that the catalog does not rot.

## 4. Pain points before AI-native

1. **Unbounded `AGENTS.md`**. A root prompt grows without review, pushing every agent into the token ceiling.
2. **Prompt sprawl**. Two squads independently author `/implement`, `/build`, and `/do`. Consistency collapses.
3. **Context loaded eagerly**. Every session reads the whole `docs/` folder. Ten thousand tokens spent before the first question.
4. **Large tasks stuck in one session**. A feature meant for three engineers takes one agent three days because nobody split the scope.
5. **New engineers onboard by folklore**. The tribal knowledge of which prompt to use is spoken, not encoded.

## 5. AI-native daily workflow

The Technical Lead operates a fixed loop each day. The loop uses GitHub Copilot primitives inside Visual Studio Code and Claude Code at the terminal, plus a small catalog of validated MCPs for external context.

### Morning setup

1. Open the squad repository in Visual Studio Code. GitHub Copilot Chat loads `AGENTS.md` and the scoped primitives instructions.
2. Pull the latest `main` and list prompts, instructions, agents, and hooks changed overnight.
3. Run `/audit-context` to confirm the squad's context budget is under threshold and that no prompt references a retired file.
4. Review the primitives dashboard generated from GitHub MCP telemetry.

### Midday execution

1. **Context priming**. Invoke `/prime-context` for every feature starting this week. The Context Auditor agent produces a primed context pack that lists the exact files, contracts, and requirement IDs the Developer should read first.
2. **Scope splitting**. Invoke `/scope-split` on any task estimated above one working day. The agent decomposes the work into parallelizable units with explicit dependencies and handoffs.
3. **Primitive curation**. Invoke `/team-primitives` on any new prompt, instruction, or hook proposed by the squad. The agent checks for duplication, scope correctness, and token-cost impact.
4. **Cross-squad consultation**. Raise primitive proposals in the architecture Teams channel via the Microsoft 365 Agents SDK MCP for feedback from peer Technical Leads.

### Afternoon review

1. Invoke `/audit-context` as the final sweep on all open PRs. Block merge on any PR that breaks the context budget unless a linked scope-split plan justifies the change.
2. Open a pull request on primitives changes. GitHub Copilot Code Review comments on `applyTo` patterns, duplication, and token-cost impact.
3. Publish the daily primitives digest to the squad Teams channel via the Microsoft 365 Agents SDK, summarizing new, revised, and retired primitives.
4. Update the routing table in `docs/routing.md` so every repository maps its canonical prompt, agent, and instructions set.

## 6. Recommended primitives

### Agent

| Agent | File | Purpose |
|-------|------|---------|
| `context-auditor` | `.github/agents/context-auditor.agent.md` | Audit context budget, split scope, prime context, curate team primitives |

The Context Auditor uses `claude-sonnet-4-6` by default. Tools: `read`, `edit`, `search`, `grep`, `glob`. No `bash` access. Extended thinking is enabled for `/scope-split` only, where dependency analysis benefits from deeper reasoning.

### Slash prompts

| Command | File | Purpose |
|---------|------|---------|
| `/audit-context` | `.github/prompts/audit-context.prompt.md` | Confirm the context budget is under threshold and no prompt references a retired file |
| `/scope-split` | `.github/prompts/scope-split.prompt.md` | Decompose an oversized task into parallelizable units with explicit dependencies |
| `/prime-context` | `.github/prompts/prime-context.prompt.md` | Produce a primed context pack listing exact files, contracts, and requirement IDs |
| `/team-primitives` | `.github/prompts/team-primitives.prompt.md` | Curate new prompts, instructions, and hooks for the squad |

### Instructions scoped

Scoped `applyTo` reduces token cost by approximately 68 percent compared to global instructions.

| Scope (`applyTo`) | File | Purpose |
|-------------------|------|---------|
| `AGENTS.md` | `.github/instructions/agents-root.instructions.md` | Root prompt format, token budget, routing syntax |
| `.github/prompts/**/*.prompt.md` | `.github/instructions/prompts.instructions.md` | Prompt frontmatter, input contract, output shape |
| `.github/instructions/**/*.instructions.md` | `.github/instructions/scoped-instructions.instructions.md` | `applyTo` discipline and content budget |

### Hooks

Hooks cost zero LLM tokens. They are the strongest governance layer for primitives.

- `pre-commit`: reject any prompt or instructions file that exceeds the per-file token budget or lacks frontmatter
- `post-commit`: regenerate the routing table and the primitives index
- `pre-merge`: run `/audit-context` against the PR diff and block merge on unresolved findings

## 7. Validated MCPs

| MCP | Purpose | Owner |
|-----|---------|-------|
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | Inspect repositories, PRs, and Actions runs to audit context usage across the squad | GitHub (official) |
| [Microsoft Learn Docs MCP](https://github.com/microsoftdocs/mcp) | Ground primitives in current Microsoft and Azure documentation, avoiding stale snippets | Microsoft (official) |
| [Azure MCP Server](https://github.com/Azure/azure-mcp) | Correlate primitives behavior with Application Insights telemetry on agent runs | Microsoft (official) |
| [Azure DevOps MCP Server](https://github.com/microsoft/azure-devops-mcp) | Read Azure Boards work items that inform scope splits when the team uses Azure DevOps | Microsoft (official) |
| [Microsoft 365 Agents SDK MCP](https://learn.microsoft.com/microsoft-365/agents-sdk/) | Publish primitives digests to Teams and ingest feedback from Outlook | Microsoft (official) |

## 8. Real examples

### Example 1: prime context for a new feature

**Input**: A feature to add partner SSO to the portal, with approved requirements and an accepted contract.

**Invocation**: `/prime-context`.

**Expected output**:

1. A `docs/primed-context/partner-sso.md` listing the six source files the Developer should read first, the two contracts the feature touches, the four requirement IDs, and the single ADR that constrains the choice of token broker.
2. A primed-context link attached to the GitHub issue via the GitHub MCP so any engineer who picks up the task starts with the right files open in Visual Studio Code.

### Example 2: scope split on an oversized task

**Input**: A ticket estimated at seven working days for a single engineer to introduce feature-flag rollout across four services.

**Invocation**: `/scope-split`.

**Expected output**:

1. A `docs/scope-splits/feature-flag-rollout.md` with five parallelizable units, their dependencies, and named engineer assignments.
2. Five GitHub issues created via the GitHub MCP, each with a primed-context link and an acceptance criterion.
3. A routing table update so each unit maps to the correct agent and prompt set.

## 9. Anti-patterns

1. **Growing `AGENTS.md` by accretion**. Every squad adds a paragraph, nobody removes one. Mitigation: `pre-commit` hook enforces the root budget.
2. **Copy-paste prompts across repos**. Drift guarantees inconsistent behavior. Mitigation: central prompt catalog with semantic versioning and `/team-primitives` curation.
3. **Eagerly loading the whole `docs/`**. Token waste. Mitigation: scoped instructions with `applyTo` and a primed-context pack per feature.
4. **Splitting scope without dependencies**. Parallel units that silently collide produce rework. Mitigation: `/scope-split` emits an explicit dependency graph and enforces it in the routing table.
5. **Primitives authored without review**. Unvetted prompts invite hallucination. Mitigation: every primitive lands via PR with Copilot Code Review and human approval.

## 10. KPIs and impact metrics

| KPI | Baseline | Target | Measurement |
|-----|----------|--------|-------------|
| Context budget compliance across squad | 50 percent | 100 percent | Audit-context dashboard |
| Prompt duplication rate | 35 percent | < 5 percent | Prompt catalog diff |
| Time to onboard a new engineer | 10 days | < 2 days | Ramp survey |
| Scope-split coverage on oversized tasks | 20 percent | 100 percent | GitHub issue labels |
| Primed-context adoption per feature | 30 percent | 100 percent | GitHub PR metadata audit |
| Agent token cost per merged PR | 1.5M | < 1M | Copilot usage report |

## 11. Maturity in four levels

| Level | Name | Markers |
|-------|------|---------|
| L1 | Manual | No `AGENTS.md`, prompts ad-hoc, context loaded eagerly |
| L2 | Assisted | `AGENTS.md` exists but untested, no scoped instructions, no audits |
| L3 | Augmented | Context Auditor agent, four slash prompts, scoped instructions, GitHub MCP, audit-context on PR |
| L4 | Autonomous | Full primitives kit, hooks enforced, primed-context standard per feature, scope splits automatic, routing table live |

## 12. Integration with other personas

- **From Enterprise Architect**: principles and gate expressions that constrain primitives design
- **From Software Architect**: `CODEMAP.md` and contracts that inform the routing table
- **To Developer**: primed-context packs, scope splits, and curated prompts ready for use
- **To QA Engineer**: testable scope units with explicit acceptance linking
- **To DevOps Engineer**: hooks as the governance layer on every workflow
- **To Engineering Manager**: audit data that grounds capacity and staffing decisions
- **To Release Manager**: routing table as the canonical map from PRs to the primitives that produced them

## 13. Glossary

- **AGENTS.md**: root prompt loaded by every agent on every session, bounded by a strict token budget.
- **Primed context**: a curated pack of files, contracts, and requirement IDs that a new session should read first.
- **Scope split**: structured decomposition of an oversized task into parallelizable units with explicit dependencies.
- **Routing table**: the canonical map from repositories and directories to the agents, prompts, and instructions that govern them.
- **Scoped instructions**: guidance applied by pattern match on file paths via `applyTo`, keeping token cost proportional to the diff.
- **Context budget**: the per-session token ceiling enforced by hooks and measured by `/audit-context`.

## 14. References

- [GitHub Copilot documentation](https://docs.github.com/en/copilot) — agent mode, prompts, instructions, and context controls
- [GitHub Actions documentation](https://docs.github.com/en/actions) — automation for context audits and primitive governance
- [Azure Well-Architected Framework](https://learn.microsoft.com/azure/well-architected/) — operational excellence pillar for sustainable team primitives
- [Microsoft Learn, prompt engineering](https://learn.microsoft.com/azure/ai-services/openai/concepts/prompt-engineering) — guidance that informs prompt catalog quality
- [Microsoft 365 Agents SDK overview](https://learn.microsoft.com/microsoft-365/agents-sdk/) — integrating Teams and Microsoft 365 surfaces into squad workflow
