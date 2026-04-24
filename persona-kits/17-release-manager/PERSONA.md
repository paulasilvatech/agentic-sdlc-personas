---
title: "Release Manager Persona Card"
persona_id: "17-release-manager"
cluster: "ops"
sdlc_phase: "release"
version: "1.0.0"
date: "2026-04-24"
---

# Release Manager

> Release notes and risk.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Ops |
| SDLC phase | Release |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Enabled for /release-risk |
| Agent file | `.github/agents/release-scribe.agent.md` |
| Key MCPs | GitHub, Azure, Azure DevOps, Microsoft Learn Docs |

## Core loop

```
plan → cut → verify → announce
```

## Primitives

- **Agent**: `release-scribe.agent.md` (Release Scribe)
- **Prompts**: /release-notes, /changelog, /release-risk, /rollback-plan
- **Instructions**: release.instructions.md, changelog.instructions.md, rollback.instructions.md
- **Hooks**: pre-tag release check, post-release notes publish

## References

- [Full persona document](../../docs/en/personas/17-release-manager.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
