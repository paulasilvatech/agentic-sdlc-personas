---
title: "Primitive 03: Spec-Driven Development"
description: "Treating specifications as the primary development artifact from which code derives"
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-14"
version: "1.0.0"
status: "approved"
locale: "pt-BR"
tags: ["primitive", "ai-native-sdlc", "sdd"]
---

# Primitive 03: Spec-Driven Development (SDD)
*AI-Native SDLC Framework · Paula Silva · Microsoft GBB Americas*
*Research foundation: 2602.00180, 2602.02584, 2603.22106, 2504.11805, 2601.03878*

---

## WHAT — O que é SDD

Spec-Driven Development é a prática de **tratar a especificação como o artefato primário** do desenvolvimento — o código deriva da spec, não o contrário. No contexto de AI-native SDLC, a spec serve tanto para humanos quanto para agentes de IA.

**Princípio central (Piskala 2026 — 2602.00180):**
> "The spec declares intent, the code realizes it."

### Os 3 Níveis de SDD

```
NÍVEL 3: Spec-as-Source
├─ Humanos editam APENAS a spec
├─ Código 100% gerado a partir da spec
├─ Validação por test suite executável
└─ Para: projetos totalmente greenfield com domínio bem definido

NÍVEL 2: Spec-Anchored (recomendado para maioria dos casos)
├─ Spec evolui junto com o código como living document
├─ Spec atualizada ANTES de implementar cada feature
├─ Código pode ter variações, spec é referência canônica
└─ Para: projetos ativos, brownfield, times com devs humanos + agentes

NÍVEL 1: Spec-First
├─ Spec guia desenvolvimento inicial
├─ Spec pode divergir do código com o tempo
├─ Útil como ponto de partida antes de escalar
└─ Para: MVPs, experimentos, projetos pequenos
```

### A Trilogia de Documentos SDD

```
docs/
├── CONSTITUTION.md      → O QUÊ o sistema NUNCA deve fazer (constraints imutáveis)
├── SPECIFICATION.md     → O QUÊ o sistema DEVE fazer (funcionalidades)
└── IMPLEMENTATION_PLAN.md → COMO implementar (tasks sequenciadas)
```

---

## WHY — Por que é crítico

### Evidências científicas

**Segurança:**
- Constitutional SDD → **-73% security defects** vs unconstrained AI coding (2602.02584, Marri, banking microservices)
- Sem Constitution.md: AI gera código que passa nos testes mas viola constraints de segurança implícitas

**Planner-Coder Gap:**
- **75.3% de falhas em Multi-Agent Systems** vêm do gap entre planning e coding (2504.11805)
- Planner gera spec ambígua → Coder implementa incorretamente → Falha
- SDD resolve: spec explícita = planner output de qualidade para o coder

**Dívida de intenção (Intent Debt):**
- Sem spec: AI acelera **cognitive debt** (erosão de entendimento da equipe) e **intent debt** (ausência de rationale documentado) (2603.22106, Storey UVic)
- Com SDD: SPECIFICATION.md e CONSTITUTION.md são o remédio direto para intent debt
- "AI agents need externalized goals and constraints to act as true collaborators"

**Performance empírica:**
- SDD workflow (CURRANTE) em benchmarks controlados: melhora pass rate, reduz iterations para convergência (2601.03878)
- Spec como primeiro artefato → agente understand→reproduce→fix→verify mais eficaz (2604.02547)

**Velocity vs Qualidade:**
- Sem SDD: coding agents causam +39% cognitive complexity, acumulam debt persistentemente (2601.13597)
- Com SDD: spec explícita direciona agente para soluções corretas desde a primeira iteração

---

## HOW — Templates e Step-by-Step

### CONSTITUTION.md — Template Completo

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

### SPECIFICATION.md — Template Completo

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

### IMPLEMENTATION_PLAN.md — Template Completo

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

### Step-by-Step: Iniciar um projeto com SDD

**DIA 0 — Greenfield setup:**

```bash
# 1. Criar estrutura
mkdir -p docs .github/instructions .github/prompts .github/workflows

# 2. Criar CONSTITUTION.md primeiro
# → Usar Opus 4.6 + Extended Thinking
# → Prompt: "Create a CONSTITUTION.md for a [domain] system using [stack].
#   Include CWE/MITRE Top 25 relevant constraints and OWASP Top 10 LLM 2025.
#   Every constraint must be machine-readable and actionable."

# 3. Criar SPECIFICATION.md
# → Usar Opus 4.6 (sem ET — estruturado)
# → Começar com user stories, converter para EARS notation

# 4. Criar IMPLEMENTATION_PLAN.md
# → Usar Sonnet 4.6 (iterativo, task decomposition)
# → Incluir [P] para parallelization opportunities

# 5. Criar copilot-instructions.md (Tier 1 hot-memory)
# → Humano escreve, referenciando Constitution e Spec

# 6. Criar AGENTS.md
# → HUMANO escreve (não AI-generated)
```

**CADA FEATURE nova (spec-anchored mode):**

```
1. Atualizar SPECIFICATION.md com nova feature
2. Revisar CONSTITUTION.md — alguma constraint precisa ser adicionada?
3. Criar/atualizar IMPLEMENTATION_PLAN.md para o sprint
4. Só então: implementar com agente
```

---

## WHO — Responsabilidades

| Artefato | Criador primário | Aprovador | Quando atualizar |
|----------|-----------------|-----------|------------------|
| `CONSTITUTION.md` | Arquiteto de Segurança | Tech Lead | Por release ou novo requisito de segurança |
| `SPECIFICATION.md` | Product Owner + Dev | Tech Lead + Stakeholder | Antes de cada feature |
| `IMPLEMENTATION_PLAN.md` | Tech Lead | Dev team | Por sprint |

**Regra de ouro**: Se código e SPECIFICATION.md divergem, a spec tem precedência. Code Review deve incluir spec compliance check.

---

## WHEN — Cadência SDD

```
GREENFIELD:
├─ Dia 0: CONSTITUTION.md (Arquiteto, Opus + ET)
├─ Dia 1: SPECIFICATION.md draft (PO + Dev, Opus)
├─ Dia 2: IMPLEMENTATION_PLAN.md (Tech Lead, Sonnet)
└─ Ongoing: atualizar spec antes de cada feature

BROWNFIELD (adoção incremental):
├─ Sprint 1: CONSTITUTION.md retroativa (o que já existe implicitamente)
├─ Sprint 2: SPECIFICATION.md das features existentes (reverse-engineer)
├─ Sprint 3: IMPLEMENTATION_PLAN.md para próximas features
└─ Ongoing: manter spec-anchored a partir daqui

SPEC DRIFT (quando código divergiu da spec):
├─ Detectar: comparar comportamento real vs SPECIFICATION.md
├─ Decidir: atualizar spec (se mudança foi intencional) ou reverter código
└─ Registrar: ADR explicando a decisão
```

---

## WHICH MODEL — Por artefato

| Artefato | Modelo | Extended Thinking | Justificativa |
|----------|--------|-------------------|---------------|
| `CONSTITUTION.md` | Opus 4.6 | ✅ | Decisões de segurança ambíguas, alta importância |
| `SPECIFICATION.md` | Opus 4.6 | ❌ | Estruturado, iterativo com PO |
| `IMPLEMENTATION_PLAN.md` | Sonnet 4.6 | ❌ | Task decomposition, clear structure |
| Validação/review de spec | Sonnet 4.6 | ❌ | Análise estruturada |
| Spec sync (drift detection) | Haiku 4.5→Sonnet | ❌ | Comparação, escalação se drift encontrado |
| EARS notation conversion | Sonnet 4.6 | ❌ | Transformação estruturada |

---

## ANTI-PATTERNS

❌ **Spec como afterthought**: Escrever código e depois tentar criar spec retroativa sem entender o intent original → intent debt não é resolvido.

❌ **Spec too detailed**: Especificar detalhes de implementação na spec (nomes de variáveis, algoritmos). Spec deve declarar WHAT e WHY, não HOW.

❌ **Spec nunca atualizada**: SPECIFICATION.md de 6 meses atrás que o código já não segue. Pior que não ter spec.

❌ **Constitution sem agent constraints**: CONSTITUTION.md que só tem segurança de aplicação mas não define limites para agentes (LLM06 Excessive Agency).

❌ **IMPLEMENTATION_PLAN sem [P]**: Todo o plano sequencial quando tarefas poderiam rodar em paralelo. Perde velocidade sem razão.

---

*Primitive 03 · Spec-Driven Development · v1.0.0 · April 2026*
*Papers: 2602.00180 · 2602.02584 · 2603.22106 · 2504.11805 · 2601.03878*
