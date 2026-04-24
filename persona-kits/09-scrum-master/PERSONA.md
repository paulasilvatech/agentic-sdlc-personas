---
title: "Scrum Master Persona Card"
persona_id: "09-scrum-master"
cluster: "enablement"
sdlc_phase: "delivery"
version: "1.0.0"
date: "2026-04-24"
---

# Scrum Master

> Flow, retros, sprint health.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Enablement |
| SDLC phase | Delivery |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Disabled |
| Agent file | `.github/agents/flow-coach.agent.md` |
| Key MCPs | GitHub, Azure DevOps, Microsoft 365 Agents SDK, Microsoft Learn Docs |

## Core loop

```
facilitate → measure → improve → shield
```

## Primitives

- **Agent**: `flow-coach.agent.md` (Flow Coach)
- **Prompts**: /standup, /retro, /sprint-health, /impediment
- **Instructions**: sprint.instructions.md, ceremonies.instructions.md
- **Hooks**: post-sprint velocity snapshot

## References

- [Full persona document](../../docs/en/personas/09-scrum-master.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
