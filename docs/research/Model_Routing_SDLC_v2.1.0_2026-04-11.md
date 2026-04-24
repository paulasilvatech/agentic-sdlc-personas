---
title: "Right Model, Right Task: Evidence-Based LLM Routing Across the SDLC"
description: "Empirical guide for selecting the appropriate LLM by SDLC phase, including VS Code primitives, GitHub Copilot agents, skills, hooks, chat modes, extended thinking, and token cost strategies"
author: "Paula Silva"
date: "2026-04-11"
version: "2.1.0"
status: "approved"
tags: ["model-routing", "SDLC", "LLM", "reasoning-models", "TDD", "compound-AI", "GitHub-Copilot", "VS-Code", "agents", "skills", "hooks", "extended-thinking", "token-cost"]
---

# Right Model, Right Task: Evidence-Based LLM Routing Across the SDLC

> Choosing the wrong model for a given SDLC phase does not just waste money. It actively degrades output quality. This guide maps empirical research findings to practical routing decisions across every phase of software development, including VS Code primitives, GitHub Copilot chat modes, agents, skills, hooks, and extended thinking tradeoffs.

## Foreword

I am Paula Silva, an AI-Native Software Engineer and Global Black Belt at Microsoft Americas, covering the Latin America territory and focused on enterprise customers. I have almost 20 years in technology. I started coding on Notepad on Windows 95, which should tell you something about how long I have been watching this industry transform. Along the way I worked at companies like Tivit, Accenture, AWS, and Google Cloud, and I will complete four years at Microsoft this year. I spend most of my time working side by side with enterprise engineering teams across Latin America, helping them build the right strategies and capabilities around AI-native development.

I wrote this guide because I kept running into the same situation over and over in my day to day work.

A client gets excited about agents. And then they start creating agents for absolutely everything, with no strategy and no governance. Within a few months they have a graveyard of agents that nobody uses, nobody maintains, and nobody really understands who built them or why. I call it the agent cemetery problem, and it is more common than people admit. The excitement of the technology moves faster than the discipline required to sustain it, and the result is a mess that is often worse than what existed before.

What worries me most is that most of these teams have no metrics, no KPIs, and no real way to measure whether any of this is working. You cannot govern what you cannot measure. And you cannot measure what was never designed with measurement in mind. A well defined agent strategy from the start is not just about choosing the right model or the right tool. It is about having clarity on what success looks like, what failure looks like, and how you will know the difference six months from now.

There is also a shift in how software is being developed that most people are not talking about clearly enough. Agents are generating more and more code, and that code is landing in bigger and bigger pull requests. Teams that used to spend 30 minutes on a code review now spend hours, and the reviewer is trying to understand code that an agent wrote from a spec that a different agent generated, in a codebase the reviewer barely recognizes anymore. The irony is that AI was supposed to make developers faster, but some teams are losing more time in review than they ever gained in generation.

The research backs this up. A randomized controlled trial with 16 experienced open-source developers found that allowing AI tools actually increased completion time by 19%, despite developers estimating a 20% speedup. [^metr-rct] The perception and the reality are completely inverted, and that gap is dangerous because it prevents teams from asking the right questions.

And then there is the darker side that the industry is barely starting to name. We already had technical debt. Technical debt is code that accumulates shortcuts and compromises that make future changes harder. AI tools are genuinely excellent at cleaning up technical debt. But silently and in parallel, AI-assisted development is accumulating two new kinds of debt that are much harder to see.

The first is cognitive debt. When a developer writes code from scratch, the friction of writing it builds understanding along the way. When an agent generates that code and the developer just accepts it, that understanding never forms. Studies call this cognitive surrender, where people adopt AI outputs with minimal scrutiny. [^triple-debt] The signals are subtle: developers become reluctant to modify certain parts of the codebase, onboarding slows down even though there is more documentation than ever, and knowledge concentrates in one or two people who happened to be around when the decisions were made.

The second is intent debt. Intent debt accumulates when the goals, constraints, and rationale that should guide the system are never properly captured. AI agents need to understand what the system is for, not just what it currently does. When that intent lives only in someone's head or in a Slack thread from eight months ago, both humans and future agents end up optimizing for the wrong things. Every generation of AI-assisted development that happens without explicit intent artifacts compounds the gap. [^triple-debt]

A large-scale empirical study of 304,362 AI-authored commits across 6,275 GitHub repositories found that AI-generated code tends to introduce higher shares of requirement and test debt compared to human-written code, with developers deferring completion and validation when relying on generative tools. [^debt-ai-boom] The technical debt is there. It is just hiding behind syntactically correct code.

None of this means we should stop using AI. It means we need to use it differently. AI-native software development is not the same as traditional software development with a Copilot plugin installed. It is a fundamentally different way of working that requires different practices, different governance, different metrics, and a clearer understanding of what each tool is actually good at.

That is what this guide is about. It maps the empirical evidence to practical decisions, starting from the most fundamental question: which model, in which mode, for which phase of the work? The answer is never "always use the most powerful model" and it is never "just let the agent figure it out." Strategy and intentionality are what separate teams that get real value from this technology from teams that end up with agent cemeteries and code nobody trusts.

I hope this helps you build something you can actually be proud of.

**Paula Silva**
AI-Native Software Engineer, Global Black Belt at Microsoft Americas
Latin America Territory, Enterprise Customers
Tivit | Accenture | AWS | Google Cloud | Microsoft (4 years)
April 2026

---

## Change Log

| Version | Date       | Author      | Changes                                                                 |
|---------|------------|-------------|-------------------------------------------------------------------------|
| 2.1.0   | 2026-04-11 | Paula Silva | Added foreword with context on agent governance, cognitive/intent/AI debt, AI-native development |
| 2.0.0   | 2026-04-11 | Paula Silva | Added VS Code primitives, chat modes, agents, skills, hooks, extended thinking, model tier guide |
| 1.0.0   | 2026-04-11 | Paula Silva | Initial version                                                         |

## Table of Contents

- [Foreword](#foreword)
- [1. The Core Problem: One Model Does Not Fit All Phases](#1-the-core-problem-one-model-does-not-fit-all-phases)
- [2. The Benchmark Gap: Why Rankings Mislead You](#2-the-benchmark-gap-why-rankings-mislead-you)
- [3. The Reasoning Model Paradox](#3-the-reasoning-model-paradox)
  - [3.1 When Reasoning Helps: The Agentic Gap](#31-when-reasoning-helps-the-agentic-gap)
  - [3.2 When Reasoning Hurts: Overthinking in SE](#32-when-reasoning-hurts-overthinking-in-se)
- [4. VS Code + GitHub Copilot Primitives](#4-vs-code--github-copilot-primitives)
  - [4.1 Chat Modes: Ask, Edit, and Agent](#41-chat-modes-ask-edit-and-agent)
  - [4.2 Custom Instructions and AGENTS.md](#42-custom-instructions-and-agentsmd)
  - [4.3 Prompt Files (.prompt.md)](#43-prompt-files-promptmd)
  - [4.4 Agent Skills (SKILL.md)](#44-agent-skills-skillmd)
  - [4.5 Custom Agents (.agent.md)](#45-custom-agents-agentmd)
  - [4.6 Hooks: Lifecycle Automation](#46-hooks-lifecycle-automation)
  - [4.7 Token Cost Anatomy of Each Primitive](#47-token-cost-anatomy-of-each-primitive)
- [5. Model Tier Reference: Claude + GPT-4.5](#5-model-tier-reference-claude--gpt-45)
  - [5.1 Model Characteristics and Premium Multipliers](#51-model-characteristics-and-premium-multipliers)
  - [5.2 Extended Thinking: When It Pays Off](#52-extended-thinking-when-it-pays-off)
- [6. Routing Map by SDLC Phase](#6-routing-map-by-sdlc-phase)
  - [6.1 Specification and Requirements](#61-specification-and-requirements)
  - [6.2 Architecture and Planning](#62-architecture-and-planning)
  - [6.3 TDD Spec Writing](#63-tdd-spec-writing)
  - [6.4 Implementation: Simple](#64-implementation--simple)
  - [6.5 Implementation: Complex (Multi-file, Semantic-heavy)](#65-implementation--complex-multi-file-semantic-heavy)
  - [6.6 Code Review and Security](#66-code-review-and-security)
  - [6.7 Summarization and Context Compaction](#67-summarization-and-context-compaction)
- [7. SDD Alignment: How Chat Modes Map to Spec-Driven Development](#7-sdd-alignment-how-chat-modes-map-to-spec-driven-development)
- [8. The LLM-vs-Framework Insight](#8-the-llm-vs-framework-insight)
- [9. Cost-Quality Tradeoffs: Enterprise Data](#9-cost-quality-tradeoffs-enterprise-data)
- [10. The Five Workload Categories (OpenDev)](#10-the-five-workload-categories-opendev)
- [11. Complete Routing Decision Table](#11-complete-routing-decision-table)
- [12. Key Takeaways](#12-key-takeaways)
- [References](#references)

---

## 1. The Core Problem: One Model Does Not Fit All Phases

Most teams default to routing every task to a single model: often the largest, most capable one available. This approach has two failure modes: it wastes cost on simple tasks (using an expensive reasoning model to write a one-line docstring), and it degrades quality on tasks where reasoning overhead is actively harmful (using an extended-thinking model to write a focused patch that needs fast environment feedback).

The compound AI paradigm, validated across multiple independent studies, establishes that **different execution phases benefit from fundamentally different model capabilities** [^opendev]. The economics are stark: accuracy-optimal multi-agent configurations cost 4.4–10.8× more than Pareto-efficient alternatives [^clear]. And difficulty-aware routing achieves +11.21% accuracy at only 64% of the inference cost of uniform routing [^difficulty].

The practical implication is that model routing is not an optimization: it is a correctness requirement for production-grade agentic systems.

---

## 2. The Benchmark Gap: Why Rankings Mislead You

Before applying any model ranking to SDLC routing decisions, understand this critical finding: **approximately 61% of existing LLM benchmarks cover only the software implementation phase**, while requirements engineering receives only 5% coverage and software design only 3% [^sdlc-benchmarks].

This means every leaderboard you have ever consulted was optimized for implementation tasks. Models ranked highly on HumanEval, SWE-bench, or MBPP are being graded almost entirely on their ability to write code patches: not on their ability to write specifications, decompose requirements, or produce architecture plans.

The gap between benchmark performance and real-world feature development is dramatic. A model achieving 74.4% resolved rate on SWE-bench succeeds on only **11.0% of tasks in FeatureBench**, a benchmark using complete feature development tasks [^featurebench]. SWE-bench measures localized patch generation; real features require planning, multi-file reasoning, and iterative validation.

**Practical consequence:** Do not use coding benchmark rankings to decide which model to use for specification or planning. Those rankings are measuring the wrong thing.

---

## 3. The Reasoning Model Paradox

Large Reasoning Models (LRMs), which are models that generate explicit chain-of-thought before answering, are not universally better for software engineering tasks. The evidence shows a strong interaction with *how the model is used*, not just *what model it is*.

### 3.1 When Reasoning Helps: The Agentic Gap

Apple's "Illusion of Thinking" paper reported that LRMs exhibit accuracy collapse on planning puzzles beyond certain complexity thresholds [^illusion]. This finding generated significant controversy, but the rebuttal papers are instructive.

The "Agentic Gap" paper demonstrated that the performance collapse documented by Apple was not a reasoning limitation: it was an experimental artifact of testing models *without tools* in a *text-only evaluation paradigm* [^agentic-gap]:

> A model that declared a puzzle impossible when confined to text-only generation, once given agentic tools, not only solved it but mastered variations of complexity far beyond the reasoning cliff it previously failed to surmount.

A separate replication confirmed this: with proper tool augmentation (Python interpreters, scratchpads), LRMs **consistently outperform non-reasoning models across all levels of task complexity** [^not-illusion].

The bottom line: **reasoning models are highly effective when paired with environment feedback** such as compilers, test runners, and execution results. This maps directly to the specification and planning phases, where the "environment" is the constraint space the model must reason through.

### 3.2 When Reasoning Hurts: Overthinking in SE

The inverse is equally well-documented. An empirical study of 4,018 trajectories on SWE-Bench Verified identified three pathological overthinking patterns: **Analysis Paralysis** (excessive internal reasoning instead of environment interaction), **Rogue Actions** (actions not grounded in the actual environment state), and **Premature Disengagement** (stopping before verification) [^overthinking].

The quantitative result is striking: mitigating overthinking in agentic environments improves performance by **nearly 30% while reducing computational costs by 43%**. Reasoning models exhibit stronger overthinking tendencies than non-reasoning models precisely because they are optimized to think more before acting.

For iterative, feedback-driven tasks like local patch implementation: where the right behavior is: write code, run tests, observe result, adjust: a fast model with tight feedback loops consistently outperforms a slow reasoning model that overthinks before each action.

---

## 4. VS Code + GitHub Copilot Primitives

VS Code's GitHub Copilot ecosystem exposes a layered set of customization primitives. Understanding the token cost and behavioral scope of each is essential for building efficient agentic workflows. The primitives stack from cheapest to most expensive in terms of token budget impact.

### 4.1 Chat Modes: Ask, Edit, and Agent

GitHub Copilot Chat in VS Code offers three distinct interaction modes, each with fundamentally different autonomy levels, context consumption, and appropriate SDLC phases [^copilot-modes].

**Ask mode** is the lowest-friction entry point. It answers coding questions using the active file and selection as implicit context, makes no file changes, and uses the fewest tokens per interaction. Appropriate for: understanding code, explaining concepts, quick lookups, getting unstuck.

**Edit mode** (formerly Copilot Edits) lets you select specific files to change and describe the update in natural language. Copilot applies inline, review-ready edits immediately across those files. It is scoped: you control exactly which files are in scope. Appropriate for: targeted refactors, adding error handling, style updates, well-specified implementation in a known file set.

**Agent mode** is the most powerful and most expensive. The agent autonomously determines which files to change, runs terminal commands, observes results, and iterates until the task is complete. It has access to the full workspace, can read files beyond what you manually specified, and loops until its goal is achieved or it hits a budget limit. Appropriate for: multi-step feature implementation, bug fixes that cross file boundaries, scaffolding, CI/CD task automation.

**Token cost comparison across modes:**

| Mode  | Context scope         | File changes | Tool calls | Iterations | Premium request cost |
|-------|-----------------------|-------------|------------|------------|---------------------|
| Ask   | Active file/selection | None        | None       | None       | 1x (base)           |
| Edit  | Explicit file set     | Inline      | Limited    | None       | 1–2x                |
| Agent | Full workspace        | Autonomous  | Unlimited  | Yes        | 3–10x per session   |

**Routing heuristic:**

```
IF task == "understand" OR task == "explain":
    → Ask mode + fast model (Haiku 4.5)

IF task == "targeted_change" AND files_known AND spec_clear:
    → Edit mode + Sonnet 4.6

IF task == "multi_step" OR task == "uncertain_scope":
    → Agent mode + correct model for task type
```

**Impact on SDD:** In a Spec-Driven Development workflow, Ask mode aligns with the discovery and ambiguity resolution phase before writing the SPECIFICATION.md. Edit mode aligns with implementing from an approved IMPLEMENTATION_PLAN.md. Agent mode aligns with autonomous feature implementation after all specs are locked.

### 4.2 Custom Instructions and AGENTS.md

Custom instructions are always-on context that Copilot receives on every request within a workspace. They are the highest-leverage but highest-cost customization primitive because they consume tokens on **every single interaction**.

VS Code supports three always-on instruction formats [^vscode-instructions]:

- **`.github/copilot-instructions.md`**: workspace-wide, always active for all users
- **`AGENTS.md`**: universally recognized by multiple agents (Copilot, Claude Code, etc.)
- **`CLAUDE.md`**: Claude-specific conventions; VS Code reads it when the Claude agent is active

Empirical data confirms AGENTS.md files reduce runtime by 28.64% and token usage by 16.58% compared to sessions without them [^agents-md]. However, LLM-generated AGENTS.md files perform 3% *worse* than sessions without them: human-curated files are the only ones that consistently help [^agents-md-eth].

**Best practices for always-on instructions:**

```markdown
<!-- .github/copilot-instructions.md -->
# Project: Payment Service API

## Stack
- Node.js 22 + TypeScript 5.4 + Fastify 5
- PostgreSQL 16 via Drizzle ORM
- Vitest for all testing (no Jest)

## Conventions
- Prefer `Result<T, E>` over throwing exceptions
- Use `zod` for all input validation
- Max function length: 30 lines; split into private helpers if longer

## Model Usage
- Use extended thinking for spec/ and architecture/ files
- Use fast mode for src/utils/, src/types/, and test files
```

**Token cost:** With 2,000 tokens in copilot-instructions.md and 1,000 users making 10 requests/day, the token cost is approximately 20M input tokens/day before a single line of code is written. Use `applyTo` scoping on `.instructions.md` files to reduce this by ~68%.

**Scoped instructions (`.instructions.md` with `applyTo`):**

```yaml
---
applyTo: "src/**/*.test.ts"
---
# Test File Conventions
Use Vitest. Prefer `describe/it` blocks over test(). 
Mock external dependencies with `vi.mock()`.
Each test file should have exactly one describe block.
```

### 4.3 Prompt Files (.prompt.md)

Prompt files are reusable, on-demand templates invoked as slash commands (e.g., `/spec`, `/review`, `/tdd`). Unlike always-on instructions, they only consume tokens when explicitly called. This makes them the most cost-efficient way to inject deep phase-specific context.

**Key property:** Prompt files support a `mode` frontmatter property that locks the interaction to a specific chat mode, and a `model` property that pins the model for that prompt [^vscode-prompts].

**Example: SDD specification prompt**

```markdown
---
name: spec
description: Write an EARS-format specification from a requirement
mode: ask
model: claude-opus-4-6
---

You are a senior requirements engineer. Before writing the spec:

1. Identify all **unstated assumptions**
2. List all **constraints** (performance, security, compatibility)
3. Flag any **contradictions** or ambiguities in the requirement
4. Ask clarifying questions if critical information is missing

Then write the specification in EARS format with Given/When/Then acceptance criteria.

Requirement: {{input}}
```

**Example: Fast TDD test generation prompt**

```markdown
---
name: tdd
description: Generate unit tests from a specification
mode: edit
model: claude-sonnet-4-6
---

You are a test engineer. Generate unit tests from the specification below.
Use Vitest. Cover: happy path, edge cases, null/undefined inputs, error handling.
Do NOT modify any source files: only create or update test files.

Specification: {{input}}
```

**Example: Quick implementation prompt**

```markdown
---
name: implement
description: Implement from an approved IMPLEMENTATION_PLAN.md
mode: agent
model: claude-sonnet-4-6
---

Read IMPLEMENTATION_PLAN.md first. 
Implement the tasks in order. Do not scope-creep beyond the plan.
After each file change, run the relevant tests.
If tests fail, fix before moving to the next task.
```

### 4.4 Agent Skills (SKILL.md)

Agent Skills are on-demand knowledge packages: Markdown files with YAML frontmatter placed in a `.skills/` directory (or configured via `chat.skillsLocations`). A skill is loaded *lazily*: Copilot reads the `description` frontmatter to decide if the skill is relevant, then loads the full body only when needed. This three-level loading (description → body → referenced files) means you can install many skills without constant token overhead.

Skills are portable across VS Code, Copilot CLI, and Copilot Cloud Agent: the same SKILL.md works in all three contexts [^vscode-skills].

**Invoke a skill explicitly:** `/skill-name` in chat, or let Copilot auto-detect relevance from the description.

**Example: SDD spec skill**

```markdown
---
name: sdd-spec
description: Guide for writing EARS-format specifications using Spec-Driven Development. Use when asked to create, review, or refine a SPECIFICATION.md or requirements document.
---

# SDD Specification Skill

## EARS Notation
- Ubiquitous: "The {system} shall {action}"
- Event-driven: "When {trigger}, the {system} shall {action}"
- State-driven: "While {state}, the {system} shall {action}"
- Conditional: "If {condition}, the {system} shall {action}"

## Required Sections
1. **Overview**: one paragraph, plain language
2. **Constraints**: performance, security, compatibility
3. **Assumptions**: explicitly stated, not implied
4. **Requirements**: EARS format, numbered
5. **Acceptance Criteria**: Given/When/Then per requirement
6. **Open Questions**: unresolved ambiguities for human review

## Anti-patterns to avoid
- Passive voice ("should be done by")
- Vague quantifiers ("fast", "secure", "easy")
- Missing error paths (every success path needs a failure path)
```

**Example: Code review security skill**

```markdown
---
name: security-review
description: Security-focused code review. Use when asked to review authentication, authorization, input validation, or any security-sensitive code path.
---

# Security Review Skill

## Priority Checklist
- [ ] Input validation: all external data validated before use
- [ ] SQL injection: parameterized queries only, no string concatenation
- [ ] Authentication: tokens validated on every request, not just login
- [ ] Authorization: resource ownership checked, not just authentication
- [ ] Secrets: no hardcoded credentials, API keys, or passwords
- [ ] Error handling: errors logged server-side, generic messages to client
- [ ] Rate limiting: applied on all public endpoints

## Output Format
For each finding: severity (Critical/High/Medium/Low), location (file:line), 
description, recommended fix, OWASP reference.
```

### 4.5 Custom Agents (.agent.md)

Custom agents define a persistent persona with its own model, tools, and instructions [^vscode-agents]. Unlike prompt files (single-shot templates), agents maintain a role across an entire session and can restrict or expand tool access relative to the default agent. Agents can also define **handoffs**: explicit transitions to another agent when a phase completes.

**File location:**
- Workspace-scoped: `.github/agents/AGENT-NAME.agent.md`
- User-scoped: `~/.vscode/agents/AGENT-NAME.agent.md`
- Organization-scoped: `.github-private/agents/AGENT-NAME.agent.md`

**Example: Planner agent (Opus 4.6, no code edits)**

```yaml
---
description: Architecture planning and SDD document generation. Generates SPECIFICATION.md and IMPLEMENTATION_PLAN.md. Does NOT write code.
name: Planner
tools: ['web/fetch', 'search/codebase', 'search/usages', 'read/file']
model: claude-opus-4-6
handoffs:
  - label: "Implement Plan"
    agent: implementer
    prompt: "Implement the plan outlined in IMPLEMENTATION_PLAN.md"
    send: false
---

# Planner Agent

You are a senior software architect in PLANNING MODE ONLY.
Your outputs are documents only. Never code edits.

## Your workflow
1. Read all existing context files (AGENTS.md, SPECIFICATION.md if present)
2. Clarify ambiguous requirements before planning
3. Write SPECIFICATION.md using EARS notation
4. Write IMPLEMENTATION_PLAN.md with atomic tasks marked [P] for parallel
5. Flag open questions requiring human review

When the plan is approved, suggest handoff to the Implementer agent.
```

**Example: Implementer agent (Sonnet 4.6, code edits enabled)**

```yaml
---
description: Implements tasks from an approved IMPLEMENTATION_PLAN.md. Reads the plan, edits files, runs tests, and iterates until passing.
name: Implementer
tools: ['edit/file', 'create/file', 'run/command', 'search/codebase', 'read/file']
model: claude-sonnet-4-6
handoffs:
  - label: "Review Changes"
    agent: reviewer
    prompt: "Review the changes I just implemented for quality and correctness"
    send: false
---

# Implementer Agent

You are implementing from an approved plan. NEVER scope-creep.

## Your workflow
1. Read IMPLEMENTATION_PLAN.md and understand scope before touching any file
2. Implement tasks in order, one at a time
3. After each file change: run relevant tests
4. If tests fail: fix before moving to the next task
5. Do not modify files outside the plan's scope

When all tasks pass, suggest handoff to the Reviewer agent.
```

**Example: Reviewer agent (Opus 4.6, read-only)**

```yaml
---
description: Code review with focus on correctness, quality, and security. Read-only. Does not modify code.
name: Reviewer
tools: ['read/file', 'search/codebase', 'search/usages']
model: claude-opus-4-6
---

# Reviewer Agent

You are a senior engineer performing code review. READ ONLY.
Review the changes from the current session against these criteria:

1. **Correctness**: does it match the specification?
2. **Test coverage**: are edge cases and error paths tested?
3. **Security**: input validation, auth checks, no hardcoded secrets
4. **Maintainability**: readable, minimal complexity, documented

Output a structured review with: LGTM / Needs Changes / Blocking issues.
```

**Generalist agent (Sonnet 4.6, broad tools, for exploratory work):**

```yaml
---
description: General-purpose coding assistant for exploratory tasks, debugging, and questions that don't fit a specialized workflow.
name: Generalist
tools: ['edit/file', 'create/file', 'run/command', 'search/codebase', 'read/file', 'web/fetch']
model: claude-sonnet-4-6
---

# Generalist Agent

You are a versatile senior engineer. Adapt your approach to the task at hand.
For vague or exploratory requests: ask a clarifying question before acting.
For well-scoped requests: act, observe, iterate.
Always read before writing. Always test after editing.
```

### 4.6 Hooks: Lifecycle Automation

Hooks execute shell commands at specific lifecycle events in the agent loop [^copilot-hooks]. They are defined either in `.github/copilot-hooks.yml` or inline in the YAML frontmatter of a `.agent.md` file. As of March 2026, VS Code supports agent-scoped hooks directly in agent frontmatter [^vscode-march-2026].

**Hook types:**
- `preToolUse`: runs before any tool call; can block or modify the call
- `postToolUse`: runs after a tool call completes; useful for validation and logging

**Example: Copilot CLI hooks (`.github/copilot-hooks.yml`)**

```yaml
hooks:
  postToolUse:
    - trigger: edit/file
      command: |
        # Run formatter after every file edit
        if echo "$TOOL_FILE" | grep -q "\.ts$"; then
          npx prettier --write "$TOOL_FILE"
        fi

    - trigger: edit/file
      command: |
        # Run type-check after TypeScript edits
        if echo "$TOOL_FILE" | grep -q "\.ts$"; then
          npx tsc --noEmit --skipLibCheck
        fi

  preToolUse:
    - trigger: run/command
      command: |
        # Block destructive commands outside CI
        if echo "$TOOL_COMMAND" | grep -qE "^(rm|drop|delete|truncate)"; then
          echo "DENY: Destructive command blocked outside CI"
          exit 1
        fi
```

**Example: Agent-scoped hooks in `.agent.md` frontmatter**

```yaml
---
name: safe-implementer
tools: ['edit/file', 'create/file', 'run/command']
model: claude-sonnet-4-6
hooks:
  postToolUse:
    - trigger: edit/file
      run: "npx eslint --fix $TOOL_FILE && npx prettier --write $TOOL_FILE"
    - trigger: run/command
      run: "echo '[hook] Command executed: $TOOL_COMMAND' >> .copilot-audit.log"
---
```

**SDD-aligned security hook (enforce spec compliance):**

```yaml
hooks:
  preToolUse:
    - trigger: edit/file
      command: |
        # Block edits to files outside IMPLEMENTATION_PLAN.md scope
        if ! grep -q "$TOOL_FILE" IMPLEMENTATION_PLAN.md; then
          echo "DENY: $TOOL_FILE is not in the approved implementation plan"
          exit 1
        fi
```

### 4.7 Token Cost Anatomy of Each Primitive

Understanding the token cost of each primitive is essential for controlling premium request spend at scale [^token-cost][^agents-md].

| Primitive | Loaded | Frequency | Token impact | Best practice |
|-----------|--------|-----------|-------------|---------------|
| `copilot-instructions.md` | Always-on | Every request, every user | **High**: scales with team size | Keep under 100 lines; use `applyTo` for scoped rules |
| `AGENTS.md` / `CLAUDE.md` | Always-on | Every agent session | **High** | Human-curated only; no auto-generation |
| `.instructions.md` with `applyTo` | On path match | Subset of requests | **Medium** | Scope aggressively; ~68% cost reduction vs global |
| `.prompt.md` slash command | On-demand | Per explicit invocation | **Low**: user controlled | Preferred for phase-specific deep context |
| `SKILL.md` | Lazy-loaded | When description matches | **Low** | Description triggers load; body only on relevance match |
| `.agent.md` persona | Per session | Once per session | **Medium** | Lightweight agent definitions; heavy context in skills |
| `hooks` | Per tool call | On each triggered event | **Minimal** | No LLM calls: just shell commands |

**The applyTo multiplier effect:**

```
Scenario: 1,000 developers, 10 requests/day, 2k-token global instructions

Without applyTo (global):   1,000 × 10 × 2,000 = 20M tokens/day
With applyTo (30% match):   1,000 × 3  × 2,000 = 6M tokens/day
                                           Savings: ~14M tokens/day
```

---

## 5. Model Tier Reference: Claude + GPT-4.5

As of April 2026, GitHub Copilot supports Claude Opus 4.6, Claude Sonnet 4.6, Claude Haiku 4.5, and GPT-4.5 as primary model options in VS Code across all chat modes [^copilot-models][^opus-ga][^sonnet-ga].

### 5.1 Model Characteristics and Premium Multipliers

| Model | Premium multiplier | Context window | Extended thinking | Best for |
|-------|--------------------|---------------|-------------------|---------|
| **Claude Opus 4.6** | 3x | 200k | Yes (configurable) | Architecture, spec writing, security review, complex multi-file planning |
| **Claude Sonnet 4.6** | 1x | 200k | Yes (configurable, March 2026) | Implementation, TDD generation, refactoring, most daily tasks |
| **Claude Haiku 4.5** | 0.33x | 200k | No | Ask-mode questions, quick lookups, docstrings, commit messages, compaction |
| **GPT-4.5** | 1x | 128k | No | General implementation, chat assistance, alternative perspective on spec |

**Practical model selection by task:**

```
Docstrings, commit messages, PR descriptions   → Haiku 4.5  (0.33x cost)
Explain code, quick debugging, Ask mode        → Haiku 4.5  (0.33x cost)
TDD test generation, unit tests                → Sonnet 4.6 (1x cost)
Feature implementation, refactoring            → Sonnet 4.6 (1x cost)
Architecture planning, SPECIFICATION.md        → Opus 4.6   (3x cost)
Security review, multi-file semantic review    → Opus 4.6   (3x cost)
Complex bug spanning 10+ files                 → Opus 4.6   (3x cost)
Daily general coding (fallback)                → GPT-4.5    (1x cost)
```

**Cost modeling for a team of 100 developers (10 requests/day):**

| Scenario | Model | Requests/day | Daily premium cost (relative) |
|----------|-------|-------------|-------------------------------|
| Everything on Opus 4.6 | 3x | 1,000 | 3,000 units |
| Routed correctly | Mixed | 1,000 | ~900 units |
| **Savings from routing** |: |: | **~70% reduction** |

The routing savings (from ~70% cost reduction) come from pushing Ask-mode and summarization tasks to Haiku, keeping implementation on Sonnet, and reserving Opus only for spec/architecture/review phases.

### 5.2 Extended Thinking: When It Pays Off

Extended thinking (available in Opus 4.6 and Sonnet 4.6 as of March 2026) adds an explicit chain-of-thought pass before the model generates its response. VS Code now supports configurable thinking effort directly from the model picker [^vscode-march-2026].

**The core tradeoff:**

| Factor | Extended thinking ON | Extended thinking OFF |
|--------|---------------------|----------------------|
| Token cost | 2–5× more tokens | Base cost |
| Latency | Higher (visible thinking) | Lower |
| Quality on ambiguous tasks | Significantly better | Baseline |
| Quality on clear/feedback-driven tasks | Same or worse (overthinking) | Better |

**When extended thinking delivers clear ROI:**

Extended thinking helps when the task has **high ambiguity**, **no executable feedback loop**, and **correctness is expensive to verify later**. Concretely:

- **Writing SPECIFICATION.md from vague requirements**: errors here cascade into all downstream work; 5× token cost is trivially recouped
- **Architecture decisions spanning 10+ files**: reasoning through trade-offs and implicit constraints benefits from explicit deliberation
- **Security review of authentication or authorization code**: holding multiple threat models simultaneously requires depth
- **Resolving contradictions in an existing spec**: the model must reason through implicit constraints across a document

**When extended thinking does NOT help (and may harm):**

- **Localized patches (1–3 files, clear spec)**: overthinking overhead degrades performance by ~30% [^overthinking]; use Sonnet 4.6 without extended thinking
- **TDD test generation from a clear spec**: instruction following, not reasoning depth, is the bottleneck [^tests-as-prompt]; standard Sonnet 4.6 is sufficient
- **Commit messages, PR descriptions, docstrings**: Haiku 4.5 without thinking is optimal
- **Iterative implementation in Agent mode**: tight action-observe-correct loops are disrupted by extended pre-action reasoning

**VS Code configuration example:**

```json
// .vscode/settings.json: workspace-level model settings
{
  "github.copilot.chat.agent.thinkingBudget": "low",       // default for agent mode
  "github.copilot.chat.thinkingVisibility": "collapsed"    // show thinking but collapsed
}
```

**In `.agent.md` frontmatter (per-agent thinking budget):**

```yaml
---
name: spec-writer
model: claude-opus-4-6
thinking: high        # extended thinking ON for this agent
tools: ['read/file', 'search/codebase', 'web/fetch']
---
```

```yaml
---
name: fast-implementer
model: claude-sonnet-4-6
thinking: disabled    # extended thinking OFF for tight implementation loops
tools: ['edit/file', 'run/command', 'search/codebase']
---
```

---

## 6. Routing Map by SDLC Phase

The following routing recommendations synthesize empirical findings from 15+ independent studies. Each phase includes the reasoning behind the recommendation, the VS Code primitive to use, and the evidence source.

### 6.1 Specification and Requirements

**Recommended setup:** Opus 4.6 + extended thinking + Ask mode (or `/spec` prompt file)

**Why reasoning helps here:**

Specification tasks have high ambiguity, open-ended constraint spaces, and no executable feedback signal. There is no compiler to tell you whether a requirement is contradictory. The model must reason through implicit constraints, detect ambiguities, and produce formally consistent output: exactly the problem class where extended thinking is beneficial [^illusion][^agentic-gap].

An empirical study of reasoning behaviors in LRMs showed that models follow a human-like coding workflow when given complex specs: analyzing requirements from multiple perspectives, clarifying ambiguities, comparing alternative solutions, implementing, and reviewing: with lighter reasoning patterns for simpler tasks [^thinking-patterns].

**VS Code setup:**

1. Create `.github/agents/spec-writer.agent.md` with Opus 4.6 + thinking: high + read-only tools
2. Invoke with `/spec` prompt file or select the "Spec Writer" agent from the dropdown
3. Output lands in `SPECIFICATION.md`: never code files

**Token cost note:** Extended thinking on Opus 4.6 is an intentional cost investment. A well-specified requirement prevents cascading failures in implementation and testing: the cheapest reasoning tokens are the ones spent before any code is written.

---

### 6.2 Architecture and Planning

**Recommended setup:** Opus 4.6 + extended thinking + Planner agent (read-only tools) + Plan mode

Context window size matters as much as reasoning capability at this phase. A study on long-horizon repository generation (NL2Repo-Bench, 104 tasks) found that models with standard context windows achieve lower success rates (27.6%) even when they use planning tools frequently, because **without a large enough context to retain the full plan history and execution states, planning effectiveness degrades over long horizons** [^nl2repo].

Models with 1M+ token windows can maintain a persistent, coherent view of the task lifecycle: Claude Opus 4.6's 200k context handles most real-world planning tasks comfortably.

SWE-Bench Pro data confirms: the performance gap between frontier models and smaller models widens dramatically beyond 3 files, with top models maintaining >10% success rates even for problems involving 10+ files [^swe-pro].

**Practical guidance for multi-file planning:**

```
Tasks touching ≤ 3 files:  Sonnet 4.6, Edit mode, standard context
Tasks touching 4–10 files: Sonnet 4.6, Agent mode, full workspace context
Tasks touching > 10 files: Opus 4.6, Planner agent, extended thinking
```

---

### 6.3 TDD Spec Writing

**Recommended setup:** Sonnet 4.6 + standard thinking + `/tdd` prompt file + Edit mode

TDD spec writing: producing test cases from a specification: is a structured, well-scoped task with clear correctness criteria. The key capabilities for TDD success are **instruction following and in-context learning**, not general coding proficiency or pretraining knowledge [^tests-as-prompt].

A benchmark of 19 frontier models on 1,000 TDD tasks found that performance bottlenecks are primarily instruction loss in long prompts and multi-feature complexity, not reasoning depth. Sonnet 4.6 at standard thinking performs comparably to Opus 4.6 on this task type: at 1/3 the cost.

**Practical consequence:** Route TDD spec generation to Sonnet 4.6 in Edit mode. Reserve Opus budget for the upstream specification phase where it actually matters.

---

### 6.4 Implementation: Simple

**Recommended setup:** Sonnet 4.6 (or Haiku 4.5 for trivial tasks) + standard thinking + Edit mode

For localized patches (≤ 3 files, clear specification, available test suite), reasoning overhead is actively counterproductive. The overthinking research is unambiguous [^overthinking]: in iterative, feedback-driven environments with executable output, the optimal behavior is tight action-observe loops: not extended pre-action deliberation.

Extended thinking off. Edit mode preferred over Agent mode to control scope and avoid the agent consuming workspace context it doesn't need.

**Decision matrix:**

| Task | Mode | Model |
|------|------|-------|
| Add docstring | Ask → inline | Haiku 4.5 |
| Fix a failing test | Edit | Haiku 4.5 |
| Add error handling to a function | Edit | Sonnet 4.6 |
| Implement from a single-file spec | Edit | Sonnet 4.6 |

---

### 6.5 Implementation: Complex (Multi-file, Semantic-heavy)

**Recommended setup:** Sonnet 4.6 + Agent mode + Implementer agent + handoff to Reviewer

The most important finding from the 9,374-trajectory study on coding agent behavior [^behavioral-drivers] is that the **LLM is the primary driver of both outcome and behavior**. Agents sharing the same LLM agree on far more tasks than agents sharing the same framework. Framework choice becomes less relevant as model quality improves.

SWE-Bench Pro data shows that frontier models like Claude Opus 4.6 fail primarily on **semantic comprehension** (35.9% of failures): solutions are syntactically correct but wrong algorithmically. This is not fixed by adding extended thinking; it improves with model generation and context quality.

The behavioral structure of the trajectory matters more than its length: agents that collect context before editing and invest in validation succeed more reliably. This is a *prompting and scaffolding* problem, not a *model selection* problem at this tier.

**Practical guidance:**

- Start with Sonnet 4.6 in Agent mode; escalate to Opus 4.6 only if the task involves architectural judgment
- Always define an IMPLEMENTATION_PLAN.md before starting Agent mode sessions
- Use the Implementer → Reviewer handoff pattern defined in Section 4.5
- Monitor trajectory structure: context-collect before edit, validate after each file change

---

### 6.6 Code Review and Security

**Recommended setup:** Opus 4.6 + extended thinking + Reviewer agent (read-only) + Ask mode

Code review is semantically dense, multi-perspective work. The human-AI code review study (278,790 conversations, 300 projects) found that AI agents and human reviewers have complementary strengths: agents excel at systematic coverage and consistency, humans at contextual and architectural judgment [^code-review-synergy].

Reasoning mode is appropriate here because:
1. The task has no tight feedback loop: review quality is assessed holistically
2. Security reasoning requires holding multiple threat models simultaneously
3. False negatives (missing a vulnerability) are asymmetrically costly

Extended thinking on Opus 4.6 with a read-only tool restriction (no `edit/file`) prevents the reviewer from making unreviewed changes: it produces a structured review document that a human then acts on.

---

### 6.7 Summarization and Context Compaction

**Recommended setup:** Haiku 4.5 + Ask mode (or compaction model in CLI)

Summarization tasks: commit messages, PR descriptions, changelogs, compacting long agent contexts: do not require reasoning depth. The OpenDev architecture explicitly routes these to a dedicated "compaction model," a cheaper, faster model specifically tasked with progressive reduction of older observations [^opendev].

In Copilot CLI, configure Haiku 4.5 as the default for `/commit` and `/diff` operations. In VS Code, use Ask mode with Haiku for all summarization prompts.

**This is the highest-ROI routing decision:** replacing Opus or Sonnet with Haiku for summarization reduces premium request spend by 67–90% on these tasks with minimal quality degradation.

---

## 7. SDD Alignment: How Chat Modes Map to Spec-Driven Development

Spec-Driven Development (SDD) organizes work into three layers: CONSTITUTION (principles), SPECIFICATION (requirements), and IMPLEMENTATION_PLAN (atomic tasks) [^sdd]. Each layer maps to a specific combination of chat mode, model, and VS Code primitive.

```
SDD Layer                 → VS Code Mode   → Model          → Primitive
───────────────────────────────────────────────────────────────────────
CONSTITUTION.md           → Ask mode       → Opus 4.6       → Planner agent
  (principles, guardrails)   (no edits)      (extended thinking)

SPECIFICATION.md          → Ask mode       → Opus 4.6       → /spec prompt
  (EARS requirements)        (no edits)      (extended thinking)  + sdd-spec skill

IMPLEMENTATION_PLAN.md    → Ask mode       → Opus 4.6       → Planner agent
  (atomic tasks, [P] marks)  (no edits)      (standard thinking)  + handoff

─── Human review gate ──────────────────────────────────────────────

TDD specs from SPEC        → Edit mode     → Sonnet 4.6     → /tdd prompt
  (test cases per AC)        (test files)    (standard)

Implementation             → Agent mode    → Sonnet 4.6     → Implementer agent
  (from IMPL_PLAN.md)        (code files)    (standard)       + hooks

Code review                → Ask mode      → Opus 4.6       → Reviewer agent
  (structured review)        (read-only)     (extended thinking)
```

**Key insight for token economy:** The "no edits" modes (Ask, Planner agent with read-only tools) are the most expensive per-interaction but generate the documents that *prevent* costly rework downstream. An Opus 4.6 spec session that costs 50k tokens prevents 500k tokens of back-and-forth corrections during implementation.

The SDD pattern also enforces a natural **human-in-the-loop gate** between spec and implementation: the agent physically cannot enter Agent mode (which writes files) until a human approves the plan. This aligns with the empirical finding that human-in-the-loop spec refinement matters more than model choice for TDD workflows [^spec-tdd].

---

## 8. The LLM-vs-Framework Insight

One of the most practically important findings of 2026 comes from the large-scale behavioral study of 19 agents across 8 frameworks and 14 LLMs [^behavioral-drivers]:

> The LLM is the primary driver of both outcome and behavior. Agents sharing the same LLM agree on far more tasks than agents sharing the same framework. Framework influence on agent tactics diminishes with stronger LLMs.

This finding has a direct implication for teams evaluating SWE-agent, OpenHands, AutoCodeRover, or GitHub Copilot extensions: **the framework choice is a second-order decision**. The model choice is first-order.

As models become stronger across generations, the performance gap between frameworks narrows. The quality of your context engineering (AGENTS.md, CLAUDE.md, scoped instructions) and your model selection will determine most of your outcome variance: not whether you use framework A vs framework B.

---

## 9. Cost-Quality Tradeoffs: Enterprise Data

The CLEAR framework evaluation of six leading agents on 300 enterprise tasks established that **accuracy-optimal configurations cost 4.4–10.8× more than Pareto-efficient alternatives** [^clear]. This is the cost of using Opus 4.6 uniformly across all task types.

The difficulty-aware orchestration approach achieves **+11.21% accuracy improvement at 64% of the inference cost** of a uniform strong-model approach [^difficulty]. The mechanism is simple: dynamically adapt workflow complexity based on estimated task difficulty, and use heterogeneous LLMs within the same workflow structure.

**Token cost reference for GitHub Copilot contexts:**

| Primitive | When charged | Token cost |
|-----------|-------------|------------|
| `copilot-instructions.md` (2k tokens) | Every request from every user | ~20M tokens/day (1k devs, 10 req/day) |
| `.instructions.md` with `applyTo` (2k tokens) | Path match only | ~6M tokens/day (30% match rate) |
| Opus 4.6 for spec/architecture | On-demand, scoped | 3x multiplier: intentional investment |
| Sonnet 4.6 for implementation | Per action in agent loop | 1x multiplier: continuous, optimized |
| Haiku 4.5 for summarization/ask | Per quick interaction | 0.33x multiplier: free efficiency |
| Hooks | Per tool call | Zero LLM tokens: shell only |

---

## 10. The Five Workload Categories (OpenDev)

The OpenDev compound AI system [^opendev] provides the most concrete operationalization of model routing. It defines five distinct workload categories, each routing to a specialized model. This maps directly to the VS Code agent/skill architecture:

| Workload | OpenDev model type | VS Code equivalent | Recommended model |
|----------|--------------------|-------------------|-------------------|
| **Action** | Fast execution model | Implementer agent (Agent mode) | Sonnet 4.6 |
| **Thinking** | Reasoning model (no tool distraction) | Planner agent / Ask mode | Opus 4.6 + extended thinking |
| **Vision** | Vision-language model | Agent mode + image context | Sonnet 4.6 (multimodal) |
| **Compaction** | Cheap/fast summarization | Haiku 4.5 in Ask mode / CLI | Haiku 4.5 |
| **Subagent** | Specialized parallel agents | Multiple `.agent.md` with handoffs | Model per role |

The architecture is model-agnostic by construction: switching providers or optimizing cost requires only a configuration change in the `.agent.md` frontmatter, not a code change.

---

## 11. Complete Routing Decision Table

| SDLC Phase | Task type | Chat mode | Agent/Primitive | Model | Extended thinking | Token tier |
|-----------|-----------|-----------|-----------------|-------|-------------------|------------|
| Specification | Requirements from vague input | Ask | Planner agent / `/spec` prompt | Opus 4.6 | **Yes** | High (intentional) |
| Architecture | Multi-file planning (>5 files) | Ask | Planner agent | Opus 4.6 | **Yes** | High (intentional) |
| Architecture | Clear task decomposition | Ask | `/plan` prompt | Sonnet 4.6 | No | Medium |
| TDD Spec | Test cases from clear spec | Edit | `/tdd` prompt + sdd-spec skill | Sonnet 4.6 | No | Medium |
| Implementation | Docstring, commit message | Ask | Direct / Haiku default | Haiku 4.5 | No | **Low** |
| Implementation | Fix failing test (1 file) | Edit | Direct | Haiku 4.5 / Sonnet 4.6 | No | Low–Medium |
| Implementation | Feature from approved plan (3–10 files) | Agent | Implementer agent + hooks | Sonnet 4.6 | No | Medium |
| Implementation | Complex multi-file + semantic | Agent | Implementer agent | Sonnet 4.6 → Opus 4.6 | No | Medium–High |
| Code Review | Quality + correctness | Ask | Reviewer agent (read-only) | Sonnet 4.6 | No | Medium |
| Code Review | Security / auth review | Ask | Reviewer agent + security-review skill | Opus 4.6 | **Yes** | High |
| Summarization | PR description, changelog | Ask | Direct | Haiku 4.5 | No | **Low** |
| Summarization | Context compaction (CLI) | Compaction | CLI compaction model | Haiku 4.5 | No | **Low** |
| Exploration | Unknown codebase, debugging | Ask / Agent | Generalist agent | Sonnet 4.6 | No | Medium |

---

## 12. Key Takeaways

1. **Benchmarks lie about spec/planning.** 61% of LLM benchmarks measure implementation. Rankings are calibrated for the wrong phase. Use Opus 4.6 with extended thinking for specification regardless of what the leaderboards say.

2. **Reasoning models fail without tools.** The "Illusion of Thinking" controversy is settled: reasoning models with tool access consistently outperform fast models on complex tasks. Always pair reasoning models with environment access.

3. **Overthinking costs 43% more and degrades quality by 30%.** On iterative, feedback-driven implementation tasks, extended thinking is actively harmful. Use Sonnet 4.6 without extended thinking for localized patches.

4. **Chat mode selection is the first routing decision.** Ask → Edit → Agent is a cost escalation ladder. Use the cheapest mode that meets the task's needs; Agent mode consumes 3–10× more tokens than Ask mode for the same question.

5. **The LLM matters more than the framework.** Invest in model selection and context engineering before framework selection. Custom agents with the right model and tool scope outperform generic configurations regardless of the underlying framework.

6. **applyTo cuts 68% of instruction token cost.** Scoped `.instructions.md` files with `applyTo` patterns dramatically reduce always-on context overhead. Global `copilot-instructions.md` should be kept under 100 lines; move domain-specific rules to scoped files.

7. **Skills are lazy: install many, pay for few.** SKILL.md files are loaded on relevance match, not universally. Build a library of phase-specific skills (sdd-spec, security-review, tdd-generator) and let Copilot load them only when relevant.

8. **Hooks enforce SDD gates at zero LLM cost.** `preToolUse` hooks can block agents from editing files outside the IMPLEMENTATION_PLAN.md scope, at zero token cost. This is the lowest-friction way to enforce spec-driven discipline.

9. **74% SWE-bench → 11% real features.** No benchmark accurately predicts production performance for complex feature development. Evaluate models on your actual codebase, not leaderboards.

10. **Haiku 4.5 is free money on summarization.** Routing commit messages, PR descriptions, changelogs, and Ask-mode questions to Haiku 4.5 reduces premium request spend by 67–90% on those tasks with negligible quality impact.

---

## References

[^opendev]: Becker et al. (2026). *Building AI Coding Agents for the Terminal: Scaffolding, Harness, Context Engineering, and Lessons Learned* (OpenDev). arXiv:2603.05344. [https://arxiv.org/abs/2603.05344](https://arxiv.org/abs/2603.05344)

[^clear]: *Beyond Accuracy: A Multi-Dimensional Framework for Evaluating Enterprise Agentic AI Systems* (CLEAR). arXiv:2511.14136. [https://arxiv.org/abs/2511.14136](https://arxiv.org/abs/2511.14136)

[^difficulty]: *Difficulty-Aware Agent Orchestration in LLM-Powered Workflows*. arXiv:2509.11079. [https://arxiv.org/abs/2509.11079](https://arxiv.org/abs/2509.11079)

[^sdlc-benchmarks]: Wang et al. (2025). *Software Development Life Cycle Perspective: A Survey of Benchmarks for Code LLMs and Agents*. arXiv:2505.05283. [https://arxiv.org/abs/2505.05283](https://arxiv.org/abs/2505.05283)

[^featurebench]: *FeatureBench: Benchmarking Agentic Coding for Complex Feature Development*. OpenReview, January 2026. [https://openreview.net/forum?id=41xrZ3uGuI](https://openreview.net/forum?id=41xrZ3uGuI)

[^illusion]: Shojaee et al. (Apple, 2025). *The Illusion of Thinking: Understanding the Strengths and Limitations of Reasoning Models via the Lens of Problem Complexity*. arXiv:2506.06941. [https://arxiv.org/abs/2506.06941](https://arxiv.org/abs/2506.06941)

[^agentic-gap]: Khan et al. (2025). *A Comment on "The Illusion of Thinking": Reframing the Reasoning Cliff as an Agentic Gap*. arXiv:2506.18957. [https://arxiv.org/abs/2506.18957](https://arxiv.org/abs/2506.18957)

[^not-illusion]: *Thinking Isn't an Illusion: Overcoming the Limitations of Reasoning Models via Tool Augmentations*. arXiv:2507.17699. [https://arxiv.org/abs/2507.17699](https://arxiv.org/abs/2507.17699)

[^overthinking]: *The Danger of Overthinking: Reasoning-Action Dilemma in Agentic Tasks*. arXiv:2502.08235. [https://arxiv.org/abs/2502.08235](https://arxiv.org/abs/2502.08235)

[^thinking-patterns]: *A Study on Thinking Patterns of Large Reasoning Models in Code Generation*. arXiv:2509.13758. [https://arxiv.org/abs/2509.13758](https://arxiv.org/abs/2509.13758)

[^spec-tdd]: *Understanding Specification-Driven Code Generation with LLMs: An Empirical Study Design* (SANER'26 Registered Report). arXiv:2601.03878. [https://arxiv.org/abs/2601.03878](https://arxiv.org/abs/2601.03878)

[^tests-as-prompt]: *Tests as Prompt: A Test-Driven-Development Benchmark for LLM Code Generation*. arXiv:2505.09027. [https://arxiv.org/abs/2505.09027](https://arxiv.org/abs/2505.09027)

[^nl2repo]: *NL2Repo-Bench: Long-Horizon Repository Generation*. arXiv:2512.12730. [https://arxiv.org/abs/2512.12730](https://arxiv.org/abs/2512.12730)

[^swe-pro]: *SWE-Bench Pro: Can AI Agents Solve Long-Horizon Software Engineering Tasks?* arXiv:2509.16941. [https://arxiv.org/abs/2509.16941](https://arxiv.org/abs/2509.16941)

[^behavioral-drivers]: *Beyond Resolution Rates: Behavioral Drivers of Coding Agent Success and Failure*. arXiv:2604.02547. [https://arxiv.org/abs/2604.02547](https://arxiv.org/abs/2604.02547)

[^code-review-synergy]: *Human-AI Synergy in Agentic Code Review* (278,790 conversations, 300 projects). arXiv:2603.15911. [https://arxiv.org/abs/2603.15911](https://arxiv.org/abs/2603.15911)

[^security-prs]: *Security in the Age of AI Teammates: An Empirical Study of Agentic Pull Requests on GitHub* (33,000+ PRs). arXiv:2601.00477. [https://arxiv.org/abs/2601.00477](https://arxiv.org/abs/2601.00477)

[^agents-md]: *On the Impact of AGENTS.md Files on the Efficiency of AI Coding Agents* (JAWs 2026). arXiv:2601.20404. [https://arxiv.org/abs/2601.20404](https://arxiv.org/abs/2601.20404)

[^agents-md-eth]: *Evaluating AGENTS.md* (ETH Zurich). arXiv:2602.11988. [https://arxiv.org/abs/2602.11988](https://arxiv.org/abs/2602.11988)

[^sdd]: *Specification-Driven Development: From Code to Contract*. arXiv:2602.00180. [https://arxiv.org/abs/2602.00180](https://arxiv.org/abs/2602.00180)

[^token-cost]: *SkillReducer: Token Cost Analysis of Agent Skills*. arXiv:2603.29919. [https://arxiv.org/abs/2603.29919](https://arxiv.org/abs/2603.29919)

[^copilot-modes]: GitHub Blog. *Copilot ask, edit, and agent modes: What they do and when to use them*. [https://github.blog/ai-and-ml/github-copilot/copilot-ask-edit-and-agent-modes-what-they-do-and-when-to-use-them/](https://github.blog/ai-and-ml/github-copilot/copilot-ask-edit-and-agent-modes-what-they-do-and-when-to-use-them/)

[^vscode-agents]: VS Code Docs. *Custom agents in VS Code*. [https://code.visualstudio.com/docs/copilot/customization/custom-agents](https://code.visualstudio.com/docs/copilot/customization/custom-agents)

[^vscode-skills]: VS Code Docs. *Agent Skills (SKILL.md)*. [https://code.visualstudio.com/docs/copilot/customization/agent-skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills)

[^vscode-instructions]: VS Code Docs. *Custom instructions in VS Code*. [https://code.visualstudio.com/docs/copilot/customization/custom-instructions](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)

[^vscode-prompts]: VS Code Docs. *Prompt files (.prompt.md)*. [https://code.visualstudio.com/docs/copilot/customization/overview](https://code.visualstudio.com/docs/copilot/customization/overview)

[^copilot-hooks]: GitHub Docs. *About hooks*. [https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-coding-agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-coding-agent)

[^copilot-models]: GitHub Docs. *Supported AI models in GitHub Copilot*. [https://docs.github.com/en/copilot/reference/ai-models/supported-models](https://docs.github.com/en/copilot/reference/ai-models/supported-models)

[^opus-ga]: GitHub Changelog. *Claude Opus 4.6 is now generally available for GitHub Copilot*. [https://github.blog/changelog/2026-02-05-claude-opus-4-6-is-now-generally-available-for-github-copilot/](https://github.blog/changelog/2026-02-05-claude-opus-4-6-is-now-generally-available-for-github-copilot/)

[^sonnet-ga]: GitHub Changelog. *Claude Sonnet 4.6 is now generally available in GitHub Copilot*. [https://github.blog/changelog/2026-02-17-claude-sonnet-4-6-is-now-generally-available-in-github-copilot/](https://github.blog/changelog/2026-02-17-claude-sonnet-4-6-is-now-generally-available-in-github-copilot/)

[^vscode-march-2026]: GitHub Changelog. *GitHub Copilot in VS Code: March 2026 Releases*. [https://github.blog/changelog/2026-04-08-github-copilot-in-visual-studio-code-march-releases/](https://github.blog/changelog/2026-04-08-github-copilot-in-visual-studio-code-march-releases/)

[^metr-rct]: Becker et al. (2025). *Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity* (METR RCT). arXiv:2507.09089. [https://arxiv.org/abs/2507.09089](https://arxiv.org/abs/2507.09089)

[^triple-debt]: Storey, M.A. (2026). *From Technical Debt to Cognitive and Intent Debt: Rethinking Software Health in the Age of AI*. arXiv:2603.22106. [https://arxiv.org/abs/2603.22106](https://arxiv.org/abs/2603.22106)

[^debt-ai-boom]: Liu et al. (2026). *Debt Behind the AI Boom: A Large-Scale Empirical Study of AI-Generated Code in the Wild* (304,362 commits, 6,275 repositories). arXiv:2603.28592. [https://arxiv.org/abs/2603.28592](https://arxiv.org/abs/2603.28592)
