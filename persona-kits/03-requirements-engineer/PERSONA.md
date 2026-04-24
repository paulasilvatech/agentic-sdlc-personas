---
title: "Requirements Engineer Persona Card"
persona_id: "03-requirements-engineer"
cluster: "product"
sdlc_phase: "discovery"
version: "1.0.0"
date: "2026-04-24"
---

# Requirements Engineer

> Encodes requirements in EARS.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Product |
| SDLC phase | Discovery |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Enabled for /gap-scan |
| Agent file | `.github/agents/ears-encoder.agent.md` |
| Key MCPs | GitHub, Azure DevOps, Azure, Microsoft Learn Docs, Microsoft 365 Agents SDK |

## Core loop

```
decompose → trace → scan → review
```

## Primitives

- **Agent**: `ears-encoder.agent.md` (EARS Encoder)
- **Prompts**: /ears, /traceability, /gap-scan, /requirement-review
- **Instructions**: requirements.instructions.md, traceability.instructions.md, reviews.instructions.md
- **Hooks**: pre-commit EARS lint, post-commit matrix regen, pre-merge gap block

## References

- [Full persona document](../../docs/en/personas/03-requirements-engineer.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
