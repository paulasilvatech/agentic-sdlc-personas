---
title: "Data Engineer Persona Card"
persona_id: "15-data-engineer"
cluster: "data"
sdlc_phase: "implementation"
version: "1.0.0"
date: "2026-04-24"
---

# Data Engineer

> Pipelines and data quality.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Data |
| SDLC phase | Implementation |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Enabled for /lineage-deep |
| Agent file | `.github/agents/pipeline-keeper.agent.md` |
| Key MCPs | GitHub, Azure, Azure DevOps, Microsoft Learn Docs |

## Core loop

```
ingest → transform → validate → serve
```

## Primitives

- **Agent**: `pipeline-keeper.agent.md` (Pipeline Keeper)
- **Prompts**: /data-pipeline, /quality-check, /lineage-map, /schema-evolve
- **Instructions**: data-pipelines.instructions.md, data-quality.instructions.md
- **Hooks**: pre-commit schema lint, post-merge lineage update

## References

- [Full persona document](../../docs/en/personas/15-data-engineer.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
