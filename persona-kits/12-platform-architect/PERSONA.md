---
title: "Platform Architect Persona Card"
persona_id: "12-platform-architect"
cluster: "platform"
sdlc_phase: "platform"
version: "1.0.0"
date: "2026-04-24"
---

# Platform Architect

> Golden paths and IDP.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Platform |
| SDLC phase | Platform |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Enabled for /golden-path-review |
| Agent file | `.github/agents/path-keeper.agent.md` |
| Key MCPs | GitHub, Azure, Azure DevOps, Microsoft Learn Docs |

## Core loop

```
pave → publish → measure → prune
```

## Primitives

- **Agent**: `path-keeper.agent.md` (Path Keeper)
- **Prompts**: /golden-path, /template-scaffold, /platform-health, /onboard-team
- **Instructions**: golden-paths.instructions.md, platform.instructions.md, templates.instructions.md
- **Hooks**: pre-commit template lint, post-merge catalog update

## References

- [Full persona document](../../docs/en/personas/12-platform-architect.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
