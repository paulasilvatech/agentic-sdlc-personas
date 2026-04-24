---
title: "DBA Persona Card"
persona_id: "21-dba"
cluster: "data"
sdlc_phase: "implementation"
version: "1.0.0"
date: "2026-04-24"
---

# DBA

> Schema, migrations, tuning.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Data |
| SDLC phase | Implementation |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Enabled for /migration-review |
| Agent file | `.github/agents/schema-guard.agent.md` |
| Key MCPs | GitHub, Azure, Azure DevOps, Microsoft Learn Docs |

## Core loop

```
model → migrate → tune → protect
```

## Primitives

- **Agent**: `schema-guard.agent.md` (Schema Guard)
- **Prompts**: /schema-review, /migration-plan, /query-tune, /backup-verify
- **Instructions**: schema.instructions.md, migrations.instructions.md, tuning.instructions.md
- **Hooks**: pre-commit migration lint, pre-merge schema diff

## References

- [Full persona document](../../docs/en/personas/21-dba.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
