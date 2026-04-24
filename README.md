<div align="center">

<img src="assets/icons/brand/logo.svg" alt="Agentic SDLC Personas" width="80" height="80" onerror="this.style.display='none'"/>

# Agentic SDLC Personas

**Twenty-four persona kits for an AI-native software development lifecycle**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](./CHANGELOG.md)
[![Site](https://img.shields.io/badge/site-paulasilvatech.github.io-ink.svg)](https://paulasilvatech.github.io/agentic-sdlc-personas/)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-yellow.svg)](./CONTRIBUTING.md)

Pioneering software development with AI and Agentic DevOps.
Validated primitives for GitHub Copilot and Claude Code across every role in a modern engineering organization.

**[EN](./docs/en/index.md) · [PT-BR](./docs/pt-br/index.md) · [ES](./docs/es/index.md) · [Live site](https://paulasilvatech.github.io/agentic-sdlc-personas/)**

</div>

---

## What this is

Twenty-four ready-to-install persona kits that wire up GitHub Copilot primitives (agents, prompts, instructions, skills, hooks) and only the Model Context Protocol servers that actually exist, with official links, across the full software development lifecycle.

Each kit includes a full persona document, an agent configuration, prompt files, scoped instructions, a validated `mcp.json`, an `install.sh`, examples, schema tests, and a changelog.

No invented MCPs, no hallucinated repositories, no fictional "coming soon" integrations. Every MCP entry is traceable to an official vendor repository or hosted endpoint.

## Table of contents

1. [Why these twenty-four](#1-why-these-twenty-four)
2. [The four layers](#2-the-four-layers)
3. [The twenty-four personas](#3-the-twenty-four-personas)
4. [Quickstart](#4-quickstart)
5. [Repository layout](#5-repository-layout)
6. [Validated MCPs](#6-validated-mcps)
7. [Documentation](#7-documentation)
8. [Contributing](#8-contributing)
9. [License](#9-license)
10. [Citation](#10-citation)

## 1. Why these twenty-four

An AI-native software organization is not the old org chart with Copilot bolted on. The decisions that the Developer used to make in isolation are now shared with agents. The work the Scrum Master used to do in spreadsheets is now handled by slash commands. The runbooks the SRE used to memorize are now executed by hooks. To make this shift real, each persona needs a kit: a bounded set of primitives that encode how that role operates in an agentic SDLC.

We picked twenty-four because it is the smallest set that covers every phase of the SDLC without overlap and without gaps: from Planning and Discovery through Design, Implementation, Verification, Release, and Operation, with governance and enablement running across all of them.

## 2. The four layers

The framework organizes every persona and every primitive into four layers of discipline. The colors below come from the [paulasilvatech Design System](https://github.com/paulasilvatech) and are used consistently across documents, diagrams, and the site.

| Layer | Color | Role |
|-------|-------|------|
| Intent | Red `#F25022` | Governance, specification, purpose. Constitutions, EARS requirements, acceptance criteria. |
| Context | Yellow `#FFB900` | Knowledge, data, memory. CODEMAP, ADRs, architecture docs, scoped instructions. |
| Platform | Green `#7FBA00` | Capability, enablement. Code, tests, golden paths, internal developer platforms. |
| Infrastructure | Blue `#00A4EF` | Where agents run. Pipelines, IaC, observability, reliability. |

## 3. The twenty-four personas

<table>
<tr>
  <th colspan="4">Product and discovery</th>
</tr>
<tr>
  <td><strong>01</strong><br/>Product Owner</td>
  <td><strong>02</strong><br/>Business Manager</td>
  <td><strong>03</strong><br/>Requirements Engineer</td>
  <td><strong>08</strong><br/>UX Designer</td>
</tr>
<tr>
  <th colspan="4">Architecture and leadership</th>
</tr>
<tr>
  <td><strong>04</strong><br/>Enterprise Architect</td>
  <td><strong>05</strong><br/>Software Architect</td>
  <td><strong>06</strong><br/>Technical Lead</td>
  <td><strong>12</strong><br/>Platform Architect</td>
</tr>
<tr>
  <th colspan="4">Build and data</th>
</tr>
<tr>
  <td><strong>22</strong><br/>Developer</td>
  <td><strong>15</strong><br/>Data Engineer</td>
  <td><strong>16</strong><br/>ML AI Engineer</td>
  <td><strong>21</strong><br/>DBA</td>
</tr>
<tr>
  <th colspan="4">Quality and release</th>
</tr>
<tr>
  <td><strong>13</strong><br/>QA Engineer</td>
  <td><strong>14</strong><br/>UAT Analyst</td>
  <td><strong>17</strong><br/>Release Manager</td>
  <td><strong>11</strong><br/>DevOps Engineer</td>
</tr>
<tr>
  <th colspan="4">Operations, security, compliance</th>
</tr>
<tr>
  <td><strong>20</strong><br/>SRE</td>
  <td><strong>18</strong><br/>InfoSec Officer</td>
  <td><strong>19</strong><br/>Compliance Auditor</td>
  <td><strong>07</strong><br/>Engineering Manager</td>
</tr>
<tr>
  <th colspan="4">Enablement</th>
</tr>
<tr>
  <td><strong>09</strong><br/>Scrum Master</td>
  <td><strong>10</strong><br/>Project Manager</td>
  <td><strong>23</strong><br/>Tech Writer</td>
  <td><strong>24</strong><br/>DevRel</td>
</tr>
</table>

Full documents in [`docs/en/personas/`](./docs/en/personas/) (and `pt-br/`, `es/`). Installable kits in [`persona-kits/`](./persona-kits/).

## 4. Quickstart

### 4.1 Install a persona kit into an existing repository

```bash
git clone https://github.com/paulasilvatech/agentic-sdlc-personas.git
cd agentic-sdlc-personas

# Example: install the Developer kit into your project
cd persona-kits/22-developer
./install.sh /path/to/your-repo
```

### 4.2 Run the site locally with Docker Desktop (recommended)

No Node required on the host. Docker Desktop only.

```bash
# Dev with hot reload on http://localhost:4321
make dev

# Production build served by nginx on http://localhost:8080/agentic-sdlc-personas/
make prod

# One-shot static build (no server)
make build

# Stop everything
make down
```

Under the hood, `docker compose` uses three profiles (`dev`, `preview`, `prod`) against a multi-stage Dockerfile. Full details in [LOCAL_DEV.md](./LOCAL_DEV.md).

### 4.3 Run the site locally with native Node

```bash
cd site
npm install
npm run dev
# Open http://localhost:4321
```

## 5. Repository layout

```
agentic-sdlc-personas/
├── README.md                       # This file
├── LICENSE                         # MIT
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── CHANGELOG.md
├── CITATION.cff
├── .github/
│   ├── ISSUE_TEMPLATE/             # bug, new persona, MCP request, doc improve
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── FUNDING.yml
│   └── workflows/                  # validate.yml, deploy.yml
├── assets/
│   ├── icons/personas/             # 24 SVG icons, one per persona
│   └── diagrams/                   # SDLC map, cluster map, handoff matrix
├── docs/
│   ├── STYLE_GUIDE.md
│   ├── _templates/persona-document.md
│   ├── registry/mcp-catalog.md     # Validated MCPs with official links
│   ├── en/personas/*.md            # 24 persona documents (EN)
│   ├── pt-br/personas/*.md         # 24 persona documents (PT-BR)
│   └── es/personas/*.md            # 24 persona documents (ES)
├── persona-kits/                   # 24 installable kits
│   └── NN-slug/
│       ├── README.md
│       ├── PERSONA.md
│       ├── CHANGELOG.md
│       ├── install.sh
│       ├── mcp.json                # Validated MCPs only
│       ├── hooks.json
│       ├── examples/
│       ├── tests/schema.json
│       └── .github/
│           ├── agents/<persona>.agent.md
│           ├── prompts/*.prompt.md
│           └── instructions/*.instructions.md
└── site/                           # Astro site, trilingual, GitHub Pages
    ├── astro.config.mjs
    ├── tailwind.config.mjs
    └── src/
```

## 6. Validated MCPs

This framework only recommends MCP servers that exist. Every entry in the catalog has an official link, a status classification, and a persona mapping.

Current catalog (v1.0.0) includes: GitHub, Azure DevOps, Microsoft Learn Docs, Azure MCP Server, Atlassian Rovo, Linear, Notion, Figma Dev Mode, Sentry, Slack, PostgreSQL (reference), Grafana, Terraform, Snyk, Playwright, and Filesystem (reference).

Full details and official URLs: [`docs/registry/mcp-catalog.md`](./docs/registry/mcp-catalog.md).

## 7. Documentation

- [Style guide](./docs/STYLE_GUIDE.md) — editorial contract for every `.md` in the repo
- [MCP catalog](./docs/registry/mcp-catalog.md) — validated servers with official links
- [Contributing guide](./CONTRIBUTING.md) — how to propose a persona, an MCP, a translation, a fix
- [Persona document template](./docs/_templates/persona-document.md) — canonical structure for every persona doc
- [Live site](https://paulasilvatech.github.io/agentic-sdlc-personas/) — browseable, searchable, trilingual

## 8. Contributing

Contributions are welcome in five categories:

1. New persona kit
2. Improvement to an existing kit
3. A validated MCP to add to the catalog
4. A translation to PT-BR or ES
5. A documentation fix

Read the [contributing guide](./CONTRIBUTING.md) first. MCP additions follow a strict [validation policy](./CONTRIBUTING.md#6-mcp-validation-policy).

## 9. License

MIT. See [LICENSE](./LICENSE).

## 10. Citation

If you use this framework or any of these kits in a paper, a product, or a conference talk, please cite it. See [`CITATION.cff`](./CITATION.cff).

---

<div align="center">

**Paula Silva**, AI-Native Software Engineer, Global Black Belt at Microsoft Americas

[@paulasilvatech](https://github.com/paulasilvatech) · [agenticdevops.platform.com](https://agenticdevops.platform.com) · [LinkedIn](https://www.linkedin.com/in/paulanunes/)

</div>
