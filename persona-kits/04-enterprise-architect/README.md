# Enterprise / Solution Architect - GitHub Copilot Primitives Kit

> CONSTITUTION.md, ADRs, architecture reviews, security governance

## SDLC Phase
Architecture, Design, Security

## Kit Contents

| File | Type | Purpose |
|------|------|---------|
| `.github/agents/enterprise-architect.agent.md` | Agent | Architecture and security |
| `.github/prompts/create-constitution.prompt.md` | Prompt | /create-constitution |
| `.github/prompts/create-adr.prompt.md` | Prompt | /create-adr |
| `.github/prompts/architecture-review.prompt.md` | Prompt | /architecture-review |
| `.github/instructions/security.instructions.md` | Instructions | Security conventions |
| `.github/instructions/infrastructure.instructions.md` | Instructions | IaC conventions |
| `hooks.json` | Hooks | Block CONSTITUTION.md edits |

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
