---
title: "Primitive 02: Model Routing"
description: "Systematic strategy for assigning the right model to the right task by SDLC phase"
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-14"
version: "1.0.0"
status: "approved"
locale: "en"
tags: ["primitive", "ai-native-sdlc", "model-routing"]
---

# Primitive 02: Model Routing
*AI-Native SDLC Framework · Paula Silva · Microsoft GBB Americas*
*Research foundation: 2505.01622, 2603.05344, 2601.14470, 2602.16873, 2604.02547*

---

## WHAT: What is Model Routing

Model Routing is the **systematic strategy of assigning the correct model** (Opus/Sonnet/Haiku) **to the correct type of task** in the SDLC cycle, with the correct extended thinking configuration, to maximize quality and minimize cost.

With models converging in performance, **topology and routing choice dominates model choice** as a success driver (AdaptOrch, 2602.16873). Wrong routing = 3x+ cost with no quality gain — or 30% worse quality with the wrong model.

### The three models and their profiles

| Model | Relative Cost | Context | Best for |
|-------|--------------|---------|----------|
| **Claude Opus 4.6** | 3x (Sonnet baseline) | Up to 200K tokens | Spec, architecture, security, ambiguous decisions |
| **Claude Sonnet 4.6** | 1x (baseline) | Up to 200K tokens | Implementation, TDD, code review, structured analysis |
| **Claude Haiku 4.5** | 0.33x | Up to 200K tokens | Summarization, ask/chat, boilerplate, simple tasks |

### Extended Thinking — when to use and when NOT to use

| Context | Extended Thinking | Expected result |
|---------|-------------------|-----------------|
| Open spec/architecture (ambiguous, no feedback loop) | ✅ **YES** | Better edge case coverage, deeper reasoning |
| Security analysis (threat scenarios) | ✅ **YES** | Identification of non-obvious vectors |
| Iterative TDD implementation | ❌ **NO** | **-30% quality**, **+43% cost** (2505.01622) |
| Structured code review | ❌ **NO** | Overhead with no benefit |
| Test generation | ❌ **NO** | Iterative, clear pattern |
| Documentation | ❌ **NO** | Overhead with no benefit |
| Summarization/Ask | ❌ **NO** | Too simple |

> ⚠️ **CRITICAL RULE**: Extended thinking harms iterative tasks with feedback loops.
> Use **only** for open-ended tasks where there is no clear right/wrong answer
> and where the agent cannot test its solution immediately.

---

## WHY: Why it matters

### Scientific evidence

**Extended thinking:**
- Iterative implementation with extended thinking: **-30% quality degradation**, **+43% cost increase** (2505.01622, controlled benchmark)
- Spec/architecture with extended thinking: **positive benefit** for open-ended and ambiguous tasks

**Token economy by SDLC phase:**
- Code Review = **59.42% of all tokens** in LLM-MA systems (2601.14470, Concordia, 30 traces)
- Input tokens = **53.9%** of total (refinement > generation)
- → Use Haiku for first-level review, Sonnet for deep analysis

**LLM vs Framework:**
- **LLM capability > framework design** as a success driver (2604.02547, NC State, 9,374 trajectories)
- As models improve, differences between frameworks diminish
- → Investing in the right model is more impactful than optimizing the framework

**Orchestration topology:**
- With models converging in performance, **topology dominates model selection** (2602.16873)
- 4 topologies: parallel/sequential/hierarchical/hybrid → **12-23% improvement** over static

**5 Workload Types (OpenDev — 2603.05344):**
- Each type has an ideal binding to a model
- Mapping workloads → models = 40-60% cost savings in real projects

---

## HOW: Complete Decision Table

### By SDLC phase

| SDLC Phase | Specific task | Model | Extended Thinking | Topology |
|------------|--------------|-------|-------------------|----------|
| **Requirements** | Write functional requirements | Sonnet 4.6 | ❌ | Sequential |
| **Requirements** | Create CONSTITUTION.md | Opus 4.6 | ✅ | Sequential |
| **Requirements** | Review/validate spec | Sonnet 4.6 | ❌ | Sequential |
| **Architecture** | System design | Opus 4.6 | ✅ | Sequential |
| **Architecture** | ADR (Architecture Decision Record) | Opus 4.6 | ✅ | Sequential |
| **Architecture** | Create CODEMAP.md | Haiku 4.5 | ❌ | Sequential |
| **Implementation** | New code generation | Sonnet 4.6 | ❌ | Hierarchical |
| **Implementation** | Refactoring | Sonnet 4.6 | ❌ | Sequential |
| **Implementation** | IaC (Terraform/Bicep) | Sonnet 4.6 | ❌ | Sequential + verifier loop |
| **Testing** | Unit test generation | Sonnet 4.6 | ❌ | Parallel |
| **Testing** | Coverage analysis | Haiku 4.5 | ❌ | Sequential |
| **Testing** | Test characterization (legacy) | Sonnet 4.6 | ❌ | Sequential |
| **Code Review** | First pass (style/lint) | Haiku 4.5 | ❌ | Parallel |
| **Code Review** | Security review | Opus 4.6 | ✅ | Sequential |
| **Code Review** | Logic/correctness review | Sonnet 4.6 | ❌ | Sequential |
| **Documentation** | Docstrings/comments | Haiku 4.5 | ❌ | Parallel |
| **Documentation** | Technical docs/README | Sonnet 4.6 | ❌ | Sequential |
| **Operations** | Log summarization | Haiku 4.5 | ❌ | Parallel |
| **Operations** | Incident analysis | Sonnet 4.6 | ❌ | Sequential |
| **Operations** | Complex root cause analysis | Opus 4.6 | ✅ | Sequential |

### By workload type (OpenDev framework — 2603.05344)

| Workload Type | Description | Ideal model | Notes |
|--------------|-------------|-------------|-------|
| **Execution** | Tool use, commands | Sonnet 4.6 | Needs reliable tool use |
| **Thinking** | Complex reasoning, planning | Opus 4.6 | +ET for open-ended tasks |
| **Compaction** | Context compression, summarization | Haiku 4.5 | Minimal cost, simple task |
| **Subagent** | Delegation to specialized agents | Haiku→Sonnet | Depends on the delegated task |
| **Vision** | Image analysis, diagrams | Sonnet 4.6 | Multimodal capability |

### Escalation rules

```
ESCALATION (upgrade):
Haiku → Sonnet: if task involves complex conditional logic or depends on context > 5 files
Haiku → Sonnet: if Haiku failed on the same task 2 times
Sonnet → Opus:  if task involves a security or architecture decision
Sonnet → Opus:  if result needs to be defended to stakeholders
Sonnet → Opus:  if task has no clear correct answer (ambiguous/exploratory)

DEGRADATION (downgrade for cost):
Opus → Sonnet:  for tasks with feedback loop (iterative, testable)
Opus → Sonnet:  for structured tasks with clear spec
Sonnet → Haiku: for summarization or single-turn informational tasks
```

---

## Configuration in copilot-instructions.md

Add this section in Tier 1 (hot-memory):

```markdown
## 2. MODEL ROUTING RULES

### Decision Table
| Task Type | Model | Extended Thinking | Trigger Keywords |
|-----------|-------|-------------------|-----------------|
| spec, architecture, constitution | claude-opus-4-6 | enabled | "design", "architect", "spec", "constitution" |
| security analysis | claude-opus-4-6 | enabled | "security", "vulnerability", "threat", "CVE" |
| implementation, TDD, refactor | claude-sonnet-4-6 | disabled | "implement", "fix", "refactor", "add feature" |
| code review (logic) | claude-sonnet-4-6 | disabled | "review", "check", "validate code" |
| tests generation | claude-sonnet-4-6 | disabled | "test", "unit test", "spec test" |
| docs, comments, summaries | claude-haiku-4-5 | disabled | "document", "summarize", "explain", "comment" |
| first-pass review, lint | claude-haiku-4-5 | disabled | "lint", "style", "format" |

### Cost Controls
- Never use extended thinking for iterative tasks with test feedback
- Default to Sonnet for ambiguous requests
- Escalate to Opus when: security decision | architecture decision | no clear right answer
- Degrade to Haiku when: summarization | single-turn informational | boilerplate

### Topology Selection
- New feature (multi-file): hierarchical (orchestrator → specialized agents)
- Independent analysis (multiple files): parallel
- Sequential pipeline (spec→impl→test→review): sequential
- Complex system: hybrid (sequential high-level, parallel within phases)
```

---

## WHO: Responsibilities

| Responsibility | Who |
|---------------|-----|
| Define routing rules in copilot-instructions.md | Tech Lead |
| Update routing when new model is available | Tech Lead |
| Apply routing in daily tasks | All devs |
| Audit cost and adjust downward when possible | Tech Lead + Platform |
| Create skill routing triggers in Tier 1 | Senior Dev |

---

## WHEN: Cadence

```
DAY 0 (setup):     Define routing table in copilot-instructions.md
SPRINT REVIEW:     Audit cost by phase — are we using Opus where we should use Haiku?
NEW MODEL:         Re-test benchmarks and update table (models evolve rapidly)
NEW DOMAIN:        Add domain-specific rules (e.g.: fintech → extra security on Opus)
```

---

## WHICH MODEL: For creating the routing

| Task | Model | Notes |
|------|-------|-------|
| Define initial routing table | Opus 4.6 + ET | Strategic decision, long-term cost impact |
| Update routing table | Sonnet 4.6 | Incremental, structured |
| Audit costs and adjust | Haiku 4.5 | Data analysis, number comparison |

---

## QUICK REFERENCE: Decision Flowchart

```
Is it a SECURITY or ARCHITECTURE decision?
├─ Yes → Opus 4.6 + Extended Thinking
└─ No ↓

Is it ITERATIVE with a feedback loop (TDD, implementation)?
├─ Yes → Sonnet 4.6 (no ET — ET harms iteration)
└─ No ↓

Is it OPEN-ENDED and AMBIGUOUS (no clear right answer)?
├─ Yes → Opus 4.6 + Extended Thinking
└─ No ↓

Is it SIMPLE (summarization, docs, single-turn)?
├─ Yes → Haiku 4.5
└─ No → Sonnet 4.6 (safe default)
```

---

*Primitive 02 · Model Routing · v1.0.0 · April 2026*
*Papers: 2505.01622 · 2603.05344 · 2601.14470 · 2602.16873 · 2604.02547*
