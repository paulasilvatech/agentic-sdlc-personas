---
title: "Project Manager | Agentic SDLC Personas"
description: "The Project Manager is the persona accountable for predictable delivery across teams and for honest stakeholder communication. In an AI-native SDLC, the Project Manager operates a risk and status loop"
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-24"
version: "1.0.0"
status: "approved"
locale: "en"
persona_id: "10-project-manager"
sdlc_phase: "Delivery"
cluster: "enablement"
previous: "09-scrum-master"
next: "11-devops-engineer"
reading_time: 18
tags: ["persona", "project-manager", "copilot", "risk", "stakeholder"]
---

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="28" height="28" style="vertical-align:-6px;"><rect x="1.5" y="1.5" width="61" height="61" rx="10" ry="10" fill="#F3F2F1" stroke="#605E5C" stroke-width="1.2"/><path d="M18 46L32 18L46 46" fill="none" stroke="#605E5C" stroke-width="2.5"/><path d="M24 36h16" stroke="#605E5C" stroke-width="2"/></svg> Project Manager

[← Previous: Scrum Master](./09-scrum-master.md) · [↑ Index](../index.md) · [Next: Devops Engineer →](./11-devops-engineer.md)

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

> The Project Manager is the persona accountable for predictable delivery across teams and for honest stakeholder communication. In an AI-native SDLC, the Project Manager operates a risk and status loop, not a status-meeting calendar.

## 1. Executive summary

The Project Manager converts a portfolio of commitments into a single, honest picture of progress, risk, and stakeholder expectations. In an AI-native SDLC, the Project Manager works inside the Delivery phase with a fixed set of primitives: one risk-scout agent, four slash prompts, scoped instructions, schema-validated hooks, and a curated list of validated MCPs. The primary outputs are status reports, a live risk register in Azure DevOps, stakeholder maps, and RAID logs that drive decisions instead of decorating meetings.

## 2. Role and responsibilities

Think of the Project Manager like the air-traffic controller at a busy airport. Planes take off and land under their own power, but every takeoff and landing is sequenced, spaced, and reported to the tower. The Project Manager is that tower. In an AI-native SDLC the code and architecture are owned by other personas; the Project Manager owns the sequencing, the slot, and the radio discipline.

Primary responsibilities:

- Maintain the risk register in Azure DevOps with every risk scored, owned, and dated
- Produce weekly status reports that reconcile GitHub Projects, Azure Boards, and incident data
- Run the stakeholder communication cadence through Microsoft Teams and the M365 Agents SDK
- Keep the RAID log current (Risks, Assumptions, Issues, Dependencies) and link every item to a work item
- Facilitate cross-team dependency management with explicit hand-off criteria
- Escalate material risk to the Engineering Manager and Program leadership with proposed mitigations, never with surprises
- Operate the Risk Scout agent and the `/status`, `/risk-log`, `/raid`, `/stakeholder-map` prompts

## 3. Jobs to be done

1. As a Project Manager, I want a weekly status report auto-synthesized from GitHub Projects and Azure Boards, so that I spend time on mitigation, not formatting.
2. As a Project Manager, I want every risk in the register with a probability, impact, owner, and review date, so that risk conversations are concrete.
3. As a Project Manager, I want stakeholders to know what changed and what it means for them, so that trust compounds across quarters.
4. As a Project Manager, I want dependencies tracked across teams with explicit acceptance criteria, so that hand-offs do not slip silently.
5. As a Project Manager, I want the RAID log to be the single source of truth, so that nobody re-litigates decisions in hallway conversations.
6. As a Project Manager, I want an audit trail of every stakeholder commitment, so that scope changes are negotiated with facts.

## 4. Pain points before AI-native

1. **Status theatre**. Leadership asks for a one-page update; the Project Manager spends half a day reformatting the same data from three tools.
2. **Risk registers that are inventories, not instruments**. Every risk is logged; none have owners, review dates, or mitigations. The register is audited, not used.
3. **Stakeholder silence**. Bad news is delayed because there is no safe cadence for delivering it. When it finally lands, it lands with surprise and blame.
4. **Dependency slippage discovered too late**. A downstream team learns on Friday that the upstream team slipped two weeks ago.
5. **RAID logs scattered across documents**. Risks in one place, assumptions in another, dependencies in a third spreadsheet. The same item gets three different IDs.

## 5. AI-native daily workflow

The Project Manager operates a daily and weekly loop. The loop uses GitHub Copilot primitives inside Visual Studio Code, Claude Code at the terminal for long-form synthesis, and Microsoft Teams via the M365 Agents SDK for stakeholder cadence.

### Morning setup

1. Open Visual Studio Code on the `program-ops` repository. GitHub Copilot Chat loads the scoped `.github/instructions/pm.instructions.md`.
2. Invoke `/risk-log`. The Risk Scout agent reviews the register, flags risks overdue for review, and drafts updates where new evidence is available.
3. Scan the Teams overnight digest from the M365 Agents SDK for any stakeholder message that requires a same-day reply.

### Midday execution

1. Run `/status` for the active project. The agent pulls GitHub Projects status, Azure Boards iteration burn-up, Application Insights incident count via the Azure MCP, and composes a draft status report.
2. Reconcile cross-team dependencies by running `/raid`. The agent updates the RAID log with new items detected from PR labels and work-item state transitions.
3. Hold dependency sync meetings where needed. Each agreement is written back to the RAID log immediately, with an owner and a target date.

### Afternoon review

1. Publish the status report. The M365 Agents SDK posts it into the appropriate Teams channels, with links back to the repository.
2. Invoke `/stakeholder-map` weekly. The agent refreshes the stakeholder inventory, flags stakeholders who have not received an update in over two weeks, and proposes outreach drafts.
3. Close the day by committing the RAID log and the risk register updates to the `program-ops` repository. GitHub Actions publishes them to the Azure Static Web App that hosts the program dashboard.

## 6. Recommended primitives

### Agent

| Agent | File | Purpose |
|-------|------|---------|
| `risk-scout` | `.github/agents/risk-scout.agent.md` | Maintain the risk register, draft status reports, update the RAID log, refresh the stakeholder map |

The Risk Scout agent uses `claude-sonnet-4-6` by default, with tools `read`, `search`, `grep`, `bash`. It pulls context from GitHub, Azure DevOps, Azure, and Microsoft 365 Agents SDK MCPs. Extended thinking is enabled for dependency analyses that cross multiple teams.

### Slash prompts

| Command | File | Purpose |
|---------|------|---------|
| `/status` | `.github/prompts/status.prompt.md` | Compose the weekly status report from reconciled sources |
| `/risk-log` | `.github/prompts/risk-log.prompt.md` | Review and refresh the risk register, flag aging risks |
| `/raid` | `.github/prompts/raid.prompt.md` | Update the RAID log from recent work-item and PR activity |
| `/stakeholder-map` | `.github/prompts/stakeholder-map.prompt.md` | Refresh the stakeholder inventory and propose outreach |

### Instructions scoped

Scoped `applyTo` keeps program artifacts distinct from team-level content.

| Scope (`applyTo`) | File | Purpose |
|-------------------|------|---------|
| `program-ops/status/**` | `.github/instructions/status.instructions.md` | Status report tone, one-page ceiling, citation discipline |
| `program-ops/risks/**` | `.github/instructions/risks.instructions.md` | Risk scoring rubric, owner discipline, mitigation phrasing |
| `program-ops/stakeholders/**` | `.github/instructions/stakeholders.instructions.md` | Stakeholder map format, outreach cadence, escalation rules |

### Hooks

Hooks are zero-token governance for program artifacts.

- `pre-commit`: reject a risk without a scored probability, impact, owner, and review date
- `post-commit`: regenerate the program dashboard JSON on any RAID change
- `pre-push`: validate that every status report cites specific work items and Application Insights incidents

## 7. Validated MCPs

Every MCP below is registered in the MCP catalog. Do not reference any MCP that is not in the catalog.

| MCP | Status | Use in this persona |
|-----|--------|---------------------|
| [Azure DevOps MCP Server](https://github.com/microsoft/azure-devops-mcp) | Official (Microsoft) | Read and update Azure Boards work items, risk register entries, and iteration data |
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | Official | Read GitHub Projects state, PR status, and Actions runs for status composition |
| [Azure MCP Server](https://github.com/Azure/azure-mcp) | Official (Microsoft) | Query Azure Monitor and Application Insights for incident evidence behind risks |
| [Microsoft Learn Docs MCP](https://github.com/microsoftdocs/mcp) | Official | Ground program guidance in Microsoft Learn and GitHub Docs |
| [Microsoft 365 Agents SDK MCP](https://learn.microsoft.com/microsoft-365/agents-sdk/) | Official (Microsoft) | Post status reports and stakeholder outreach drafts into Microsoft Teams |

## 8. Real examples

### Example 1: weekly status report for a regulated program

**Input**: A payments program with three squads, one active production incident, and an auditor review next month.

**Invocation**: `/status`.

**Expected output**:

1. A one-page status report in `program-ops/status/2026-W17.md` with sections: commitments, progress, risks in motion, decisions needed, upcoming milestones.
2. Every claim cites a work item ID from Azure Boards or a PR from GitHub Projects.
3. The active incident is linked to its Application Insights timeline.
4. A Teams post via the M365 Agents SDK to the executive sponsor channel with the one-page summary.

### Example 2: cross-team dependency at risk

**Input**: The checkout squad depends on the identity squad delivering a new token endpoint by week 18. Evidence shows the identity squad is behind.

**Invocation**: `/raid`.

**Expected output**:

1. A new RAID entry `program-ops/raid/identity-token-endpoint.md` with type Dependency, owner set to the identity squad lead, impact described in checkout-squad terms, mitigation proposals (temporary stub, feature flag).
2. An Azure Boards dependency work item created and linked to both squad boards.
3. A Teams message to both squad leads with the facts, not a meeting invite.
4. A follow-up on the stakeholder map: the checkout squad product owner is flagged for a targeted update.

## 9. Anti-patterns

1. **Status reports that rephrase the plan**. Paraphrasing the plan is not progress. Mitigation: the `status.instructions.md` requires evidence citations for every claim.
2. **Risks without owners**. A risk without an owner is a wish. Mitigation: the pre-commit hook rejects unowned risks.
3. **Stakeholder maps that only list names**. A map without cadence and interests is a phonebook. Mitigation: `/stakeholder-map` requires cadence, interests, and preferred channel for each stakeholder.
4. **RAID logs duplicated across tools**. Multiple sources of truth create disputes. Mitigation: the RAID log lives in the `program-ops` repository; everything else is a view.
5. **Escalation by surprise**. Bad news that lands without proposed mitigations loses trust. Mitigation: the Risk Scout agent always accompanies an escalation with at least two mitigation options.

## 10. KPIs and impact metrics

| Metric | Baseline (manual) | Target (agentic) | Measurement |
|--------|-------------------|------------------|-------------|
| Status report preparation time | 8 hours per week | Under 90 minutes | Time-to-publish log |
| Risk median review age | 21 days | Under 7 days | Risk register audit |
| Dependency slippage lead time | 3 days warning | Over 10 days warning | RAID detection history |
| Stakeholder satisfaction (NPS) | Plus 10 | Plus 40 | Quarterly program survey |
| Escalation-with-mitigation rate | 35 percent | Over 90 percent | Escalation audit |
| Token efficiency | N/A | Under 200k tokens per week | Copilot usage report |

## 11. Maturity in four levels

| Level | Name | Markers |
|-------|------|---------|
| L1 | Manual | Status reports assembled by hand, risks in a spreadsheet, RAID scattered |
| L2 | Assisted | GitHub Copilot Chat for drafting, no agent, some Azure DevOps dashboards |
| L3 | Augmented | Risk Scout agent, four slash prompts, scoped instructions, RAID log in `program-ops` |
| L4 | Agentic | Full primitives kit, hooks enforced, stakeholder cadence automated in Teams via M365 Agents SDK, risks always scored, maturity scorecard above 80 percent |

## 12. Integration with other personas

- **With Engineering Manager**: shared delivery-health view, risk-to-capacity translation
- **With Scrum Master**: sprint flow informs program pacing
- **With Product Owner**: scope negotiation backed by RAID evidence
- **With Technical Lead**: architectural risks land in the program register with owners
- **With Release Manager**: release-window coordination across squads
- **With InfoSec Officer and Compliance Auditor**: program-level controls, audit evidence, regulated-industry cadence
- **With SRE**: incident-derived risks recorded and tracked

## 13. Glossary

- **RAID log**: the consolidated register of Risks, Assumptions, Issues, Dependencies used as the program's single source of truth.
- **Risk register**: the risk subset of the RAID log, kept in Azure DevOps with probability, impact, owner, and review date.
- **Stakeholder map**: a living inventory of stakeholders, their interests, their cadence, and their preferred channel.
- **Status report**: a weekly, one-page artifact that reconciles commitments, progress, risks in motion, decisions needed, and upcoming milestones.
- **Escalation with mitigation**: the discipline of never delivering bad news without at least two proposed options.
- **Dependency hand-off**: the documented hand-off between two teams, with explicit acceptance criteria.

## 14. References

- [Azure Boards documentation](https://learn.microsoft.com/azure/devops/boards/) — authoritative guidance for risk registers and work-item tracking
- [GitHub Projects documentation](https://docs.github.com/issues/planning-and-tracking-with-projects) — program-level views across multiple repositories
- [Microsoft 365 Agents SDK](https://learn.microsoft.com/microsoft-365/agents-sdk/) — post status reports and stakeholder outreach into Teams
- [Azure Monitor documentation](https://learn.microsoft.com/azure/azure-monitor/) — incident evidence for risk scoring
- [GitHub Actions documentation](https://docs.github.com/actions) — schedule program dashboards and reconciliation jobs
