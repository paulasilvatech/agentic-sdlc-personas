---
title: "Primitive 05: Quality Gates and Hooks"
description: "Automated quality checkpoints and agent lifecycle hooks to prevent technical debt"
author: "Paula Silva, AI-Native Software Engineer, Americas Global Black Belt at Microsoft"
date: "2026-04-14"
version: "1.0.0"
status: "approved"
locale: "pt-BR"
tags: ["primitive", "ai-native-sdlc", "quality-gates"]
---

# Primitive 05: Quality Gates & Hooks
*AI-Native SDLC Framework · Paula Silva · Microsoft GBB Americas*
*Research foundation: 2601.13597, 2601.20109, 2603.23448, 2604.02547, 2601.14455, 2602.14572*

---

## WHAT — O que são Quality Gates e Hooks

**Quality Gates** são checkpoints automáticos obrigatórios que código deve passar antes de avançar no pipeline. São a defesa contra a acumulação de dívida técnica causada por agentes sem supervision.

**Hooks** são interceptores no ciclo de execução do agente — `preToolUse` e `postToolUse` — que validam o comportamento do agente antes e depois de cada ação.

### Dois tipos complementares

```
PREVENTIVOS (Hooks — antes do dano):
├─ preToolUse: antes de qualquer edição de arquivo
│  └─ Agente descreve o que entende? Tem test plan? Qual o scope?
└─ postToolUse: após cada edição
   └─ Código compila? Tests passam? Complexity aumentou?

REATIVOS (CI/CD Gates — detectam o dano):
├─ pre-commit: linting + type check
├─ PR gate: tests + security + coverage
├─ Merge gate: integration + quality score
└─ Deploy gate: smoke tests + monitoring check
```

---

## WHY — Por que são obrigatórios com AI

### Evidências científicas

**Sem gates, agentes causam:**
- **+18% static analysis warnings** acumulados (2601.13597, CMU, longitudinal causal study)
- **+39% cognitive complexity** persistente (2601.13597)
- Dívida técnica que **não desaparece** — acumula sprint over sprint

**Merge rate não é proxy de qualidade:**
- Cursor: 331 issues de código, média 8.3 por PR que FOI mergeado (2601.20109, Saskatchewan)
- Merge ≠ qualidade. SonarQube differential analysis mostra code smells críticos/major em PRs merged

**Code Review Agents isolados são insuficientes:**
- CRA-only: **45.20% merge rate** vs **68.37% humano** (gap de 23pp) (2604.03196)
- **60.2%** de PRs com CRA-only têm signal quality de apenas 0-30%
- **40%** de tasks resolvidas pelo melhor agente de code review (c-CRAB benchmark, 2603.23448)

**O padrão de sucesso exige verificação:**
- understand→reproduce→fix→**verify** — o último passo é crítico (2604.02547)
- Hooks `postToolUse` implementam o "verify" automaticamente

**GHA evolution:**
- 7.3% de workflow files modificados por semana (2602.14572) — pipelines precisam de automação
- Nenhum scanner único cobre todas as vulnerabilidades (2601.14455) — combinar ≥2 scanners

---

## HOW — Implementação Completa

### Hook: preToolUse (antes de qualquer edição)

```yaml
# .github/copilot-instructions.md — seção de hooks
## AGENT BEHAVIOR PROTOCOL

### Before ANY file edit (preToolUse):
1. STATE what you understand about the current code state
2. STATE what change you intend to make and why
3. CONFIRM the change is within task scope (CONSTITUTION.md §7 — Excessive Agency)
4. IDENTIFY which tests will be affected
5. ONLY THEN proceed with the edit

### Pattern: understand→reproduce→fix→verify (mandatory)
- UNDERSTAND: Read relevant files. Describe current behavior.
- REPRODUCE: If fixing a bug, confirm you can trigger it.
- FIX: Implement the minimal change.
- VERIFY: Run tests. Confirm change works. Check no regressions.

### Stop and ask human when:
- Change would affect authentication or authorization logic
- Change would affect >5 files
- Change contradicts CONSTITUTION.md
- You're unsure which of 2+ approaches is correct
```

### Hook: postToolUse (após cada edição)

```yaml
### After EVERY file edit (postToolUse):
1. RUN: linting on changed file
2. CHECK: Do existing tests still pass?
3. VERIFY: Did complexity increase? (flag if +10% or more)
4. CONFIRM: Is the change consistent with SPECIFICATION.md?
5. UPDATE: CODEMAP.md if module topology changed
```

---

### Pipeline CI/CD Completo

**Arquivo: `.github/workflows/ai-quality-gate.yml`**

```yaml
name: AI Quality Gate

on:
  pull_request:
    branches: [main, develop]
  push:
    branches: [main]

jobs:
  # GATE 1: Fast checks (< 2 min) — Haiku 4.5 appropriate
  lint-and-typecheck:
    name: Lint & Type Check
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check

  # GATE 2: Unit Tests + Coverage
  test:
    name: Unit Tests & Coverage
    runs-on: ubuntu-latest
    needs: lint-and-typecheck
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm test -- --coverage
      - name: Coverage Gate
        run: |
          COVERAGE=$(cat coverage/coverage-summary.json | jq '.total.lines.pct')
          echo "Coverage: $COVERAGE%"
          if (( $(echo "$COVERAGE < 80" | bc -l) )); then
            echo "❌ Coverage $COVERAGE% is below required 80%"
            exit 1
          fi
          echo "✅ Coverage gate passed"
      - uses: actions/upload-artifact@v4
        with:
          name: coverage-report
          path: coverage/

  # GATE 3: Static Analysis — detects complexity/code smells
  static-analysis:
    name: Static Analysis (SonarQube)
    runs-on: ubuntu-latest
    needs: test
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: SonarQube Scan
        uses: SonarSource/sonarqube-scan-action@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
      - name: SonarQube Quality Gate
        uses: SonarSource/sonarqube-quality-gate-action@master
        env:
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}

  # GATE 4: Security Scanning — 2+ scanners required (2601.14455)
  security:
    name: Security Scan
    runs-on: ubuntu-latest
    needs: lint-and-typecheck
    steps:
      - uses: actions/checkout@v4

      # Scanner 1: Dependency vulnerabilities
      - name: OWASP Dependency Check
        uses: dependency-check/Dependency-Check_Action@main
        with:
          project: '${{ github.repository }}'
          path: '.'
          format: 'JSON'
          args: '--failOnCVSS 7'

      # Scanner 2: Secrets detection
      - name: GitLeaks Secret Scan
        uses: gitleaks/gitleaks-action@v2
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      # Scanner 3: SAST (Static Application Security Testing)
      - name: CodeQL Analysis
        uses: github/codeql-action/analyze@v3
        with:
          languages: javascript, typescript

      # Gate: AI-specific security check (OWASP Top 10 LLM 2025)
      - name: LLM Security Check
        run: |
          # Check for hardcoded API keys or model endpoints
          if grep -r "sk-" src/ --include="*.ts" --include="*.js"; then
            echo "❌ Potential API key found in source"
            exit 1
          fi
          # Check for prompt injection patterns
          echo "✅ LLM security check passed"

  # GATE 5: Integration Tests (on merge to main only)
  integration:
    name: Integration Tests
    runs-on: ubuntu-latest
    needs: [test, security, static-analysis]
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run test:integration
        env:
          DATABASE_URL: ${{ secrets.TEST_DATABASE_URL }}

  # Summary gate — required for PR merge
  quality-summary:
    name: Quality Summary
    runs-on: ubuntu-latest
    needs: [lint-and-typecheck, test, static-analysis, security]
    if: always()
    steps:
      - name: Check all gates
        run: |
          if [[ "${{ needs.lint-and-typecheck.result }}" == "success" &&
                "${{ needs.test.result }}" == "success" &&
                "${{ needs.static-analysis.result }}" == "success" &&
                "${{ needs.security.result }}" == "success" ]]; then
            echo "✅ All quality gates passed"
          else
            echo "❌ One or more quality gates failed"
            exit 1
          fi
```

---

### SonarQube Quality Profile for AI-generated code

**`sonar-project.properties`:**

```properties
sonar.projectKey=[PROJECT_KEY]
sonar.sources=src
sonar.tests=src
sonar.test.inclusions=**/*.test.ts,**/*.spec.ts
sonar.typescript.lcov.reportPaths=coverage/lcov.info

# Stricter thresholds for AI-generated code
# (agents tend to +39% complexity without gates — 2601.13597)
sonar.coverage.exclusions=**/*.test.ts,**/*.spec.ts,**/migrations/**
sonar.cpd.exclusions=**/*.test.ts

# Quality Gate thresholds
# New code (most relevant for AI-generated PRs)
# Coverage: ≥ 80%
# Duplicated lines: ≤ 3%
# Cognitive complexity: ≤ 15 per function (strict — prevents +39% accumulation)
# Security hotspots reviewed: 100%
# Bugs: 0
# Vulnerabilities: 0
# Code smells: ≤ 10 per PR
```

---

### Pre-commit hooks (`.husky/pre-commit`)

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🔍 Running pre-commit quality checks..."

# 1. Lint staged files
npx lint-staged

# 2. Type check
npm run type-check

# 3. Quick security scan
if git diff --cached --name-only | grep -E "\.(env|key|pem|secret)$"; then
  echo "❌ Sensitive file detected in commit"
  exit 1
fi

echo "✅ Pre-commit checks passed"
```

**`package.json` — lint-staged config:**

```json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,yaml,yml}": [
      "prettier --write"
    ]
  }
}
```

---

### PR Template com Quality Checklist

**`.github/PULL_REQUEST_TEMPLATE.md`:**

```markdown
## Summary
[Describe what this PR does]

## Type of change
- [ ] Bug fix
- [ ] New feature
- [ ] Refactoring
- [ ] Documentation
- [ ] Security fix ⚠️ (requires security review — 3.92h average review time, 2601.00477)

## AI-assisted development disclosure
- [ ] This PR was partially or fully generated by an AI agent
- Agent used: [Claude Code | GitHub Copilot | Cursor | Other]
- Human review: [what you manually verified]

## Quality checklist
- [ ] Tests added/updated for all changes
- [ ] Coverage maintained at ≥80%
- [ ] CONSTITUTION.md constraints verified
- [ ] SPECIFICATION.md updated if behavior changed
- [ ] No new static analysis warnings
- [ ] Security implications considered

## For reviewers
- Key files to review: [list]
- Potential risk areas: [list]
- Testing instructions: [how to test this]
```

---

## WHO — Responsabilidades

| Gate | Configura | Mantém | Ignora nunca |
|------|-----------|--------|-------------|
| Pre-commit hooks | Dev Sênior | Todos os devs | Nunca usar `--no-verify` sem aprovação |
| CI/CD pipeline | DevOps/Platform | Tech Lead | Falhas são bloqueadoras |
| SonarQube rules | Arquiteto | Tech Lead | Quality gate é obrigatório no merge |
| Security scanners | Security team | DevOps | CVE High/Critical = bloqueia merge |
| PR template | Tech Lead | Todos | Seção AI disclosure é obrigatória |

---

## WHEN — Cadência de quality gates

```
DIA 0 (setup):   Configurar pre-commit hooks + CI/CD pipeline básico
SPRINT 1:        Adicionar SonarQube + 2+ security scanners
SPRINT 2:        Afinar thresholds com base em baseline do projeto
QUARTERLY:       Revisar thresholds (são muito permissivos? muito rígidos?)
POR MODELO NOVO: Re-calibrar se agente diferente passa a gerar código no projeto
```

---

## WHICH MODEL

| Tarefa | Modelo | Notas |
|--------|--------|-------|
| Configurar pipeline CI/CD | Sonnet 4.6 | Estruturado, padrão claro |
| Analisar falha de gate | Sonnet 4.6 | Diagnóstico estruturado |
| Investigar root cause de falha complexa | Opus 4.6 | understand→reproduce→fix→verify |
| Revisar output de scanner | Haiku 4.5 | Triagem inicial de resultados |
| Criar security review de PR | Opus 4.6 + ET | Decisão de segurança |

---

*Primitive 05 · Quality Gates & Hooks · v1.0.0 · April 2026*
*Papers: 2601.13597 · 2601.20109 · 2603.23448 · 2604.02547 · 2601.14455 · 2602.14572*
