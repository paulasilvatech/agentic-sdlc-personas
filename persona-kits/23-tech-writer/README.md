# Tech Writer - GitHub Copilot Primitives Kit

> API docs, README, CODEMAP.md, changelog, drift detection

## SDLC Phase
See analysis document

## Kit Contents

| File | Type | Purpose |
|------|------|---------|
| `.github/agents/tech-writer.agent.md` | Agent | API docs, README, CODEMAP.md, changelog, drift det |
| `.github/prompts/generate-docs.prompt.md` | Prompt | /generate-docs |
| `.github/prompts/update-codemap.prompt.md` | Prompt | /update-codemap |
| `.github/prompts/doc-drift.prompt.md` | Prompt | /doc-drift |

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
