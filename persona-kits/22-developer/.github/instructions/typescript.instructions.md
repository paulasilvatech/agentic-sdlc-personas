---
applyTo: "**/*.ts,**/*.tsx"
---

# TypeScript conventions

## Naming

- Interfaces: prefix with `I` only for dependency injection contracts; prefer plain names otherwise.
- Types: PascalCase. Use `type` for unions and intersections; `interface` for object shapes.
- Functions: camelCase. Async functions: prefix with verb (`fetchUser`, `createOrder`).
- Constants: UPPER_SNAKE_CASE for true compile-time constants; camelCase for runtime config.
- Files: kebab-case (`user-service.ts`, not `UserService.ts`).

## Strict mode

- `strict: true` in `tsconfig.json` is mandatory.
- No `any`. Use `unknown` and narrow with type guards.
- No non-null assertions (`!`) outside test files.
- Prefer `satisfies` over `as` for type narrowing.

## Error handling

- Use typed error classes extending a base `AppError`.
- Never catch and swallow: always log or rethrow.
- Async functions: always return `Promise<T>` explicitly in signatures.

## Imports

- Use path aliases (`@/services/user`) instead of relative paths deeper than 2 levels.
- Sort: node builtins, external packages, internal modules, relative imports.
- No barrel exports (`index.ts` re-exports) in library code.

## Testing

- Co-locate test files: `user-service.test.ts` next to `user-service.ts`.
- Use `vitest` or `jest` with `describe`/`it` blocks.
- Minimum coverage: 80% lines per module.
