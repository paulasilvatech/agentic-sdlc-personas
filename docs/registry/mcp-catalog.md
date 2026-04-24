---
title: "MCP Catalog | Agentic SDLC Personas"
description: "Validated Model Context Protocol servers with official links, status classification, and persona mapping. Every MCP recommended by this framework must appear in this catalog."
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-24"
version: "1.1.0"
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
| 1.1.0 | 2026-04-24 | Paula Silva | Scoped catalog to Microsoft / Azure / GitHub Platform stack. Removed third-party vendor MCPs (Atlassian, Linear, Notion, Figma, Sentry, Slack, Grafana, Terraform, Snyk). Added Microsoft 365 Agents SDK MCP. |
| 1.0.0 | 2026-04-23 | Paula Silva | Initial catalog with 16 validated MCPs. |

## Table of contents

1. [Validation policy](#1-validation-policy)
2. [Status classifications](#2-status-classifications)
3. [Catalog table](#3-catalog-table)
4. [Official Microsoft family](#4-official-microsoft-family)
5. [Anthropic reference implementations](#5-anthropic-reference-implementations)
6. [Pending evaluation](#6-pending-evaluation)
7. [How to add a new MCP](#7-how-to-add-a-new-mcp)
8. [References](#8-references)

## 1. Validation policy

No MCP server is recommended in this framework without evidence of active maintenance and official status. The acceptance criteria are documented in [CONTRIBUTING.md](../../CONTRIBUTING.md#6-mcp-validation-policy).

A candidate MCP is accepted if at least one of the following is true:

1. The MCP is published by Microsoft, GitHub, or Azure under an official organization
2. The MCP is a reference implementation from the [Model Context Protocol organization](https://github.com/modelcontextprotocol)
3. The MCP is a community server with 500+ GitHub stars and at least one commit in the last 6 months, and a vendor-approved equivalent does not exist

**Stack constraint**: This framework recommends only Microsoft 365, Azure, and GitHub Platform tools. Third-party MCPs from non-Microsoft vendors are not included. Teams that use third-party tools can add them to their local `mcp.json` configurations.

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
| 05 | Microsoft 365 Agents SDK MCP | Official | 2026-04-24 | [Microsoft 365 Agents SDK](https://learn.microsoft.com/microsoft-365/agents-sdk/) |
| 06 | Playwright MCP Server | Official (Microsoft) | 2026-04-23 | [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) |
| 07 | PostgreSQL MCP Server | Reference | 2026-04-23 | [@modelcontextprotocol/server-postgres](https://www.npmjs.com/package/@modelcontextprotocol/server-postgres) |
| 08 | Filesystem MCP Server | Reference | 2026-04-23 | [modelcontextprotocol/servers · filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) |

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

### Microsoft 365 Agents SDK MCP

The Microsoft 365 Agents SDK enables AI agents to interact with Teams, Outlook, and other Microsoft 365 services. Agents can raise clarification threads, post structured updates, record meeting decisions, and distribute content across Microsoft 365 surfaces.

- **Persona mapping**: 01 Product Owner, 02 Business Manager, 07 Engineering Manager, 09 Scrum Master, 10 Project Manager, 23 Tech Writer, 24 DevRel, 03 Requirements Engineer
- **Authentication**: Entra ID via Azure Identity
- **Official link**: [Microsoft 365 Agents SDK](https://learn.microsoft.com/microsoft-365/agents-sdk/)

### Playwright MCP

Microsoft's Playwright MCP exposes browser automation to AI agents through the accessibility tree, not pixel-based input. Lower token cost than screenshot-based approaches.

- **Persona mapping**: 13 QA Engineer, 14 UAT Analyst, 08 UX Designer, 22 Developer
- **Authentication**: Local
- **Official link**: [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp)

## 5. Anthropic reference implementations

### PostgreSQL MCP Server

Read-only access to PostgreSQL databases. Enables schema inspection and read-only queries. Installed via `npx @modelcontextprotocol/server-postgres`.

- **Persona mapping**: 21 DBA, 15 Data Engineer, 22 Developer
- **Official link**: [@modelcontextprotocol/server-postgres](https://www.npmjs.com/package/@modelcontextprotocol/server-postgres)

### Filesystem MCP Server

Gives agents controlled access to local files with allowlisted paths. Reference implementation maintained in the `modelcontextprotocol/servers` repository.

- **Persona mapping**: All personas
- **Official link**: [modelcontextprotocol/servers · filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem)

## 6. Pending evaluation

The following candidates are not yet validated. Contributions to validate them are welcome (see [CONTRIBUTING.md](../../CONTRIBUTING.md#6-mcp-validation-policy)):

- Azure AI Foundry MCP
- Azure Kubernetes MCP (official)
- Azure SQL MCP
- Azure Cosmos DB MCP
- Microsoft Defender for DevOps MCP

## 7. How to add a new MCP

1. Open an issue using the [MCP addition request](../../.github/ISSUE_TEMPLATE/mcp_request.yml) template
2. Provide evidence: official URL, status classification, maintenance activity, persona mapping
3. Wait for maintainer review
4. On approval, submit a pull request that adds a row to the catalog table and a subsection under the appropriate status group
5. Update any `persona-kits/NN-*/mcp.json` files that reference this MCP

## 8. References

- [Model Context Protocol specification](https://modelcontextprotocol.io/)
- [Model Context Protocol reference servers](https://github.com/modelcontextprotocol/servers)
- [GitHub MCP Server changelog January 2026](https://github.blog/changelog/2026-01-28-github-mcp-server-new-projects-tools-oauth-scope-filtering-and-new-features/)
- [Azure MCP Server 2.0 stable announcement](https://devblogs.microsoft.com/azure-sdk/announcing-azure-mcp-server-2-0-stable-release/)
- [Visual Studio 2026 Azure MCP integration](https://devblogs.microsoft.com/visualstudio/azure-mcp-server-now-built-in-with-visual-studio-2026-a-new-era-for-agentic-workflows/)

---

[Back to docs index](../en/index.md) · [Contributing](../../CONTRIBUTING.md) · [Code of Conduct](../../CODE_OF_CONDUCT.md)

Paula Silva, AI-Native Software Engineer · [@paulasilvatech](https://github.com/paulasilvatech) · [agenticdevops.platform.com](https://agenticdevops.platform.com)
