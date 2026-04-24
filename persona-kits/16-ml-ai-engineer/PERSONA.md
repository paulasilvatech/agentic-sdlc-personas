---
title: "ML AI Engineer Persona Card"
persona_id: "16-ml-ai-engineer"
cluster: "data"
sdlc_phase: "implementation"
version: "1.0.0"
date: "2026-04-24"
---

# ML AI Engineer

> Model training and evals.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Data |
| SDLC phase | Implementation |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Enabled for /eval-deep |
| Agent file | `.github/agents/eval-runner.agent.md` |
| Key MCPs | GitHub, Azure, Azure DevOps, Microsoft Learn Docs |

## Core loop

```
train → evaluate → deploy → monitor
```

## Primitives

- **Agent**: `eval-runner.agent.md` (Eval Runner)
- **Prompts**: /train, /eval, /deploy-model, /monitor-drift
- **Instructions**: ml-training.instructions.md, evaluation.instructions.md, model-ops.instructions.md
- **Hooks**: pre-merge eval gate, post-deploy drift monitor

## References

- [Full persona document](../../docs/en/personas/16-ml-ai-engineer.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
