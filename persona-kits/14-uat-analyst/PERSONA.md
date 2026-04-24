---
title: "UAT Analyst Persona Card"
persona_id: "14-uat-analyst"
cluster: "quality"
sdlc_phase: "verification"
version: "1.0.0"
date: "2026-04-24"
---

# UAT Analyst

> Business acceptance tests.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Quality |
| SDLC phase | Verification |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Disabled |
| Agent file | `.github/agents/acceptance-scribe.agent.md` |
| Key MCPs | GitHub, Azure DevOps, Playwright, Microsoft Learn Docs |

## Core loop

```
script → execute → record → sign-off
```

## Primitives

- **Agent**: `acceptance-scribe.agent.md` (Acceptance Scribe)
- **Prompts**: /uat-plan, /acceptance-test, /uat-report, /scenario-gen
- **Instructions**: acceptance.instructions.md, bdd.instructions.md
- **Hooks**: pre-merge UAT pass gate

## References

- [Full persona document](../../docs/en/personas/14-uat-analyst.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
