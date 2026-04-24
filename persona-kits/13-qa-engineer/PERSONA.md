---
title: "QA Engineer Persona Card"
persona_id: "13-qa-engineer"
cluster: "quality"
sdlc_phase: "verification"
version: "1.0.0"
date: "2026-04-24"
---

# QA Engineer

> Test strategy and coverage.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Quality |
| SDLC phase | Verification |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Enabled for /mutation-analysis |
| Agent file | `.github/agents/test-strategist.agent.md` |
| Key MCPs | GitHub, Azure DevOps, Playwright, Microsoft Learn Docs |

## Core loop

```
plan → automate → mutate → report
```

## Primitives

- **Agent**: `test-strategist.agent.md` (Test Strategist)
- **Prompts**: /test-plan, /coverage-gap, /mutation-test, /flake-triage
- **Instructions**: test-strategy.instructions.md, coverage.instructions.md
- **Hooks**: pre-commit coverage gate, post-merge flake scan

## References

- [Full persona document](../../docs/en/personas/13-qa-engineer.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
