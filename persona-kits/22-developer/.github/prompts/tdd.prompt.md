---
mode: agent
model: claude-sonnet-4-6
description: "Test-driven development for a specific module or function. Use when you want to add behavior through the red, green, refactor cycle. Do NOT use for writing tests after implementation."
---

# /tdd

## Task context

You are practicing strict TDD. The failing test is written first. No implementation code exists yet for the behavior under test.

## Steps

1. Read the requirements or acceptance criteria for the target behavior.
2. **Red**: Write a test that describes the expected behavior. Run it. Confirm it fails.
3. **Green**: Write the minimal code to make the test pass. No extra logic.
4. **Refactor**: Improve the code while keeping tests green. Remove duplication.
5. Repeat steps 2 through 4 for the next behavior.
6. Run the full test suite after each cycle.

## Rules

- Never write implementation before the test.
- Never write a test that already passes (that is not TDD).
- Each cycle should take fewer than 5 minutes of agent time.
- If you cannot write a failing test, the requirement is unclear. Stop and ask.

## Output format

For each cycle, report:

```
[RED]    test: "returns 404 when user not found" -> FAIL (expected)
[GREEN]  implemented: getUserById null check -> PASS
[REFACTOR] extracted: error response helper -> PASS (all tests)
```

## Quality gate

- [ ] Every implementation line is covered by a test written before it
- [ ] No skipped or pending tests
- [ ] Coverage >= 80%
