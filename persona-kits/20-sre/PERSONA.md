---
title: "SRE Persona Card"
persona_id: "20-sre"
cluster: "ops"
sdlc_phase: "operation"
version: "1.0.0"
date: "2026-04-24"
---

# SRE

> SLOs, incidents, postmortems.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Ops |
| SDLC phase | Operation |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Enabled for /postmortem |
| Agent file | `.github/agents/incident-captain.agent.md` |
| Key MCPs | GitHub, Azure, Azure DevOps, Microsoft Learn Docs |

## Core loop

```
define → monitor → respond → learn
```

## Primitives

- **Agent**: `incident-captain.agent.md` (Incident Captain)
- **Prompts**: /incident, /slo-check, /postmortem, /runbook-gen
- **Instructions**: slo.instructions.md, incident.instructions.md, postmortem.instructions.md
- **Hooks**: post-incident postmortem trigger, pre-deploy SLO budget check

## References

- [Full persona document](../../docs/en/personas/20-sre.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
