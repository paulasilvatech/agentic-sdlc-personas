---
applyTo: "**/*.sql,**/migrations/**,**/repositories/**"
---

# SQL and database conventions

## Naming

- Tables: plural snake_case (`user_accounts`, not `UserAccount`).
- Columns: singular snake_case (`created_at`, `email_address`).
- Primary keys: `id` (auto-increment or UUID depending on scale requirements).
- Foreign keys: `[referenced_table_singular]_id` (`user_id`, `order_id`).
- Indexes: `idx_[table]_[columns]` (`idx_orders_user_id_created_at`).

## Migrations

- One migration per logical change. Never combine unrelated schema changes.
- Always include both `up` and `down` migration scripts.
- Never modify a migration that has been applied to any environment.
- Use explicit column types; avoid relying on implicit defaults.

## Query safety

- Always use parameterized queries. No string concatenation for values.
- Validate input before query construction, not after.
- Use `LIMIT` on all queries that could return unbounded results.
- Log slow queries (threshold: 500ms).

## Repository pattern

- One repository file per aggregate root.
- Repositories return domain objects, not raw rows.
- Complex joins: use query builders or raw SQL with explicit column lists.
- No `SELECT *` in production code.
