---
title: "Project Manager Persona Card"
persona_id: "10-project-manager"
cluster: "enablement"
sdlc_phase: "delivery"
version: "1.0.0"
date: "2026-04-24"
---

# Project Manager

> Risk, status, stakeholders.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Enablement |
| SDLC phase | Delivery |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Enabled for /risk-deep |
| Agent file | `.github/agents/risk-scout.agent.md` |
| Key MCPs | GitHub, Azure DevOps, Microsoft 365 Agents SDK, Microsoft Learn Docs |

## Core loop

```
plan → track → report → escalate
```

## Primitives

- **Agent**: `risk-scout.agent.md` (Risk Scout)
- **Prompts**: /risk-scan, /status-report, /stakeholder-brief, /dependency-map
- **Instructions**: risk.instructions.md, status.instructions.md, stakeholders.instructions.md
- **Hooks**: post-sprint risk tally

## References

- [Full persona document](../../docs/en/personas/10-project-manager.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
