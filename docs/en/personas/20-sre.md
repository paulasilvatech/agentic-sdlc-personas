---
title: "SRE | Agentic SDLC Personas"
description: "The SRE is the persona that keeps production honest. In an AI-native SDLC, the SRE operates a stack of validated primitives, not a wall of dashboards."
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-24"
version: "1.0.0"
status: "approved"
locale: "en"
persona_id: "20-sre"
sdlc_phase: "Operation"
cluster: "ops"
previous: "19-compliance-auditor"
next: "21-dba"
reading_time: 21
tags: ["persona", "sre", "copilot", "slo", "incident", "postmortem"]
---

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="28" height="28" style="vertical-align:-6px;"><rect x="1.5" y="1.5" width="61" height="61" rx="10" ry="10" fill="#E8F4FD" stroke="#0078D4" stroke-width="1.2"/><circle cx="32" cy="32" r="14" fill="none" stroke="#0078D4" stroke-width="2.5"/><path d="M32 22v10l7 7" fill="none" stroke="#0078D4" stroke-width="2.5" stroke-linecap="round"/></svg> SRE

[← Previous: Compliance Auditor](./19-compliance-auditor.md) · [↑ Index](../index.md) · [Next: Dba →](./21-dba.md)

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

> The SRE is the persona that keeps production honest. In an AI-native SDLC, the SRE operates a stack of validated primitives, not a wall of dashboards.

## 1. Executive summary

The SRE owns production reliability: service level objectives, incident response, on-call operations, toil reduction, and postmortems. In an AI-native SDLC, the SRE operates inside the Operation phase with a fixed set of primitives: one incident agent, four slash prompts, scoped instructions, schema-validated hooks, and a curated list of validated MCPs. SLOs are defined in Azure Monitor, incident communication flows through Microsoft Teams via the M365 Agents SDK, and postmortems live as versioned markdown in GitHub. The primary outputs are SLO definitions, incident briefs, postmortem documents, and toil reduction proposals.

## 2. Role and responsibilities

Think of the SRE like a hospital attending physician on night shift. They do not build the hospital, nor design the treatments, but when a patient crashes they lead the room: triage, stabilize, diagnose, document, and feed the learnings into protocol. The measure of an attending is not heroics on a single night; it is the rate at which the same crisis stops happening. In an AI-native SDLC, the hospital is the production estate, the patient is the SLO, and the protocol is the runbook library backed by agentic primitives.

Primary responsibilities:

- Define and maintain SLOs and error budgets in Azure Monitor workbooks
- Lead incident response: triage, mitigation, communication, recovery
- Coordinate on-call via Microsoft Teams with the M365 Agents SDK-backed incident bot
- Author postmortems in GitHub and drive the action items to closure
- Reduce toil through runbook automation and hook enforcement
- Partner with DevOps Engineer and Release Manager on deployment safety
- Operate the Incident Captain agent and the `/slo-review`, `/incident-brief`, `/postmortem-draft`, `/toil-scan` prompts

## 3. Jobs to be done

1. As an SRE, I want SLOs reviewed monthly with error budget burn, so that reliability is a budget, not a mood.
2. As an SRE, I want an incident brief drafted in the first 5 minutes, so that responders work from the same understanding.
3. As an SRE, I want postmortems drafted from incident telemetry, so that the document writes itself while humans focus on action items.
4. As an SRE, I want toil scanned continuously, so that repetitive manual work is converted to code, not absorbed.
5. As an SRE, I want runbooks executable from the incident bot in Teams, so that mitigation is a conversation, not a wiki hunt.
6. As an SRE, I want the same incident class to never ship twice, so that the action item backlog is short and closed.

## 4. Pain points before AI-native

1. **SLOs as slogans**. Every service claims 99.9 percent; nobody computes burn. The first real outage exposes the lie.
2. **Incident chaos**. The first 15 minutes are "who is seeing what." Facts are collected on Slack, lost when the thread scrolls.
3. **Postmortems late and thin**. Written two weeks later, signed off without action items, filed in a folder nobody reads.
4. **Toil invisible**. Engineers burn afternoons restarting pods and rotating certs. Nobody measures it; nobody budgets against it.
5. **Runbooks rot**. The runbook was correct three architectures ago. Responders skip it and improvise.

## 5. AI-native daily workflow

The SRE operates a fixed loop each day. The loop uses GitHub Copilot primitives inside Visual Studio Code and Claude Code at the terminal, plus a small catalog of validated MCPs for external context.

### Morning setup

1. Open the reliability repo in Visual Studio Code. GitHub Copilot Chat loads `AGENTS.md` and the scoped `.github/instructions/reliability.instructions.md`.
2. In Claude Code, run the daily reliability briefing that queries the Azure MCP for the previous 24 hours of SLO burn, Azure Monitor alerts, and Application Insights anomalies.
3. Review the open incident backlog and action item aging in GitHub Projects.
4. Confirm the on-call schedule for the day in Microsoft Teams.

### Midday execution

Each midday cycle is a single reliability improvement or planned incident drill, typically 2 to 3 hours of focused work.

1. **SLO review**. Invoke `/slo-review` monthly to recompute error budgets, identify services burning faster than expected, and flag SLOs that are no longer meaningful.
2. **Toil scan**. Invoke `/toil-scan` to read the previous sprint's runbook executions and manual interventions. The agent proposes automations, prioritized by hours saved.
3. **Runbook update**. Edit the runbooks affected by recent architecture changes; the pre-merge hook validates the runbook schema and the linked dashboards.
4. **Pull request**. Open PRs for SLO changes, runbook updates, and toil reduction automation. GitHub Copilot Code Review scans diffs.

### Afternoon incident response (when an incident fires)

1. **Brief**. When Azure Monitor fires an SLO-breaching alert, the M365 Agents SDK-backed incident bot opens a Teams channel and invokes `/incident-brief`. The Incident Captain agent produces a 5-minute brief from alerts, recent deploys, and Application Insights errors.
2. **Stabilize**. Responders follow the linked runbook; mitigation commands are executed from the incident bot with audit trail in the Teams channel.
3. **Communicate**. Status updates are posted to Teams on a cadence (5 min for high-severity, 15 min for medium). Stakeholders read the channel, not separate emails.
4. **Postmortem**. Within 48 hours of resolution, invoke `/postmortem-draft` to produce a timeline, contributing factors, and action items from the incident telemetry. The SRE edits for narrative and assigns owners in GitHub Projects.

## 6. Recommended primitives

### Agents

| Agent | File | Purpose |
|-------|------|---------|
| `incident-captain` | `.github/agents/incident-captain.agent.md` | Lead incident brief, postmortem draft, SLO review, and toil scan |

The Incident Captain agent uses `claude-sonnet-4-6` by default. It holds tools `read`, `edit`, `search`, `grep`, `glob`, `bash`, and MCP bindings to Azure MCP, GitHub MCP, and Microsoft 365 Agents SDK MCP. Extended thinking is enabled for postmortem causal reasoning.

### Prompts

| Command | File | Purpose |
|---------|------|---------|
| `/slo-review` | `.github/prompts/slo-review.prompt.md` | Review error budget burn and flag SLOs that need revision |
| `/incident-brief` | `.github/prompts/incident-brief.prompt.md` | Produce a 5-minute incident brief from alerts, recent deploys, and errors |
| `/postmortem-draft` | `.github/prompts/postmortem-draft.prompt.md` | Draft the postmortem from incident telemetry, conversation, and runbook execution logs |
| `/toil-scan` | `.github/prompts/toil-scan.prompt.md` | Identify toil from the previous sprint and propose automations prioritized by hours saved |

### Instructions

Scoped `applyTo` reduces token cost by approximately 68 percent compared to global instructions.

| Scope (`applyTo`) | File | Purpose |
|-------------------|------|---------|
| `slo/**/*.yaml` | `.github/instructions/slo.instructions.md` | SLO definition schema, burn rate windows, budget policies |
| `runbooks/**/*.md` | `.github/instructions/runbook.instructions.md` | Runbook format: symptoms, checks, mitigations, validations |
| `postmortems/**/*.md` | `.github/instructions/postmortem.instructions.md` | Blameless postmortem template, action item discipline |

### Skills

Skills are lazy-loaded, so the SRE can install many and pay tokens only for the ones that trigger.

- `burn-rate-reader`: calls the Azure MCP to compute multi-window multi-burn-rate alerts on SLOs
- `action-item-tracker`: ensures every postmortem action item is opened as a GitHub issue with owner and due date

### Hooks

Hooks cost zero LLM tokens. They are the strongest governance layer.

- `pre-commit`: validate SLO YAML schema and runbook front matter
- `pre-merge`: require action item issues linked on every merged postmortem
- `post-incident`: open the postmortem draft PR within 48 hours, escalate if not merged within 7 days

## 7. Validated MCPs

Every MCP below is registered in the MCP catalog. Do not reference any MCP that is not in the catalog.

| MCP | Status | Use in this persona |
|-----|--------|---------------------|
| [Azure MCP Server](https://github.com/Azure/azure-mcp) | Official (Microsoft) | Query Azure Monitor, Application Insights, Log Analytics for SLO burn, alerts, and incident telemetry |
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | Official | Open postmortem PRs, track action items, read deploy history |
| [Microsoft 365 Agents SDK MCP](https://learn.microsoft.com/microsoft-365/agents-sdk/) | Official (Microsoft) | Operate the incident bot in Teams: channel creation, status updates, runbook execution audit |
| [Azure DevOps MCP Server](https://github.com/microsoft/azure-devops-mcp) | Official (Microsoft) | Read release pipelines and link incidents to release trains |
| [Microsoft Learn Docs MCP](https://github.com/microsoftdocs/mcp) | Official | Fetch Azure reliability and observability reference guidance while authoring runbooks |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Official (Microsoft) | Run synthetic probes from the incident bot to validate recovery |

## 8. Real examples

### Scenario A: a p0 incident fires on checkout latency

**Input**: Azure Monitor fires a 2-hour burn rate alert on the checkout SLO (99.9 percent success, 300 ms p95). Application Insights shows a 4x error rate on the `CheckoutController`.

**Invocation**: The incident bot in Teams auto-invokes `/incident-brief` on alert fire.

**Expected output**:

1. A Teams channel `inc-2026-04-24-checkout-latency` created within 60 seconds.
2. An incident brief posted: current SLO burn, last 3 deploys (service and dependency), top 5 error signatures from Application Insights, linked runbook.
3. Responders execute the mitigation step ("scale out to 2x, flip feature flag `new-pricing-engine` off") from the bot with audit trail.
4. Status updates every 5 minutes for the first 30 minutes; incident resolved within 42 minutes.

### Scenario B: draft a postmortem

**Input**: The checkout incident from Scenario A is resolved. The SRE invokes `/postmortem-draft` the next morning.

**Invocation**: `/postmortem-draft` with the incident channel ID.

**Expected output**:

1. A postmortem `postmortems/2026-04-24-checkout-latency.md` with timeline, contributing factors, impact, and proposed action items.
2. Five action items opened as GitHub issues, each with owner and due date, grouped by theme (observability, rollout safety, rollback automation).
3. A link to the related release train and the feature flag that was flipped off during mitigation.
4. A draft PR that the SRE edits for narrative before merging.

## 9. Anti-patterns

1. **SLOs without burn rate alerts**. SLOs defined but nothing alerts until the budget is fully consumed. Mitigation: multi-window multi-burn-rate alerts via the `burn-rate-reader` skill.
2. **Heroic incident response**. One senior engineer in their DMs fixes every incident. Mitigation: incident bot in Teams enforces brief, channel, and audit trail for every p0 and p1.
3. **Postmortems filed, not read**. Written, signed, ignored. Mitigation: `action-item-tracker` ensures each postmortem opens real issues with owners and due dates.
4. **Toil absorbed**. Engineers rotate certs and restart pods without logging. Mitigation: `/toil-scan` reads the runbook execution logs and proposes automations.
5. **Runbook drift**. Runbooks describe an old architecture. Mitigation: `pre-merge` hook validates runbook schema and the linked dashboards return 200.

## 10. KPIs and impact metrics

The SRE persona is evaluated with a mix of SRE and DORA metrics.

| Metric | Baseline (manual) | Target (agentic) | Measurement |
|--------|-------------------|------------------|-------------|
| SLO coverage | 30 percent of services | > 95 percent | Services with defined SLOs in Azure Monitor |
| Error budget burn visibility | Weekly | Continuous | Burn rate dashboards per service |
| Incident brief latency | 30 min | < 5 min | Time from alert fire to brief posted |
| Mean time to mitigate | 90 min | < 30 min | Azure Monitor incident duration |
| Mean time to restore | 4 hours | < 1 hour | Full recovery to SLO |
| Postmortem completion rate | 50 percent | > 95 percent | Incidents with merged postmortem within 7 days |
| Action item closure rate | 40 percent | > 80 percent | Action items closed within quarter |
| Toil percentage | 50 percent | < 25 percent | On-call hours on manual interventions |

## 11. Maturity in four levels

| Level | Name | Markers |
|-------|------|---------|
| L1 | Manual | SLOs as slogans, incidents managed in Slack threads, postmortems optional |
| L2 | Assisted | GitHub Copilot helps draft postmortems, some SLOs defined, no incident bot |
| L3 | Augmented | One Incident Captain agent, four slash prompts, scoped instructions, Azure and M365 MCPs, incident bot live |
| L4 | Agentic | Full primitives kit, hooks enforced, SLO coverage > 95 percent, incident brief in < 5 min, action items closed > 80 percent |

## 12. Integration with other personas

Handoffs:

- **From Release Manager**: release train, risk tiers, rollback plan, canary report
- **From DevOps Engineer**: deployed artifact, dashboards, alert rules
- **To Developer**: incident findings and action items as issues with reproduction steps
- **To Platform Architect**: toil scan results feed the capability matrix roadmap
- **To InfoSec Officer**: incidents classified as security are co-owned, with a joint postmortem

## 13. Glossary

- **Agent**: a configured LLM role with tools, instructions, and a defined output shape.
- **Prompt**: a reusable slash command that invokes an agent with a specific task.
- **Instructions**: scoped guidance applied by pattern match on file paths via `applyTo`.
- **Skill**: a lazy-loaded capability that activates on keyword match.
- **Hook**: a zero-token rule enforced at a specific lifecycle event.
- **MCP**: Model Context Protocol server that exposes external systems to the agent.
- **SLO**: Service Level Objective, the reliability target (e.g., 99.9 percent success at 300 ms p95).
- **Error budget**: the allowed unreliability derived from the SLO (e.g., 0.1 percent over 28 days).
- **Burn rate**: the rate at which error budget is being consumed; alerted on multi-window multi-burn-rate.
- **Toil**: manual, repetitive, automatable operational work that scales linearly with service growth.
- **Postmortem**: a blameless document capturing timeline, contributing factors, impact, and action items.

## 14. References

- [Google SRE Book](https://sre.google/books/) — canonical reference for SLOs, error budgets, and toil
- [Azure Monitor documentation](https://learn.microsoft.com/azure/azure-monitor/) — alerts, workbooks, and SLO dashboards
- [Application Insights documentation](https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview) — distributed tracing and anomaly detection
- [Log Analytics KQL reference](https://learn.microsoft.com/azure/data-explorer/kusto/query/) — query language for incident investigation
- [Microsoft 365 Agents SDK](https://learn.microsoft.com/microsoft-365/agents-sdk/) — incident bot integration with Teams
- [GitHub Projects documentation](https://docs.github.com/en/issues/planning-and-tracking-with-projects) — action item tracking and aging
- [DORA metrics research](https://dora.dev/research/) — mean time to restore and change failure rate foundations
