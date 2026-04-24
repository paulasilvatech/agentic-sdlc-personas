---
title: "DBA | Agentic SDLC Personas"
description: "The DBA is the persona that keeps the operational data stores fast, safe, and honest under change. In an AI-native SDLC, the DBA operates a Schema Guard agent, four slash prompts, and a validated MCP "
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-24"
version: "1.0.0"
status: "approved"
locale: "en"
persona_id: "21-dba"
sdlc_phase: "Implementation"
cluster: "data"
previous: "20-sre"
next: "22-developer"
reading_time: 19
tags: ["persona", "dba", "copilot", "schema", "migration", "tuning"]
---

# <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="28" height="28" style="vertical-align:-6px;"><rect x="1.5" y="1.5" width="61" height="61" rx="10" ry="10" fill="#FFF8E1" stroke="#FFB900" stroke-width="1.2"/><ellipse cx="32" cy="22" rx="12" ry="6" fill="none" stroke="#FFB900" stroke-width="2.5"/><path d="M20 22v20c0 3.3 5.4 6 12 6s12-2.7 12-6V22" fill="none" stroke="#FFB900" stroke-width="2.5"/><path d="M20 32c0 3.3 5.4 6 12 6s12-2.7 12-6" fill="none" stroke="#FFB900" stroke-width="1.5"/></svg> DBA

[← Previous: Sre](./20-sre.md) · [↑ Index](../index.md) · [Next: Developer →](./22-developer.md)

## Change log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-04-24 | Paula Silva | Initial persona document aligned with Agentic SDLC Personas v1.0.0 |

## Table of contents

1. [Executive summary](#1-executive-summary)
2. [Role and responsibilities](#2-role-and-responsibilities)
3. [Jobs to be done](#3-jobs-to-be-done)
4. [Pain points before AI-native](#4-pain-points-before-ai-native)
5. [AI-native daily workflow](#5-ai-native-daily-workflow)
6. [Recommended primitives](#6-recommended-primitives)
7. [Validated MCPs](#7-validated-mcps)
8. [Real examples](#8-real-examples)
9. [Anti-patterns](#9-anti-patterns)
10. [KPIs and impact metrics](#10-kpis-and-impact-metrics)
11. [Maturity in four levels](#11-maturity-in-four-levels)
12. [Integration with other personas](#12-integration-with-other-personas)
13. [Glossary](#13-glossary)
14. [References](#14-references)

> The DBA is the persona that keeps the operational data stores fast, safe, and honest under change. In an AI-native SDLC, the DBA operates a Schema Guard agent, four slash prompts, and a validated MCP catalog across Azure SQL Database and Azure Cosmos DB — not a laptop full of SQL scripts.

## 1. Executive summary

The DBA owns the health of operational databases — primarily Azure SQL Database and Azure Cosmos DB — across schema evolution, query performance, and reliability. In an AI-native SDLC, their workflow is operationalized through a Schema Guard agent with four slash prompts (`/migrate-plan`, `/index-review`, `/query-tune`, `/rollback-script`), scoped instructions for SQL and migration files, and validated MCPs reaching into Azure Monitor, Application Insights, and GitHub.

Primary deliverables are reversible migration plans, indexed and tuned workloads, rollback scripts validated in non-prod, and a schema-change log that any engineer can read. The DBA closes the gap between application evolution and database reality: migrations ship behind feature flags, with proof they are reversible, and performance regressions are caught in CI, not production.

The DBA is a collaborator with the Data Engineer and Developer, not a gatekeeper. Their power is multiplied by agents that make the boring parts automatic.

## 2. Role and responsibilities

Think of the DBA like the chief engineer of a ship. The captain sets course; the chief engineer ensures the engines never stall, the pumps keep running, and every fuel line is tested before the storm. In an AI-native SDLC, the DBA keeps the data engines running under constant change.

Primary responsibilities:

- Review and merge every schema migration with a rollback plan
- Maintain index strategy for Azure SQL Database and partition strategy for Azure Cosmos DB
- Tune queries flagged by Application Insights and Azure SQL Query Store
- Approve access changes through Microsoft Entra ID with least-privilege defaults
- Ensure backups and restore drills run quarterly
- Collaborate with the Data Engineer on shared schemas and with the Developer on ORM mappings
- Operate the Schema Guard agent and `/migrate-plan`, `/index-review`, `/query-tune`, `/rollback-script` prompts
- Maintain the schema-change log and the query-performance dashboard

## 3. Jobs to be done

1. As a DBA, I want every migration reviewed with a generated rollback script, so that no forward step is irreversible.
2. As a DBA, I want index suggestions surfaced from real workload telemetry, so that optimization work targets actual pain.
3. As a DBA, I want long-running queries tuned with agent-assisted analysis, so that p99 latencies stay within SLA.
4. As a DBA, I want Cosmos DB partition keys reviewed on data-model PRs, so that hot partitions do not appear at scale.
5. As a DBA, I want schema changes deployed behind feature flags with safe backfill, so that no release is gated by a DDL operation.
6. As a DBA, I want daily integrity checks and restore drills evidenced in Azure Monitor, so that resilience claims are verifiable.
7. As a DBA, I want database access reviews run with Entra ID, so that least-privilege is the default state.
8. As a DBA, I want a single schema-change log published to Microsoft Teams, so that product and engineering see what changed in shared data.

## 4. Pain points before AI-native

- **Forward-only migrations**. A bad migration in production means restoring from backup, not reverting.
- **Index guesswork**. Indexes added based on developer intuition, not Query Store evidence.
- **ORMs owning schema**. Schemas inferred from code annotations, drifting from intended design.
- **Cosmos hot partitions**. Partition keys chosen to minimize effort; production throttling is the first feedback.
- **Ad-hoc access grants**. Permissions granted during incidents, never rescinded, becoming new normal.
- **Restore drills skipped**. "We have backups" is believed until the day we need to use them.
- **Schema change silence**. Engineering learns about the new column from production errors, not from PR reviews.

## 5. AI-native daily workflow

The DBA works from Visual Studio Code with GitHub Copilot and from the terminal with Claude Code, operating the Schema Guard agent across the day.

### Morning setup

1. Open Azure Monitor and Azure SQL Query Store; review overnight long-running queries and alerts.
2. Run `/index-review --since=yesterday`; the Schema Guard surfaces index recommendations from real telemetry.
3. Review pending migration PRs; confirm each has a `/rollback-script`.
4. Check Cosmos DB metrics for hot partitions and throttling; triage.
5. Sync with the Data Engineer on any cross-store dependencies in motion today.

### Midday execution

1. For each migration PR, run `/migrate-plan`; the Schema Guard verifies reversibility and produces a step-by-step execution plan with feature-flag gating.
2. Invoke `/query-tune` for top regressions identified by Application Insights.
3. Validate rollback scripts in a staging database; attach the evidence to the PR.
4. Pair with Developers on ORM-to-schema mismatches.

### Afternoon review

1. Publish the daily schema-change log to Microsoft Teams.
2. Review Entra ID-mediated database access; close stale grants.
3. Check restore-drill status; if not green this quarter, schedule and execute.

## 6. Recommended primitives

### Agent

| Agent | File | Purpose |
|-------|------|---------|
| `schema-guard` | `.github/agents/schema-guard.agent.md` | Reviews migrations, plans indexes, tunes queries, writes rollback scripts |

### Slash prompts

| Command | File | Purpose |
|---------|------|---------|
| `/migrate-plan` | `.github/prompts/migrate-plan.prompt.md` | Generate a reversible migration plan with gating and backfill strategy |
| `/index-review` | `.github/prompts/index-review.prompt.md` | Surface index recommendations from Azure SQL Query Store telemetry |
| `/query-tune` | `.github/prompts/query-tune.prompt.md` | Tune a slow query with execution-plan analysis and rewrite suggestions |
| `/rollback-script` | `.github/prompts/rollback-script.prompt.md` | Produce and validate a rollback script for a migration |

### Instructions scoped

| Scope (`applyTo`) | File | Purpose |
|-------------------|------|---------|
| `migrations/**/*.sql` | `.github/instructions/migrations.instructions.md` | Up and down steps required, no destructive DDL without a gate |
| `src/**/entities/**` | `.github/instructions/ormschema.instructions.md` | ORM-to-schema alignment rules for Azure SQL |
| `cosmos/**/*.ts` | `.github/instructions/cosmos-dba.instructions.md` | Partition key and index policy reviews for Azure Cosmos DB |
| `queries/**/*.sql` | `.github/instructions/queries.instructions.md` | SARGability, parameterization, query hints policy |

### Hooks

- `pre-commit`: SQL lint, destructive-DDL detector
- `pre-push`: migration dry-run against a shadow database
- `post-merge`: schedule migration execution with feature-flag gating
- `nightly`: run `/index-review` against Query Store and open issues
- `on-deploy`: publish schema-change log to Microsoft Teams

## 7. Validated MCPs

| MCP | Purpose | Owner |
|-----|---------|-------|
| GitHub MCP Server | PRs, Actions runs, schema-change logs | GitHub |
| Azure MCP Server | Query Azure SQL, Cosmos DB, Azure Monitor, Application Insights, Entra ID | Microsoft |
| Microsoft Learn Docs MCP | Reference current Azure SQL and Cosmos DB guidance | Microsoft |
| Azure DevOps MCP Server | Track DBA work items when the team uses Azure DevOps | Microsoft |
| Playwright MCP | Validate data-driven UX flows after migration | Microsoft |

## 8. Real examples

### Example 1: safe migration behind a feature flag

A PR adds a `preferred_currency` column to `accounts`. `/migrate-plan` generates a two-step plan: add nullable column, backfill in batches, then flip the feature flag. `/rollback-script` produces and validates the reverse. The migration runs in off-peak hours; application code reads the new field only when the flag is on.

### Example 2: index recommendation from telemetry

Overnight, `/index-review` surfaces a missing non-clustered index on `orders(customer_id, created_at)` driving 62 percent of CPU on the analytics reporting workload. The DBA opens a PR; the migration is reversible; the index lands; the next morning, Query Store confirms p95 dropped from 3.4 s to 240 ms.

### Example 3: Cosmos DB hot-partition caught early

A new feature writes telemetry keyed by `country`. `/migrate-plan` flags the choice as likely to create hot partitions (US traffic dominates). The Schema Guard suggests a synthetic key combining `country` and a hash of `user_id`. The change lands before production rollout.

## 9. Anti-patterns

- **Forward-only migrations**. Never merge a migration without a validated rollback script.
- **ORM as source of truth**. The database schema is the source of truth; ORMs reflect it.
- **Index by feeling**. Use Query Store and Application Insights telemetry; not intuition.
- **Ad-hoc permissions**. All database access via Entra ID groups with named owners.
- **Skipped restore drills**. If you have not restored from backup this quarter, you do not have backups.
- **Destructive DDL without gate**. `DROP COLUMN` in an unreviewed PR is an incident waiting to happen.
- **Schema changes hidden in app PRs**. Migrations live in `migrations/*` and are reviewed with the schema owner.

## 10. KPIs and impact metrics

| Metric | Baseline (manual) | Target (agentic) | Source |
|--------|-------------------|------------------|--------|
| Migrations with validated rollback | 30 percent | 100 percent | PR check |
| Query p95 regression in prod | 10 per quarter | < 1 | Application Insights |
| Hot partitions observed at scale | 3 per quarter | 0 | Cosmos DB metrics |
| Restore drill completion | Annual | Quarterly | Azure Backup reports |
| Stale database access identities | 20 | 0 | Entra ID access reviews |
| Index recommendations acted on in 30 days | 20 percent | > 80 percent | `/index-review` history |
| Schema-change log published | Ad hoc | Daily | Microsoft Teams |

## 11. Maturity in four levels

- **L1 Manual**: SQL scripts by email, forward-only migrations, indexes by guess.
- **L2 Assisted**: Copilot drafts SQL, migrations tracked in a tool, but rollback is still ad hoc.
- **L3 Augmented**: Schema Guard agent, four slash prompts, scoped instructions, feature-flagged migrations.
- **L4 Autonomous**: Nightly index review, auto-validated rollbacks, restore drills scheduled and evidenced, daily schema-change log.

## 12. Integration with other personas

- **With Data Engineer**: shared schema governance for cross-store datasets; migration review.
- **From Developer**: entity and ORM changes coordinated through PRs.
- **From Software Architect**: storage technology choices and capacity models.
- **With SRE**: runbooks for database incidents and restore procedures.
- **With InfoSec Officer**: access reviews, audit logging, encryption key rotation.
- **To Compliance Auditor**: evidence of change control, access reviews, backup posture.
- **With Product Owner**: migration windows planned against release calendar.

## 13. Glossary

- **Migration**: a version-controlled, reversible change to database schema or objects.
- **Rollback script**: a validated script that returns the schema to a previous state.
- **Query Store**: Azure SQL feature capturing query plans and runtime statistics.
- **Partition key**: the Cosmos DB property that determines data distribution.
- **SARGable**: a query predicate that can use an index efficiently.
- **Backfill**: the process of populating a new or changed column for existing rows.
- **Restore drill**: a rehearsal restoring from backup to validate recovery time objectives.

## 14. References

- [Azure SQL Database documentation](https://learn.microsoft.com/azure/azure-sql/) — operational relational store
- [Azure Cosmos DB documentation](https://learn.microsoft.com/azure/cosmos-db/) — globally distributed NoSQL store
- [Azure Monitor for databases](https://learn.microsoft.com/azure/azure-monitor/) — metrics, alerts, diagnostics
- [Application Insights](https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview) — dependency telemetry for tuning
- [Microsoft Entra ID authentication for Azure SQL](https://learn.microsoft.com/azure/azure-sql/database/authentication-aad-overview) — least-privilege access
- [Azure Key Vault for database secrets](https://learn.microsoft.com/azure/key-vault/) — rotation and storage
- [GitHub Actions for SQL deployments](https://docs.github.com/actions) — CI/CD for migrations
- [GitHub Actions](https://docs.github.com/actions) — CI and deployment orchestration across the stack
- [Microsoft Learn Docs MCP](https://github.com/microsoftdocs/mcp) — first-party documentation retrieval at implementation time
- [GitHub Advanced Security](https://docs.github.com/code-security) — CodeQL, Dependabot, Secret Scanning, Push Protection
