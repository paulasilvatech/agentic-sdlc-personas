---
title: "Software Architect | Agentic SDLC Personas"
description: "The Software Architect is the persona that designs the program skeleton and the API contract. In an AI-native SDLC, the Software Architect operates a stack of validated primitives that produce machine"
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-24"
version: "1.0.0"
status: "approved"
locale: "en"
persona_id: "05-software-architect"
sdlc_phase: "Design"
cluster: "architect"
previous: "04-enterprise-architect"
next: "06-technical-lead"
reading_time: 20
tags: ["persona", "software-architect", "copilot", "codemap", "api-contracts"]
---

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="28" height="28" style="vertical-align:-6px;"><rect x="1.5" y="1.5" width="61" height="61" rx="10" ry="10" fill="#FFF8E1" stroke="#FFB900" stroke-width="1.2"/><path d="M16 48L32 16L48 48Z" fill="none" stroke="#FFB900" stroke-width="2.5" stroke-linejoin="round"/></svg> Software Architect

[← Previous: Enterprise Architect](./04-enterprise-architect.md) · [↑ Index](../index.md) · [Next: Technical Lead →](./06-technical-lead.md)

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

> The Software Architect is the persona that designs the program skeleton and the API contract. In an AI-native SDLC, the Software Architect operates a stack of validated primitives that produce machine-readable artifacts for humans and agents.

## 1. Executive summary

The Software Architect translates approved requirements into a coherent program skeleton, module boundaries, and API contracts that the Developer and QA Engineer can execute without ambiguity. In an AI-native SDLC the Software Architect operates inside the Design phase with a fixed set of primitives: one API contract design agent, four slash prompts, scoped instructions, schema-validated hooks, and a curated list of validated MCPs. Primary outputs are `CODEMAP.md`, API contract files, design review records, and domain-driven design scans.

## 2. Role and responsibilities

Think of the Software Architect like an architect designing a factory floor. They do not operate the machines, but they decide where the machines stand, how material flows between them, and what interface each machine exposes to its neighbor. In an AI-native SDLC `CODEMAP.md` is the floor plan, API contracts are the interfaces between machines, and the Software Architect is accountable for the fact that today's flow still works next quarter.

Primary responsibilities:

- Author and maintain `CODEMAP.md` as the canonical program skeleton for humans and agents
- Design and govern API contracts under `docs/contracts/` in OpenAPI, AsyncAPI, or GraphQL SDL form
- Run design reviews with the Enterprise Architect, Technical Lead, and Developer at defined gates
- Run domain-driven design scans to detect leaky boundaries and aggregate violations
- Operate the API Contract Designer agent and the `/codemap`, `/contract`, `/design-review`, `/ddd-scan` prompts
- Maintain backward compatibility discipline and version contracts explicitly
- Align designs with the `CONSTITUTION.md` principles and ADRs from the Enterprise Architect

## 3. Jobs to be done

1. As a Software Architect, I want `CODEMAP.md` to regenerate on every public API change, so that the skeleton is never stale.
2. As a Software Architect, I want API contracts to be the source of truth, so that implementation and tests derive from a single document.
3. As a Software Architect, I want design reviews to be structured and recorded, so that consequences outlive the meeting.
4. As a Software Architect, I want DDD scans to detect leaky boundaries, so that aggregate violations are caught in design, not production.
5. As a Software Architect, I want contract changes to block merge on a breaking-change violation, so that consumers are protected by the gate.
6. As a Software Architect, I want every contract to link to the requirement IDs it satisfies, so that traceability is intact.

## 4. Pain points before AI-native

1. **Diagrams over artifacts**. Boxes and arrows in a slide deck cannot be consumed by an agent or a test generator. Implementation drifts from the picture.
2. **Contracts authored after the fact**. Implementations ship first, contracts are reverse-engineered, and consumers are surprised.
3. **CODEMAP as a README that no one updates**. Once stale, agents hallucinate module structure and humans stop reading.
4. **DDD discipline by heart only**. Aggregate boundaries are remembered, not enforced. Leaks appear under load.
5. **Breaking changes discovered by consumers**. Without a gate, a minor PR breaks partners in production.

## 5. AI-native daily workflow

The Software Architect operates a fixed loop each day. The loop uses GitHub Copilot primitives inside Visual Studio Code and Claude Code at the terminal, plus a small catalog of validated MCPs for external context.

### Morning setup

1. Open the repository in Visual Studio Code. GitHub Copilot Chat loads `AGENTS.md` and the scoped architecture instructions.
2. Pull the latest `main` and review overnight design proposals and contract PRs.
3. Run `/codemap` to confirm the skeleton is in sync with the current source tree.
4. Review the DDD scan dashboard generated by the `/ddd-scan` scheduled GitHub Actions workflow.

### Midday execution

1. **Contract authoring**. Invoke `/contract` on each new or changed API surface. The API Contract Designer agent produces an OpenAPI, AsyncAPI, or GraphQL SDL file and links it to the requirement IDs.
2. **CODEMAP maintenance**. Invoke `/codemap` after any structural change. The agent rewrites the module map, public surface list, and data-flow annotations.
3. **Design review**. Invoke `/design-review` on proposals tagged for architectural impact. The agent prepares the agenda from the diff and records decisions against the ADR catalog.
4. **DDD scan**. Invoke `/ddd-scan` on modules that changed boundaries in the last week. The agent uses `grep` and `glob` to detect cross-aggregate calls and leaked value objects.

### Afternoon review

1. Run contract compatibility checks in GitHub Actions. Block merge on any breaking change without a linked major-version ADR and a migration note.
2. Open a pull request on the contract and `CODEMAP.md` changes. GitHub Copilot Code Review comments on consistency and breaking-change risk.
3. Publish the daily design digest to the engineering Teams channel via the Microsoft 365 Agents SDK, summarizing new contracts, superseded contracts, and open design debates.
4. Update the traceability links from contracts to requirement IDs and deployed artifacts via the Azure MCP Server telemetry.

## 6. Recommended primitives

### Agent

| Agent | File | Purpose |
|-------|------|---------|
| `api-contract-designer` | `.github/agents/api-contract-designer.agent.md` | Author `CODEMAP.md`, API contracts, run design reviews and DDD scans |

The API Contract Designer uses `claude-sonnet-4-6` by default. Tools: `read`, `edit`, `search`, `grep`, `glob`. No `bash` access in the default mode. Extended thinking is enabled for `/ddd-scan` only, where cross-module correlation benefits from deeper reasoning.

### Slash prompts

| Command | File | Purpose |
|---------|------|---------|
| `/codemap` | `.github/prompts/codemap.prompt.md` | Regenerate `CODEMAP.md` with module map, public surface, and data flow |
| `/contract` | `.github/prompts/contract.prompt.md` | Author or revise an API contract linked to requirement IDs |
| `/design-review` | `.github/prompts/design-review.prompt.md` | Prepare and record a structured design review |
| `/ddd-scan` | `.github/prompts/ddd-scan.prompt.md` | Detect leaky boundaries and aggregate violations |

### Instructions scoped

Scoped `applyTo` reduces token cost by approximately 68 percent compared to global instructions.

| Scope (`applyTo`) | File | Purpose |
|-------------------|------|---------|
| `CODEMAP.md` | `.github/instructions/codemap.instructions.md` | Module map schema, public surface annotation, data-flow syntax |
| `docs/contracts/**/*.yaml,docs/contracts/**/*.graphql` | `.github/instructions/contracts.instructions.md` | OpenAPI, AsyncAPI, GraphQL SDL conventions and compatibility rules |
| `docs/design/**/*.md` | `.github/instructions/design.instructions.md` | Design proposal template, review agenda, decision record |

### Hooks

Hooks cost zero LLM tokens. They are the strongest governance layer for architecture.

- `pre-commit`: reject any contract change without a linked requirement ID and a compatibility classification (`safe`, `additive`, `breaking`)
- `post-commit`: regenerate `CODEMAP.md` on any public surface change
- `pre-merge`: run the DDD scan and the contract compatibility check; block merge on unresolved findings

## 7. Validated MCPs

| MCP | Purpose | Owner |
|-----|---------|-------|
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | Read PRs, CodeQL results, and Actions runs relevant to contract changes | GitHub (official) |
| [Azure MCP Server](https://github.com/Azure/azure-mcp) | Query Application Insights to bind contracts to observed production traffic shapes | Microsoft (official) |
| [Microsoft Learn Docs MCP](https://github.com/microsoftdocs/mcp) | Ground contract designs on Azure and Microsoft 365 API reference documentation | Microsoft (official) |
| [Azure DevOps MCP Server](https://github.com/microsoft/azure-devops-mcp) | Read architecture work items in Azure Boards when the team uses Azure DevOps | Microsoft (official) |
| [Microsoft 365 Agents SDK MCP](https://learn.microsoft.com/microsoft-365/agents-sdk/) | Publish design digests and ingest design-review decisions from Teams | Microsoft (official) |

## 8. Real examples

### Example 1: new contract for a partner integration

**Input**: A requirement cluster for a new partner webhook integration, approved by the Requirements Engineer.

**Invocation**: `/contract` followed by `/design-review`.

**Expected output**:

1. A `docs/contracts/partner-webhook/openapi.yaml` with endpoints, schemas, and links to requirement IDs.
2. A `docs/contracts/partner-webhook/asyncapi.yaml` if the contract includes event shapes.
3. A design review record in `docs/design/reviews/2026-q3-partner-webhook.md` with decisions and a superseded-by link if the new contract replaces an older one.
4. A pull request with contract compatibility classification `additive` and Copilot Code Review comments on schema hygiene.

### Example 2: DDD scan after a module refactor

**Input**: A developer refactored the `orders` module into three submodules.

**Invocation**: `/ddd-scan` scoped to `src/orders/**`.

**Expected output**:

1. A scan report in `docs/design/scans/2026-06-orders-ddd.md` identifying four cross-aggregate calls and two leaked value objects.
2. Four GitHub issues filed via the GitHub MCP with a remediation plan and an owning engineer.
3. A `CODEMAP.md` update that annotates the new submodules and flags the remaining leaks.

## 9. Anti-patterns

1. **Contract authored as an afterthought**. If implementation lands first, contracts are reverse-engineered. Mitigation: the `pre-commit` hook blocks implementation PRs whose public surface is not covered in `docs/contracts/`.
2. **CODEMAP drifts**. A stale map breaks agent reasoning. Mitigation: `post-commit` hook regenerates it on any public surface change.
3. **Silent breaking changes**. A field rename shipped as `safe` breaks consumers. Mitigation: contract linter enforces compatibility classification and diff shape.
4. **DDD by memory**. Aggregate boundaries forgotten under deadline pressure leak into persistence. Mitigation: scheduled `/ddd-scan` runs and the `pre-merge` hook.
5. **Design reviews without records**. Decisions evaporate, relitigated next quarter. Mitigation: `/design-review` binds every decision to an ADR entry.

## 10. KPIs and impact metrics

| KPI | Baseline | Target | Measurement |
|-----|----------|--------|-------------|
| CODEMAP freshness, drift detection | 4 weeks | < 24 hours | Post-commit hook output |
| Contracts with linked requirement IDs | 35 percent | 100 percent | Contract linter in GitHub Actions |
| Breaking changes flagged before merge | 55 percent | 100 percent | Pre-merge hook output |
| DDD scan findings remediated within SLA | 40 percent | > 90 percent | Issue closure audit |
| Design review cycle time | 2 weeks | < 5 days | GitHub PR timestamps |
| Contract versioning discipline | 50 percent | 100 percent | Versioned file rename audit |

## 11. Maturity in four levels

| Level | Name | Markers |
|-------|------|---------|
| L1 | Manual | Diagrams in slides, contracts in wikis, CODEMAP absent |
| L2 | Assisted | Copilot used to polish diagrams and prose, contracts reverse-engineered |
| L3 | Augmented | API Contract Designer agent, four slash prompts, scoped instructions, GitHub and Azure MCPs, CODEMAP auto-regenerated |
| L4 | Autonomous | Full primitives kit, hooks enforced, DDD scans scheduled, design digests automated, compatibility gates across all contracts |

## 12. Integration with other personas

- **From Enterprise Architect**: `CONSTITUTION.md` principles and ADRs that constrain contract design
- **From Requirements Engineer**: atomic requirement IDs that anchor contract clauses
- **To Technical Lead**: `CODEMAP.md` and contracts as the baseline for team primitives and scoped instructions
- **To Developer**: API contracts as the source for `IMPLEMENTATION_PLAN.md` and the tests derived from them
- **To QA Engineer**: contracts as direct source for contract tests and schema fuzzing
- **To Platform Architect**: contract surface that platform services must support
- **To Tech Writer**: contracts as the source for developer documentation and changelog entries

## 13. Glossary

- **CODEMAP**: generated document that describes the program skeleton for humans and agents, kept current by hooks.
- **API contract**: machine-readable description of an interface in OpenAPI, AsyncAPI, or GraphQL SDL form.
- **Compatibility classification**: label applied to every contract change as `safe`, `additive`, or `breaking`.
- **Design review**: structured, recorded session that approves or defers design proposals with named participants.
- **DDD scan**: automated sweep that detects cross-aggregate calls and leaked value objects.
- **Aggregate**: a cluster of domain objects with a single root and transactional boundary, per domain-driven design.

## 14. References

- [GitHub Copilot documentation](https://docs.github.com/en/copilot) — agent mode, prompts, and instructions
- [Azure API Design guidance](https://learn.microsoft.com/azure/architecture/best-practices/api-design) — canonical Microsoft guidance on API contract quality
- [Azure Well-Architected Framework](https://learn.microsoft.com/azure/well-architected/) — reliability and operational excellence pillars for architectural alignment
- [CodeQL documentation](https://codeql.github.com/docs/) — static analysis that underpins breaking-change detection
- [GitHub Actions documentation](https://docs.github.com/en/actions) — automation for contract and DDD scans on every PR
