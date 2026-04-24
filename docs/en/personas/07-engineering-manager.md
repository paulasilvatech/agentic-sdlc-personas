---
title: "Engineering Manager | Agentic SDLC Personas"
description: "The Engineering Manager is the persona accountable for the health of the people and the health of the delivery flow. In an AI-native SDLC, the Engineering Manager operates a governance loop over DORA "
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-24"
version: "1.0.0"
status: "approved"
locale: "en"
persona_id: "07-engineering-manager"
sdlc_phase: "Governance"
cluster: "enablement"
previous: "06-technical-lead"
next: "08-ux-designer"
reading_time: 18
tags: ["persona", "engineering-manager", "copilot", "delivery", "people"]
---

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="28" height="28" style="vertical-align:-6px;"><rect x="1.5" y="1.5" width="61" height="61" rx="10" ry="10" fill="#F3F2F1" stroke="#605E5C" stroke-width="1.2"/><rect x="18" y="20" width="28" height="24" rx="3" fill="none" stroke="#605E5C" stroke-width="2.5"/><path d="M26 20v-4h12v4" stroke="#605E5C" stroke-width="2"/></svg> Engineering Manager

[← Previous: Technical Lead](./06-technical-lead.md) · [↑ Index](../index.md) · [Next: Ux Designer →](./08-ux-designer.md)

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

> The Engineering Manager is the persona accountable for the health of the people and the health of the delivery flow. In an AI-native SDLC, the Engineering Manager operates a governance loop over DORA signals, 1:1 agendas, and team-level retrospectives, not a spreadsheet of tickets.

## 1. Executive summary

The Engineering Manager ensures that engineers grow, that delivery flow is predictable, and that organizational risk is surfaced before it becomes incident. In an AI-native SDLC, the Engineering Manager works inside the Governance phase with a fixed set of primitives: one delivery-health agent, four slash prompts, scoped instructions, schema-validated hooks, and a curated list of validated MCPs. The primary outputs are DORA scorecards, 1:1 agendas, retrospective briefs, and staffing recommendations tied to measured flow.

## 2. Role and responsibilities

Think of the Engineering Manager like the conductor of an orchestra during rehearsal season. The conductor does not play an instrument on stage, but the orchestra falls apart without their sense of tempo, dynamics, and rehearsal discipline. In an AI-native SDLC, the code and the architecture are owned by other personas. The Engineering Manager is accountable for tempo: the cadence at which the team learns, ships, and recovers.

Primary responsibilities:

- Track DORA metrics (lead time, deployment frequency, change failure rate, mean time to restore) via GitHub Actions and Azure Monitor workbooks
- Run weekly 1:1s with engineers using a rolling agenda surfaced by the M365 Agents SDK on Microsoft Teams
- Facilitate sprint retrospectives with data pulled from Azure Boards and GitHub Projects
- Own the delivery-health dashboard in Azure Workbooks and keep it linked from the repository `README.md`
- Detect burnout, conflict, and attrition risk using weekly SPACE signals
- Partner with the Technical Lead on staffing, career ladders, and skill gaps
- Operate the Delivery Pulse agent and the `/pulse`, `/one-on-one`, `/retro`, `/staff-ops` prompts

## 3. Jobs to be done

1. As an Engineering Manager, I want a weekly DORA scorecard auto-generated from GitHub Actions and Azure Monitor, so that I discuss facts with my skip-level instead of anecdotes.
2. As an Engineering Manager, I want each 1:1 agenda prefilled with the engineer's recent PRs, incidents, and learning goals, so that thirty minutes feel coached, not improvised.
3. As an Engineering Manager, I want retro inputs aggregated from Azure Boards, GitHub Projects, and incident logs, so that the team debates patterns instead of re-listing events.
4. As an Engineering Manager, I want attrition and burnout signals surfaced on a weekly cadence, so that I intervene before a resignation, not after.
5. As an Engineering Manager, I want a staffing model that maps roadmap cost to current capacity, so that delivery commitments are honest.
6. As an Engineering Manager, I want an audit trail of every people-facing AI suggestion, so that the team trusts the loop.

## 4. Pain points before AI-native

1. **Metrics theatre**. Leadership asks for DORA, the team pastes screenshots from three different tools, and nobody trusts the number. Without a signed aggregation pipeline, each report is a new negotiation.
2. **1:1s that drift into status**. Without a prefilled agenda tied to real artifacts, the half-hour becomes a micro-standup and the growth conversation is postponed forever.
3. **Retros that blame individuals**. Without data, the loudest voice wins the narrative. Systemic causes are invisible.
4. **Invisible burnout**. On-call rotations, late PR reviews, and growing rework rates are three different dashboards. The manager only connects them after someone resigns.
5. **Staffing by intuition**. Roadmap commitments are made on gut feel for team velocity, then re-negotiated every quarter in a budget meeting.

## 5. AI-native daily workflow

The Engineering Manager operates a weekly and daily loop. The loop uses GitHub Copilot primitives inside Visual Studio Code, Claude Code at the terminal for report generation, and the M365 Agents SDK on Microsoft Teams for 1:1 surfacing.

### Morning setup

1. Open Visual Studio Code on the `eng-ops` repository. GitHub Copilot Chat loads the scoped `.github/instructions/management.instructions.md`.
2. Invoke `/pulse` to refresh the DORA and SPACE dashboards. The Delivery Pulse agent calls the GitHub MCP for Actions runs and the Azure MCP for Application Insights and Azure Monitor queries.
3. Read the Teams channel where the M365 Agents SDK posts the overnight anomalies (flaky test spikes, change failure rate regressions, stalled PRs).

### Midday execution

1. Run two or three 1:1s. Each 1:1 opens with an agenda prefilled by `/one-on-one <engineer>`, which pulls the engineer's merged PRs, incident involvement, and ticket participation from the GitHub MCP and Azure DevOps MCP.
2. Review the Azure Boards risk register with the Project Manager. Any item tagged `delivery-risk` gets a linked workbook view from Azure Monitor.
3. Run `/staff-ops` to evaluate capacity versus the next two sprints of committed work. The agent returns a gap analysis with named risks, never promises.

### Afternoon review

1. Lead a retro for one of the teams using `/retro`. The agent ingests sprint data from Azure Boards and GitHub Projects and produces a structured brief: what worked, what stalled, systemic causes, proposed experiments.
2. Update the delivery-health dashboard in Azure Workbooks. Commit the query changes. GitHub Actions publishes the updated workbook.
3. Close the day by posting the daily pulse summary to the leadership Teams channel via the M365 Agents SDK.

## 6. Recommended primitives

### Agent

| Agent | File | Purpose |
|-------|------|---------|
| `delivery-pulse` | `.github/agents/delivery-pulse.agent.md` | Aggregate DORA and SPACE signals, draft 1:1 agendas, facilitate retros, produce staffing recommendations |

The Delivery Pulse agent uses `claude-sonnet-4-6` by default, with tools `read`, `search`, `grep`, `bash`, and access to GitHub, Azure, Azure DevOps, and Microsoft 365 Agents SDK MCPs. Extended thinking is enabled for staffing analyses where multi-hop reasoning over capacity and skill data is required.

### Slash prompts

| Command | File | Purpose |
|---------|------|---------|
| `/pulse` | `.github/prompts/pulse.prompt.md` | Refresh DORA and SPACE dashboards, flag anomalies |
| `/one-on-one` | `.github/prompts/one-on-one.prompt.md` | Generate a 1:1 agenda from recent artifacts and rolling goals |
| `/retro` | `.github/prompts/retro.prompt.md` | Produce a retrospective brief with systemic-cause hypotheses |
| `/staff-ops` | `.github/prompts/staff-ops.prompt.md` | Capacity and skill-gap analysis for upcoming sprints |

### Instructions scoped

Scoped `applyTo` reduces token cost and keeps people-facing content distinct from code review guidance.

| Scope (`applyTo`) | File | Purpose |
|-------------------|------|---------|
| `eng-ops/dora/**` | `.github/instructions/dora.instructions.md` | DORA aggregation rules, anomaly thresholds |
| `eng-ops/one-on-ones/**` | `.github/instructions/one-on-ones.instructions.md` | 1:1 tone, confidentiality boundaries, never suggest performance verdicts |
| `eng-ops/retros/**` | `.github/instructions/retros.instructions.md` | Retro structure, systemic-cause over individual blame |

### Hooks

Hooks are zero-token governance for management artifacts.

- `pre-commit`: redact engineer names from retro drafts before they are committed to a shared branch
- `post-commit`: regenerate the delivery-health dashboard JSON when DORA queries change
- `pre-push`: validate that every staffing recommendation cites a capacity query, never a hunch

## 7. Validated MCPs

Every MCP below is registered in the MCP catalog. Do not reference any MCP that is not in the catalog.

| MCP | Status | Use in this persona |
|-----|--------|---------------------|
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | Official | Read PRs, Actions runs, Projects boards; draft 1:1 agendas from recent contributions |
| [Azure MCP Server](https://github.com/Azure/azure-mcp) | Official (Microsoft) | Query Azure Monitor and Application Insights for deployment and incident metrics |
| [Azure DevOps MCP Server](https://github.com/microsoft/azure-devops-mcp) | Official (Microsoft) | Read Azure Boards work items, iterations, and risk register entries |
| [Microsoft Learn Docs MCP](https://github.com/microsoftdocs/mcp) | Official | Ground management guidance in current Microsoft Learn and GitHub Docs |
| [Microsoft 365 Agents SDK MCP](https://learn.microsoft.com/microsoft-365/agents-sdk/) | Official (Microsoft) | Post pulse summaries and 1:1 agendas into Microsoft Teams channels |

## 8. Real examples

### Example 1: weekly DORA pulse

**Input**: The Monday pulse is due at 09:00. The team merged 42 PRs last week, with two rollbacks.

**Invocation**: `/pulse`.

**Expected output**:

1. A generated `eng-ops/dora/2026-W17.md` with the four DORA metrics, trend arrows, and a link to each underlying query in Azure Monitor.
2. A Teams post via the Microsoft 365 Agents SDK summarizing the scorecard and flagging the change failure rate regression.
3. An Azure Boards work item opened automatically for the regression, assigned to the on-call Technical Lead for investigation.

### Example 2: 1:1 agenda for a senior engineer

**Input**: A 1:1 with a senior engineer is scheduled for 14:00. The engineer shipped three PRs last week and was paged twice on-call.

**Invocation**: `/one-on-one priya.nair`.

**Expected output**:

1. A rolling agenda in `eng-ops/one-on-ones/priya.nair/2026-04-24.md` with three sections: career goals, recent work highlights (linked PRs and incidents), blockers.
2. A private draft surfaced only to the Engineering Manager in Teams, never auto-shared.
3. A follow-up todo list that carries forward any unresolved item from the previous 1:1.

## 9. Anti-patterns

1. **Turning 1:1 data into performance evidence**. The 1:1 agenda is a conversation scaffold, not an audit trail. Mitigation: the `one-on-ones.instructions.md` forbids verdict phrasing and requires opt-in sharing.
2. **Running DORA without the engineers seeing it first**. Metrics weaponized in leadership decks before the team sees them kill trust. Mitigation: the pulse posts to the team channel before the leadership channel.
3. **Retros that name individuals**. Blaming people is a management failure. Mitigation: the Delivery Pulse agent rewrites any individual-blame phrasing into systemic-cause phrasing.
4. **Staffing models that hide assumptions**. Capacity divided by story points is a lie. Mitigation: `/staff-ops` returns explicit assumptions and flags each one.
5. **Dashboards that never drive action**. A workbook nobody reads is noise. Mitigation: every anomaly on the pulse opens an Azure Boards work item with an owner.

## 10. KPIs and impact metrics

| Metric | Baseline (manual) | Target (agentic) | Measurement |
|--------|-------------------|------------------|-------------|
| Weekly DORA scorecard delivery | Ad hoc | Every Monday 09:00 | GitHub Actions schedule |
| 1:1 prep time per engineer | 20 minutes | Under 5 minutes | Time-to-agenda log |
| Retro systemic-cause rate | Under 30 percent | Over 70 percent | Retro label audit |
| Attrition early warning lead time | 0 days | Over 30 days | Pulse anomaly history |
| Staffing commitment accuracy | Plus or minus 40 percent | Plus or minus 10 percent | Roadmap versus actual delivery |
| Manager token efficiency | N/A | Under 200k tokens per week | Copilot usage report |

## 11. Maturity in four levels

| Level | Name | Markers |
|-------|------|---------|
| L1 | Manual | Spreadsheet DORA, improvised 1:1s, retros run from memory |
| L2 | Assisted | GitHub Copilot Chat for drafting, no agent, dashboards in one tool only |
| L3 | Augmented | Delivery Pulse agent, four slash prompts, scoped instructions, DORA dashboard in Azure Workbooks |
| L4 | Agentic | Full primitives kit, hooks enforced, M365 Agents SDK surfacing in Teams, attrition and burnout anomaly detection on a weekly cadence, maturity scorecard above 80 percent |

## 12. Integration with other personas

- **With Technical Lead**: shared staffing model, paired review of architecture-health indicators
- **With Scrum Master**: retro facilitation, sprint flow diagnostics from Azure Boards
- **With Project Manager**: risk register reconciliation, stakeholder reporting cadence
- **With SRE**: on-call load and incident toil feed into burnout signals
- **With Product Owner**: roadmap feasibility review against capacity
- **With InfoSec Officer**: people-risk signals (access review, separation-of-duties) surfaced in the pulse
- **With DevRel**: external contribution trends influence hiring signals

## 13. Glossary

- **DORA metrics**: the four key delivery metrics defined by the DORA research program: lead time, deployment frequency, change failure rate, mean time to restore.
- **SPACE framework**: a productivity model covering Satisfaction, Performance, Activity, Communication, Efficiency.
- **Pulse**: the weekly rollup artifact that combines DORA, SPACE, and anomaly signals.
- **Delivery health dashboard**: the Azure Workbooks view linked from the repo `README.md` that makes the team's flow public.
- **Attrition early warning**: a composite signal derived from on-call load, rework rate, and PR latency that indicates elevated resignation risk.
- **Staffing model**: a capacity-versus-commitment projection that makes assumptions explicit.

## 14. References

- [DORA metrics research](https://dora.dev/research/) — the empirical foundation behind four key metrics for software delivery
- [SPACE framework, Microsoft Research](https://dl.acm.org/doi/10.1145/3454122.3464933) — developer productivity dimensions beyond velocity
- [Azure Monitor workbooks documentation](https://learn.microsoft.com/azure/azure-monitor/visualize/workbooks-overview) — build delivery-health dashboards on Azure telemetry
- [GitHub Actions metrics and insights](https://docs.github.com/actions) — authoritative source for deployment and workflow telemetry
- [Microsoft 365 Agents SDK](https://learn.microsoft.com/microsoft-365/agents-sdk/) — the SDK for building agents that post into Teams and other M365 surfaces
