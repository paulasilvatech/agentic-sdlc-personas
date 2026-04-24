---
title: "Primitive 02: Model Routing"
description: "Systematic strategy for assigning the right model to the right task by SDLC phase"
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-14"
version: "1.0.0"
status: "approved"
locale: "pt-BR"
tags: ["primitive", "ai-native-sdlc", "model-routing"]
---

# Primitive 02: Model Routing
*AI-Native SDLC Framework · Paula Silva · Microsoft GBB Americas*
*Research foundation: 2505.01622, 2603.05344, 2601.14470, 2602.16873, 2604.02547*

---

## WHAT — O que é Model Routing

Model Routing é a **estratégia sistemática de atribuir o modelo correto** (Opus/Sonnet/Haiku) **ao tipo correto de tarefa** no ciclo SDLC, com a configuração correta de extended thinking, para maximizar qualidade e minimizar custo.

Com os modelos convergindo em performance, **a escolha de topologia e routing domina a escolha de modelo** como driver de sucesso (AdaptOrch, 2602.16873). Routing errado = custo 3x+ sem ganho de qualidade — ou qualidade 30% pior com o modelo errado.

### Os três modelos e seus perfis

| Modelo | Custo Relativo | Contexto | Melhor para |
|--------|---------------|---------|------------|
| **Claude Opus 4.6** | 3x (baseline Sonnet) | Até 200K tokens | Spec, arquitetura, segurança, decisões ambíguas |
| **Claude Sonnet 4.6** | 1x (baseline) | Até 200K tokens | Implementação, TDD, code review, análise estruturada |
| **Claude Haiku 4.5** | 0.33x | Até 200K tokens | Summarização, ask/chat, boilerplate, tarefas simples |

### Extended Thinking — quando usar e quando NÃO usar

| Contexto | Extended Thinking | Resultado esperado |
|---------|-------------------|-------------------|
| Spec/arquitetura aberta (ambígua, sem feedback loop) | ✅ **SIM** | Melhor cobertura de edge cases, reasoning mais profundo |
| Security analysis (cenários de ameaça) | ✅ **SIM** | Identificação de vetores não-óbvios |
| Implementation TDD iterativo | ❌ **NÃO** | **-30% quality**, **+43% cost** (2505.01622) |
| Code review estruturado | ❌ **NÃO** | Overhead sem benefício |
| Test generation | ❌ **NÃO** | Iterativo, padrão claro |
| Documentação | ❌ **NÃO** | Overhead sem benefício |
| Summarização/Ask | ❌ **NÃO** | Simples demais |

> ⚠️ **REGRA CRÍTICA**: Extended thinking prejudica tarefas iterativas com feedback loop.
> Use **somente** para tarefas abertas onde não há uma resposta certa/errada clara
> e onde o agente não pode testar sua solução imediatamente.

---

## WHY — Por que importa

### Evidências científicas

**Extended thinking:**
- Implementação iterativa com extended thinking: **-30% quality degradation**, **+43% cost increase** (2505.01622, benchmark controlado)
- Spec/arquitetura com extended thinking: **benefício positivo** para tarefas abertas e ambíguas

**Token economy por fase SDLC:**
- Code Review = **59.42% de todos os tokens** em LLM-MA systems (2601.14470, Concordia, 30 traces)
- Input tokens = **53.9%** do total (refinement > generation)
- → Usar Haiku em review de primeiro nível, Sonnet para análise profunda

**LLM vs Framework:**
- **LLM capability > framework design** como driver de sucesso (2604.02547, NC State, 9,374 trajectories)
- À medida que modelos melhoram, diferenças entre frameworks diminuem
- → Investir no modelo certo é mais impactante que otimizar o framework

**Topologia de orquestração:**
- Com modelos convergindo em performance, **topologia domina seleção de modelo** (2602.16873)
- 4 topologias: parallel/sequential/hierarchical/hybrid → **12-23% improvement** sobre estática

**5 Workload Types (OpenDev — 2603.05344):**
- Cada tipo tem binding ideal a um modelo
- Mapear workloads → modelos = economia de 40-60% de custo em projetos reais

---

## HOW — Tabela de Decisão Completa

### Por fase SDLC

| Fase SDLC | Tarefa específica | Modelo | Extended Thinking | Topologia |
|-----------|------------------|--------|-------------------|-----------|
| **Requirements** | Escrever requisitos funcionais | Sonnet 4.6 | ❌ | Sequential |
| **Requirements** | Criar CONSTITUTION.md | Opus 4.6 | ✅ | Sequential |
| **Requirements** | Revisar/validar spec | Sonnet 4.6 | ❌ | Sequential |
| **Architecture** | Design de sistema | Opus 4.6 | ✅ | Sequential |
| **Architecture** | ADR (Architecture Decision Record) | Opus 4.6 | ✅ | Sequential |
| **Architecture** | Criar CODEMAP.md | Haiku 4.5 | ❌ | Sequential |
| **Implementation** | Geração de código novo | Sonnet 4.6 | ❌ | Hierarchical |
| **Implementation** | Refactoring | Sonnet 4.6 | ❌ | Sequential |
| **Implementation** | IaC (Terraform/Bicep) | Sonnet 4.6 | ❌ | Sequential + verifier loop |
| **Testing** | Geração de unit tests | Sonnet 4.6 | ❌ | Parallel |
| **Testing** | Análise de cobertura | Haiku 4.5 | ❌ | Sequential |
| **Testing** | Test characterization (legacy) | Sonnet 4.6 | ❌ | Sequential |
| **Code Review** | First pass (style/lint) | Haiku 4.5 | ❌ | Parallel |
| **Code Review** | Security review | Opus 4.6 | ✅ | Sequential |
| **Code Review** | Logic/correctness review | Sonnet 4.6 | ❌ | Sequential |
| **Documentation** | Docstrings/comments | Haiku 4.5 | ❌ | Parallel |
| **Documentation** | Technical docs/README | Sonnet 4.6 | ❌ | Sequential |
| **Operations** | Summarização de logs | Haiku 4.5 | ❌ | Parallel |
| **Operations** | Incident analysis | Sonnet 4.6 | ❌ | Sequential |
| **Operations** | Root cause analysis complexo | Opus 4.6 | ✅ | Sequential |

### Por workload type (OpenDev framework — 2603.05344)

| Workload Type | Descrição | Modelo ideal | Notas |
|--------------|-----------|-------------|-------|
| **Execution** | Uso de ferramentas, comandos | Sonnet 4.6 | Precisa de tool use confiável |
| **Thinking** | Raciocínio complexo, planejamento | Opus 4.6 | +ET para tarefas abertas |
| **Compaction** | Compressão de contexto, summarização | Haiku 4.5 | Custo mínimo, tarefa simples |
| **Subagent** | Delegação para agentes especializados | Haiku→Sonnet | Depende da task delegada |
| **Vision** | Análise de imagens, diagramas | Sonnet 4.6 | Capacidade multimodal |

### Regras de escalação

```
ESCALAÇÃO (upgrade):
Haiku → Sonnet: se task envolve lógica condicional complexa ou depende de contexto > 5 arquivos
Haiku → Sonnet: se Haiku falhou na mesma task 2 vezes
Sonnet → Opus:  se task envolve decisão de segurança ou arquitetura
Sonnet → Opus:  se resultado precisa ser defendido para stakeholders
Sonnet → Opus:  se tarefa não tem resposta correta clara (ambígua/exploratória)

DEGRADAÇÃO (downgrade para custo):
Opus → Sonnet:  para tasks com feedback loop (iterativo, testável)
Opus → Sonnet:  para tasks estruturadas com spec clara
Sonnet → Haiku: para tasks de summarização ou single-turn informational
```

---

## Configuração em copilot-instructions.md

Adicionar esta seção no Tier 1 (hot-memory):

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

## WHO — Responsabilidades

| Responsabilidade | Quem |
|-----------------|------|
| Definir routing rules no copilot-instructions.md | Tech Lead |
| Atualizar routing quando modelo novo disponível | Tech Lead |
| Aplicar routing nas tasks diárias | Todos os devs |
| Auditar custo e ajustar downward quando possível | Tech Lead + Platform |
| Criar skill routing triggers no Tier 1 | Dev Sênior |

---

## WHEN — Cadência

```
DIA 0 (setup):     Definir routing table no copilot-instructions.md
SPRINT REVIEW:     Auditar custo por fase — estamos usando Opus onde deveríamos usar Haiku?
MODELO NOVO:       Retestar benchmarks e atualizar tabela (modelos evoluem rapidamente)
NOVO DOMAIN:       Adicionar regras de domínio específico (ex: fintech → segurança extra em Opus)
```

---

## WHICH MODEL — Para criar o routing

| Tarefa | Modelo | Notas |
|--------|--------|-------|
| Definir routing table inicial | Opus 4.6 + ET | Decisão estratégica, impacto de custo longo prazo |
| Atualizar routing table | Sonnet 4.6 | Incremental, estruturado |
| Auditar custos e ajustar | Haiku 4.5 | Análise de dados, comparação de números |

---

## QUICK REFERENCE — Decision Flowchart

```
É uma decisão de SEGURANÇA ou ARQUITETURA?
├─ Sim → Opus 4.6 + Extended Thinking
└─ Não ↓

É ITERATIVO com feedback loop (TDD, implementação)?
├─ Sim → Sonnet 4.6 (sem ET — ET prejudica iteração)
└─ Não ↓

É ABERTO e AMBÍGUO (sem resposta certa clara)?
├─ Sim → Opus 4.6 + Extended Thinking
└─ Não ↓

É SIMPLES (summarização, docs, single-turn)?
├─ Sim → Haiku 4.5
└─ Não → Sonnet 4.6 (default seguro)
```

---

*Primitive 02 · Model Routing · v1.0.0 · April 2026*
*Papers: 2505.01622 · 2603.05344 · 2601.14470 · 2602.16873 · 2604.02547*
