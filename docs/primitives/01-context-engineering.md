---
title: "Primitive 01: Context Engineering"
description: "Building structured context artifacts that guide AI agents consistently across the SDLC"
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-14"
version: "1.0.0"
status: "approved"
locale: "en"
tags: ["primitive", "ai-native-sdlc", "context-engineering"]
---

# Primitive 01: Context Engineering
*AI-Native SDLC Framework · Paula Silva · Microsoft GBB Americas*
*Research foundation: 2602.20478, 2601.20404, 2604.07502, 2603.29919, 2602.12430*

---

## WHAT: What is Context Engineering

Context Engineering is the **deliberate and structured construction of context artifacts** that guide AI agents consistently, efficiently, and safely. It is the discipline of deciding *what the agent should know*, *when it should know it*, and *how that knowledge is represented*.

Unlike "giving a prompt", context engineering creates a **persistent knowledge infrastructure** — versioned files in the repository that survive across sessions, across developers, and across sprints.

### The three context tiers (Vasilopoulos 2026 — 2602.20478)

```
┌─────────────────────────────────────────────────────────┐
│  TIER 1: HOT-MEMORY (~660 lines, always loaded)         │
│  copilot-instructions.md / CLAUDE.md                    │
│  • Model routing rules                                  │
│  • Quality standards                                    │
│  • Security constraints core                           │
│  • Agent behavior protocols                             │
│  • Skill trigger tables                                 │
└─────────────────────────────────────────────────────────┘
           ↓ agent consults when needed ↓
┌─────────────────────────────────────────────────────────┐
│  TIER 2: WARM-MEMORY (domain-specialist agents/skills)  │
│  .github/instructions/*.instructions.md                 │
│  .github/prompts/*.prompt.md                            │
│  • Domain-specific conventions                          │
│  • Feature-area instructions (applyTo scoping)          │
│  • Reusable slash commands                              │
└─────────────────────────────────────────────────────────┘
           ↓ agent loads on-demand ↓
┌─────────────────────────────────────────────────────────┐
│  TIER 3: COLD-MEMORY (spec docs, on-demand)             │
│  docs/CONSTITUTION.md                                   │
│  docs/SPECIFICATION.md                                  │
│  docs/IMPLEMENTATION_PLAN.md                            │
│  src/CODEMAP.md                                         │
│  • Full security constraints                            │
│  • Feature specifications                               │
│  • Architecture decisions                               │
└─────────────────────────────────────────────────────────┘
```

### Context artifacts — complete inventory

| File | Tier | Loaded | Owner | Tool |
|------|------|--------|-------|------|
| `.github/copilot-instructions.md` | 1 | Always | Tech Lead | GitHub Copilot |
| `CLAUDE.md` | 1 | Always | Tech Lead | Claude Code |
| `AGENTS.md` | 1 | Always | Tech Lead | All agents |
| `.github/instructions/*.instructions.md` | 2 | By glob (applyTo) | Senior Dev | GitHub Copilot |
| `.github/prompts/*.prompt.md` | 2 | On-demand (slash) | Senior Dev | GitHub Copilot |
| `.claude/commands/*.md` | 2 | On-demand (slash) | Senior Dev | Claude Code |
| `docs/CONSTITUTION.md` | 3 | On-demand | Architect | Any agent |
| `docs/SPECIFICATION.md` | 3 | On-demand | Product/Dev | Any agent |
| `docs/IMPLEMENTATION_PLAN.md` | 3 | On-demand | Tech Lead | Any agent |
| `src/CODEMAP.md` | 3 | On-demand | IDE/Dev | Any agent |

---

## WHY: Why it is critical

### Scientific evidence

**Operational cost reduction:**
- AGENTS.md human-curated → **-28.64% runtime**, **-16.58% output tokens** (2601.20404, Singapore/Heidelberg/Bamberg/London, 10 repos, 124 PRs)
- applyTo scoping in .instructions.md → **-68% instruction tokens** (Paula's Model Routing Guide)
- LLM-generated files reduce success by -3%; human-curated = +4% (2602.20478 citing ETH Zurich)

**Debt prevention:**
- Without context engineering: cognitive debt (erosion of team understanding) + intent debt (lack of rationale for AI) accumulate (2603.22106, Storey UVic)
- AI reduces technical debt but **accelerates** cognitive + intent debt without structured context
- 108K-line C# system with 3-tier context: 2,801 prompts, 1,197 successful agent invocations without context collapse (2602.20478)

**Code quality:**
- Without governance/context: agents cause **+18% static warnings**, **+39% cognitive complexity** (2601.13597, CMU)
- With rich context: agent consistently uses the understand→reproduce→fix→verify pattern (2604.02547)

**Semantic density:**
- Aggressive context compression: **-17% input tokens** → **+67% total session cost** (2604.07502)
- **Rich natural language = cheaper** than abbreviations (counter-intuitive finding)
- Ceremony-to-logic ratio Java Spring Boot = 8:1 (wasteful); Go = 2:1 (efficient)

---

## HOW: How to implement

### Step 0 — Define the project (5 min)
Before creating any file, answer:
1. What is the stack? (Node/Python/Java/.NET/Go)
2. What is the domain? (fintech/healthtech/e-commerce/platform)
3. What is the maturity level? (greenfield/brownfield/legacy)
4. What are the available models? (Opus/Sonnet/Haiku)

### Step 1 — Create Tier 1: Hot-Memory (30 min)

**File: `.github/copilot-instructions.md`**

This is the most important file. Required minimum structure (~660 lines):

```markdown
# [PROJECT NAME] — GitHub Copilot Instructions
# Version: 1.0.0 | Last updated: YYYY-MM-DD
# Tier 1 Hot-Memory: Always loaded by agent

## 1. PROJECT CONTEXT
[Stack, domain, primary goal — 10 lines max]

## 2. MODEL ROUTING
[Decision table: task → model → extended thinking — see Primitive 02]

## 3. QUALITY STANDARDS
[Coverage thresholds, linting rules, security requirements]

## 4. CODING CONVENTIONS
[Naming, file organization, commit format — semantic density principles]

## 5. SPEC-DRIVEN WORKFLOW
[Order: Constitution → Spec → Plan → Implement → Test → Review]

## 6. AGENT BEHAVIOR PROTOCOLS
[understand→reproduce→fix→verify, context gathering, ambiguity handling]

## 7. SKILL ROUTING TRIGGERS
[Trigger table: keywords → skill to invoke]

## 8. MULTI-AGENT COORDINATION
[Planner-coder interface, subagent protocols, output formats]

## 9. TECHNICAL DEBT GOVERNANCE
[Acceptable debt criteria, flagging process, payoff criteria]

## 10. HUMAN ESCALATION TRIGGERS
[Security decisions, arch decisions, coverage drops, perf degradation]
```

> ⚠️ **CRITICAL**: Write in rich natural language. DO NOT use abbreviations.
> "VerifyOrderByAvailableAmount" is better than "verifyOrdByAvAmt" for agents.
> Every abbreviation the agent needs to decode costs reasoning tokens (2604.07502).

**File: `AGENTS.md`** (root)

```markdown
# AGENTS.md
# IMPORTANT: This file MUST be written by humans, not generated by AI
# Research shows LLM-generated AGENTS.md reduces success rates (2601.20404)

## Agent Task Boundaries
[What agents CAN do autonomously]
[What agents MUST ask human before doing]
[What agents MUST NOT do]

## Tool Use Permissions
[Which tools/MCPs are available]
[Rate limits and safety constraints]

## Escalation Criteria
[When to stop and ask human]
[How to format escalation request]

## Output Format Expectations
[PR format, commit format, documentation format]
```

### Step 2 — Create Tier 2: Warm-Memory (1h)

**File: `.github/instructions/typescript.instructions.md`**

```markdown
---
applyTo: "**/*.ts,**/*.tsx"
---
# TypeScript Conventions
[TypeScript-specific rules, only loaded when editing .ts files]
[applyTo scoping = -68% tokens vs global instructions]
```

**Structure of .instructions.md files:**
```
.github/instructions/
  backend.instructions.md      (applyTo: "src/api/**,src/services/**")
  frontend.instructions.md     (applyTo: "src/components/**,src/pages/**")
  tests.instructions.md        (applyTo: "**/*.test.*,**/*.spec.*")
  security.instructions.md     (applyTo: "src/auth/**,src/crypto/**")
  infra.instructions.md        (applyTo: "infrastructure/**,*.tf,*.yaml")
```

**File: `.github/prompts/[name].prompt.md`**

```markdown
---
mode: agent
description: [2 sentences max: what it does + when to use]
---
# [Slash Command Name]

## Context
You are helping with [specific task].

## Steps
1. [Actionable step 1]
2. [Actionable step 2]
3. [Actionable step 3]

## Output Format
[Expected format of the result]
```

### Step 3 — Create Tier 3: Cold-Memory (2h)

**See Primitive 03 (SDD) for complete templates of:**
- `docs/CONSTITUTION.md`
- `docs/SPECIFICATION.md`
- `docs/IMPLEMENTATION_PLAN.md`

**File: `src/CODEMAP.md`** (Program Skeleton — 2604.07502)

```markdown
# CODEMAP.md — Program Skeleton
# Purpose: Agent navigation map. NOT documentation.
# Update: whenever module topology changes.
# DO NOT include: implementation bodies, imports, boilerplate.

## Module Topology
[ASCII diagram or mermaid of main modules and their relationships]

## Entry Points
| Entry Point | File | Purpose |
|-------------|------|---------|
| main() | src/index.ts | Application bootstrap |
| handleRequest() | src/api/handler.ts | HTTP request entry |

## Key Call Chains
[Feature A]: route.ts → controller.ts → service.ts → repository.ts → db
[Feature B]: queue.ts → worker.ts → processor.ts → notification.ts

## Function Signatures
```typescript
// src/services/user.service.ts
createUser(data: CreateUserDto): Promise<User>
findById(id: string): Promise<User | null>
updateProfile(id: string, data: Partial<User>): Promise<User>
```

## Data Flow Summary
[How data moves through the system — 1 paragraph]

## File Locations
[Key files and what they contain — 20 lines max]
```

### Step 4 — Validate with checklist

```
□ copilot-instructions.md created (~660 lines, rich natural language)
□ AGENTS.md written by human (not AI-generated)
□ .instructions.md files with correct applyTo scoping
□ .prompt.md slash commands with description ≤ 2 sentences
□ CODEMAP.md present and up to date
□ CONSTITUTION.md present (see Primitive 03)
□ No context file contains abbreviations
□ No context file was automatically generated without human review
```

---

## WHO: Who creates each artifact

| Artifact | Creator | Reviewer | Update frequency |
|----------|---------|----------|------------------|
| `copilot-instructions.md` | Tech Lead | Architect | Per sprint or stack change |
| `AGENTS.md` | Tech Lead | Entire team | Per sprint |
| `.instructions.md` | Senior Dev | Tech Lead | Per convention change |
| `.prompt.md` | Any dev | Senior Dev | When a pattern repeats ≥3x |
| `CODEMAP.md` | Dev + IDE | Tech Lead | Per topology change |
| `CONSTITUTION.md` | Security Architect | Tech Lead | Per release or new security requirement |
| `SPECIFICATION.md` | Product Owner + Dev | Everyone | Per feature |
| `IMPLEMENTATION_PLAN.md` | Tech Lead | Dev | Per sprint |

---

## WHEN: At which SDLC phase

```
NEW PROJECT (Greenfield):
Day 0:    CONSTITUTION.md → AGENTS.md → copilot-instructions.md
Day 1:    SPECIFICATION.md → IMPLEMENTATION_PLAN.md
Day 2+:   .instructions.md per domain as code grows
Ongoing:  CODEMAP.md updated on every topology change

EXISTING PROJECT (Brownfield):
Sprint 1: AGENTS.md + copilot-instructions.md (quick wins)
Sprint 2: CODEMAP.md for existing code
Sprint 3: Retroactive SPECIFICATION.md (spec-anchored)
Sprint 4: CONSTITUTION.md + quality gates
Ongoing:  .prompt.md for repeating patterns
```

---

## WHICH MODEL: Which model to use

| Context Engineering Task | Model | Extended Thinking | Reason |
|--------------------------|-------|-------------------|--------|
| Create `CONSTITUTION.md` | Opus 4.6 | ✅ Yes | Ambiguous security decisions, no feedback loop |
| Create `SPECIFICATION.md` | Opus 4.6 | ❌ No | Structured, iterative |
| Create `IMPLEMENTATION_PLAN.md` | Sonnet 4.6 | ❌ No | Task decomposition, iterative |
| Create/update `CODEMAP.md` | Haiku 4.5 | ❌ No | Summarization of existing code |
| Create `.instructions.md` | Sonnet 4.6 | ❌ No | Iterative convention refinement |
| Create `.prompt.md` slash commands | Sonnet 4.6 | ❌ No | Clear pattern, structured |
| Review/audit context files | Sonnet 4.6 | ❌ No | Structured analysis |
| Create `AGENTS.md` | **HUMAN** | N/A | Research shows: LLM-generated = -3% success rate |

> 📌 **Golden rule**: `AGENTS.md` MUST be written by humans.
> LLM-generated files have >20% token overhead and reduce quality.
> Source: Augment Code study cited in 2602.20478, ETH Zurich.

---

## ANTI-PATTERNS: What to avoid

❌ **Excessive compression**: Abbreviations save 17% of input tokens but increase total cost by 67% (reasoning tax — 2604.07502)

❌ **Single mega-file**: Putting everything in a 5000-line copilot-instructions.md. Use applyTo to distribute.

❌ **Stale context**: Creating CODEMAP.md and never updating it. Outdated context = hallucinations.

❌ **Copying LLM-generated content into AGENTS.md**: Research shows that AI-generated instructions are not effective. Write in your own words.

❌ **Background in skill body**: Place background in references, not inline. 60%+ of public skills are non-actionable (2603.29919).

❌ **No applyTo**: Global instructions are loaded in every context. Use applyTo to reduce 68% of tokens.

---

*Primitive 01 · Context Engineering · v1.0.0 · April 2026*
*Papers: 2602.20478 · 2601.20404 · 2604.07502 · 2603.29919 · 2602.12430*
