---
title: "Primitive 01: Context Engineering"
description: "Building structured context artifacts that guide AI agents consistently across the SDLC"
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-14"
version: "1.0.0"
status: "approved"
locale: "pt-BR"
tags: ["primitive", "ai-native-sdlc", "context-engineering"]
---

# Primitive 01: Context Engineering
*AI-Native SDLC Framework · Paula Silva · Microsoft GBB Americas*
*Research foundation: 2602.20478, 2601.20404, 2604.07502, 2603.29919, 2602.12430*

---

## WHAT — O que é Context Engineering

Context Engineering é a **construção deliberada e estruturada de artefatos de contexto** que guiam agentes de AI de forma consistente, eficiente e segura. É a disciplina de decidir *o que o agente deve saber*, *quando deve saber*, e *como esse conhecimento é representado*.

Diferente de "dar um prompt", context engineering cria uma **infraestrutura de conhecimento persistente** — arquivos versionados no repositório que sobrevivem entre sessões, entre devs, e entre sprints.

### Os três tiers de contexto (Vasilopoulos 2026 — 2602.20478)

```
┌─────────────────────────────────────────────────────────┐
│  TIER 1: HOT-MEMORY (~660 linhas, sempre carregado)     │
│  copilot-instructions.md / CLAUDE.md                    │
│  • Model routing rules                                  │
│  • Quality standards                                    │
│  • Security constraints core                           │
│  • Agent behavior protocols                             │
│  • Skill trigger tables                                 │
└─────────────────────────────────────────────────────────┘
           ↓ agente consulta quando necessário ↓
┌─────────────────────────────────────────────────────────┐
│  TIER 2: WARM-MEMORY (domain-specialist agents/skills)  │
│  .github/instructions/*.instructions.md                 │
│  .github/prompts/*.prompt.md                            │
│  • Domain-specific conventions                          │
│  • Feature-area instructions (applyTo scoping)          │
│  • Reusable slash commands                              │
└─────────────────────────────────────────────────────────┘
           ↓ agente carrega on-demand ↓
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

### Artefatos de contexto — inventário completo

| Arquivo | Tier | Carregado | Responsável | Ferramenta |
|---------|------|-----------|-------------|------------|
| `.github/copilot-instructions.md` | 1 | Sempre | Tech Lead | GitHub Copilot |
| `CLAUDE.md` | 1 | Sempre | Tech Lead | Claude Code |
| `AGENTS.md` | 1 | Sempre | Tech Lead | Todos os agentes |
| `.github/instructions/*.instructions.md` | 2 | Por glob (applyTo) | Dev Sênior | GitHub Copilot |
| `.github/prompts/*.prompt.md` | 2 | On-demand (slash) | Dev Sênior | GitHub Copilot |
| `.claude/commands/*.md` | 2 | On-demand (slash) | Dev Sênior | Claude Code |
| `docs/CONSTITUTION.md` | 3 | On-demand | Arquiteto | Qualquer agente |
| `docs/SPECIFICATION.md` | 3 | On-demand | Product/Dev | Qualquer agente |
| `docs/IMPLEMENTATION_PLAN.md` | 3 | On-demand | Tech Lead | Qualquer agente |
| `src/CODEMAP.md` | 3 | On-demand | IDE/Dev | Qualquer agente |

---

## WHY — Por que é crítico

### Evidências científicas

**Redução de custo operacional:**
- AGENTS.md human-curated → **-28.64% runtime**, **-16.58% output tokens** (2601.20404, Singapore/Heidelberg/Bamberg/London, 10 repos, 124 PRs)
- applyTo scoping em .instructions.md → **-68% tokens de instrução** (Paula's Model Routing Guide)
- Arquivos gerados por LLM reduzem sucesso em -3%; human-curated = +4% (2602.20478 citando ETH Zurich)

**Prevenção de dívidas:**
- Sem context engineering: cognitive debt (erosão do entendimento da equipe) + intent debt (falta de rationale para AI) acumulam (2603.22106, Storey UVic)
- AI reduz technical debt mas **acelera** cognitive + intent debt sem contexto estruturado
- 108K-line C# system com 3-tier context: 2,801 prompts, 1,197 agent invocações bem-sucedidas sem context collapse (2602.20478)

**Qualidade de código:**
- Sem governance/contexto: agentes causam **+18% static warnings**, **+39% cognitive complexity** (2601.13597, CMU)
- Com contexto rico: agente usa padrão understand→reproduce→fix→verify consistentemente (2604.02547)

**Semantic density:**
- Compressão agressiva de context: **-17% input tokens** → **+67% session cost total** (2604.07502)
- **Linguagem natural rica = mais barata** que abreviações (counter-intuitive finding)
- Ceremony-to-logic ratio Java Spring Boot = 8:1 (desperdício); Go = 2:1 (eficiente)

---

## HOW — Como implementar

### Passo 0 — Definir o projeto (5 min)
Antes de criar qualquer arquivo, responder:
1. Qual é o stack? (Node/Python/Java/.NET/Go)
2. Qual é o domínio? (fintech/healthtech/e-commerce/platform)
3. Qual é o nível de maturidade? (greenfield/brownfield/legacy)
4. Quais são os modelos disponíveis? (Opus/Sonnet/Haiku)

### Passo 1 — Criar Tier 1: Hot-Memory (30 min)

**Arquivo: `.github/copilot-instructions.md`**

Este é o arquivo mais importante. Estrutura mínima obrigatória (~660 linhas):

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

> ⚠️ **CRÍTICO**: Escrever em linguagem natural rica. NÃO usar abreviações.
> "VerifyOrderByAvailableAmount" é melhor que "verifyOrdByAvAmt" para agentes.
> Cada abreviação que o agente precisa decodificar custa tokens de reasoning (2604.07502).

**Arquivo: `AGENTS.md`** (root)

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

### Passo 2 — Criar Tier 2: Warm-Memory (1h)

**Arquivo: `.github/instructions/typescript.instructions.md`**

```markdown
---
applyTo: "**/*.ts,**/*.tsx"
---
# TypeScript Conventions
[TypeScript-specific rules, only loaded when editing .ts files]
[applyTo scoping = -68% tokens vs global instructions]
```

**Estrutura de .instructions.md files:**
```
.github/instructions/
  backend.instructions.md      (applyTo: "src/api/**,src/services/**")
  frontend.instructions.md     (applyTo: "src/components/**,src/pages/**")
  tests.instructions.md        (applyTo: "**/*.test.*,**/*.spec.*")
  security.instructions.md     (applyTo: "src/auth/**,src/crypto/**")
  infra.instructions.md        (applyTo: "infrastructure/**,*.tf,*.yaml")
```

**Arquivo: `.github/prompts/[name].prompt.md`**

```markdown
---
mode: agent
description: [2 frases max: o que faz + quando usar]
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

### Passo 3 — Criar Tier 3: Cold-Memory (2h)

**Ver Primitive 03 (SDD) para templates completos de:**
- `docs/CONSTITUTION.md`
- `docs/SPECIFICATION.md`
- `docs/IMPLEMENTATION_PLAN.md`

**Arquivo: `src/CODEMAP.md`** (Program Skeleton — 2604.07502)

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

### Passo 4 — Validar com checklist

```
□ copilot-instructions.md criado (~660 linhas, linguagem natural rica)
□ AGENTS.md escrito por humano (não gerado por IA)
□ .instructions.md files com applyTo scoping correto
□ .prompt.md slash commands com description ≤ 2 frases
□ CODEMAP.md presente e atualizado
□ CONSTITUTION.md presente (ver Primitive 03)
□ Nenhum arquivo de contexto contém abreviações
□ Nenhum arquivo de contexto foi gerado automaticamente sem revisão humana
```

---

## WHO — Quem cria cada artefato

| Artefato | Criador | Revisor | Frequência de atualização |
|----------|---------|---------|--------------------------|
| `copilot-instructions.md` | Tech Lead | Arquiteto | Por sprint ou mudança de stack |
| `AGENTS.md` | Tech Lead | Todo o time | Por sprint |
| `.instructions.md` | Dev Sênior | Tech Lead | Por mudança de convenção |
| `.prompt.md` | Qualquer dev | Dev Sênior | Quando padrão se repete ≥3x |
| `CODEMAP.md` | Dev + IDE | Tech Lead | Por mudança de topologia |
| `CONSTITUTION.md` | Arquiteto de Segurança | Tech Lead | Por release ou novo requisito de segurança |
| `SPECIFICATION.md` | Product Owner + Dev | Todos | Por feature |
| `IMPLEMENTATION_PLAN.md` | Tech Lead | Dev | Por sprint |

---

## WHEN — Em qual fase do SDLC

```
PROJETO NOVO (Greenfield):
Dia 0:   CONSTITUTION.md → AGENTS.md → copilot-instructions.md
Dia 1:   SPECIFICATION.md → IMPLEMENTATION_PLAN.md
Dia 2+:  .instructions.md por domínio conforme código cresce
Ongoing: CODEMAP.md atualizado a cada mudança de topologia

PROJETO EXISTENTE (Brownfield):
Sprint 1: AGENTS.md + copilot-instructions.md (quick wins)
Sprint 2: CODEMAP.md do código existente
Sprint 3: SPECIFICATION.md retroativa (spec-anchored)
Sprint 4: CONSTITUTION.md + quality gates
Ongoing: .prompt.md para padrões que se repetem
```

---

## WHICH MODEL — Qual modelo usar

| Tarefa de Context Engineering | Modelo | Extended Thinking | Razão |
|-------------------------------|--------|-------------------|-------|
| Criar `CONSTITUTION.md` | Opus 4.6 | ✅ Sim | Decisões de segurança ambíguas, sem feedback loop |
| Criar `SPECIFICATION.md` | Opus 4.6 | ❌ Não | Estruturado, iterativo |
| Criar `IMPLEMENTATION_PLAN.md` | Sonnet 4.6 | ❌ Não | Task decomposition, iterativo |
| Criar/atualizar `CODEMAP.md` | Haiku 4.5 | ❌ Não | Summarização de código existente |
| Criar `.instructions.md` | Sonnet 4.6 | ❌ Não | Refinamento iterativo de convenções |
| Criar `.prompt.md` slash commands | Sonnet 4.6 | ❌ Não | Padrão claro, estruturado |
| Revisar/auditar context files | Sonnet 4.6 | ❌ Não | Análise estruturada |
| Criar `AGENTS.md` | **HUMANO** | N/A | Pesquisa mostra: LLM-generated = -3% success rate |

> 📌 **Regra de ouro**: `AGENTS.md` DEVE ser escrito por humanos.
> Arquivos gerados por LLM têm >20% token overhead e reduzem qualidade.
> Source: Augment Code study citado em 2602.20478, ETH Zurich.

---

## ANTI-PATTERNS — O que evitar

❌ **Compressão excessiva**: Abreviações poupam 17% de input tokens mas aumentam custo total em 67% (reasoning tax — 2604.07502)

❌ **Mega-arquivo único**: Colocar tudo em um copilot-instructions.md de 5000 linhas. Use applyTo para distribuir.

❌ **Context stale**: Criar CODEMAP.md e nunca atualizar. Contexto desatualizado = alucinações.

❌ **Copiar para AGENTS.md o que o LLM gerou**: Pesquisa mostra que instruções geradas por IA não são eficazes. Escreva com suas palavras.

❌ **Background no body de skills**: Coloque background em references, não inline. 60%+ de skills públicas são não-acionáveis (2603.29919).

❌ **Sem applyTo**: Instructions globais são carregadas em todo contexto. Use applyTo para reduzir 68% dos tokens.

---

*Primitive 01 · Context Engineering · v1.0.0 · April 2026*
*Papers: 2602.20478 · 2601.20404 · 2604.07502 · 2603.29919 · 2602.12430*
