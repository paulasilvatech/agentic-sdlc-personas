---
title: "Software Architect Persona Card"
persona_id: "05-software-architect"
cluster: "architect"
sdlc_phase: "design"
version: "1.0.0"
date: "2026-04-24"
---

# Software Architect

> CODEMAP and API contracts.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Architect |
| SDLC phase | Design |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Enabled for /codemap-deep |
| Agent file | `.github/agents/api-contract-designer.agent.md` |
| Key MCPs | GitHub, Azure, Azure DevOps, Microsoft Learn Docs |

## Core loop

```
map → contract → review → evolve
```

## Primitives

- **Agent**: `api-contract-designer.agent.md` (API Contract Designer)
- **Prompts**: /codemap, /api-contract, /dependency-check, /design-review
- **Instructions**: codemap.instructions.md, api-contracts.instructions.md, dependencies.instructions.md
- **Hooks**: pre-commit contract lint, post-commit codemap regen, pre-merge breaking change block

## References

- [Full persona document](../../docs/en/personas/05-software-architect.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
