---
title: "DevRel | Agentic SDLC Personas"
description: "The DevRel is the persona accountable for the developer experience outside the core team: tutorials, demo repositories, community conversations, and feedback loops back into the product. In an AI-nati"
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-24"
version: "1.0.0"
status: "approved"
locale: "en"
persona_id: "24-devrel"
sdlc_phase: "Community"
cluster: "enablement"
previous: "23-tech-writer"
next: ""
reading_time: 18
tags: ["persona", "devrel", "copilot", "tutorial", "demo", "community"]
---

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="28" height="28" style="vertical-align:-6px;"><rect x="1.5" y="1.5" width="61" height="61" rx="10" ry="10" fill="#F3F2F1" stroke="#605E5C" stroke-width="1.2"/><path d="M32 18l4 8h8l-6 5 2 9-8-5-8 5 2-9-6-5h8z" fill="none" stroke="#605E5C" stroke-width="2.5" stroke-linejoin="round"/></svg> DevRel

[← Previous: Tech Writer](./23-tech-writer.md) · [↑ Index](../index.md)

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

> The DevRel is the persona accountable for the developer experience outside the core team: tutorials, demo repositories, community conversations, and feedback loops back into the product. In an AI-native SDLC, DevRel operates a content and community pipeline, not an event calendar.

## 1. Executive summary

DevRel turns product capability into community proficiency. In an AI-native SDLC, DevRel works inside the Community phase with a fixed set of primitives: one demo-builder agent, four slash prompts, scoped instructions, schema-validated hooks, and a curated list of validated MCPs. The primary outputs are reproducible demo repositories on GitHub, tutorials published through Microsoft Learn-style content, video briefs for recorded sessions, and a regular community digest that feeds both external readers and the product team.

## 2. Role and responsibilities

Think of the DevRel like a concert promoter and a session musician rolled into one. The promoter books the venue and warms up the crowd; the session musician can sit in with the band and make the music sound better. In an AI-native SDLC DevRel both amplifies the product and plays alongside developers who adopt it.

Primary responsibilities:

- Produce demo repositories on GitHub that build with GitHub Actions and deploy to Azure (typically Azure Static Web Apps or Azure Container Apps for live instances)
- Write tutorials grounded in current Microsoft Learn content, validated by the Microsoft Learn Docs MCP
- Run the community cadence on GitHub Discussions, surfacing themes to the product team weekly
- Script and structure recorded sessions, live streams, and conference talks with reusable video briefs
- Feed community insight into Azure Boards as prioritized product feedback
- Partner with the Tech Writer to keep tutorials, demos, and reference docs cross-linked
- Operate the Demo Builder agent and the `/demo-script`, `/tutorial-outline`, `/video-brief`, `/community-digest` prompts

## 3. Jobs to be done

1. As a DevRel, I want a demo repository scaffolded in minutes from a chosen scenario, so that I record a session the same afternoon.
2. As a DevRel, I want tutorials that cite current Microsoft Learn pages, so that readers never follow outdated steps.
3. As a DevRel, I want a weekly digest of GitHub Discussions themes, so that the product team hears what the community is actually asking.
4. As a DevRel, I want video briefs with time-boxed sections and reproducible code snippets, so that recordings stay tight and editable.
5. As a DevRel, I want every demo repository covered by GitHub Actions CI, so that viewers can fork and run without hitting stale dependencies.
6. As a DevRel, I want community contributions acknowledged systematically, so that the best contributors stay engaged.

## 4. Pain points before AI-native

1. **Demos that break six weeks later**. A demo recorded in January fails in March because a dependency moved. Viewers lose trust.
2. **Tutorials grounded in yesterday's docs**. The tutorial cites a flag that was renamed two releases ago. Readers fork the repo and hit errors.
3. **Community themes invisible to product**. The product team hears the three loudest issues and nothing else; the quiet ninety percent of feedback is lost.
4. **Video sessions that drift**. Without a structured brief, a twenty-minute demo becomes a fifty-minute monologue.
5. **Contributor recognition ad hoc**. Top contributors churn because their work goes unacknowledged.

## 5. AI-native daily workflow

The DevRel operates a daily loop. The loop uses GitHub Copilot primitives inside Visual Studio Code, Claude Code at the terminal for long-form scripting, and the Microsoft Learn Docs MCP for grounded tutorials on Azure and Microsoft 365 topics.

### Morning setup

1. Open Visual Studio Code on the `devrel` repository. GitHub Copilot Chat loads the scoped `.github/instructions/devrel.instructions.md`.
2. Invoke `/community-digest`. The Demo Builder agent reads GitHub Discussions across the org, clusters themes, and drafts a digest in `devrel/digests/YYYY-WW.md`.
3. Skim overnight GitHub Actions results on all demo repositories: any red demo is triaged immediately so forkers do not hit broken code.

### Midday execution

1. Build or refresh a demo. Invoke `/demo-script <scenario>`. The agent scaffolds a repository with a `README.md`, a GitHub Actions workflow that builds and deploys to Azure Static Web Apps or Azure Container Apps, and a minimal test suite.
2. Write or update a tutorial. Invoke `/tutorial-outline <topic>`. The agent produces a section plan grounded in Microsoft Learn content via the Microsoft Learn Docs MCP, with code blocks matching the demo repo.
3. Pair with a developer from an ambassador program on their own contribution. Claude Code at the terminal drives through the repo and proposes improvements.

### Afternoon review

1. Record or prepare a session. Invoke `/video-brief <session>`. The agent produces a brief with time-boxed sections, reproducible code snippets, on-screen cues, and a checklist for the editor.
2. Publish content. GitHub Actions builds the demo, deploys to Azure, and posts a Teams announcement via the M365 Agents SDK when a new tutorial lands.
3. Close the day by pushing the digest. Product Managers subscribed to the Teams channel receive the digest; high-signal items get created as Azure Boards work items.

## 6. Recommended primitives

### Agent

| Agent | File | Purpose |
|-------|------|---------|
| `demo-builder` | `.github/agents/demo-builder.agent.md` | Scaffold demos, draft tutorials grounded in Microsoft Learn, produce video briefs, synthesize the community digest |

The Demo Builder agent uses `claude-sonnet-4-6` by default, with tools `read`, `edit`, `search`, `grep`, `glob`, `bash`. It pulls context from GitHub, Microsoft Learn Docs, and Azure MCPs, and uses Playwright MCP to verify that deployed demos run.

### Slash prompts

| Command | File | Purpose |
|---------|------|---------|
| `/demo-script` | `.github/prompts/demo-script.prompt.md` | Scaffold a demo repository with CI, deploy target, and reproducible steps |
| `/tutorial-outline` | `.github/prompts/tutorial-outline.prompt.md` | Produce a tutorial section plan grounded in Microsoft Learn |
| `/video-brief` | `.github/prompts/video-brief.prompt.md` | Draft a time-boxed brief for a recorded session with on-screen cues |
| `/community-digest` | `.github/prompts/community-digest.prompt.md` | Cluster GitHub Discussions themes and draft a digest |

### Instructions scoped

Scoped `applyTo` keeps community-facing content distinct from internal docs.

| Scope (`applyTo`) | File | Purpose |
|-------------------|------|---------|
| `devrel/demos/**` | `.github/instructions/demos.instructions.md` | Demo repo conventions, CI must deploy, README discipline |
| `devrel/tutorials/**` | `.github/instructions/tutorials.instructions.md` | Tutorial voice, citation of Microsoft Learn sources, accessibility checks |
| `devrel/videos/**` | `.github/instructions/videos.instructions.md` | Video brief format, time-box discipline, on-screen cues |

### Hooks

Hooks are zero-token governance for community artifacts.

- `pre-commit`: reject a tutorial without a citation to a Microsoft Learn or GitHub Docs page when the topic touches Microsoft or GitHub stacks
- `post-commit`: trigger a Playwright MCP smoke test against the deployed demo whenever the demo repo changes
- `pre-push`: verify that every demo repository has a passing GitHub Actions workflow within the last seven days

## 7. Validated MCPs

Every MCP below is registered in the MCP catalog. Do not reference any MCP that is not in the catalog.

| MCP | Status | Use in this persona |
|-----|--------|---------------------|
| [GitHub MCP Server](https://github.com/github/github-mcp-server) | Official | Manage demo repositories, read Discussions, create issues for community themes |
| [Microsoft Learn Docs MCP](https://github.com/microsoftdocs/mcp) | Official | Ground tutorials in current Microsoft Learn content for Azure and Microsoft 365 topics |
| [Azure MCP Server](https://github.com/Azure/azure-mcp) | Official (Microsoft) | Deploy and inspect demo environments on Azure Static Web Apps and Azure Container Apps |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Official (Microsoft) | Smoke-test deployed demos end-to-end so forkers never land on broken instances |
| [Azure DevOps MCP Server](https://github.com/microsoft/azure-devops-mcp) | Official (Microsoft) | File community-driven feedback as Azure Boards work items when the product team uses Azure Boards |
| [Microsoft 365 Agents SDK MCP](https://learn.microsoft.com/microsoft-365/agents-sdk/) | Official (Microsoft) | Announce new tutorials, demos, and digests into Microsoft Teams channels |

## 8. Real examples

### Example 1: demo for a new Azure AI Foundry feature

**Input**: A new capability ships in Azure AI Foundry; the product team wants a demo in seven days.

**Invocation**: `/demo-script foundry-agent-chat`.

**Expected output**:

1. A new repository `devrel-demos/foundry-agent-chat` with a `README.md`, a working sample, a GitHub Actions workflow that deploys to Azure Container Apps, and a Playwright smoke test.
2. The tutorial draft `devrel/tutorials/foundry-agent-chat.mdx` cross-linked to Microsoft Learn pages on Azure AI Foundry, via the Microsoft Learn Docs MCP.
3. A video brief in `devrel/videos/foundry-agent-chat.md` with a ten-minute run time, three code-walkthrough sections, and on-screen cues.
4. A Teams announcement via the M365 Agents SDK to the developer-community channel when the demo deploys successfully.

### Example 2: weekly community digest

**Input**: Over the last seven days, GitHub Discussions saw 42 threads across three repositories.

**Invocation**: `/community-digest`.

**Expected output**:

1. A digest in `devrel/digests/2026-W17.md` with three theme clusters: onboarding friction in the CLI, requests for a Terraform provider, confusion about pricing tiers.
2. Each theme cites at least two representative Discussions links.
3. For each theme, a proposed Azure Boards work item is drafted for the product team to consider; the DevRel triages before filing.
4. A Teams post via the M365 Agents SDK summarizing the digest for the product managers who subscribe.

## 9. Anti-patterns

1. **Demos without CI**. A demo that is not built by GitHub Actions breaks silently. Mitigation: the pre-push hook rejects demos with no green workflow in the last seven days.
2. **Tutorials grounded in memory**. Writing from memory is a drift generator. Mitigation: `tutorials.instructions.md` requires Microsoft Learn citations via the Microsoft Learn Docs MCP.
3. **Community feedback as anecdotes**. Sharing one or two loud quotes is not a signal. Mitigation: `/community-digest` clusters themes with representative links.
4. **Video sessions with no brief**. An unbriefed session runs long and edits poorly. Mitigation: `/video-brief` enforces time-box and on-screen cue discipline.
5. **Contribution recognition ad hoc**. Ad hoc thank-you posts miss most contributors. Mitigation: the digest section on contributors pulls merged PRs and accepted Discussions answers from the GitHub MCP.

## 10. KPIs and impact metrics

| Metric | Baseline (manual) | Target (agentic) | Measurement |
|--------|-------------------|------------------|-------------|
| Demo build success rate on fork | 60 percent | Over 95 percent | GitHub Actions history |
| Time from product release to demo | 14 days | Under 3 days | Release-to-demo lag |
| Tutorial citation coverage | 30 percent | Over 90 percent | Citation audit |
| Community themes fed to product per week | Zero to one | Three to five | Digest history |
| Community-driven Azure Boards items per month | Under 5 | Over 20 | Work-item source label |
| Token efficiency | N/A | Under 300k tokens per week | Copilot usage report |

## 11. Maturity in four levels

| Level | Name | Markers |
|-------|------|---------|
| L1 | Manual | Demos without CI, tutorials from memory, no community digest |
| L2 | Assisted | GitHub Copilot Chat for drafting, some demos on GitHub Actions, inconsistent citations |
| L3 | Augmented | Demo Builder agent, four slash prompts, scoped instructions, Microsoft Learn Docs MCP grounding, Playwright smoke tests |
| L4 | Agentic | Full primitives kit, hooks enforced, community themes feeding Azure Boards weekly, demos deployed to Azure with green CI at all times, maturity scorecard above 80 percent |

## 12. Integration with other personas

- **With Product Owner**: community themes influence roadmap negotiations
- **With Tech Writer**: tutorials cross-link to reference docs
- **With Developer**: demos exercise real APIs and surface friction
- **With Release Manager**: release cadence aligns with demo and tutorial publication
- **With UX Designer**: tutorial flow and onboarding friction feed UX research
- **With Engineering Manager**: community load and ambassador program capacity
- **With InfoSec Officer**: demos reviewed for credential hygiene before publication

## 13. Glossary

- **Demo repository**: a forkable GitHub repository that builds and deploys on Azure, covered by CI and Playwright smoke tests.
- **Tutorial**: a step-by-step guide grounded in current Microsoft Learn content and cross-linked to a demo.
- **Community digest**: a weekly synthesis of GitHub Discussions themes, with representative links and proposed product-feedback items.
- **Video brief**: a structured outline for a recorded session, with time-boxed sections, on-screen cues, and reproducible code snippets.
- **Ambassador program**: a structured engagement with external community contributors who champion the product.
- **Citation discipline**: the rule that tutorials on Microsoft or GitHub topics cite current Microsoft Learn or GitHub Docs pages.

## 14. References

- [GitHub Discussions documentation](https://docs.github.com/discussions) — authoritative source for community hosting on GitHub
- [Microsoft Learn Docs MCP](https://github.com/microsoftdocs/mcp) — grounding for tutorials on Microsoft 365 and Azure
- [Azure Static Web Apps documentation](https://learn.microsoft.com/azure/static-web-apps/) — hosting target for static demo deployments
- [Azure Container Apps documentation](https://learn.microsoft.com/azure/container-apps/) — hosting target for live demo services
- [GitHub Actions documentation](https://docs.github.com/actions) — CI and deployment automation for demo repositories
