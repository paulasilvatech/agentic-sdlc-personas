---
title: "InfoSec Officer Persona Card"
persona_id: "18-infosec-officer"
cluster: "security"
sdlc_phase: "governance"
version: "1.0.0"
date: "2026-04-24"
---

# InfoSec Officer

> Vuln triage and compliance.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Cluster | Security |
| SDLC phase | Governance |
| Primary model | Claude Sonnet 4.6 |
| Extended thinking | Enabled for /threat-model |
| Agent file | `.github/agents/threat-triager.agent.md` |
| Key MCPs | GitHub, Azure, Azure DevOps, Microsoft Learn Docs |

## Core loop

```
scan → triage → remediate → verify
```

## Primitives

- **Agent**: `threat-triager.agent.md` (Threat Triager)
- **Prompts**: /vuln-triage, /threat-model, /secret-scan, /security-review
- **Instructions**: security.instructions.md, vulnerability.instructions.md
- **Hooks**: pre-commit secret block, pre-merge security gate

## References

- [Full persona document](../../docs/en/personas/18-infosec-officer.md)
- [MCP configuration](./mcp.json)
- [Style guide](../../docs/STYLE_GUIDE.md)
