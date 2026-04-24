---
title: "DevOps Engineer Persona Card"
persona_id: "11-devops-engineer"
cluster: "ops"
sdlc_phase: "operation"
version: "1.0.0"
date: "2026-04-24"
---

# DevOps Engineer

> Pipelines and IaC.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Ops |
| SDLC phase | Operation |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Enabled for /iac-review |
| Agent file | `.github/agents/pipeline-smith.agent.md` |
| Key MCPs | GitHub, Azure, Azure DevOps, Microsoft Learn Docs |

## Core loop

```
build → deploy → monitor → harden
```

## Primitives

- **Agent**: `pipeline-smith.agent.md` (Pipeline Smith)
- **Prompts**: /pipeline, /iac-review, /drift-scan, /secret-audit
- **Instructions**: pipelines.instructions.md, iac.instructions.md, secrets.instructions.md
- **Hooks**: pre-commit secret scan, post-merge drift check, pre-deploy approval gate

## References

- [Full persona document](../../docs/en/personas/11-devops-engineer.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
