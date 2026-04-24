---
title: "Primitive 04: Agent Skills and Slash Commands"
description: "Creating reusable, governed skill artifacts and slash commands for agent workflows"
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-14"
version: "1.0.0"
status: "approved"
locale: "en"
tags: ["primitive", "ai-native-sdlc", "skills"]
---

# Primitive 04: Agent Skills & Slash Commands
*AI-Native SDLC Framework · Paula Silva · Microsoft GBB Americas*
*Research foundation: 2602.12430, 2603.29919, 2602.20478, 2602.00180*

---

## WHAT: What are Skills and Slash Commands

**Agent Skills** are reusable artifacts that encapsulate specialized knowledge and execution steps for recurring tasks. In GitHub Copilot, skills are implemented as:

| Artifact | Extension | Activation | Usage |
|----------|-----------|------------|-------|
| **Skill file** | `SKILL.md` | Referenced by agents | Encapsulated specialized behavior |
| **Slash command** | `.prompt.md` | `/command-name` | One-off workflow, per user |
| **Instructions** | `.instructions.md` | `applyTo` glob | Always-active context for specific files |
| **Agent definition** | `.agent.md` | By name | Configurable specialized agent |

### The 3 paradigms of skill engineering (2602.12430)

```
PARADIGM 1: Prompt Engineering
└─ Inline instructions in chat/copilot-instructions.md
   Advantage: simple. Disadvantage: not reusable, no governance.

PARADIGM 2: Tool Use
└─ Skills as tools with defined input/output
   Advantage: composable. Disadvantage: plumbing overhead.

PARADIGM 3: Skill Engineering ← RECOMMENDED
└─ SKILL.md: description + body + references + scripts
   Advantage: reusable, governed, scalable, progressive disclosure.
```

---

## WHY: Why structure skills

### Scientific evidence

**The current problem with public skills (2603.29919, HKUST+Tsinghua+ZJU, 55,315 skills):**
- **26.4%** of skills have no routing description → agent cannot find them
- **60%+** of body content is non-actionable (background, examples, context)
- Reference files can inject **tens of thousands of tokens** unnecessarily
- Less-is-more effect: compressing skills improves functional quality **+2.8%**

**Token savings with applyTo:**
- Instructions with correct `applyTo` scoping → **-68% tokens** vs global instructions
- (Paula's Model Routing Guide)

**Governance is critical:**
- **26.1%** of community skills have vulnerabilities (2602.12430, Zhejiang Univ)
- 4-tier governance framework prevents malicious or defective skills

**62,000 GitHub stars** for anthropics/skills in <4 months → skills are an industry standard

---

## HOW: How to create effective skills

### Anatomy of an effective SKILL.md

```markdown
# Skill Name

## Description
[TRIGGER KEYWORDS that activate this skill]. [What this skill does in 1 sentence].
[When NOT to use this skill - explicit anti-triggers].

## Steps
1. [Specific actionable step]
2. [Specific actionable step]
3. [Specific actionable step]
4. [Specific actionable step]

## References
- [Link to external documentation, not inline content]
- [Link to relevant spec]
```

**CRITICAL RULES for each section:**

### Description (max 2 sentences - SkillReducer rules):
```
✅ GOOD: "Creates a CONSTITUTION.md with security constraints for AI agents.
          Use when starting a new project or adding security governance."
          
✅ GOOD: "Analyzes existing code to detect spec drift against SPECIFICATION.md.
          Do NOT use for initial spec creation — use sdd-spec-generate instead."

❌ BAD:  "This skill helps developers understand the importance of security in modern
          AI-native development. Security is critical because... [3 paragraphs of context]"
          
❌ BAD:  No anti-trigger → agent does not know when NOT to use
❌ BAD:  > 2 sentences → 48% compression reduces, does not remove, functionality
```

### Steps (actionable only):
```
✅ GOOD: "1. Read SPECIFICATION.md to understand current feature scope"
✅ GOOD: "2. Compare against existing code using file search"
✅ GOOD: "3. Generate gap report with: [missing features] | [diverging behaviors] | [undocumented code]"

❌ BAD:  "1. Understand the importance of specification compliance (it's crucial because...)"
❌ BAD:  Steps with inline examples (put them in References)
❌ BAD:  Steps that are actually sub-steps of another step (progressive disclosure)
```

### References (links, not content):
```
✅ GOOD: "- [EARS Notation Guide](docs/ears-notation.md)"
✅ GOOD: "- [OWASP Top 10 LLM 2025](https://owasp.org/...)"

❌ BAD:  Copy and paste 200 lines of the EARS guide directly into References
❌ BAD:  Reference files that inject 10K+ tokens (check size)
```

---

### Template: `.prompt.md` Slash Command

```markdown
---
mode: agent
model: claude-sonnet-4-6
description: [Trigger keywords]. [What it does]. [When to use].
---

# [Command Name]

## Task Context
You are performing [specific task type] for [context/system].
Current working directory: [description of where files are]

## Steps
1. [Actionable step with clear output expectation]
2. [Actionable step]
3. [Actionable step]
4. Verify: [how to confirm the task was completed correctly]

## Output Format
[Exact format expected: markdown table | code block | file | PR description | etc]

## Quality Gate
Before finishing, verify:
- [ ] [Specific check 1]
- [ ] [Specific check 2]
- [ ] CONSTITUTION.md constraints respected (if code changes involved)
```

---

### Template: `.instructions.md` with applyTo

```markdown
---
applyTo: "src/api/**/*.ts"
---

# API Layer Conventions

## Naming
- Controllers: [FeatureName]Controller (PascalCase)
- Routes: kebab-case (/user-profiles not /userProfiles)
- DTOs: [FeatureName]RequestDto, [FeatureName]ResponseDto

## Error Handling
- Always use typed error classes (not generic Error)
- Return RFC 7807 Problem Details format for API errors
- Log correlation ID in every error

## Security (from CONSTITUTION.md §3)
- Validate all request bodies with class-validator
- Never trust path parameters without explicit validation
- Rate limit all endpoints: @RateLimit(100, '15m')

## Testing
- Every endpoint needs at least: happy path + auth failure + validation failure
- Use supertest for integration tests
- Minimum coverage: 85% for API handlers
```

---

### 4-tier Skill Governance Framework (2602.12430)

```
TIER 1 — ACQUISITION PROVENANCE
├─ Where does the skill come from? (internal | verified marketplace | community)
├─ Has it been reviewed by security team?
└─ Gate: Skills from community require security review before use

TIER 2 — VERIFICATION GATES
├─ Does the skill have a routing description? (required)
├─ Is body content ≤60% actionable? (required)
├─ Are there no hardcoded secrets or dangerous commands?
└─ Gate: Skills fail verification if any of above fails

TIER 3 — DEPLOYMENT CAPABILITIES
├─ What can this skill access? (file system | network | secrets | prod data)
├─ Principle of least privilege: only what's needed
└─ Gate: Skills with prod access require additional approval

TIER 4 — RUNTIME MONITORING
├─ Log when skill is invoked
├─ Alert on unusual patterns (skill run 100x in 1 hour)
└─ Audit trail for compliance
```

---

### Directory structure - Skills per project

```
.github/
  instructions/
    backend.instructions.md      # applyTo: "src/api/**,src/services/**"
    frontend.instructions.md     # applyTo: "src/components/**,src/pages/**"
    tests.instructions.md        # applyTo: "**/*.test.*,**/*.spec.*"
    security.instructions.md     # applyTo: "src/auth/**,src/crypto/**,**/config/**"
    infra.instructions.md        # applyTo: "infrastructure/**,*.tf,*.yml"
    database.instructions.md     # applyTo: "src/repositories/**,migrations/**"

  prompts/
    create-feature.prompt.md     # /create-feature — full feature scaffold
    spec-sync.prompt.md          # /spec-sync — detect spec drift
    security-review.prompt.md    # /security-review — OWASP compliance check
    create-tests.prompt.md       # /create-tests — test generation for module
    create-adr.prompt.md         # /create-adr — Architecture Decision Record
    code-review.prompt.md        # /code-review — structured code review
    update-spec.prompt.md        # /update-spec — update SPECIFICATION.md for feature

.claude/
  commands/
    greenfield.md               # /greenfield — full project setup
    spec-full.md                # /spec-full — Constitution + Spec + Plan
    add-quality-gates.md        # /add-quality-gates — CI/CD setup
```

---

## WHO: Responsibilities

| Artifact | Creator | Reviewer | Frequency |
|----------|---------|----------|-----------|
| `.instructions.md` (domain) | Senior Dev | Tech Lead | Per convention change |
| `.prompt.md` (slash commands) | Any dev | Senior Dev | When pattern repeats ≥3x |
| `SKILL.md` (encapsulated) | Senior Dev | Security (Tier 2) | Per new team pattern |
| `.agent.md` (custom agents) | Architect | Tech Lead | Per new specialized domain |

**Rule of 3x**: If you have done the same type of prompt 3 times, create a `.prompt.md` for it.

---

## WHEN: Cadence

```
DAY 0 (setup):  Create base .instructions.md per domain (backend/frontend/tests/infra)
SPRINT 1:       Create the 5-7 most used slash commands by the team
ONGOING:        When dev does same prompt for the third time → create .prompt.md
QUARTERLY:      Audit skills with SkillReducer: remove non-actionable content
ALWAYS:         Verify governance tier before using skill from external source
```

---

## WHICH MODEL

| Task | Model | Notes |
|------|-------|-------|
| Create `.instructions.md` | Sonnet 4.6 | Iterative refinement |
| Create `.prompt.md` | Sonnet 4.6 | Clear pattern |
| Create `SKILL.md` | Sonnet 4.6 | Structured |
| Audit existing skills | Haiku 4.5 | Simple content analysis |
| Create specialized `.agent.md` | Opus 4.6 | Architecture decision |
| Execute routine skills | Haiku 4.5 or Sonnet | Depends on complexity |

---

## QUICK REFERENCE - Quality skill checklist

```
□ Description has ≤ 2 sentences
□ Description includes trigger keywords
□ Description includes anti-trigger ("Do NOT use when...")
□ Body has ≥ 60% actionable content
□ Body does NOT have background/context/inline examples
□ References are links, not inline content
□ No reference file with > 5K tokens
□ applyTo scoping is correct (if .instructions.md)
□ Governance tier verified (if external skill)
□ Model recommendation included (which model should execute)
```

---

*Primitive 04 · Agent Skills & Slash Commands · v1.0.0 · April 2026*
*Papers: 2602.12430 · 2603.29919 · 2602.20478*
