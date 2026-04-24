# Example: TDD feature workflow

This example demonstrates the Developer persona implementing a new API endpoint
using the test-driven development loop.

## Scenario

Add a `GET /api/users/:id` endpoint that returns a user by ID.

## Step 1: Write failing test first

```typescript
// src/routes/users.test.ts
import { describe, it, expect } from "vitest";
import { app } from "../app";

describe("GET /api/users/:id", () => {
  it("returns 200 with user data for valid ID", async () => {
    const res = await app.inject({ method: "GET", url: "/api/users/1" });
    expect(res.statusCode).toBe(200);
    expect(res.json()).toHaveProperty("id", 1);
  });

  it("returns 404 for unknown ID", async () => {
    const res = await app.inject({ method: "GET", url: "/api/users/999" });
    expect(res.statusCode).toBe(404);
  });
});
```

## Step 2: Implement minimal code to pass

```typescript
// src/routes/users.ts
import { FastifyInstance } from "fastify";
import { getUserById } from "../services/user.service";

export async function userRoutes(app: FastifyInstance) {
  app.get("/api/users/:id", async (req, reply) => {
    const user = await getUserById(Number(req.params.id));
    if (!user) return reply.status(404).send({ error: "User not found" });
    return user;
  });
}
```

## Step 3: Verify and refactor

- Run `npm test` to confirm both tests pass.
- Check coverage: `npm test -- --coverage`.
- Refactor if needed while keeping tests green.

## Agent invocation

```
/implement Add GET /api/users/:id endpoint per SPECIFICATION.md section 3.2
```

The implementer agent will follow the same understand, reproduce, fix, verify loop automatically.
