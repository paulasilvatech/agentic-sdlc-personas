---
title: "Tech Writer Persona Card"
persona_id: "23-tech-writer"
cluster: "enablement"
sdlc_phase: "delivery"
version: "1.0.0"
date: "2026-04-24"
---

# Tech Writer

> Docs as code.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Enablement |
| SDLC phase | Delivery |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Disabled |
| Agent file | `.github/agents/docs-curator.agent.md` |
| Key MCPs | GitHub, Azure DevOps, Microsoft Learn Docs, Microsoft 365 Agents SDK |

## Core loop

```
draft → review → publish → maintain
```

## Primitives

- **Agent**: `docs-curator.agent.md` (Docs Curator)
- **Prompts**: /doc-gen, /api-doc, /changelog-prose, /style-check
- **Instructions**: docs-as-code.instructions.md, api-docs.instructions.md, style.instructions.md
- **Hooks**: pre-commit doc lint, post-merge docs publish

## References

- [Full persona document](../../docs/en/personas/23-tech-writer.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
