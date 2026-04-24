---
title: "Primitive 03: Spec-Driven Development"
description: "Treating specifications as the primary development artifact from which code derives"
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-14"
version: "1.0.0"
status: "approved"
locale: "en"
tags: ["primitive", "ai-native-sdlc", "sdd"]
---

# Primitive 03: Spec-Driven Development (SDD)
*AI-Native SDLC Framework · Paula Silva · Microsoft GBB Americas*
*Research foundation: 2602.00180, 2602.02584, 2603.22106, 2504.11805, 2601.03878*

---

## WHAT: What is SDD

Spec-Driven Development is the practice of **treating the specification as the primary artifact** of development - code derives from the spec, not the other way around. In the context of AI-native SDLC, the spec serves both humans and AI agents.

**Core principle (Piskala 2026 - 2602.00180):**
> "The spec declares intent, the code realizes it."

### The 3 Levels of SDD

```
LEVEL 3: Spec-as-Source
├─ Humans edit ONLY the spec
├─ Code 100% generated from the spec
├─ Validation via executable test suite
└─ For: fully greenfield projects with well-defined domains

LEVEL 2: Spec-Anchored (recommended for most cases)
├─ Spec evolves alongside code as a living document
├─ Spec updated BEFORE implementing each feature
├─ Code may have variations, spec is the canonical reference
└─ For: active projects, brownfield, teams with human devs + agents

LEVEL 1: Spec-First
├─ Spec guides initial development
├─ Spec may diverge from code over time
├─ Useful as a starting point before scaling
└─ For: MVPs, experiments, small projects
```

### The SDD Document Trilogy

```
docs/
├── CONSTITUTION.md      → WHAT the system MUST NEVER do (immutable constraints)
├── SPECIFICATION.md     → WHAT the system MUST do (features)
└── IMPLEMENTATION_PLAN.md → HOW to implement (sequenced tasks)
```

---

## WHY: Why it is critical

### Scientific evidence

**Security:**
- Constitutional SDD → **-73% security defects** vs unconstrained AI coding (2602.02584, Marri, banking microservices)
- Without Constitution.md: AI generates code that passes tests but violates implicit security constraints

**Planner-Coder Gap:**
- **75.3% of failures in Multi-Agent Systems** come from the gap between planning and coding (2504.11805)
- Planner generates ambiguous spec → Coder implements incorrectly → Failure
- SDD solves this: explicit spec = quality planner output for the coder

**Intent Debt:**
- Without spec: AI accelerates **cognitive debt** (erosion of team understanding) and **intent debt** (absence of documented rationale) (2603.22106, Storey UVic)
- With SDD: SPECIFICATION.md and CONSTITUTION.md are the direct remedy for intent debt
- "AI agents need externalized goals and constraints to act as true collaborators"

**Empirical performance:**
- SDD workflow (CURRANTE) in controlled benchmarks: improves pass rate, reduces iterations to convergence (2601.03878)
- Spec as first artifact → agent understand→reproduce→fix→verify more effective (2604.02547)

**Velocity vs Quality:**
- Without SDD: coding agents cause +39% cognitive complexity, accumulate debt persistently (2601.13597)
- With SDD: explicit spec directs agent toward correct solutions from the first iteration

---

## HOW: Templates and Step-by-Step

### CONSTITUTION.md - Complete Template

```markdown
# CONSTITUTION.md
# Version: 1.0.0 | Project: [PROJECT NAME] | Domain: [DOMAIN]
# PURPOSE: Machine-readable security constraints for AI agents.
# This document defines what the system MUST NEVER do.
# Agents MUST check this before implementing any feature touching security.
# Based on: CWE/MITRE Top 25 + OWASP Top 10 LLM 2025

---

## 1. AUTHENTICATION CONSTRAINTS
- MUST use bcrypt/argon2 for password hashing (cost factor ≥ 12)
- MUST NOT store passwords in plaintext or with reversible encryption
- MUST implement rate limiting on authentication endpoints (max 5 attempts/minute)
- MUST use secure session tokens (cryptographically random, ≥ 256 bits)
- MUST invalidate sessions on logout and password change
- MUST implement MFA for admin/privileged accounts

## 2. AUTHORIZATION CONSTRAINTS
- MUST validate authorization on every request (not just at entry points)
- MUST use principle of least privilege for all service accounts
- MUST NOT trust client-supplied role or permission data
- MUST implement resource-level authorization (not just endpoint-level)
- AGENT CONSTRAINT: Agents MUST NOT grant themselves permissions beyond task scope

## 3. INPUT VALIDATION
- MUST validate all inputs at system boundary (not just UI)
- MUST use parameterized queries for ALL database operations (prevents CWE-89)
- MUST sanitize HTML output to prevent XSS (CWE-79)
- MUST validate file uploads (type, size, content)
- MUST limit input sizes to prevent resource exhaustion (CWE-400)

## 4. OUTPUT ENCODING
- MUST encode all dynamic content in HTML responses
- MUST use Content-Security-Policy headers
- MUST NOT expose stack traces or internal errors to clients
- MUST sanitize LLM outputs before rendering (prevents LLM05)

## 5. CRYPTOGRAPHY STANDARDS
- MUST use TLS 1.2+ for all communications
- MUST NOT use deprecated algorithms (MD5, SHA-1, DES, RC4)
- MUST use AES-256-GCM or ChaCha20-Poly1305 for symmetric encryption
- MUST NOT hardcode secrets in source code (use secrets manager)

## 6. DEPENDENCY & SUPPLY CHAIN
- MUST keep dependencies up-to-date (automated via Dependabot/Renovate)
- MUST pin dependency versions in production
- MUST run vulnerability scans on every PR (OWASP dependency check)
- MUST review transitive dependencies for high-severity CVEs

## 7. AGENT-SPECIFIC CONSTRAINTS (OWASP LLM 2025)
- LLM01 Prompt Injection: MUST validate/sanitize all user inputs before LLM processing
- LLM03 Supply Chain: MUST vet all LLM/AI dependencies and models
- LLM06 Excessive Agency: Agents MUST NOT execute actions beyond stated task scope
  * NO access to production databases without explicit human approval
  * NO external API calls not in approved list
  * NO file system writes outside designated project directory
- LLM10 Unbounded Consumption: MUST implement token limits and rate limits on LLM calls

## 8. LOGGING & AUDIT
- MUST log all authentication events (success and failure)
- MUST log all authorization denials
- MUST NOT log PII, passwords, or secrets
- MUST retain security logs for minimum 90 days

## 9. ERROR HANDLING
- MUST use generic error messages for clients (no internal details)
- MUST log detailed errors server-side with correlation IDs
- MUST handle all exceptions (no unhandled promise rejections)
- MUST implement circuit breakers for external dependencies

---

## VIOLATION PROTOCOL
If implementation would violate any constraint above:
1. STOP — do not implement
2. FLAG — add comment: "CONSTITUTION VIOLATION: [which constraint] [why it applies]"
3. ESCALATE — notify human reviewer before proceeding
4. DOCUMENT — record the exception with justification if approved
```

---

### SPECIFICATION.md - Complete Template

```markdown
# SPECIFICATION.md
# Version: 1.0.0 | Project: [PROJECT NAME]
# Mode: spec-anchored (update before each feature implementation)
# EARS Notation: WHEN/THE/WHILE/WHERE/IF constructs

---

## OVERVIEW
[1-2 paragraphs: what this system does, who uses it, main value proposition]

## SYSTEM CONTEXT
- **Users**: [personas and their goals]
- **Integrations**: [external systems, APIs]
- **Constraints**: See CONSTITUTION.md for security constraints

---

## FEATURES

### Feature 1: [Feature Name]

**User Story**: As a [persona], I want to [action], so that [benefit].

**EARS Requirements**:
- WHEN [trigger event] THE system SHALL [expected response]
- THE system SHALL [mandatory behavior]
- WHILE [system state] THE system SHALL [behavior during state]
- IF [optional condition] THEN THE system SHALL [conditional behavior]

**Acceptance Criteria** (Given/When/Then):
```
Given [precondition]
When [action]
Then [expected outcome]
And [additional assertion]
```

**Non-Functional Requirements**:
- Performance: [response time target, throughput]
- Security: [specific constraints from CONSTITUTION.md]
- Reliability: [availability target, error rate]

**Out of Scope**: [what this feature explicitly does NOT include]

---

### Feature 2: [Feature Name]
[... repeat structure ...]

---

## DATA MODELS
[Key entities and their relationships — ERD or table descriptions]

## API CONTRACTS
[Endpoint definitions with request/response schemas]

## ERROR SCENARIOS
[Known error cases and expected handling]

## OPEN QUESTIONS
[Unresolved decisions that need stakeholder input before implementation]
```

---

### IMPLEMENTATION_PLAN.md - Complete Template

```markdown
# IMPLEMENTATION_PLAN.md
# Version: 1.0.0 | Sprint: [SPRINT NUMBER]
# Based on: SPECIFICATION.md v[X.Y.Z]
# [P] = can run in parallel | → = depends on previous task

---

## PHASE 1: Foundation (Sprint 1)
- [1.1] Setup project structure and dependencies
- [1.2] Configure CI/CD pipeline (quality gates)
- [1.3] Configure authentication foundation → depends on CONSTITUTION.md §1
- [P][1.4] Setup database schema
- [P][1.4] Setup logging infrastructure

## PHASE 2: Core Features (Sprint 2-3)
- [2.1] Implement Feature 1 → depends on [1.3], [1.4]
  - [2.1.1] Write spec tests (test-first)
  - [2.1.2] Implement business logic (Sonnet 4.6)
  - [2.1.3] Security review (Opus 4.6) → validates CONSTITUTION.md constraints
  - [P][2.1.4] Write unit tests
  - [P][2.1.4] Write integration tests
- [2.2] Implement Feature 2 → depends on [2.1]
  [... same structure ...]

## PHASE 3: Quality & Security (Sprint 4)
- [3.1] Security audit (Opus 4.6 + extended thinking)
- [P][3.2] Performance testing
- [P][3.2] Documentation completion
- [3.3] Spec sync — validate code matches SPECIFICATION.md

---

## DEFINITION OF DONE
Each task is complete when:
□ Code passes all tests (unit + integration)
□ Coverage ≥ 80%
□ No new static analysis warnings
□ CONSTITUTION.md constraints verified
□ SPECIFICATION.md updated if behavior changed
□ PR reviewed (human + CRA)
□ Documentation updated

## PARALLEL EXECUTION NOTES
Tasks marked [P] on the same level can run simultaneously.
Assign to different agents or developers.
Maximum parallel tasks: [3-5, adjust for team size]
```

---

### Step-by-Step: Starting a project with SDD

**DAY 0 - Greenfield setup:**

```bash
# 1. Create structure
mkdir -p docs .github/instructions .github/prompts .github/workflows

# 2. Create CONSTITUTION.md first
# → Use Opus 4.6 + Extended Thinking
# → Prompt: "Create a CONSTITUTION.md for a [domain] system using [stack].
#   Include CWE/MITRE Top 25 relevant constraints and OWASP Top 10 LLM 2025.
#   Every constraint must be machine-readable and actionable."

# 3. Create SPECIFICATION.md
# → Use Opus 4.6 (no ET - structured)
# → Start with user stories, convert to EARS notation

# 4. Create IMPLEMENTATION_PLAN.md
# → Use Sonnet 4.6 (iterative, task decomposition)
# → Include [P] for parallelization opportunities

# 5. Create copilot-instructions.md (Tier 1 hot-memory)
# → Human writes, referencing Constitution and Spec

# 6. Create AGENTS.md
# → HUMAN writes (not AI-generated)
```

**EACH NEW FEATURE (spec-anchored mode):**

```
1. Update SPECIFICATION.md with new feature
2. Review CONSTITUTION.md - does any constraint need to be added?
3. Create/update IMPLEMENTATION_PLAN.md for the sprint
4. Only then: implement with agent
```

---

## WHO: Responsibilities

| Artifact | Primary Creator | Approver | When to update |
|----------|----------------|----------|----------------|
| `CONSTITUTION.md` | Security Architect | Tech Lead | Per release or new security requirement |
| `SPECIFICATION.md` | Product Owner + Dev | Tech Lead + Stakeholder | Before each feature |
| `IMPLEMENTATION_PLAN.md` | Tech Lead | Dev team | Per sprint |

**Golden rule**: If code and SPECIFICATION.md diverge, the spec takes precedence. Code Review must include a spec compliance check.

---

## WHEN: SDD Cadence

```
GREENFIELD:
├─ Day 0: CONSTITUTION.md (Architect, Opus + ET)
├─ Day 1: SPECIFICATION.md draft (PO + Dev, Opus)
├─ Day 2: IMPLEMENTATION_PLAN.md (Tech Lead, Sonnet)
└─ Ongoing: update spec before each feature

BROWNFIELD (incremental adoption):
├─ Sprint 1: Retroactive CONSTITUTION.md (what already exists implicitly)
├─ Sprint 2: SPECIFICATION.md for existing features (reverse-engineer)
├─ Sprint 3: IMPLEMENTATION_PLAN.md for upcoming features
└─ Ongoing: maintain spec-anchored from here on

SPEC DRIFT (when code has diverged from the spec):
├─ Detect: compare actual behavior vs SPECIFICATION.md
├─ Decide: update spec (if change was intentional) or revert code
└─ Record: ADR explaining the decision
```

---

## WHICH MODEL: Per artifact

| Artifact | Model | Extended Thinking | Rationale |
|----------|-------|-------------------|-----------|
| `CONSTITUTION.md` | Opus 4.6 | ✅ | Ambiguous security decisions, high importance |
| `SPECIFICATION.md` | Opus 4.6 | ❌ | Structured, iterative with PO |
| `IMPLEMENTATION_PLAN.md` | Sonnet 4.6 | ❌ | Task decomposition, clear structure |
| Spec validation/review | Sonnet 4.6 | ❌ | Structured analysis |
| Spec sync (drift detection) | Haiku 4.5→Sonnet | ❌ | Comparison, escalation if drift found |
| EARS notation conversion | Sonnet 4.6 | ❌ | Structured transformation |

---

## ANTI-PATTERNS

❌ **Spec as afterthought**: Writing code and then trying to create a retroactive spec without understanding the original intent → intent debt is not resolved.

❌ **Spec too detailed**: Specifying implementation details in the spec (variable names, algorithms). Spec should declare WHAT and WHY, not HOW.

❌ **Spec never updated**: A SPECIFICATION.md from 6 months ago that the code no longer follows. Worse than having no spec.

❌ **Constitution without agent constraints**: CONSTITUTION.md that only has application security but does not define limits for agents (LLM06 Excessive Agency).

❌ **IMPLEMENTATION_PLAN without [P]**: Entire plan is sequential when tasks could run in parallel. Loses speed for no reason.

---

*Primitive 03 · Spec-Driven Development · v1.0.0 · April 2026*
*Papers: 2602.00180 · 2602.02584 · 2603.22106 · 2504.11805 · 2601.03878*
