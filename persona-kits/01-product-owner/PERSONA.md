---
title: "Product Owner Persona Card"
persona_id: "01-product-owner"
cluster: "product"
sdlc_phase: "planning"
version: "1.0.0"
date: "2026-04-24"
---

# Product Owner

> Writes and governs the spec.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Product |
| SDLC phase | Planning |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Enabled for /spec-review |
| Agent file | `.github/agents/spec-scribe.agent.md` |
| Key MCPs | GitHub, Azure DevOps, Microsoft 365 Agents SDK, Microsoft Learn Docs |

## Core loop

```
draft → review → approve → decompose
```

## Primitives

- **Agent**: `spec-scribe.agent.md` (Spec Scribe)
- **Prompts**: /spec, /spec-review, /backlog-rank, /release-scope
- **Instructions**: specification.instructions.md, product-strategy.instructions.md
- **Hooks**: pre-commit spec format, post-commit backlog sync

## References

- [Full persona document](../../docs/en/personas/01-product-owner.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
