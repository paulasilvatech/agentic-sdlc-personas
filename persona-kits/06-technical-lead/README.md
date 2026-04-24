# Technical Lead - GitHub Copilot Primitives Kit

> Context engineering, model routing, quality gates, orchestration

## SDLC Phase
All phases (oversight)

## Kit Contents

| File | Type | Purpose |
|------|------|---------|
| `.github/agents/tech-lead.agent.md` | Agent | Governance |
| `.github/prompts/setup-project.prompt.md` | Prompt | /setup-project |
| `.github/prompts/routing-table.prompt.md` | Prompt | /routing-table |
| `.github/prompts/audit-context.prompt.md` | Prompt | /audit-context |
| `hooks.json` | Hooks | Scope + lint + test |

## Installation
```bash
cp -r .github/* /path/to/your-repo/.github/
[ -f hooks.json ] && cp hooks.json /path/to/your-repo/
[ -f mcp.json ] && cp mcp.json /path/to/your-repo/.vscode/
```

## Best Practices (Research-Backed)
- AGENTS.md must be human-curated (arXiv:2601.20404: LLM-generated = -3% success)
- applyTo scoping reduces tokens by ~68% vs global instructions
- Skills are lazy-loaded: install many, pay for few (arXiv:2603.29919)
- Hooks cost zero LLM tokens (best governance layer)
- Extended thinking harms iterative tasks by -30% quality (arXiv:2505.01622)
- Rich natural language > abbreviations for agent instructions (arXiv:2604.07502)

## References
- [GitHub Copilot Docs](https://docs.github.com/en/copilot)
- [Spec-Kit](https://github.com/github/spec-kit)
- [APM Framework](https://microsoft.github.io/apm/introduction/what-is-apm/)
- [Context Engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
