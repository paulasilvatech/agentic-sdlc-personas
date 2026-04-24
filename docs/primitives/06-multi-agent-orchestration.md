---
title: "Primitive 06: Multi-Agent Orchestration"
description: "Coordinating multiple specialized agents with optimal topologies for complex tasks"
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-14"
version: "1.0.0"
status: "approved"
locale: "en"
tags: ["primitive", "ai-native-sdlc", "orchestration"]
---

# Primitive 06: Multi-Agent Orchestration
*AI-Native SDLC Framework · Paula Silva · Microsoft GBB Americas*
*Research foundation: 2602.16873, 2601.12538, 2504.11805, 2603.05344, 2601.14470*

---

## WHAT: What is Multi-Agent Orchestration

Multi-Agent Orchestration is the strategy of **coordinating multiple specialized agents** to perform tasks that no single agent would accomplish with maximum efficiency. Each agent has a role, an optimized model, and a clear interface with the others.

### The 4 Topologies (AdaptOrch — 2602.16873)

```
PARALLEL: Independent agents execute simultaneously
┌─────────────────────────────────────────┐
│  Orchestrator                           │
│  ├─ Agent A (file 1 analysis)           │
│  ├─ Agent B (file 2 analysis)           │
│  └─ Agent C (file 3 analysis)           │
│  → Merge results                        │
└─────────────────────────────────────────┘
When to use: independent tasks, multi-file analysis, test generation

SEQUENTIAL: Agents in a chain, one's output is the next's input
┌─────────────────────────────────────────┐
│  Spec Agent → Code Agent → Test Agent → Review Agent
└─────────────────────────────────────────┘
When to use: pipeline with clear dependencies (spec→impl→test→review)

HIERARCHICAL: Orchestrator delegates to specialized agents
┌─────────────────────────────────────────┐
│  Orchestrator (Opus)                    │
│  ├─ Spec Agent (Opus)                   │
│  ├─ Code Agent (Sonnet) ← specialist    │
│  ├─ Test Agent (Sonnet) ← specialist    │
│  └─ Review Agent (Sonnet/Haiku)         │
└─────────────────────────────────────────┘
When to use: complex greenfield projects, multiple domains

HYBRID: Hierarchical with internal parallelism
┌─────────────────────────────────────────┐
│  Orchestrator (Opus)                    │
│  ├─ [Sequential] Spec → Constitution    │
│  ├─ [Parallel] Code + Test (simultaneous)│
│  └─ [Sequential] Review → Deploy        │
└─────────────────────────────────────────┘
When to use: complete enterprise-grade feature development
```

---

## WHY: Why orchestrate

### Scientific evidence

**Topology > model selection:**
- With models converging in performance, **orchestration topology dominates** as the result driver (AdaptOrch 2602.16873, Korea National Open Univ)
- **12-23% improvement** over static baselines using topology routing
- Performance Convergence Scaling Law: as models improve, choosing the right topology is worth more than choosing the model

**Planner-Coder Gap:**
- **75.3% of failures in MAS** come from the planner → coder interface (2504.11805)
- Ambiguous spec from planner → incorrect code from coder → cascading failure
- Separating planner (Opus) from coder (Sonnet) with an explicit spec interface resolves 75% of failures

**Token economy per phase:**
- Code Review = **59.42% of all tokens** (2601.14470)
- Input tokens = **53.9%** of total
- → Dedicated review agent with Haiku for triage + Sonnet for deep analysis reduces cost 40-60%

**Communication tax:**
- Inter-agent coordination has a "communication tax" (2601.14470)
- Minimize: clear interfaces, structured outputs, no unnecessary re-reads

**3 layers of agentic reasoning (2601.12538):**
- Foundational: planning, tool use, search → basic hooks and prompts
- Self-evolving: feedback, memory, adaptation → skills with memory
- Collective: role assigning, collaboration, co-evolving → multi-agent orchestration

---

## HOW: Implementation by SDLC phase

### Topology for each phase

| SDLC Phase | Topology | Agents | Models |
|-----------|-----------|---------|---------|
| Requirements | Sequential | Req Analyst → Spec Validator | Opus → Sonnet |
| Architecture | Sequential | Architect → Security Reviewer | Opus+ET → Opus |
| Implementation | Hierarchical | Orchestrator → Coder + Test Writer | Opus → Sonnet + Sonnet |
| Code Review | Parallel + Sequential | Style + Security + Logic parallel → Human escalation | Haiku + Opus + Sonnet |
| Deploy | Sequential | Build → Test → Deploy → Monitor | Sonnet → Sonnet → Sonnet → Haiku |

---

### Template: Orchestration for Complete Feature Development

**`.github/prompts/orchestrate-feature.prompt.md`:**

```markdown
---
mode: agent
model: claude-opus-4-6
description: Orchestrates full feature development from spec to review. Use for new features requiring multiple files. Do NOT use for single-function changes.
---

# Orchestrate Feature Development

## Your Role
You are the Orchestrator. You plan and delegate; you do NOT write implementation code directly.
Your output is a coordinated sequence of delegated tasks with clear interfaces.

## Steps

### Phase 1: Understand (Orchestrator — Opus)
1. Read SPECIFICATION.md — find the relevant feature section
2. Read CONSTITUTION.md — identify applicable security constraints
3. Read CODEMAP.md — understand current topology
4. Produce: Feature Brief (scope, files affected, security constraints, acceptance criteria)

### Phase 2: Spec Validation (Sequential)
5. Delegate to Spec Validator Agent:
   Input: Feature Brief + SPECIFICATION.md section
   Task: "Verify spec is complete, unambiguous, testable. Output: PASS or list of gaps."
   If gaps: Update SPECIFICATION.md before proceeding.

### Phase 3: Implementation (Hierarchical — Parallel where possible)
6. Delegate to Code Agent (Sonnet 4.6):
   Input: Feature Brief + relevant SPECIFICATION.md sections + CONSTITUTION.md constraints
   Task: "Implement [feature] following spec. No extended thinking. TDD: write failing test first."
   Interface: "Output: changed files list + test results"

7. [PARALLEL with step 6] Delegate to Test Agent (Sonnet 4.6):
   Input: Feature Brief + acceptance criteria
   Task: "Write integration and E2E tests for acceptance criteria. Mock external dependencies."
   Interface: "Output: test files + coverage report"

### Phase 4: Review (Parallel → Sequential)
8. [PARALLEL] Delegate to Style Review Agent (Haiku 4.5):
   Task: "Check lint, formatting, naming conventions per .instructions.md"
   Interface: "Output: PASS or list of style violations"

9. [PARALLEL] Delegate to Security Review Agent (Opus 4.6 + ET):
   Input: Changed files + CONSTITUTION.md
   Task: "Verify all CONSTITUTION.md constraints are satisfied. Check OWASP Top 10 LLM."
   Interface: "Output: PASS or list of violations with severity"

10. [Sequential — after 8+9] Synthesize review results:
    - If all PASS: prepare PR
    - If violations: delegate fixes back to Code Agent with specific list

### Phase 5: PR Creation
11. Create PR with:
    - Summary: what changed and why
    - Spec reference: which SPECIFICATION.md section
    - Constitution compliance: confirmed
    - Test coverage: reported
    - AI disclosure: which agents were used
```

---

### Dual-Agent Pattern: Planner-Coder Split

The most critical pattern to prevent the 75.3% failure rate from planner-coder gap:

```markdown
## PLANNER AGENT (Opus 4.6 + Extended Thinking)
Role: Creates unambiguous spec for the coder.
Input: User request + SPECIFICATION.md + CONSTITUTION.md
Output: Structured task specification with:
  - Exact function signatures to implement
  - Exact test cases to pass
  - Exact files to modify
  - Exact constraints to respect
  - Clear success criteria

## CODER AGENT (Sonnet 4.6, no extended thinking)
Role: Implements EXACTLY what planner specified.
Input: Planner's structured task specification
Output: Code changes + passing tests
Constraint: Does NOT make architectural decisions
Constraint: Does NOT deviate from planner spec without asking

## INTERFACE BETWEEN PLANNER AND CODER
The spec passed from Planner to Coder MUST include:
1. Function signature (exact parameter types and names)
2. Expected behavior (Given/When/Then)
3. Security constraints (relevant CONSTITUTION.md items)
4. Files to touch (explicit list)
5. Files NOT to touch (explicit list)
```

---

### Configuration in AGENTS.md

```markdown
## MULTI-AGENT COORDINATION PROTOCOL

### Agent Roles
- ORCHESTRATOR: Plans, delegates, synthesizes. Uses Opus 4.6. Does NOT write implementation code.
- SPEC_AGENT: Creates/validates specifications. Uses Opus 4.6.
- CODE_AGENT: Implements code per spec. Uses Sonnet 4.6. No extended thinking.
- TEST_AGENT: Writes tests per acceptance criteria. Uses Sonnet 4.6.
- REVIEW_AGENT_STYLE: Checks style/lint. Uses Haiku 4.5.
- REVIEW_AGENT_SECURITY: Checks CONSTITUTION.md compliance. Uses Opus 4.6 + ET.

### Communication Rules
1. Every delegation MUST include: task scope + inputs + expected output format
2. Agents MUST NOT expand scope beyond delegation
3. Output MUST match expected format — do not add unrequested changes
4. If scope expansion needed: escalate to Orchestrator, do not act unilaterally

### Escalation to Human
Any agent escalates to human when:
- Security decision not covered by CONSTITUTION.md
- Architecture decision affecting >3 modules
- Test failure that cannot be resolved within 3 iterations
- Conflicting instructions between agents
```

---

### 5 Workload Types → Model Mapping (OpenDev — 2603.05344)

| Workload Type | Description | Model | Pattern |
|--------------|-------------|-------|---------|
| **Thinking** | Complex reasoning, planning, ambiguous decisions | Opus 4.6 | Orchestrator, Planner, Security Reviewer |
| **Execution** | Tool use, file edits, commands | Sonnet 4.6 | Code Agent, Test Agent |
| **Compaction** | Context compression, summarization | Haiku 4.5 | Style Reviewer, Log Analyzer |
| **Subagent** | Delegated specialized tasks | Varies | Depends on delegated task complexity |
| **Vision** | Image/diagram analysis | Sonnet 4.6 | Architecture diagram review |

---

### Reducing Communication Tax (2601.14470)

The 59.42% of tokens spent on inter-agent code review can be reduced:

```markdown
## COMMUNICATION EFFICIENCY RULES

1. STRUCTURED OUTPUTS: Every agent produces structured output (JSON/table/checklist)
   - Bad: "The code looks mostly fine but there are some issues..."
   - Good: "| Check | Status | Details |\n|-------|--------|---------|..."

2. NO RE-READS: Pass relevant content between agents, don't make each agent re-read full codebase
   - Orchestrator reads files ONCE and extracts relevant sections for each agent

3. MINIMAL INTERFACES: Agents exchange only what's needed for next step
   - Code Agent doesn't need security review output
   - Test Agent doesn't need style review output

4. PARALLEL WHERE INDEPENDENT: Style + Security reviews have no dependency → always parallel

5. EARLY TERMINATION: If Planner produces spec violations in validation, stop before coding
   - Prevents expensive rework downstream
```

---

## WHO: Responsibilities

| Role | Responsibility |
|-------|-----------------|
| Architect | Defines orchestration topology per feature type |
| Tech Lead | Implements orchestration prompts in `.github/prompts/` |
| Senior Dev | Applies correct topology for each task |
| Entire team | Respects interfaces between agents (do not expand scope) |

---

## WHEN: Cadence

```
DAY 0:           Define roles in AGENTS.md + default topology in copilot-instructions.md
NEW FEATURE:     Use Hybrid topology for complex features (>3 files)
SIMPLE FIX:      Sequential (understand → fix → verify) without separate orchestrator
SECURITY WORK:   Always Planner-Coder Split with independent Security Reviewer
QUARTERLY:       Evaluate if current topology is still optimal (models evolve)
```

---

## WHICH MODEL: Meta-routing

| Orchestration Task | Model | Notes |
|----------------------|--------|-------|
| Define topology for new project | Opus 4.6 + ET | Architectural decision |
| Write orchestration prompts | Sonnet 4.6 | Structured |
| Execute as Orchestrator | Opus 4.6 | Requires deep reasoning |
| Execute as Code Agent | Sonnet 4.6 | Iterative implementation |
| Execute as Style Reviewer | Haiku 4.5 | Simple task |
| Execute as Security Reviewer | Opus 4.6 + ET | Security decision |

---

## QUICK REFERENCE: Topology Selection

```
Does the feature have > 3 independent files to analyze?
├─ Yes → Parallel (simultaneous analysis)
└─ No ↓

Does the feature follow a clear pipeline (A→B→C)?
├─ Yes → Sequential
└─ No ↓

Does the feature need multiple specialists (code + test + security)?
├─ Yes → Hierarchical (with Orchestrator)
└─ No ↓

Is the feature complex AND requires sequential phases with internal parallelism?
└─ Hybrid (e.g.: spec → [code parallel test] → review)
```

---

*Primitive 06 · Multi-Agent Orchestration · v1.0.0 · April 2026*
*Papers: 2602.16873 · 2601.12538 · 2504.11805 · 2603.05344 · 2601.14470*
