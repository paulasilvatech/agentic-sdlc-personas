---
applyTo: "**/*.test.*,**/*.spec.*,**/tests/**"
---

# Test conventions

## Structure

- Use Given/When/Then comments inside each test for clarity.
- One assertion focus per test. Multiple assertions allowed only when testing a single behavior.
- Describe blocks: noun (unit under test). It blocks: verb phrase (expected behavior).

## Test-driven development

- Write the failing test first. Confirm it fails for the right reason.
- Implement the minimal code to make it pass.
- Refactor while keeping tests green.
- Never skip the red phase.

## Mocking

- Mock at the boundary: external APIs, databases, file system.
- Never mock the unit under test.
- Prefer dependency injection over module mocking.
- Reset mocks in `beforeEach`, not `afterEach`.

## Coverage

- Minimum: 80% lines, 70% branches.
- Critical paths (auth, payments, data mutations): 95% lines.
- Coverage reports generated on every PR via CI.

## Naming

- Test files: `[module].test.ts` or `[module].spec.ts`.
- Test descriptions: human-readable sentences, not function names.
  - Good: `it("returns 404 when user does not exist")`
  - Bad: `it("getUserById_notFound")`
