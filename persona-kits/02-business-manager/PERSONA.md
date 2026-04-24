---
title: "Business Manager Persona Card"
persona_id: "02-business-manager"
cluster: "product"
sdlc_phase: "planning"
version: "1.0.0"
date: "2026-04-24"
---

# Business Manager

> Translates business into KPIs.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Product |
| SDLC phase | Planning |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Enabled for /business-review |
| Agent file | `.github/agents/kpi-translator.agent.md` |
| Key MCPs | GitHub, Azure DevOps, Microsoft 365 Agents SDK, Microsoft Learn Docs |

## Core loop

```
measure → analyze → decide → communicate
```

## Primitives

- **Agent**: `kpi-translator.agent.md` (KPI Translator)
- **Prompts**: /kpi, /okr, /business-review, /cost-model
- **Instructions**: business-kpis.instructions.md, cost-model.instructions.md
- **Hooks**: pre-commit KPI schema, post-commit dashboard refresh

## References

- [Full persona document](../../docs/en/personas/02-business-manager.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
