---
mode: agent
model: claude-sonnet-4-6
description: "Fix a bug using the understand, reproduce, fix, verify loop. Use when a bug report or failing behavior is identified. Do NOT use for feature work."
---

# /fix-bug

## Task context

A bug has been reported. You will fix it using a systematic four-step process that prevents regressions.

## Steps

1. **Understand**: Read the bug report, error logs, and affected code. State your understanding of the root cause.
2. **Reproduce**: Write a failing test that demonstrates the bug. Run it. Confirm it fails with the described symptom.
3. **Fix**: Make the minimal change to fix the root cause. Do not refactor unrelated code.
4. **Verify**: Run the new test (should pass now). Run the full test suite (no regressions). Check that the fix addresses the original report.

## Rules

- Never skip the reproduce step. If you cannot write a failing test, the bug is not well understood.
- Fix the root cause, not the symptom.
- If the fix requires changing more than 3 files, pause and explain the scope to the user.
- If the bug is in authentication, authorization, or cryptography, escalate to human review.

## Output format

```markdown
## Bug fix summary

**Bug**: [description]
**Root cause**: [what was wrong]
**Fix**: [what was changed]
**Regression test**: [test name and file]

### Files changed
- [file]: [change description]

### Verification
- New test: PASS
- Full suite: [X] passed, [Y] failed
- Coverage delta: [before] -> [after]
```

## Quality gate

- [ ] Failing test written before fix
- [ ] Fix is minimal and targeted
- [ ] No regressions
- [ ] CONSTITUTION.md constraints verified
