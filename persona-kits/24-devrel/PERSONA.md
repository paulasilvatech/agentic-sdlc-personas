---
title: "DevRel Persona Card"
persona_id: "24-devrel"
cluster: "enablement"
sdlc_phase: "community"
version: "1.0.0"
date: "2026-04-24"
---

# DevRel

> Tutorials, demos, community.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Enablement |
| SDLC phase | Community |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Disabled |
| Agent file | `.github/agents/demo-builder.agent.md` |
| Key MCPs | GitHub, Azure, Microsoft Learn Docs, Microsoft 365 Agents SDK |

## Core loop

```
teach → demo → engage → measure
```

## Primitives

- **Agent**: `demo-builder.agent.md` (Demo Builder)
- **Prompts**: /tutorial, /demo-scaffold, /community-digest, /workshop-plan
- **Instructions**: tutorials.instructions.md, demos.instructions.md, community.instructions.md
- **Hooks**: pre-merge sample test, post-publish analytics snapshot

## References

- [Full persona document](../../docs/en/personas/24-devrel.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
