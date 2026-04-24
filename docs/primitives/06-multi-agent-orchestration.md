---
title: "Primitive 06: Multi-Agent Orchestration"
description: "Coordinating multiple specialized agents with optimal topologies for complex tasks"
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-14"
version: "1.0.0"
status: "approved"
locale: "pt-BR"
tags: ["primitive", "ai-native-sdlc", "orchestration"]
---

# Primitive 06: Multi-Agent Orchestration
*AI-Native SDLC Framework · Paula Silva · Microsoft GBB Americas*
*Research foundation: 2602.16873, 2601.12538, 2504.11805, 2603.05344, 2601.14470*

---

## WHAT — O que é Multi-Agent Orchestration

Multi-Agent Orchestration é a estratégia de **coordenar múltiplos agentes especializados** para realizar tarefas que nenhum agente único faria com eficiência máxima. Cada agente tem um papel, um modelo otimizado, e uma interface clara com os demais.

### As 4 Topologias (AdaptOrch — 2602.16873)

```
PARALLEL: Agentes independentes executam simultaneamente
┌─────────────────────────────────────────┐
│  Orchestrator                           │
│  ├─ Agent A (análise de arquivo 1)      │
│  ├─ Agent B (análise de arquivo 2)      │
│  └─ Agent C (análise de arquivo 3)      │
│  → Merge resultados                     │
└─────────────────────────────────────────┘
Quando usar: tarefas independentes, análise multi-arquivo, geração de testes

SEQUENTIAL: Agentes em cadeia, output de um é input do próximo
┌─────────────────────────────────────────┐
│  Spec Agent → Code Agent → Test Agent → Review Agent
└─────────────────────────────────────────┘
Quando usar: pipeline com dependências claras (spec→impl→test→review)

HIERARCHICAL: Orchestrator delega para agentes especializados
┌─────────────────────────────────────────┐
│  Orchestrator (Opus)                    │
│  ├─ Spec Agent (Opus)                   │
│  ├─ Code Agent (Sonnet) ← especialista  │
│  ├─ Test Agent (Sonnet) ← especialista  │
│  └─ Review Agent (Sonnet/Haiku)         │
└─────────────────────────────────────────┘
Quando usar: projetos greenfield complexos, múltiplos domínios

HYBRID: Hierárquico com parallelismo interno
┌─────────────────────────────────────────┐
│  Orchestrator (Opus)                    │
│  ├─ [Sequential] Spec → Constitution    │
│  ├─ [Parallel] Code + Test (simultâneo) │
│  └─ [Sequential] Review → Deploy        │
└─────────────────────────────────────────┘
Quando usar: feature development completo enterprise-grade
```

---

## WHY — Por que orquestrar

### Evidências científicas

**Topologia > seleção de modelo:**
- Com modelos convergindo em performance, **topologia de orquestração domina** como driver de resultado (AdaptOrch 2602.16873, Korea National Open Univ)
- **12-23% improvement** sobre estáticas baselines usando topology routing
- Performance Convergence Scaling Law: à medida que modelos melhoram, escolher topologia certa vale mais que escolher modelo

**Planner-Coder Gap:**
- **75.3% de falhas em MAS** vêm da interface planner → coder (2504.11805)
- Spec ambígua do planner → código incorreto do coder → falha em cadeia
- Separar planner (Opus) de coder (Sonnet) com interface de spec explícita resolve 75% das falhas

**Token economy por fase:**
- Code Review = **59.42% de todos os tokens** (2601.14470)
- Input tokens = **53.9%** do total
- → Agente de review dedicado com Haiku para triagem + Sonnet para análise profunda reduz custo 40-60%

**Communication tax:**
- Inter-agent coordination tem "communication tax" (2601.14470)
- Minimizar: interfaces claras, outputs estruturados, sem re-leitura desnecessária

**3 camadas de raciocínio agentivo (2601.12538):**
- Foundational: planning, tool use, search → hooks e prompts básicos
- Self-evolving: feedback, memory, adaptation → skills com memory
- Collective: role assigning, collaboration, co-evolving → orquestração multi-agent

---

## HOW — Implementação por fase SDLC

### Topologia para cada fase

| Fase SDLC | Topologia | Agentes | Modelos |
|-----------|-----------|---------|---------|
| Requirements | Sequential | Req Analyst → Spec Validator | Opus → Sonnet |
| Architecture | Sequential | Architect → Security Reviewer | Opus+ET → Opus |
| Implementation | Hierarchical | Orchestrator → Coder + Test Writer | Opus → Sonnet + Sonnet |
| Code Review | Parallel + Sequential | Style + Security + Logic parallel → Human escalation | Haiku + Opus + Sonnet |
| Deploy | Sequential | Build → Test → Deploy → Monitor | Sonnet → Sonnet → Sonnet → Haiku |

---

### Template: Orquestração para Feature Development Completo

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

### Configuração em AGENTS.md

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

## WHO — Responsabilidades

| Papel | Responsabilidade |
|-------|-----------------|
| Arquiteto | Define topologia de orquestração por tipo de feature |
| Tech Lead | Implementa orchestration prompts em `.github/prompts/` |
| Dev Sênior | Aplica topologia correta para cada task |
| Todo o time | Respeita interfaces entre agentes (não expandir scope) |

---

## WHEN — Cadência

```
DIA 0:         Definir roles no AGENTS.md + topologia padrão no copilot-instructions.md
NOVA FEATURE:  Usar Hybrid topologia para features complexas (>3 arquivos)
SIMPLE FIX:    Sequential (entender → corrigir → verificar) sem orchestrator separado
SECURITY WORK: Sempre Planner-Coder Split com Security Reviewer independente
QUARTERLY:     Avaliar se topologia atual ainda é ideal (modelos evoluem)
```

---

## WHICH MODEL — Meta-routing

| Tarefa de Orquestração | Modelo | Notas |
|----------------------|--------|-------|
| Definir topologia para novo projeto | Opus 4.6 + ET | Decisão arquitetural |
| Escrever orchestration prompts | Sonnet 4.6 | Estruturado |
| Executar como Orchestrator | Opus 4.6 | Precisa de reasoning profundo |
| Executar como Code Agent | Sonnet 4.6 | Implementação iterativa |
| Executar como Style Reviewer | Haiku 4.5 | Task simples |
| Executar como Security Reviewer | Opus 4.6 + ET | Decisão de segurança |

---

## QUICK REFERENCE — Topology Selection

```
Feature tem > 3 arquivos independentes para analisar?
├─ Sim → Parallel (análise simultânea)
└─ Não ↓

Feature segue pipeline claro (A→B→C)?
├─ Sim → Sequential
└─ Não ↓

Feature precisa de múltiplos especialistas (code + test + security)?
├─ Sim → Hierarchical (com Orchestrator)
└─ Não ↓

Feature é complexa E precisa de fases sequenciais com parallelismo interno?
└─ Hybrid (ex: spec → [code parallel test] → review)
```

---

*Primitive 06 · Multi-Agent Orchestration · v1.0.0 · April 2026*
*Papers: 2602.16873 · 2601.12538 · 2504.11805 · 2603.05344 · 2601.14470*
