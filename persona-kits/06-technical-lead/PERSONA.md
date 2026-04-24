---
title: "Technical Lead Persona Card"
persona_id: "06-technical-lead"
cluster: "architect"
sdlc_phase: "design"
version: "1.0.0"
date: "2026-04-24"
---

# Technical Lead

> Context engineering for the team.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Architect |
| SDLC phase | Design |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Enabled for /context-audit |
| Agent file | `.github/agents/context-auditor.agent.md` |
| Key MCPs | GitHub, Azure DevOps, Microsoft 365 Agents SDK, Microsoft Learn Docs |

## Core loop

```
audit → guide → review → mentor
```

## Primitives

- **Agent**: `context-auditor.agent.md` (Context Auditor)
- **Prompts**: /context-audit, /code-review, /pair-prompt, /tech-debt
- **Instructions**: context-engineering.instructions.md, code-review.instructions.md
- **Hooks**: pre-commit context check, post-merge tech-debt tally

## References

- [Full persona document](../../docs/en/personas/06-technical-lead.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
