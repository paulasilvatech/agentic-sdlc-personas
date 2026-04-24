---
title: "Engineering Manager Persona Card"
persona_id: "07-engineering-manager"
cluster: "enablement"
sdlc_phase: "governance"
version: "1.0.0"
date: "2026-04-24"
---

# Engineering Manager

> People and delivery health.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Enablement |
| SDLC phase | Governance |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Disabled |
| Agent file | `.github/agents/delivery-pulse.agent.md` |
| Key MCPs | GitHub, Azure DevOps, Microsoft 365 Agents SDK, Microsoft Learn Docs |

## Core loop

```
observe → coach → unblock → report
```

## Primitives

- **Agent**: `delivery-pulse.agent.md` (Delivery Pulse)
- **Prompts**: /delivery-pulse, /team-health, /1on1-prep, /capacity-plan
- **Instructions**: delivery.instructions.md, team-health.instructions.md
- **Hooks**: post-sprint metrics refresh

## References

- [Full persona document](../../docs/en/personas/07-engineering-manager.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
