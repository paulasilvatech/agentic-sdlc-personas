# Dba - GitHub Copilot Primitives Kit

> Migrations, query optimization, SQL injection audit

## SDLC Phase
See analysis document

## Kit Contents

| File | Type | Purpose |
|------|------|---------|
| `.github/agents/dba.agent.md` | Agent | Migrations, query optimization, SQL injection audi |
| `.github/prompts/migration.prompt.md` | Prompt | /migration |
| `.github/prompts/query-audit.prompt.md` | Prompt | /query-audit |
| `.github/instructions/database.instructions.md` | Instructions | Database Conventions |

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
