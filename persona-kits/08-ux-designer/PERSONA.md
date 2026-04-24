---
title: "UX Designer Persona Card"
persona_id: "08-ux-designer"
cluster: "product"
sdlc_phase: "design"
version: "1.0.0"
date: "2026-04-24"
---

# UX Designer

> Design system and accessibility.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Product |
| SDLC phase | Design |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Enabled for /accessibility-audit |
| Agent file | `.github/agents/design-system-curator.agent.md` |
| Key MCPs | GitHub, Azure DevOps, Playwright, Microsoft Learn Docs |

## Core loop

```
research → prototype → test → refine
```

## Primitives

- **Agent**: `design-system-curator.agent.md` (Design System Curator)
- **Prompts**: /design-tokens, /accessibility-audit, /component-spec, /ux-review
- **Instructions**: design-system.instructions.md, accessibility.instructions.md
- **Hooks**: pre-commit token lint, post-merge Storybook sync

## References

- [Full persona document](../../docs/en/personas/08-ux-designer.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
