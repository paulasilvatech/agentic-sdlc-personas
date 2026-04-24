---
mode: agent
model: claude-sonnet-4-6
description: "Implement a feature from an approved spec. Use when a SPECIFICATION.md section is ready for coding. Do NOT use for exploratory or architectural work."
---

# /implement

## Task context

You are implementing a feature described in SPECIFICATION.md. The spec has been approved and is ready for coding.

## Steps

1. Read SPECIFICATION.md to find the relevant feature section.
2. Read CONSTITUTION.md to identify applicable security constraints.
3. Read existing tests for the affected modules.
4. Write failing tests that match the acceptance criteria (Given/When/Then).
5. Run tests to confirm they fail for the right reason.
6. Implement the minimal code to make all tests pass.
7. Run the full test suite. Fix any regressions.
8. Run linting and type-check on changed files.
9. Update CODEMAP.md if module topology changed.

## Output format

```markdown
## Implementation summary

**Feature**: [name from spec]
**Files changed**: [list]
**Tests added**: [count]
**Coverage delta**: [before] -> [after]

### Changes
- [file]: [what changed and why]

### Risks
- [any concerns]
```

## Quality gate

- [ ] All new tests pass
- [ ] No regressions in existing tests
- [ ] Coverage >= 80%
- [ ] No new lint warnings
- [ ] CONSTITUTION.md constraints verified
