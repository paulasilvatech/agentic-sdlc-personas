---
title: "MCP Catalog | Agentic SDLC Personas"
description: "Validated Model Context Protocol servers with official links, status classification, and persona mapping. Every MCP recommended by this framework must appear in this catalog."
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-23"
version: "1.0.0"
status: "approved"
locale: "en"
tags: ["mcp", "catalog", "registry", "validation"]
---

# MCP Catalog

> Validated Model Context Protocol servers, with official links. Every `mcp.json` in this repository must reference only entries that appear here.

[Back to docs index](../en/index.md)

## Change log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-04-23 | Paula Silva | Initial catalog with 16 validated MCPs. GitHub, Azure DevOps, Microsoft Learn Docs, Azure, Atlassian, Linear, Notion, Figma, Sentry, Slack, PostgreSQL reference, Grafana, Terraform, Snyk, Playwright, Filesystem reference. |

## Sumário

1. [Validation policy](#1-validation-policy)
2. [Status classifications](#2-status-classifications)
3. [Catalog table](#3-catalog-table)
4. [Official Microsoft family](#4-official-microsoft-family)
5. [Official vendor servers](#5-official-vendor-servers)
6. [Anthropic reference implementations](#6-anthropic-reference-implementations)
7. [Pending evaluation](#7-pending-evaluation)
8. [How to add a new MCP](#8-how-to-add-a-new-mcp)
9. [References](#9-references)

## 1. Validation policy

No MCP server is recommended in this framework without evidence of active maintenance and official status. The acceptance criteria are documented in [CONTRIBUTING.md](../../CONTRIBUTING.md#6-mcp-validation-policy).

A candidate MCP is accepted if at least one of the following is true:

1. The MCP is published by the product vendor itself under an official GitHub organization
2. The MCP is a reference implementation from the [Model Context Protocol organization](https://github.com/modelcontextprotocol)
3. The MCP is a community server with 500+ GitHub stars and at least one commit in the last 6 months, and a vendor-approved equivalent does not exist

Every catalog entry lists the validation date. Entries are re-validated at each minor release of this framework.

## 2. Status classifications

| Badge | Meaning |
|-------|---------|
| **Official** | Maintained by the product vendor itself |
| **Reference** | Part of the Model Context Protocol reference implementations (Anthropic stewarded) |
| **Community stable** | Community-maintained, high adoption, active in the last 6 months |
| **Preview** | Officially announced but still in preview at validation date |
| **Removed** | Previously included, no longer recommended (with reason) |

## 3. Catalog table

| # | MCP Server | Status | Validation date | Official link |
|---|-----------|--------|-----------------|---------------|
| 01 | GitHub MCP Server | Official | 2026-04-23 | [github/github-mcp-server](https://github.com/github/github-mcp-server) |
| 02 | Azure DevOps MCP Server | Official (GA) | 2026-04-23 | [microsoft/azure-devops-mcp](https://github.com/microsoft/azure-devops-mcp) |
| 03 | Microsoft Learn Docs MCP | Official | 2026-04-23 | [microsoftdocs/mcp](https://github.com/microsoftdocs/mcp) |
| 04 | Azure MCP Server | Official (2.0 stable) | 2026-04-23 | [microsoft/mcp (Azure.Mcp.Server)](https://github.com/microsoft/mcp/blob/main/servers/Azure.Mcp.Server/README.md) |
| 05 | Atlassian Rovo MCP Server | Official (GA Feb 2026) | 2026-04-23 | [atlassian/atlassian-mcp-server](https://github.com/atlassian/atlassian-mcp-server) |
| 06 | Linear MCP Server | Official (remote hosted) | 2026-04-23 | [linear.app/docs/mcp](https://linear.app/docs/mcp) |
| 07 | Notion MCP Server | Official | 2026-04-23 | [makenotion/notion-mcp-server](https://github.com/makenotion/notion-mcp-server) |
| 08 | Figma Dev Mode MCP Server | Official | 2026-04-23 | [developers.figma.com/docs/figma-mcp-server](https://developers.figma.com/docs/figma-mcp-server/) |
| 09 | Sentry MCP Server | Official | 2026-04-23 | [getsentry/sentry-mcp](https://github.com/getsentry/sentry-mcp) |
| 10 | Slack MCP Server | Official (GA 2026) | 2026-04-23 | [slack.dev secure data connectivity](https://slack.dev/secure-data-connectivity-for-the-modern-ai-era/) |
| 11 | PostgreSQL MCP Server | Reference | 2026-04-23 | [@modelcontextprotocol/server-postgres](https://www.npmjs.com/package/@modelcontextprotocol/server-postgres) |
| 12 | Grafana MCP Server | Official | 2026-04-23 | [grafana/mcp-grafana](https://github.com/grafana/mcp-grafana) |
| 13 | Terraform MCP Server | Official | 2026-04-23 | [hashicorp/terraform-mcp-server](https://github.com/hashicorp/terraform-mcp-server) |
| 14 | Snyk MCP Server | Official | 2026-04-23 | [Snyk MCP overview](https://docs.snyk.io/scan-with-snyk/snyk-mcp) |
| 15 | Playwright MCP Server | Official (Microsoft) | 2026-04-23 | [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) |
| 16 | Filesystem MCP Server | Reference | 2026-04-23 | [modelcontextprotocol/servers · filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) |

## 4. Official Microsoft family

### GitHub MCP Server

The GitHub MCP Server is GitHub's own implementation. It exposes repositories, issues, pull requests, Actions, and Projects to any MCP-compatible client. As of January 2026, the server added Projects tools and OAuth scope filtering. It is the primary MCP for every persona that touches source control, code review, or release workflows.

- **Persona mapping**: 22 Developer, 06 Technical Lead, 05 Software Architect, 07 Engineering Manager, 17 Release Manager, 18 InfoSec Officer, 20 SRE, 23 Tech Writer, 24 DevRel
- **Authentication**: OAuth or fine-grained Personal Access Token
- **Official link**: [github/github-mcp-server](https://github.com/github/github-mcp-server)

### Azure DevOps MCP Server

Microsoft's MCP for Azure DevOps covers work items, pull requests, builds, test plans, and documentation. Reached General Availability in November 2025. Offers both a local TypeScript server and a hosted remote server (public preview as of April 2026).

- **Persona mapping**: 10 Project Manager, 09 Scrum Master, 17 Release Manager, 11 DevOps Engineer, 13 QA Engineer, 03 Requirements Engineer
- **Authentication**: Azure Identity via Entra ID
- **Official link**: [microsoft/azure-devops-mcp](https://github.com/microsoft/azure-devops-mcp)

### Microsoft Learn Docs MCP

No authentication, no cost. Enables Copilot, Claude Code, Cursor, and other clients to fetch current Microsoft Learn documentation and code samples. Embedded in Visual Studio 2026.

- **Persona mapping**: All personas, especially 22 Developer, 04 Enterprise Architect, 05 Software Architect, 23 Tech Writer, 16 ML AI Engineer
- **Authentication**: None
- **Official link**: [microsoftdocs/mcp](https://github.com/microsoftdocs/mcp)

### Azure MCP Server

Generally available with the 2.0 stable release. Lets AI agents interact with Azure resources via natural language using Azure CLI, Azure Developer CLI, and direct resource APIs. Built into Visual Studio 2026 out of the box.

- **Persona mapping**: 11 DevOps Engineer, 04 Enterprise Architect, 12 Platform Architect, 20 SRE, 21 DBA, 16 ML AI Engineer, 18 InfoSec Officer
- **Authentication**: Entra ID via Azure Identity
- **Official link**: [microsoft/mcp · Azure.Mcp.Server](https://github.com/microsoft/mcp/blob/main/servers/Azure.Mcp.Server/README.md)

### Playwright MCP

Microsoft's Playwright MCP exposes browser automation to AI agents through the accessibility tree, not pixel-based input. Lower token cost than screenshot-based approaches.

- **Persona mapping**: 13 QA Engineer, 14 UAT Analyst, 08 UX Designer, 22 Developer
- **Authentication**: Local
- **Official link**: [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp)

## 5. Official vendor servers

### Atlassian Rovo MCP Server

Cloud-hosted bridge to Jira, Confluence, and Compass. General Availability February 2026. Secure OAuth 2.1 or API tokens. Note: `https://mcp.atlassian.com/v1/sse` retired after June 30, 2026, clients must migrate to `/v1/mcp`.

- **Persona mapping**: 01 Product Owner, 10 Project Manager, 09 Scrum Master, 03 Requirements Engineer, 23 Tech Writer
- **Official link**: [atlassian/atlassian-mcp-server](https://github.com/atlassian/atlassian-mcp-server)

### Linear MCP Server

Hosted remote MCP for Linear with full support for initiatives, milestones, and project updates. SSE transport deprecated, all clients use `https://mcp.linear.app/mcp`.

- **Persona mapping**: 01 Product Owner, 09 Scrum Master, 10 Project Manager, 22 Developer, 06 Technical Lead
- **Official link**: [linear.app/docs/mcp](https://linear.app/docs/mcp)

### Notion MCP Server

Official hosted server. OAuth one-click install. Version 2.0.0 migrated to Notion API 2025-09-03 with data sources as the primary abstraction.

- **Persona mapping**: 01 Product Owner, 23 Tech Writer, 08 UX Designer, 07 Engineering Manager, 24 DevRel
- **Official link**: [makenotion/notion-mcp-server](https://github.com/makenotion/notion-mcp-server)

### Figma Dev Mode MCP Server

Available to Figma Dev or Full seats. Pulls variables, components, and layout data directly into the IDE. Works with Copilot in VS Code, Cursor, Windsurf, and Claude Code.

- **Persona mapping**: 08 UX Designer, 22 Developer, 06 Technical Lead
- **Official link**: [developers.figma.com/docs/figma-mcp-server](https://developers.figma.com/docs/figma-mcp-server/)

### Sentry MCP Server

Optimized for human-in-the-loop coding agents. Device-code authentication for `sentry.io`, npx-based local option for self-hosted Sentry.

- **Persona mapping**: 22 Developer, 20 SRE, 11 DevOps Engineer, 13 QA Engineer
- **Official link**: [getsentry/sentry-mcp](https://github.com/getsentry/sentry-mcp)

### Slack MCP Server

General Availability in 2026. Interactive message composer with live preview, search across conversations, draft-before-send workflow. Slackbot now also functions as an MCP client.

- **Persona mapping**: 09 Scrum Master, 10 Project Manager, 07 Engineering Manager, 20 SRE, 24 DevRel
- **Official link**: [slack.dev secure data connectivity](https://slack.dev/secure-data-connectivity-for-the-modern-ai-era/)

### Grafana MCP Server

Access dashboards, datasources (Prometheus, Loki, Pyroscope), alerting, incident management, OnCall, and Sift investigations.

- **Persona mapping**: 20 SRE, 11 DevOps Engineer, 15 Data Engineer
- **Official link**: [grafana/mcp-grafana](https://github.com/grafana/mcp-grafana)

### Terraform MCP Server

HashiCorp's official server for Terraform provider documentation, modules, Sentinel policies, and HCP Terraform operations. Supports Stacks and policy sets.

- **Persona mapping**: 04 Enterprise Architect, 11 DevOps Engineer, 12 Platform Architect, 18 InfoSec Officer
- **Official link**: [hashicorp/terraform-mcp-server](https://github.com/hashicorp/terraform-mcp-server)

### Snyk MCP Server

Most comprehensive code security MCP as of March 2026 (11 tools covering SAST, SCA, IaC, containers, SBOM, and AI-BOM).

- **Persona mapping**: 18 InfoSec Officer, 19 Compliance Auditor, 22 Developer, 06 Technical Lead
- **Official link**: [docs.snyk.io · Snyk MCP](https://docs.snyk.io/scan-with-snyk/snyk-mcp)

## 6. Anthropic reference implementations

### PostgreSQL MCP Server

Read-only access to PostgreSQL databases. Enables schema inspection and read-only queries. Installed via `npx @modelcontextprotocol/server-postgres`.

- **Persona mapping**: 21 DBA, 15 Data Engineer, 22 Developer
- **Official link**: [@modelcontextprotocol/server-postgres](https://www.npmjs.com/package/@modelcontextprotocol/server-postgres)

### Filesystem MCP Server

Gives agents controlled access to local files with allowlisted paths. Reference implementation maintained in the `modelcontextprotocol/servers` repository.

- **Persona mapping**: All personas
- **Official link**: [modelcontextprotocol/servers · filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem)

## 7. Pending evaluation

The following candidates are not yet validated. Contributions to validate them are welcome (see [CONTRIBUTING.md](../../CONTRIBUTING.md#6-mcp-validation-policy)):

- SonarQube official MCP
- Datadog MCP
- PagerDuty MCP
- New Relic MCP
- Kubernetes MCP (official)
- MongoDB MCP
- GitLab MCP (official)
- Azure AI Foundry MCP

## 8. How to add a new MCP

1. Open an issue using the [MCP addition request](../../.github/ISSUE_TEMPLATE/mcp_request.yml) template
2. Provide evidence: official URL, status classification, maintenance activity, persona mapping
3. Wait for maintainer review
4. On approval, submit a pull request that adds a row to the catalog table and a subsection under the appropriate status group
5. Update any `persona-kits/NN-*/mcp.json` files that reference this MCP

## 9. References

- [Model Context Protocol specification](https://modelcontextprotocol.io/)
- [Model Context Protocol reference servers](https://github.com/modelcontextprotocol/servers)
- [GitHub MCP Server changelog January 2026](https://github.blog/changelog/2026-01-28-github-mcp-server-new-projects-tools-oauth-scope-filtering-and-new-features/)
- [Azure MCP Server 2.0 stable announcement](https://devblogs.microsoft.com/azure-sdk/announcing-azure-mcp-server-2-0-stable-release/)
- [Atlassian Rovo MCP Server GA announcement](https://www.atlassian.com/blog/announcements/atlassian-rovo-mcp-ga)
- [Visual Studio 2026 Azure MCP integration](https://devblogs.microsoft.com/visualstudio/azure-mcp-server-now-built-in-with-visual-studio-2026-a-new-era-for-agentic-workflows/)

---

[Back to docs index](../en/index.md) · [Contributing](../../CONTRIBUTING.md) · [Code of Conduct](../../CODE_OF_CONDUCT.md)

Paula Silva, AI-Native Software Engineer · [@paulasilvatech](https://github.com/paulasilvatech) · [agenticdevops.platform.com](https://agenticdevops.platform.com)
