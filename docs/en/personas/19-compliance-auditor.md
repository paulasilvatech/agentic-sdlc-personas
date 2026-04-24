---
title: "Compliance Auditor | Agentic SDLC Personas"
description: "The Compliance Auditor is the persona that converts regulation into enforceable controls and verifiable evidence. In an AI-native SDLC, the Compliance Auditor operates an Evidence Curator agent, four "
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-24"
version: "1.0.0"
status: "approved"
locale: "en"
persona_id: "19-compliance-auditor"
sdlc_phase: "Governance"
cluster: "security"
previous: "18-infosec-officer"
next: "20-sre"
reading_time: 19
tags: ["persona", "compliance-auditor", "copilot", "sox", "iso", "soc2"]
---

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="28" height="28" style="vertical-align:-6px;"><rect x="1.5" y="1.5" width="61" height="61" rx="10" ry="10" fill="#FDECEA" stroke="#E74856" stroke-width="1.2"/><path d="M24 18h16v28H24z" fill="none" stroke="#E74856" stroke-width="2.5"/><path d="M28 26h8M28 32h8M28 38h4" stroke="#E74856" stroke-width="2" stroke-linecap="round"/><path d="M20 22l4-4 4 4" fill="none" stroke="#E74856" stroke-width="2" stroke-linecap="round"/></svg> Compliance Auditor

[← Previous: Infosec Officer](./18-infosec-officer.md) · [↑ Index](../index.md) · [Next: Sre →](./20-sre.md)

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

> The Compliance Auditor is the persona that converts regulation into enforceable controls and verifiable evidence. In an AI-native SDLC, the Compliance Auditor operates an Evidence Curator agent, four slash prompts, and a validated MCP catalog spanning GitHub, Microsoft Purview, and Azure Policy — not a library of static attestation PDFs.

## 1. Executive summary

The Compliance Auditor owns SOX, ISO 27001, SOC 2, and sector-specific obligations for delivery. In an AI-native SDLC, the role is operationalized through a single Evidence Curator agent with four slash prompts (`/control-check`, `/audit-pack`, `/policy-diff`, `/attestation-draft`), scoped instructions for policy and control files, and validated MCPs reaching into GitHub, Microsoft Purview, Azure Policy, and Microsoft Sentinel.

Primary deliverables are continuously checked controls, auditor-ready evidence packs, living policy diffs, and attestation drafts assembled from real pipeline artifacts. The Compliance Auditor replaces the "audit sprint" with a daily, boring, evidence-producing rhythm.

Compliance in an AI-native SDLC is a byproduct of good pipelines, not a separate project. The Compliance Auditor designs the byproduct.

## 2. Role and responsibilities

Think of the Compliance Auditor like a building inspector who signs off construction stage by stage instead of just at the end. They read the blueprints, verify every pour, every wire, every fixture — and when the final walkthrough happens, there are no surprises. In an AI-native SDLC, the Compliance Auditor inspects the pipeline at every stage by inspecting its artifacts.

Primary responsibilities:

- Maintain the control catalog mapping frameworks (SOX, ISO 27001, SOC 2) to pipeline artifacts
- Run continuous control checks via GitHub Actions, Azure Policy, and Microsoft Purview
- Assemble auditor-ready evidence packs on demand from real artifacts
- Track policy changes with diffs approved by named owners
- Draft attestations and representations from evidence, never from memory
- Operate the Evidence Curator agent and `/control-check`, `/audit-pack`, `/policy-diff`, `/attestation-draft` prompts
- Coordinate with InfoSec Officer on shared controls and with Legal on regulatory interpretation
- Review access reviews in Microsoft Entra ID quarterly and on role-change events

## 3. Jobs to be done

1. As a Compliance Auditor, I want every control mapped to a live check, so that "compliant" is a continuous state, not a moment.
2. As a Compliance Auditor, I want evidence packs assembled in minutes, so that external auditors receive what they need same-day.
3. As a Compliance Auditor, I want policy changes reviewed as PRs, so that the trail of who-approved-what is verifiable.
4. As a Compliance Auditor, I want attestations drafted from actual pipeline evidence, so that signatures reflect reality.
5. As a Compliance Auditor, I want exceptions time-boxed and tracked, so that no exception becomes permanent by neglect.
6. As a Compliance Auditor, I want Microsoft Purview sensitivity labels enforced in code repos, so that data handling obligations are propagated.
7. As a Compliance Auditor, I want Entra ID access reviews scheduled automatically, so that least-privilege reviews never lapse.
8. As a Compliance Auditor, I want a single posture dashboard published to Microsoft Teams, so that leadership has a current view without asking.

## 4. Pain points before AI-native

- **Audit sprint**. Quarter ends with a month of panic assembling artifacts, then calm until the next quarter.
- **Screenshot evidence**. Audit packs contain screenshots that cannot be verified after the fact.
- **Shadow policies**. Teams maintain private guidelines that diverge from the published policy.
- **Exceptions without expiry**. Temporary exceptions from three years ago still active today.
- **Disconnected controls**. Controls described in text, not wired to any system that enforces them.
- **Access review theatre**. Quarterly access reviews approved in bulk without inspection.
- **Framework drift**. Overlapping SOX, ISO, and SOC controls tracked separately; work duplicated, gaps created.

## 5. AI-native daily workflow

The Compliance Auditor works from Visual Studio Code with GitHub Copilot and from Microsoft 365 (Teams, Loop, Purview) — invoking the Evidence Curator agent throughout the day.

### Morning setup

1. Open the compliance dashboard in Microsoft Loop; review overnight control-check failures.
2. Run `/control-check --since=yesterday` to surface drift across the control catalog.
3. Review Entra ID access review alerts and pending approvals.
4. Check Microsoft Purview for new sensitivity-label rollouts or classification changes.
5. Post the compliance standup to Microsoft Teams with open exceptions and expiring items.

### Midday execution

1. For each policy PR, run `/policy-diff` to generate the reviewable diff and impact report; route to named owners for approval.
2. For any auditor request, invoke `/audit-pack` with the scope; the Evidence Curator assembles artifacts from GitHub, Azure Policy, Defender for Cloud, Sentinel, and Purview.
3. Draft attestations via `/attestation-draft`; the Evidence Curator fills in evidence URLs and flags unsupported statements.
4. Triage failing control checks with the InfoSec Officer when they are shared controls.

### Afternoon review

1. Walk through expiring exceptions; extend, replace with a fix, or close.
2. Update the control catalog with any new mapping from recent architecture changes.
3. Publish the daily posture score to Microsoft Loop and pin any red items.

## 6. Recommended primitives

### Agent

| Agent | File | Purpose |
|-------|------|---------|
| `evidence-curator` | `.github/agents/evidence-curator.agent.md` | Runs control checks, assembles audit packs, diffs policies, drafts attestations |

### Slash prompts

| Command | File | Purpose |
|---------|------|---------|
| `/control-check` | `.github/prompts/control-check.prompt.md` | Run the continuous control suite and report drift |
| `/audit-pack` | `.github/prompts/audit-pack.prompt.md` | Assemble an auditor-ready evidence pack for a scope |
| `/policy-diff` | `.github/prompts/policy-diff.prompt.md` | Generate diff and impact report for a policy change |
| `/attestation-draft` | `.github/prompts/attestation-draft.prompt.md` | Draft an attestation or representation from real evidence |

### Instructions scoped

| Scope (`applyTo`) | File | Purpose |
|-------------------|------|---------|
| `docs/policies/**/*.md` | `.github/instructions/policy.instructions.md` | Policy document structure, owner, review cadence |
| `controls/**/*.yaml` | `.github/instructions/controls.instructions.md` | Control catalog format mapping frameworks to artifacts |
| `attestations/**/*.md` | `.github/instructions/attestation.instructions.md` | Attestation required sections and evidence linking |
| `infra/**/*.bicep` | `.github/instructions/azpolicy.instructions.md` | Azure Policy patterns and tag requirements |

### Hooks

- `pre-commit`: policy file metadata check (owner, review date)
- `pre-push`: control-check fast subset
- `post-merge`: run the full control suite and refresh the posture score
- `nightly`: scan for expiring exceptions and open reminders
- `on-access-review`: generate Entra ID access review reports for named owners

## 7. Validated MCPs

| MCP | Purpose | Owner |
|-----|---------|-------|
| GitHub MCP Server | Read PRs, policies, control files, manage issues | GitHub |
| Azure MCP Server | Query Azure Policy, Defender for Cloud, Sentinel, Entra ID | Microsoft |
| Microsoft Learn Docs MCP | Reference current framework guidance (SOX, ISO, SOC 2) | Microsoft |
| Azure DevOps MCP Server | Track remediation work items when the team uses Azure DevOps | Microsoft |
| Playwright MCP | Capture evidence flows for user-facing controls | Microsoft |

## 8. Real examples

### Example 1: SOC 2 audit in one afternoon

An auditor requests evidence for CC6.1 (logical access) for Q2. The Compliance Auditor runs `/audit-pack --control=cc6.1 --period=Q2`. The Evidence Curator pulls Entra ID access reviews, Azure Policy assignments, and GitHub branch protections, bundling them with traceable URLs. The pack is delivered within three hours.

### Example 2: a policy change reviewed in public

The Legal team proposes a new data-retention clause. The change opens as a PR. `/policy-diff` highlights affected services and Purview labels. Named owners approve; the merge triggers updated Azure Policy definitions and Purview label rules. A single workflow lands legal, engineering, and enforcement changes.

### Example 3: closing a three-year-old exception

Overnight the exception-expiry scan identifies an approval from 2022 still in effect on an Azure subscription. `/control-check` confirms the underlying risk is now mitigated by a new control. The Evidence Curator opens a PR removing the exception; approvals flow through the standard review; the exception disappears.

## 9. Anti-patterns

- **Evidence screenshots**. Screenshots age poorly and cannot be verified; link to immutable sources instead.
- **One-framework thinking**. Maintain a unified control catalog; map each control to every applicable framework.
- **Silent exceptions**. Every exception has an owner, expiry, and compensating control recorded.
- **Copy-paste attestations**. Draft from evidence; never recycle last year's wording.
- **Policy in SharePoint only**. Policies live in the repo, under review, with named owners.
- **Access reviews by bulk approval**. Require reviewers to open each assignment; the agent flags stale approvals.
- **Controls that cannot fail**. A control that always passes is not a control; design for actionable failure modes.

## 10. KPIs and impact metrics

| Metric | Baseline (manual) | Target (agentic) | Source |
|--------|-------------------|------------------|--------|
| Control-check coverage | 50 percent | 100 percent | Control catalog |
| Audit pack assembly time | 2 weeks | < 1 day | `/audit-pack` history |
| Policy changes with diff + owner sign-off | 60 percent | 100 percent | GitHub PR reviews |
| Expired exceptions active | 15 | 0 | Exception registry |
| Access review completion on time | 70 percent | 100 percent | Entra ID |
| Attestation rework after submission | 25 percent | < 5 percent | Audit correspondence |
| Posture score freshness | Weekly | Daily | Loop dashboard |

## 11. Maturity in four levels

- **L1 Manual**: Policies as PDFs, controls as spreadsheets, audits as sprints.
- **L2 Assisted**: Some controls wired to Defender for Cloud, but evidence still assembled manually at quarter end.
- **L3 Augmented**: Evidence Curator agent, four slash prompts, scoped instructions, audit packs in hours.
- **L4 Autonomous**: Continuous control checks, daily posture score, expiring exceptions auto-closed, attestations drafted from evidence.

## 12. Integration with other personas

- **With InfoSec Officer**: shared controls, joint SBOM and threat-model evidence.
- **From Software Architect**: architecture ADRs mapped to controls in the catalog.
- **From Developer**: PR metadata feeding change-management evidence.
- **From Data Engineer**: Microsoft Purview classifications driving data-handling evidence.
- **From SRE**: incident timelines and runbooks as operational-resilience evidence.
- **With Legal**: regulatory interpretation and policy text changes.
- **To Product Owner**: compliance status on features ahead of release.

## 13. Glossary

- **Control**: a verifiable rule mapping regulation intent to system configuration or process.
- **Evidence pack**: a bundle of artifacts assembled to prove a control was operating in a period.
- **Attestation**: a signed representation, typically by an officer, that specific controls are in place.
- **Exception**: a time-boxed, owner-approved deviation from a control or policy.
- **Posture score**: a rolling numeric summary of control health across frameworks.
- **Framework**: a regulatory or industry standard such as SOX, ISO 27001, SOC 2.
- **Access review**: a periodic check that each identity's permissions remain justified.

## 14. References

- [Microsoft Purview documentation](https://learn.microsoft.com/purview/) — sensitivity and compliance management
- [Azure Policy documentation](https://learn.microsoft.com/azure/governance/policy/) — policy as code
- [Microsoft Defender for Cloud regulatory compliance](https://learn.microsoft.com/azure/defender-for-cloud/regulatory-compliance-dashboard) — framework mapping
- [Microsoft Entra ID access reviews](https://learn.microsoft.com/entra/id-governance/access-reviews-overview) — periodic access certification
- [GitHub audit log and API](https://docs.github.com/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise) — change-management evidence
- [Microsoft Sentinel](https://learn.microsoft.com/azure/sentinel/) — incident evidence and timelines
- [Microsoft Learn Docs MCP](https://github.com/microsoftdocs/mcp) — current framework guidance retrieval
- [GitHub Actions](https://docs.github.com/actions) — CI and deployment orchestration across the stack
- [Microsoft Learn Docs MCP](https://github.com/microsoftdocs/mcp) — first-party documentation retrieval at implementation time
- [GitHub Advanced Security](https://docs.github.com/code-security) — CodeQL, Dependabot, Secret Scanning, Push Protection
