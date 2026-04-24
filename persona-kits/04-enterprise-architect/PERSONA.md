---
title: "Enterprise Architect Persona Card"
persona_id: "04-enterprise-architect"
cluster: "architect"
sdlc_phase: "governance"
version: "1.0.0"
date: "2026-04-24"
---

# Enterprise Architect

> Constitution and ADRs.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Architect |
| SDLC phase | Governance |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Enabled for /adr-deep |
| Agent file | `.github/agents/adr-drafter.agent.md` |
| Key MCPs | GitHub, Azure, Azure DevOps, Microsoft Learn Docs |

## Core loop

```
govern → decide → record → evolve
```

## Primitives

- **Agent**: `adr-drafter.agent.md` (ADR Drafter)
- **Prompts**: /adr, /fitness-review, /tech-radar, /constitution
- **Instructions**: architecture.instructions.md, adr.instructions.md, governance.instructions.md
- **Hooks**: pre-commit ADR format, post-commit radar update

## References

- [Full persona document](../../docs/en/personas/04-enterprise-architect.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
