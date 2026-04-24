---
title: "Product Owner | Agentic SDLC Personas"
description: "The Product Owner is the persona that writes, governs, and closes the loop on the specification. In an AI-native SDLC, the Product Owner operates a stack of validated primitives that turn intent into "
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-24"
version: "1.0.0"
status: "approved"
locale: "en"
persona_id: "01-product-owner"
sdlc_phase: "Planning"
cluster: "product"
previous: ""
next: "02-business-manager"
reading_time: 20
tags: ["persona", "product-owner", "copilot", "specification", "ears"]
---

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="28" height="28" style="vertical-align:-6px;"><rect x="1.5" y="1.5" width="61" height="61" rx="10" ry="10" fill="#FDECEA" stroke="#E74856" stroke-width="1.2"/><path d="M32 16v32M20 28h24M20 36h24" stroke="#E74856" stroke-width="3" stroke-linecap="round"/></svg> Product Owner

[↑ Index](../index.md) · [Next: Business Manager →](./02-business-manager.md)

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

> The Product Owner is the persona that writes, governs, and closes the loop on the specification. In an AI-native SDLC, the Product Owner operates a stack of validated primitives that turn intent into a machine-readable contract.

## 1. Executive summary

The Product Owner converts ambiguous business intent into an approved, testable specification that the rest of the SDLC can execute without translation loss. In an AI-native SDLC the Product Owner operates inside the Planning phase with a fixed set of primitives: one specification agent, four slash prompts, scoped instructions, schema-validated hooks, and a curated list of validated MCPs. Primary outputs are `SPECIFICATION.md` documents in EARS form, acceptance criteria in Given-When-Then, traceability links from requirement to test, and decision records for every scope change.

## 2. Role and responsibilities

Think of the Product Owner like a civil engineer authoring the specification of a bridge. The builders, inspectors, and regulators all read the same document and derive their work from it. The Product Owner does not pour concrete, but they are accountable for the fact that every pour, weld, and cable matches a numbered clause that someone can verify under load. In an AI-native SDLC the specification is the contract between humans and agents, and the Product Owner is its editor in chief.

Primary responsibilities:

- Author and maintain `SPECIFICATION.md` for every feature, using EARS requirements and Given-When-Then acceptance criteria
- Govern the backlog in GitHub Projects or Azure Boards, ensuring every item links to a spec section
- Define and protect the product outcome hypothesis, not the output list
- Resolve scope conflicts between stakeholders before they reach the Developer
- Operate the Spec Scribe agent and the `/draft-spec`, `/earsify`, `/review-spec`, `/link-acceptance` prompts
- Close the loop by confirming acceptance on merged pull requests in GitHub
- Maintain the traceability matrix from requirement to test to deployed artifact
- Publish release notes from the specification diff, not from the code diff

## 3. Jobs to be done

1. As a Product Owner, I want to convert a stakeholder conversation into a draft spec within one hour, so that the team never waits on me to start discovery.
2. As a Product Owner, I want every requirement in EARS form, so that agents can parse it without interpretation.
3. As a Product Owner, I want every acceptance criterion in Given-When-Then, so that the QA Engineer can generate tests directly from the spec.
4. As a Product Owner, I want a live traceability link from each requirement to its test and its deployed artifact, so that I can answer audit questions in minutes.
5. As a Product Owner, I want the spec to refuse merge when acceptance is missing, so that scope drift is caught before code is written.
6. As a Product Owner, I want release notes to be generated from the spec diff, so that stakeholders see value delivered, not commits shipped.

## 4. Pain points before AI-native

1. **Ambiguous tickets**. Free-form descriptions in a tracker force every reader to guess intent. Developers implement the easiest interpretation; QA tests the most defensive one.
2. **Verbal handoffs**. Scope lives in meeting memory. When the meeting is over, the scope quietly forks.
3. **Acceptance criteria invented at review time**. Reviewers negotiate the definition of done after the code is written, so rework is inevitable.
4. **Traceability built by hand in spreadsheets**. The matrix is obsolete the day it is published, and auditors know it.
5. **Release notes written by the release manager from commit logs**. Stakeholders see technical churn, not product outcomes, and trust erodes.

## 5. AI-native daily workflow

The Product Owner operates a fixed loop each day. The loop uses GitHub Copilot primitives inside Visual Studio Code and Claude Code at the terminal, plus a small catalog of validated MCPs for external context.

### Morning setup

1. Open the repository in Visual Studio Code. GitHub Copilot Chat loads `AGENTS.md` and the scoped spec instructions.
2. Pull the latest `main` and open the active feature branch for the spec in progress.
3. Review overnight stakeholder input captured in Microsoft Teams threads and Outlook via the Microsoft 365 Agents SDK MCP.
4. Run `/review-spec` on the previous day's draft to catch EARS violations and missing acceptance.

### Midday execution

1. **Stakeholder intake**. Invoke `/draft-spec` with the meeting transcript or Teams thread. The Spec Scribe agent produces a first draft with numbered requirements and open questions flagged.
2. **EARS conversion**. Invoke `/earsify` on any free-form statements. The agent rewrites each one in `WHEN ... THE system SHALL ...` form and refuses to emit requirements without a triggering condition.
3. **Acceptance linking**. Invoke `/link-acceptance` to attach Given-When-Then criteria to every requirement. The agent blocks the spec from moving to review until every requirement has at least one criterion.
4. **Backlog sync**. Use the GitHub MCP or the Azure DevOps MCP to create or update work items that reference spec section anchors, not prose summaries.

### Afternoon review

1. Invoke `/review-spec` to run the final governance sweep. The agent checks for testability, contradictions, duplicates, and orphaned requirements.
2. Open a pull request on `SPECIFICATION.md`. GitHub Copilot Code Review comments on structural issues; human stakeholders approve content.
3. Update the traceability matrix. A post-merge hook regenerates the matrix from spec anchors, test IDs, and deployment records in GitHub Actions.
4. Publish the daily spec digest to the Teams channel via Microsoft 365 Agents SDK, summarizing accepted requirements and open questions.

## 6. Recommended primitives

### Agent

| Agent | File | Purpose |
|-------|------|---------|
| `spec-scribe` | `.github/agents/spec-scribe.agent.md` | Draft, earsify, review, and link acceptance for `SPECIFICATION.md` |

The Spec Scribe uses `claude-sonnet-4-6` by default. Tools: `read`, `edit`, `search`, `grep`, `glob`. No `bash` access, because the Product Owner persona never executes code. Extended thinking is enabled for `/review-spec` only, where contradiction detection benefits from deep reasoning.

### Slash prompts

| Command | File | Purpose |
|---------|------|---------|
| `/draft-spec` | `.github/prompts/draft-spec.prompt.md` | Turn a raw stakeholder input into a numbered draft spec |
| `/earsify` | `.github/prompts/earsify.prompt.md` | Rewrite free-form requirements into EARS syntax |
| `/review-spec` | `.github/prompts/review-spec.prompt.md` | Governance sweep for testability, contradictions, orphans |
| `/link-acceptance` | `.github/prompts/link-acceptance.prompt.md` | Attach Given-When-Then criteria to every requirement |

### Instructions scoped

Scoped `applyTo` reduces token cost by approximately 68 percent compared to global instructions.

| Scope (`applyTo`) | File | Purpose |
|-------------------|------|---------|
| `docs/specs/**/*.md` | `.github/instructions/specs.instructions.md` | EARS format, numbering, anchors, and banned vague verbs |
| `docs/adr/**/*.md` | `.github/instructions/adr.instructions.md` | Decision record format when a spec requires an architectural choice |
| `docs/releases/**/*.md` | `.github/instructions/release-notes.instructions.md` | Release notes generated from spec diff, not commit log |

### Hooks

Hooks cost zero LLM tokens. They are the strongest governance layer for specifications.

- `pre-commit`: reject any spec file with a requirement missing an EARS trigger or an orphaned acceptance criterion
- `post-commit`: regenerate the traceability matrix from spec anchors and test IDs
- `pre-merge`: block merge of any spec change that does not include a changelog entry and a linked work item

## 7. Validated MCPs

| MCP | Purpose | Owner |
|-----|---------|-------|
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | Read and update GitHub Projects, issues, and PRs for backlog governance | GitHub (official) |
| [Azure DevOps MCP Server](https://github.com/microsoft/azure-devops-mcp) | Read and update Azure Boards work items when the team uses Azure DevOps | Microsoft (official) |
| [Microsoft Learn Docs MCP](https://github.com/microsoftdocs/mcp) | Fetch current Microsoft product documentation when writing specs for M365 or Azure features | Microsoft (official) |
| [Microsoft 365 Agents SDK MCP](https://learn.microsoft.com/microsoft-365/agents-sdk/) | Pull Teams threads, Outlook decisions, and SharePoint artifacts into the spec intake | Microsoft (official) |
| [Azure MCP Server](https://github.com/Azure/azure-mcp) | Query Application Insights and Azure Monitor to ground specs in production behavior | Microsoft (official) |

## 8. Real examples

### Example 1: draft a spec from a Teams conversation

**Input**: A 45-minute Microsoft Teams thread between sales and support proposing a self-service contract renewal flow.

**Invocation**: `/draft-spec` with the thread exported via the Microsoft 365 Agents SDK MCP.

**Expected output**:

1. A `docs/specs/contract-renewal/SPECIFICATION.md` with six numbered EARS requirements, each followed by Given-When-Then acceptance criteria.
2. A GitHub issue per requirement created through the GitHub MCP, linked to the spec anchor.
3. An open-questions section listing four points that require a decision before approval.

### Example 2: governance sweep before merge

**Input**: A 28-requirement spec for a billing upgrade, already earsified by an earlier pass.

**Invocation**: `/review-spec`.

**Expected output**:

1. A review report flagging two contradictions between requirements 7 and 14, one duplicate between 19 and 22, and three orphaned acceptance criteria not attached to any requirement.
2. A pull request comment with anchor-linked suggestions.
3. A blocked merge until the author resolves all three categories.

## 9. Anti-patterns

1. **Writing specs as prose**. Paragraphs hide contradictions and cannot be consumed by agents. Mitigation: enforce EARS via the `pre-commit` hook and the `/earsify` prompt.
2. **Skipping acceptance criteria**. A requirement without Given-When-Then is not testable. Mitigation: `/link-acceptance` refuses to close the loop, and the hook blocks commit.
3. **Backlog items without spec anchors**. If the ticket does not link to a numbered requirement, scope will drift. Mitigation: the GitHub MCP auto-injects the anchor URL on issue creation.
4. **Release notes generated from commits**. Stakeholders see technical noise. Mitigation: release notes are generated from the spec diff via the scoped instructions.
5. **Ambiguous verbs**. Words like "support", "handle", "improve" are banned by the spec instructions. Mitigation: the `pre-commit` hook rejects them.

## 10. KPIs and impact metrics

| KPI | Baseline | Target | Measurement |
|-----|----------|--------|-------------|
| Spec lead time, intake to approved | 5 days | < 1 day | GitHub PR timestamps on `SPECIFICATION.md` |
| Requirements in EARS form | 20 percent | 100 percent | Spec linter report in GitHub Actions |
| Acceptance coverage, requirements with Given-When-Then | 40 percent | 100 percent | Traceability matrix |
| Scope change rate post-approval | 35 percent | < 10 percent | Count of reopened spec PRs |
| Time to answer an audit query | 2 days | < 1 hour | Traceability matrix query log |
| Stakeholder satisfaction on clarity | Unknown | > 4.2 of 5 | Quarterly survey via Microsoft Forms |

## 11. Maturity in four levels

| Level | Name | Markers |
|-------|------|---------|
| L1 | Manual | Prose tickets, no EARS, no acceptance, scope negotiated at review |
| L2 | Assisted | GitHub Copilot used to polish ticket text, still no machine-readable spec |
| L3 | Augmented | Spec Scribe agent, four slash prompts, scoped instructions, one or two MCPs, EARS enforced |
| L4 | Autonomous | Full primitives kit, hooks enforced, traceability auto-generated, release notes from spec diff, stakeholder digest automated |

## 12. Integration with other personas

- **To Requirements Engineer**: approved `SPECIFICATION.md` with numbered EARS requirements as the canonical input for detailed decomposition
- **To Business Manager**: requirement-level KPI hooks so outcomes can be tied to the value story
- **To Enterprise Architect**: spec clauses that trigger a new ADR or invoke an existing principle
- **To Software Architect**: contract surface area used to derive `CODEMAP.md` and API contracts
- **To QA Engineer**: Given-When-Then acceptance as the direct source of test cases
- **To Developer**: spec anchor on every pull request for traceable implementation
- **To Tech Writer**: release notes generated from the spec diff, not the commit diff

## 13. Glossary

- **EARS**: Easy Approach to Requirements Syntax. The canonical `WHEN ... THE system SHALL ...` form used in `SPECIFICATION.md`.
- **Given-When-Then**: acceptance criterion format that binds a precondition, an action, and an observable outcome.
- **Spec anchor**: stable markdown anchor on a requirement ID, used as the canonical link target from issues, PRs, and tests.
- **Traceability matrix**: generated table that maps each requirement to its tests, pull requests, and deployed artifacts.
- **Outcome hypothesis**: the measurable business result the feature is supposed to produce, distinct from the output list.
- **Backlog**: the ordered list of work items in GitHub Projects or Azure Boards, each linked to a spec anchor.

## 14. References

- [GitHub Projects documentation](https://docs.github.com/en/issues/planning-and-tracking-with-projects) — planning and tracking specs and backlog
- [Azure Boards documentation](https://learn.microsoft.com/azure/devops/boards/) — work item tracking when the team uses Azure DevOps
- [GitHub Copilot documentation](https://docs.github.com/en/copilot) — authoritative source for Copilot features, agent mode, and instructions
- [Microsoft 365 Agents SDK overview](https://learn.microsoft.com/microsoft-365/agents-sdk/) — integrating Teams and Microsoft 365 surfaces
- [EARS notation reference, Microsoft Learn](https://learn.microsoft.com/azure/well-architected/) — guidance on requirement quality and architectural alignment
