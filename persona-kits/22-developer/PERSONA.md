---
title: "Developer Persona Card"
persona_id: "22-developer"
cluster: "platform"
sdlc_phase: "implementation"
version: "1.0.0"
date: "2026-04-23"
---

# Developer

> Transforms approved specs into production-ready code through TDD, iterative implementation, and continuous quality verification.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Platform |
| SDLC phase | Implementation |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Disabled (iterative feedback loop) |
| Agent file | `.github/agents/implementer.agent.md` |
| Key MCPs | GitHub, Sentry, Snyk, Linear, Playwright |

## Core loop

```
understand → reproduce → fix → verify
```

## Primitives

- **Agent**: `implementer.agent.md` (TDD enforcer, bug fixer, refactorer)
- **Prompts**: `/implement`, `/tdd`, `/fix-bug`, `/refactor`
- **Instructions**: `typescript.instructions.md`, `tests.instructions.md`, `sql.instructions.md`
- **Hooks**: pre-commit lint, post-commit test, pre-push coverage gate

## References

- [Full persona document](../../docs/en/personas/22-developer.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
