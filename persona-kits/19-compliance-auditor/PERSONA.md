---
title: "Compliance Auditor Persona Card"
persona_id: "19-compliance-auditor"
cluster: "security"
sdlc_phase: "governance"
version: "1.0.0"
date: "2026-04-24"
---

# Compliance Auditor

> SOX, ISO, SOC 2 controls.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Security |
| SDLC phase | Governance |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Enabled for /audit-deep |
| Agent file | `.github/agents/evidence-curator.agent.md` |
| Key MCPs | GitHub, Azure, Azure DevOps, Microsoft Learn Docs |

## Core loop

```
collect → verify → report → remediate
```

## Primitives

- **Agent**: `evidence-curator.agent.md` (Evidence Curator)
- **Prompts**: /evidence-collect, /control-check, /audit-report, /gap-remediate
- **Instructions**: compliance.instructions.md, controls.instructions.md, evidence.instructions.md
- **Hooks**: post-merge evidence snapshot

## References

- [Full persona document](../../docs/en/personas/19-compliance-auditor.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
