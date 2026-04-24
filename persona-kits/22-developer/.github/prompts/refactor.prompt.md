---
mode: agent
model: claude-sonnet-4-6
description: "Safe refactoring with behavioral verification. Use when improving code structure without changing external behavior. Do NOT use for adding new features."
---

# /refactor

## Task context

You are refactoring existing code to improve its structure, readability, or performance without changing external behavior.

## Steps

1. **Baseline**: Run the full test suite. Record pass count and coverage. This is the behavioral contract.
2. **Identify**: Describe what you plan to refactor and why (reduce duplication, lower complexity, improve naming).
3. **Refactor**: Make structural changes. Keep each change small and atomic.
4. **Verify**: After each change, run the test suite. If any test fails, the refactoring changed behavior. Revert and retry.
5. **Measure**: Compare complexity metrics before and after. Report improvement.

## Rules

- Behavior must not change. Tests are the contract.
- If tests are insufficient to guarantee behavior (coverage < 60%), write characterization tests first.
- One refactoring concern per session (do not mix "extract method" with "rename variables").
- Never refactor and add features in the same commit.

## Output format

```markdown
## Refactoring summary

**Goal**: [what was improved]
**Technique**: [extract method | rename | inline | decompose conditional | ...]

### Before
- Complexity: [score]
- Duplication: [count]

### After
- Complexity: [score]
- Duplication: [count]

### Files changed
- [file]: [change description]

### Verification
- Tests before: [X] passed
- Tests after: [X] passed (same count)
- Coverage: [before] -> [after]
```

## Quality gate

- [ ] All tests pass before and after
- [ ] Test count did not decrease
- [ ] Coverage did not decrease
- [ ] No new behavior added
