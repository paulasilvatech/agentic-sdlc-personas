---
title: "Security Policy | Agentic SDLC Personas"
description: "Vulnerability reporting policy and supported versions."
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-23"
version: "1.0.0"
status: "approved"
---

# Security Policy

## Supported versions

Only the latest minor release of the framework receives security updates. See [CHANGELOG.md](./CHANGELOG.md) for the current release.

| Version | Supported |
|---------|-----------|
| 1.x.x | Yes |
| < 1.0 | No |

## Reporting a vulnerability

If you discover a security issue in any persona kit, MCP reference, or site asset, please report it privately.

**Do not open a public GitHub issue for security problems.**

Email `security@agenticdevops.platform.com` with the following information:

1. A clear description of the issue
2. Steps to reproduce
3. Affected files or components (persona kit slug, MCP name, site page)
4. Your suggested severity classification (critical, high, medium, low)
5. Your contact information for follow-up

You will receive an acknowledgement within 72 hours. Public disclosure will be coordinated after a fix is released. Reporters are credited in the release notes unless they prefer to remain anonymous.

## MCP-specific risks

Persona kits reference external MCP servers. Users who install a kit are responsible for evaluating the security posture of each MCP they enable. This project only recommends MCPs that meet the criteria in the [MCP validation policy](./CONTRIBUTING.md#6-mcp-validation-policy), but inclusion in the catalog is not a security endorsement of the upstream server.

---

Paula Silva, AI-Native Software Engineer · [@paulasilvatech](https://github.com/paulasilvatech) · [agenticdevops.platform.com](https://agenticdevops.platform.com)
