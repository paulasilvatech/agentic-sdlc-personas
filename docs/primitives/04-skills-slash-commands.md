---
title: "Primitive 04: Agent Skills and Slash Commands"
description: "Creating reusable, governed skill artifacts and slash commands for agent workflows"
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-14"
version: "1.0.0"
status: "approved"
locale: "pt-BR"
tags: ["primitive", "ai-native-sdlc", "skills"]
---

# Primitive 04: Agent Skills & Slash Commands
*AI-Native SDLC Framework · Paula Silva · Microsoft GBB Americas*
*Research foundation: 2602.12430, 2603.29919, 2602.20478, 2602.00180*

---

## WHAT — O que são Skills e Slash Commands

**Agent Skills** são artefatos reutilizáveis que encapsulam conhecimento especializado e passos de execução para tarefas recorrentes. No GitHub Copilot, skills são implementadas como:

| Artefato | Extensão | Ativação | Uso |
|----------|----------|----------|-----|
| **Skill file** | `SKILL.md` | Referenciado por agentes | Comportamento especializado encapsulado |
| **Slash command** | `.prompt.md` | `/nome-do-comando` | Workflow de uma só vez, por usuário |
| **Instructions** | `.instructions.md` | `applyTo` glob | Contexto sempre ativo para arquivos específicos |
| **Agent definition** | `.agent.md` | Por nome | Agente especializado configurável |

### Os 3 paradigmas de skill engineering (2602.12430)

```
PARADIGMA 1: Prompt Engineering
└─ Instruções inline no chat/copilot-instructions.md
   Vantagem: simples. Desvantagem: não reutilizável, sem governance.

PARADIGMA 2: Tool Use
└─ Skills como ferramentas com input/output definidos
   Vantagem: composável. Desvantagem: overhead de plumbing.

PARADIGMA 3: Skill Engineering ← RECOMENDADO
└─ SKILL.md: description + body + references + scripts
   Vantagem: reutilizável, governado, escalável, progressive disclosure.
```

---

## WHY — Por que estruturar skills

### Evidências científicas

**O problema atual das skills públicas (2603.29919, HKUST+Tsinghua+ZJU, 55,315 skills):**
- **26.4%** das skills não têm routing description → agente não consegue encontrá-las
- **60%+** do body é conteúdo não-acionável (background, exemplos, contexto)
- Reference files podem injetar **dezenas de milhares de tokens** desnecessariamente
- Less-is-more effect: comprimir skill melhora qualidade funcional **+2.8%**

**Economia de tokens com applyTo:**
- Instructions com `applyTo` scoping correto → **-68% tokens** vs instruções globais
- (Paula's Model Routing Guide)

**Governance é crítico:**
- **26.1%** de skills comunitárias têm vulnerabilidades (2602.12430, Zhejiang Univ)
- 4-tier governance framework previne skills maliciosas ou defeituosas

**62,000 GitHub stars** para anthropics/skills em <4 meses → skills são padrão da indústria

---

## HOW — Como criar skills eficazes

### Anatomia de uma SKILL.md eficaz

```markdown
# Skill Name

## Description
[TRIGGER KEYWORDS que ativam esta skill]. [O que esta skill faz em 1 frase].
[Quando NÃO usar esta skill — anti-triggers explícitos].

## Steps
1. [Passo acionável específico]
2. [Passo acionável específico]
3. [Passo acionável específico]
4. [Passo acionável específico]

## References
- [Link para documentação externa, não conteúdo inline]
- [Link para spec relevante]
```

**REGRAS CRÍTICAS para cada seção:**

### Description (max 2 frases — regras SkillReducer):
```
✅ BOM:  "Creates a CONSTITUTION.md with security constraints for AI agents.
          Use when starting a new project or adding security governance."
          
✅ BOM:  "Analyzes existing code to detect spec drift against SPECIFICATION.md.
          Do NOT use for initial spec creation — use sdd-spec-generate instead."

❌ RUIM: "This skill helps developers understand the importance of security in modern
          AI-native development. Security is critical because... [3 parágrafos de contexto]"
          
❌ RUIM: Sem anti-trigger → agente não sabe quando NÃO usar
❌ RUIM: > 2 frases → compressão de 48% reduz, não remove, funcionalidade
```

### Steps (apenas acionáveis):
```
✅ BOM:  "1. Read SPECIFICATION.md to understand current feature scope"
✅ BOM:  "2. Compare against existing code using file search"
✅ BOM:  "3. Generate gap report with: [missing features] | [diverging behaviors] | [undocumented code]"

❌ RUIM: "1. Understand the importance of specification compliance (it's crucial because...)"
❌ RUIM: Steps com exemplos inline (coloque em References)
❌ RUIM: Steps que são na verdade sub-steps de outro step (progressive disclosure)
```

### References (links, não conteúdo):
```
✅ BOM:  "- [EARS Notation Guide](docs/ears-notation.md)"
✅ BOM:  "- [OWASP Top 10 LLM 2025](https://owasp.org/...)"

❌ RUIM: Copiar e colar 200 linhas de guia EARS diretamente no References
❌ RUIM: Reference files que injetam 10K+ tokens (verificar tamanho)
```

---

### Template: `.prompt.md` Slash Command

```markdown
---
mode: agent
model: claude-sonnet-4-6
description: [Trigger keywords]. [O que faz]. [Quando usar].
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

### Template: `.instructions.md` com applyTo

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

### Estrutura de diretórios — Skills por projeto

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

## WHO — Responsabilidades

| Artefato | Criador | Reviewr | Cadência |
|----------|---------|---------|----------|
| `.instructions.md` (domain) | Dev Sênior | Tech Lead | Por mudança de convenção |
| `.prompt.md` (slash commands) | Qualquer dev | Dev Sênior | Quando padrão se repete ≥3x |
| `SKILL.md` (encapsulado) | Dev Sênior | Security (Tier 2) | Por novo padrão de equipe |
| `.agent.md` (custom agents) | Arquiteto | Tech Lead | Por novo domínio especializado |

**Regra dos 3x**: Se você fez o mesmo tipo de prompt 3 vezes, crie um `.prompt.md` para isso.

---

## WHEN — Cadência

```
DIA 0 (setup): Criar .instructions.md base por domínio (backend/frontend/tests/infra)
SPRINT 1:      Criar os 5-7 slash commands mais usados pelo time
ONGOING:       Quando dev faz mesmo prompt pela terceira vez → criar .prompt.md
QUARTERLY:     Auditar skills com SkillReducer: remover conteúdo não-acionável
SEMPRE:        Verificar governance tier antes de usar skill de fonte externa
```

---

## WHICH MODEL

| Tarefa | Modelo | Notas |
|--------|--------|-------|
| Criar `.instructions.md` | Sonnet 4.6 | Refinamento iterativo |
| Criar `.prompt.md` | Sonnet 4.6 | Padrão claro |
| Criar `SKILL.md` | Sonnet 4.6 | Estruturado |
| Auditar skills existentes | Haiku 4.5 | Análise de conteúdo simples |
| Criar `.agent.md` especializado | Opus 4.6 | Decisão de arquitetura |
| Executar skills rotineiras | Haiku 4.5 ou Sonnet | Depende da complexidade |

---

## QUICK REFERENCE — Checklist de skill de qualidade

```
□ Description tem ≤ 2 frases
□ Description inclui trigger keywords
□ Description inclui anti-trigger ("Do NOT use when...")
□ Body tem ≥ 60% de conteúdo acionável
□ Body NÃO tem background/contexto/exemplos inline
□ References são links, não conteúdo inline
□ Nenhum reference file com > 5K tokens
□ applyTo scoping correto (se .instructions.md)
□ Governance tier verificado (se skill externa)
□ Model recommendation incluída (qual modelo deve executar)
```

---

*Primitive 04 · Agent Skills & Slash Commands · v1.0.0 · April 2026*
*Papers: 2602.12430 · 2603.29919 · 2602.20478*
