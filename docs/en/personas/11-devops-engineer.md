---
title: "DevOps Engineer | Agentic SDLC Personas"
description: "The DevOps Engineer is the persona that turns application code into deployable, observable infrastructure. In an AI-native SDLC, the DevOps Engineer operates a stack of validated primitives, not a sta"
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-24"
version: "1.0.0"
status: "approved"
locale: "en"
persona_id: "11-devops-engineer"
sdlc_phase: "Operation"
cluster: "ops"
previous: "10-project-manager"
next: "12-platform-architect"
reading_time: 21
tags: ["persona", "devops-engineer", "copilot", "pipeline", "iac"]
---

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="28" height="28" style="vertical-align:-6px;"><rect x="1.5" y="1.5" width="61" height="61" rx="10" ry="10" fill="#E8F4FD" stroke="#0078D4" stroke-width="1.2"/><path d="M20 32c0-8 12-16 12-16s12 8 12 16-12 16-12 16S20 40 20 32Z" fill="none" stroke="#0078D4" stroke-width="2.5"/></svg> DevOps Engineer

[← Previous: Project Manager](./10-project-manager.md) · [↑ Index](../index.md) · [Next: Platform Architect →](./12-platform-architect.md)

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

> The DevOps Engineer is the persona that turns application code into deployable, observable infrastructure. In an AI-native SDLC, the DevOps Engineer operates a stack of validated primitives, not a stack of shell scripts.

## 1. Executive summary

The DevOps Engineer owns the path from commit to production: continuous integration, continuous delivery, infrastructure as code, environment promotion, and release trains. In an AI-native SDLC, the DevOps Engineer operates inside the Operation phase with a fixed set of primitives: one pipeline agent, four slash prompts, scoped instructions, schema-validated hooks, and a curated list of validated MCPs. The primary outputs are GitHub Actions workflows, Bicep modules, Azure DevOps pipeline YAML, environment configurations, and release artifacts traceable back to the originating specification.

## 2. Role and responsibilities

Think of the DevOps Engineer like a track superintendent on a rail network. Trains (releases) must run on time, on the right track (environment), with the right cargo (artifact), and the switches (gates) must open only when the signals are green. The superintendent does not drive every train, but every train that moves safely does so because the track, signals, and switches were designed, tested, and maintained upstream. In an AI-native SDLC, the superintendent is a human operating a fleet of automated switches built from Bicep, GitHub Actions, and Azure DevOps pipelines.

Primary responsibilities:

- Design and maintain GitHub Actions CI workflows and Azure DevOps release pipelines
- Author Bicep modules for all Azure infrastructure, with parameter files per environment
- Enforce environment promotion rules via GitHub Environments and Azure DevOps approval gates
- Operate release trains on a predictable cadence, coordinated with Release Manager
- Integrate Azure Policy and Azure Resource Manager deny assignments to prevent drift
- Own the secrets lifecycle with Azure Key Vault and GitHub Actions OIDC federation
- Operate the Pipeline Smith agent and the `/pipeline-scaffold`, `/iac-review`, `/env-promote`, `/release-train` prompts

## 3. Jobs to be done

1. As a DevOps Engineer, I want to scaffold a new service pipeline in minutes, so that new repos inherit the golden path without copy-paste.
2. As a DevOps Engineer, I want Bicep changes reviewed by an agent that understands the resource graph, so that drift is caught before merge.
3. As a DevOps Engineer, I want environment promotion to be a one-click operation with a machine-readable checklist, so that promotions are reproducible.
4. As a DevOps Engineer, I want release train composition to be generated from merged PRs, so that cut day is a signoff, not a scramble.
5. As a DevOps Engineer, I want every pipeline to emit OpenTelemetry traces into Azure Monitor, so that failed builds are debugged with data, not intuition.
6. As a DevOps Engineer, I want secrets rotated automatically with Azure Key Vault references, so that no long-lived credential lives in a runner.

## 4. Pain points before AI-native

1. **Copy-paste pipelines**. Each new service starts from the last service's YAML, diverging within weeks. Nobody owns the invariants.
2. **Bicep review by memory**. Reviewers cannot hold the subscription graph in their head. Drift ships to production as a parameter typo.
3. **Environment promotion as tribal knowledge**. The promotion checklist lives in a senior engineer's head; promotions stall when they are on leave.
4. **Release trains assembled manually**. The release note is written by scraping Slack and commit messages the night before cut day.
5. **Secrets in CI variables**. Long-lived secrets are copied into GitHub Actions variables and Azure DevOps variable groups. Rotation is annual, if ever.

## 5. AI-native daily workflow

The DevOps Engineer operates a fixed loop each day. The loop uses GitHub Copilot primitives inside Visual Studio Code and Claude Code at the terminal, plus a small catalog of validated MCPs for external context.

### Morning setup

1. Open the platform repo in Visual Studio Code. GitHub Copilot Chat loads `AGENTS.md` and the scoped `.github/instructions/*.instructions.md` for Bicep, YAML, and PowerShell.
2. In Claude Code, run the daily triage prompt to pull the overnight pipeline failures from GitHub Actions and Azure DevOps via the GitHub MCP and Azure DevOps MCP.
3. Review Azure Monitor alerts for any failed deployments or drifted resources flagged by Azure Policy.
4. Confirm the day's release train window in Azure Boards.

### Midday execution

Each midday cycle is a single pipeline or IaC change, typically 1 to 3 hours of focused work.

1. **Scaffold or change**. Invoke `/pipeline-scaffold` to generate a new GitHub Actions workflow or Azure DevOps pipeline from the service template. The Pipeline Smith agent emits the YAML plus the Bicep module wiring.
2. **IaC review**. Invoke `/iac-review` on the Bicep diff. The agent queries the Azure MCP to compute the effective resource graph and flags policy violations before merge.
3. **Self-review**. Run `bicep build`, `bicep lint`, and the what-if deployment against the dev subscription. Hooks enforce these before commit.
4. **Promote**. When the change is green in dev, invoke `/env-promote` to open the approval in GitHub Environments or Azure DevOps, with the machine-readable checklist attached.
5. **Pull request**. The PR description is composed from the commit messages, the what-if diff, and the linked specification. GitHub Copilot Code Review scans the diff.

### Afternoon release train

1. Invoke `/release-train` to assemble the candidate release from merged PRs since the previous cut. The agent groups changes by service, computes risk tier, and drafts the release note.
2. Hand off the draft to the Release Manager for signoff.
3. Push the release tag. GitHub Actions and Azure DevOps pipelines deploy the artifact to staging, then to production with the canary pattern.
4. Monitor Application Insights for the first 30 minutes after deploy. If the smoke tests fail, the `/rollback-plan` prompt from the Release Manager kit is invoked.

## 6. Recommended primitives

### Agents

| Agent | File | Purpose |
|-------|------|---------|
| `pipeline-smith` | `.github/agents/pipeline-smith.agent.md` | Author and review pipelines, Bicep, and environment promotion artifacts |

The Pipeline Smith agent uses `claude-sonnet-4-6` by default. It holds tools `read`, `edit`, `search`, `grep`, `glob`, `bash`, and an MCP binding to Azure MCP Server for what-if deployments. Extended thinking is enabled for Bicep graph reasoning.

### Prompts

| Command | File | Purpose |
|---------|------|---------|
| `/pipeline-scaffold` | `.github/prompts/pipeline-scaffold.prompt.md` | Generate a new GitHub Actions workflow or Azure DevOps pipeline from the service template |
| `/iac-review` | `.github/prompts/iac-review.prompt.md` | Review a Bicep diff with effective resource graph and Azure Policy checks |
| `/env-promote` | `.github/prompts/env-promote.prompt.md` | Open an environment promotion with the machine-readable checklist |
| `/release-train` | `.github/prompts/release-train.prompt.md` | Assemble the release train from merged PRs and draft the release note |

### Instructions

Scoped `applyTo` reduces token cost by approximately 68 percent compared to global instructions.

| Scope (`applyTo`) | File | Purpose |
|-------------------|------|---------|
| `infra/**/*.bicep` | `.github/instructions/bicep.instructions.md` | Module structure, parameter files, resource naming, tagging |
| `.github/workflows/**/*.yml` | `.github/instructions/actions.instructions.md` | Reusable workflows, OIDC federation, no long-lived secrets |
| `pipelines/**/*.yml` | `.github/instructions/azdo.instructions.md` | Azure DevOps stages, approval gates, variable groups bound to Key Vault |

### Skills

Skills are lazy-loaded, so the DevOps Engineer can install many and pay tokens only for the ones that trigger.

- `policy-diff`: calls the Azure MCP to compute Azure Policy compliance deltas on every Bicep change
- `oidc-enforcer`: refuses workflows that reference long-lived `secrets.AZURE_CREDENTIALS` patterns

### Hooks

Hooks cost zero LLM tokens. They are the strongest governance layer.

- `pre-commit`: `bicep lint`, `actionlint`, secret scan via GitHub Advanced Security
- `pre-push`: `bicep build` and what-if against the dev subscription
- `pre-merge`: require green Azure Policy compliance on the target environment

## 7. Validated MCPs

Every MCP below is registered in the MCP catalog. Do not reference any MCP that is not in the catalog.

| MCP | Status | Use in this persona |
|-----|--------|---------------------|
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | Official | Read workflow runs, manage releases and environments, open PRs |
| [Azure MCP Server](https://github.com/Azure/azure-mcp) | Official (Microsoft) | What-if deployments, Azure Policy compliance, Azure Monitor queries |
| [Azure DevOps MCP Server](https://github.com/microsoft/azure-devops-mcp) | Official (Microsoft) | Read pipelines, manage release approvals, update Azure Boards work items |
| [Microsoft Learn Docs MCP](https://github.com/microsoftdocs/mcp) | Official | Fetch Bicep and GitHub Actions reference docs during authoring |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Official (Microsoft) | Drive post-deploy smoke tests against the canary environment |
| [Microsoft 365 Agents SDK MCP](https://learn.microsoft.com/microsoft-365/agents-sdk/) | Official (Microsoft) | Publish release notifications into Teams during the release train |

## 8. Real examples

### Scenario A: scaffold a new service pipeline

**Input**: A new microservice `claims-api` needs a CI/CD pipeline, Bicep module, and dev/staging/prod environments.

**Invocation**: `/pipeline-scaffold` with service name and tier.

**Expected output**:

1. A reusable GitHub Actions workflow `.github/workflows/claims-api.yml` that calls the org's shared build-test-deploy workflow with OIDC federation into Azure.
2. A Bicep module `infra/claims-api/main.bicep` with parameter files for dev, staging, and prod.
3. Three GitHub Environments configured with required reviewers and Key Vault-backed secrets.
4. A PR titled `feat(claims-api): scaffold CI/CD and infra` linked to the service intake ticket.

### Scenario B: review a Bicep change before merge

**Input**: A PR changes the App Service plan tier from P1v3 to P2v3 across three environments.

**Invocation**: `/iac-review`.

**Expected output**:

1. A what-if diff fetched via the Azure MCP, summarized per environment.
2. A cost delta estimate computed from the Azure Retail Pricing endpoint.
3. An Azure Policy compliance report that confirms the new SKU is allowed by the `Allowed SKUs for App Service` policy.
4. A review comment posted on the PR with the three artifacts above, plus an approval recommendation.

## 9. Anti-patterns

1. **Inline YAML copy-paste**. Each service repo holding its own workflow diverges within a quarter. Mitigation: reusable workflows referenced by tag, owned by the platform team.
2. **Secrets in variables**. Long-lived `AZURE_CREDENTIALS` in GitHub Actions or Azure DevOps variable groups. Mitigation: OIDC federation with Entra ID; Key Vault references for runtime secrets.
3. **Bicep without parameter files**. Changing a parameter inline to deploy to another environment. Mitigation: one parameter file per environment, checked in, reviewed by the agent.
4. **Manual release notes**. Scraping commits the night before cut day. Mitigation: `/release-train` composes from merged PRs with risk tiers.
5. **Skipping what-if**. Deploying Bicep without a what-if preview. Mitigation: `pre-push` hook fails the push if what-if was not run.

## 10. KPIs and impact metrics

The DevOps Engineer persona is evaluated with a mix of DORA, SPACE, and Agentic DevOps metrics.

| Metric | Baseline (manual) | Target (agentic) | Measurement |
|--------|-------------------|------------------|-------------|
| Pipeline scaffold time | 1 day | < 15 min | Time from intake ticket to green PR |
| IaC review time | 2 days | < 2 hours | Time from PR open to first `/iac-review` comment |
| Change failure rate | 18 percent | < 5 percent | Percent of deploys rolled back within 24 hours |
| Deployment frequency | Weekly | Multiple per day | GitHub Deployments API |
| Mean time to restore | 3 hours | < 30 min | Azure Monitor incident duration |
| Policy drift incidents | 6 per quarter | 0 | Azure Policy non-compliant resources |
| Secret age (max) | 365 days | < 30 days | Key Vault rotation audit |
| Token efficiency | N/A | < 500k tokens per release train | Copilot usage report |

## 11. Maturity in four levels

| Level | Name | Markers |
|-------|------|---------|
| L1 | Manual | Hand-written YAML per repo, ARM templates, secrets in variables, no policy enforcement |
| L2 | Assisted | GitHub Copilot autocomplete on YAML, Bicep adopted partially, OIDC for some environments |
| L3 | Augmented | One Pipeline Smith agent, four slash prompts, scoped instructions, Azure MCP for what-if, reusable workflows |
| L4 | Agentic | Full primitives kit, hooks enforced, validated MCPs only, release train auto-drafted, Azure Policy green by default |

## 12. Integration with other personas

Handoffs:

- **From Software Architect**: target topology, non-functional requirements, `IMPLEMENTATION_PLAN.md`
- **From Developer**: merged PR with passing tests, deployment artifact
- **To Release Manager**: release train draft, risk tiers, rollback plan
- **To SRE**: deployed artifact, dashboards, SLO configuration
- **To InfoSec Officer**: policy compliance report, secret rotation audit, OIDC federation map

## 13. Glossary

- **Agent**: a configured LLM role with tools, instructions, and a defined output shape. Lives in `.github/agents/<name>.agent.md`.
- **Prompt**: a reusable slash command that invokes an agent with a specific task. Lives in `.github/prompts/<name>.prompt.md`.
- **Instructions**: scoped guidance applied by pattern match on file paths via `applyTo`.
- **Skill**: a lazy-loaded capability that activates on keyword match. Costs tokens only when triggered.
- **Hook**: a zero-token rule enforced at a specific lifecycle event.
- **MCP**: Model Context Protocol server that exposes external systems to the agent.
- **Bicep**: the domain-specific language for Azure Resource Manager that compiles to ARM JSON.
- **OIDC federation**: short-lived token exchange between GitHub Actions or Azure DevOps and Entra ID, replacing long-lived secrets.
- **What-if**: an Azure Resource Manager preview that shows the effect of a deployment without applying it.

## 14. References

- [GitHub Actions documentation](https://docs.github.com/en/actions) — authoritative source for workflows, OIDC, and environments
- [Azure DevOps Pipelines documentation](https://learn.microsoft.com/azure/devops/pipelines/) — stages, approvals, variable groups
- [Bicep documentation](https://learn.microsoft.com/azure/azure-resource-manager/bicep/) — modules, parameter files, what-if
- [Azure Policy documentation](https://learn.microsoft.com/azure/governance/policy/) — compliance, remediation, initiative design
- [Azure Key Vault documentation](https://learn.microsoft.com/azure/key-vault/) — secrets, keys, certificates, references
- [Model Context Protocol specification](https://modelcontextprotocol.io/) — the protocol that binds agents to external systems
- [DORA metrics research](https://dora.dev/research/) — the empirical foundation behind four key metrics for software delivery
