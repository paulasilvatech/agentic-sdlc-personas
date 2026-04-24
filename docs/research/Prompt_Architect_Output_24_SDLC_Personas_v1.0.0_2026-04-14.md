---
title: "Prompt Architect Output: 24 SDLC Personas Analysis Prompt"
description: "Production-grade prompt engineered for Claude Opus 4.6 to analyze all 24 Agentic DevOps SDLC personas with Microsoft/Azure/GitHub tool mapping"
author: "Paula Silva"
date: "2026-04-14"
version: "1.0.0"
status: "approved"
tags: ["prompt-engineering", "agentic-devops", "sdlc-personas", "github-copilot", "model-routing"]
---

# Prompt Architect Output: 24 SDLC Personas Complete Analysis

> Production-grade prompt for generating a comprehensive analysis of all 24 Agentic DevOps SDLC personas, their Microsoft/Azure/GitHub tool ecosystems, SDD primitives mapping, and model routing recommendations.

## Change Log

| Version | Date       | Author      | Changes         |
|---------|------------|-------------|-----------------|
| 1.0.0   | 2026-04-14 | Paula Silva | Initial version |

## Table of Contents

- [1. Request Analysis](#1-request-analysis)
- [2. Model Recommendation](#2-model-recommendation)
- [3. Thinking Configuration](#3-thinking-configuration)
- [4. System Prompt vs User Prompt: Key Differences](#4-system-prompt-vs-user-prompt-key-differences)
- [5. System Prompt](#5-system-prompt)
- [6. User Prompt](#6-user-prompt)
- [7. Design Notes](#7-design-notes)
- [8. Prompt Chain Strategy (Alternative)](#8-prompt-chain-strategy-alternative)
- [9. Anti-Patterns Avoided](#9-anti-patterns-avoided)
- [References](#references)

---

## 1. Request Analysis

Before constructing the prompt, the following dimensions were analyzed per Anthropic's official prompt engineering methodology:

| Dimension | Assessment |
|-----------|------------|
| **Task type** | Multi-step analysis + structured document generation (24 SDLC personas, tool mapping, references) |
| **Complexity** | Very high: 24 profiles, cross-referencing 8+ source documents (6 primitives, PDF, HTML presentation, dozens of URLs), Microsoft/GitHub ecosystem only |
| **Output format** | Markdown document(s), split per persona, with hyperlinked references |
| **Context volume** | Very large (>80K tokens across all uploaded files + URLs provided) |
| **Reliability need** | High: must use ONLY Microsoft/Azure/GitHub products with correct official names |
| **Tool use** | Yes: web_fetch for URL validation, file reading for uploaded materials |
| **Agentic** | Yes: multi-step with research, synthesis, generation, and verification |

**Conclusion**: This requires the most capable model with extended reasoning, operating on a large context window with cross-referencing across multiple documents.

---

## 2. Model Recommendation

| Parameter | Value |
|-----------|-------|
| **Model** | Claude Opus 4.6 |
| **Model string** | `claude-opus-4-6` |
| **Context window** | 200K tokens |
| **Max output** | 32K tokens |

**Why Opus 4.6**: This is a complex synthesis task requiring cross-referencing 8+ source documents, 24 personas, dozens of URLs, and multiple frameworks (SDD, 6 primitives, Agentic DevOps). It requires deep reasoning about how each persona maps to the entire Microsoft/GitHub platform stack. There is no iterative feedback loop (no compiler, no test runner), making this an "open, ambiguous" task where extended thinking is beneficial.

Per the "Modelo Certo, Tarefa Certa" research (Paula Silva, 2026): specification and architecture tasks with high ambiguity, no feedback loop, and large context belong to the Opus 4.6 + Extended Thinking tier.

---

## 3. Thinking Configuration

| Parameter | Value |
|-----------|-------|
| **Mode** | Extended thinking |
| **Trigger word** | "think hard" |
| **Effort** | High |
| **Interleaved thinking** | Yes (for reasoning between document reads) |
| **"Think" tool** | Not needed (single-turn generation, not agentic tool chain) |

**Why "think hard" and not "ultrathink"**: This is a large synthesis task, not an ambiguous architecture decision with competing trade-offs. The reasoning depth needed is for cross-referencing and completeness, not for resolving fundamental ambiguity. "think hard" provides the right balance of depth and efficiency.

**Why NOT standard thinking**: Per the research in Primitive 02 (Model Routing), extended thinking is beneficial for tasks that are open, have no feedback loop, and require maintaining multiple models simultaneously (24 personas x multiple tool dimensions). Standard thinking would risk shallow coverage of later personas due to attention degradation.

---

## 4. System Prompt vs User Prompt: Key Differences

Understanding when to use each is critical for effective prompt engineering.

### What is a System Prompt?

The **system prompt** defines *who Claude is* and *how it behaves* throughout the entire conversation. It is persistent context, set once, that applies to every message in the session.

| Aspect | System Prompt |
|--------|--------------|
| **Purpose** | Define identity, role, constraints, persistent behavior |
| **Persistence** | Active for entire session, all messages |
| **API field** | `system` parameter in the Messages API |
| **Analogy** | Employee handbook that stays on the desk |
| **Token cost** | Charged on every request (always-on) |
| **Changes** | Rarely, typically set once per application |

**What goes in a system prompt:**
- Role and identity ("You are a Senior Technical Content Architect...")
- Hard constraints ("You MUST use only official Microsoft product names")
- Output style preferences ("Never use em dashes")
- Tool availability and usage rules
- Persistent behavioral guidelines

### What is a User Prompt?

The **user prompt** is the specific task instruction. It is what changes with each interaction.

| Aspect | User Prompt |
|--------|------------|
| **Purpose** | Define the specific task, provide task-specific context |
| **Persistence** | Single turn only |
| **API field** | `messages` array with `role: "user"` |
| **Analogy** | The email with today's assignment |
| **Token cost** | Charged once per request |
| **Changes** | Every interaction |

**What goes in a user prompt:**
- The specific task description
- Task-specific context and source documents
- Output format and structure requirements
- Examples relevant to this specific task
- Reference URLs and data for this task

### How They Map to GitHub Copilot Primitives

This is where the distinction becomes concrete in the AI-native SDLC:

| Primitive | Maps to | Reasoning |
|-----------|---------|-----------|
| `copilot-instructions.md` | **System Prompt** | Always loaded, defines persistent agent behavior |
| `AGENTS.md` / `CLAUDE.md` | **System Prompt** | Always loaded, defines agent boundaries |
| `.instructions.md` (applyTo) | **System Prompt** (scoped) | Loaded per file type, persistent within scope |
| `.agent.md` | **System Prompt** | Defines agent persona, model, tools for session |
| `.prompt.md` (slash commands) | **User Prompt** | Loaded on-demand, task-specific |
| `SKILL.md` | **User Prompt** (lazy) | Loaded only when relevant to the task |
| `hooks` | Neither | Shell commands, zero LLM tokens |

### When the Separation Matters

| Context | Separation is... | How it works |
|---------|-----------------|--------------|
| **Anthropic API** | Real and enforced | `system` field vs `messages` array |
| **Claude Code** | Real | `CLAUDE.md` is system; your typed prompt is user |
| **claude.ai** (this chat) | Logical, not enforced | Everything goes in the same turn, but organizing as system + user improves clarity |
| **GitHub Copilot** | Real and layered | `copilot-instructions.md` + `.agent.md` = system; `.prompt.md` + chat input = user |

### Decision Rule

```
Is this instruction about WHO the model is and HOW it behaves?
  YES --> System Prompt

Is this instruction about WHAT specific task to do right now?
  YES --> User Prompt

Is this context always needed regardless of the specific task?
  YES --> System Prompt

Is this context only relevant for this one task?
  YES --> User Prompt
```

---

## 5. System Prompt

The system prompt below defines the persistent identity, constraints, and behavioral rules. In an API call, this goes in the `system` field. In claude.ai, place it at the beginning of your message clearly separated from the task.

```
You are a Senior Technical Content Architect specializing in Microsoft, Azure,
and GitHub platform ecosystems. You work for the Microsoft Software GBB Americas
team covering LATAM enterprise customers.

Your expertise covers:
- The complete GitHub platform (GitHub Copilot, GitHub Actions, GitHub Advanced
  Security, GitHub Codespaces, GitHub Enterprise, GitHub Projects, GitHub Packages,
  GitHub CLI, GitHub Desktop, GitHub Mobile)
- The complete Azure platform (all services listed at azure.microsoft.com/products)
- Microsoft 365, Microsoft Teams, Microsoft Copilot, Copilot Studio, WorkIQ,
  Power Platform, Power Automate, Power BI
- AI-native SDLC practices including Spec-Driven Development (SDD),
  Context Engineering, Model Routing, Agent Skills, Quality Gates, and
  Multi-Agent Orchestration
- The 6 GitHub Copilot primitives (.md files): copilot-instructions.md,
  .instructions.md (with applyTo), .prompt.md, .agent.md, SKILL.md, and hooks
- Spec-Kit and Specky open-source frameworks for SDD integration
- APM (Azure Platform Management) framework

You MUST use only official Microsoft, Azure, and GitHub product names.
Reference: https://docs.github.com/en/billing/reference/product-and-sku-names
           https://azure.microsoft.com/en-us/products
           https://support.microsoft.com/en-us/all-products

You never use em dashes. Use commas, periods, colons, or semicolons instead.
You always write "GitHub Copilot" (full name), never just "Copilot" alone
when referring to the GitHub product. "Microsoft Copilot" is acceptable when
referring to the M365 product specifically.

When recommending tools, always explain the USE CASE (what the persona does
with the tool), not just list the tool name.

When mapping to the 6 primitives, specify whether the persona is a Creator,
Consumer, or Both for each primitive.
```

---

## 6. User Prompt

The user prompt below defines the specific task, provides source context, specifies output format, and locks references. In an API call, this goes in the `messages` array. In claude.ai, this follows the system prompt.

```xml
<task>
Think hard about this request before generating output.

Perform a comprehensive analysis of all 24 SDLC personas from the Agentic DevOps
framework. For each persona, produce a detailed profile covering their complete
tool ecosystem using ONLY Microsoft, Azure, and GitHub platform products.

Split the output into individual markdown sections per persona for maximum depth.
If the full output exceeds a single response, split by persona groups:
Group A (Personas 1-6), Group B (7-12), Group C (13-18), Group D (19-24).
</task>

<source_documents>
The following documents are provided as context. Cross-reference all of them:

1. "Agentic DevOps SDLC Persona AI Impact" (HTML presentation): Contains the 24
   persona definitions, their SDLC phase mapping, and AI transformation impact.

2. "Modelo Certo, Tarefa Certa" (PDF by Paula Silva): Contains model routing
   decisions, VS Code primitives token cost stack, SDD + Chat Mode alignment,
   5 OpenDev workload categories, and the complete routing decision table.

3. Six AI-Native SDLC Primitive documents (01 through 06):
   - 01-context-engineering.md: Three-tier context model, artifact inventory,
     semantic density findings, applyTo token savings
   - 02-model-routing.md: Model selection matrix, extended thinking decision rules,
     escalation/degradation paths, workload types
   - 03-sdd-spec-driven.md: CONSTITUTION/SPECIFICATION/IMPLEMENTATION_PLAN templates,
     3 levels of SDD, EARS notation, violation protocols
   - 04-skills-slash-commands.md: Skill engineering patterns, .prompt.md templates,
     4-tier governance framework, SkillReducer findings
   - 05-quality-gates-hooks.md: CI/CD pipeline YAML, pre/post hooks, PR templates,
     SonarQube configuration for AI-generated code
   - 06-multi-agent-orchestration.md: 4 topologies (parallel/sequential/hierarchical/
     hybrid), planner-coder split pattern, communication tax reduction
</source_documents>

<output_structure>
For EACH of the 24 personas, produce this exact structure:

## [Persona Number]. [Persona Name]
**SDLC Phase**: [which phase(s) they operate in]
**Primary Role**: [1-2 sentence description]

### Microsoft 365 + Business Tools
[Which M365 tools this persona uses: Teams, Outlook, Microsoft Copilot,
Copilot Studio, WorkIQ, Power Platform, Power Automate, Power BI, etc.
Be specific about USE CASES for each tool, not just listing names.]

### Azure Platform Services
[Which Azure services are relevant: Azure DevOps, Azure Container Apps,
Azure Kubernetes Service, Azure API Management, Azure Monitor, Azure
Key Vault, Azure AI Services, etc. Map specific services to specific
tasks this persona performs.]

### GitHub Platform
[Which GitHub features: GitHub Copilot (specify chat modes: Ask/Plan/Agent),
GitHub Actions, GitHub Advanced Security, GitHub Codespaces, GitHub
Enterprise, GitHub Projects, GitHub Packages, GitHub CLI, etc.]

### Advanced Business User Layer: GitHub Copilot Superpowers
[CRITICAL SECTION. Describe how this persona, even if they are NOT a
developer, gains "superpowers" through GitHub Copilot integration.

Examples of what to cover:
- Business Analysts using GitHub Copilot in Ask mode to query codebase behavior
- QA leads using Agent mode for test generation from acceptance criteria
- Security Officers using Ask mode with security-review skills
- Product Owners using /spec slash commands to generate SPECIFICATION.md
- Project Managers viewing GitHub Projects data through Microsoft Copilot
- Compliance Officers using GitHub Advanced Security dashboards

Always connect back to the 6 primitives and explain how they enable this
persona's superpowers. Explain how this integrates with the rest of
their M365/Azure toolset.]

### Six Primitives Mapping
For each primitive, describe how this persona creates or consumes it:

| Primitive | Role (Creator/Consumer/Both) | Specific Use |
|-----------|------------------------------|--------------|
| copilot-instructions.md | [role] | [how they use it] |
| .instructions.md (applyTo) | [role] | [how they use it] |
| .prompt.md (slash commands) | [role] | [which commands they use/create] |
| .agent.md (custom agents) | [role] | [which agents they use/create] |
| SKILL.md (agent skills) | [role] | [which skills they use/create] |
| hooks (pre/postToolUse) | [role] | [which hooks they benefit from] |

### SDD Artifacts Mapping
| Artifact | Role | Model Recommendation |
|----------|------|---------------------|
| CONSTITUTION.md | [Creator/Reviewer/Consumer] | [model + thinking config] |
| SPECIFICATION.md | [Creator/Reviewer/Consumer] | [model + thinking config] |
| IMPLEMENTATION_PLAN.md | [Creator/Reviewer/Consumer] | [model + thinking config] |

### Model Routing for This Persona
| Task | Chat Mode | Model | Extended Thinking | Rationale |
|------|-----------|-------|-------------------|-----------|
| [primary task 1] | [Ask/Plan/Agent] | [model] | [Yes/No] | [why] |
| [primary task 2] | [Ask/Plan/Agent] | [model] | [Yes/No] | [why] |
| [primary task 3] | [Ask/Plan/Agent] | [model] | [Yes/No] | [why] |

### Integration with Broader Ecosystem
[How this persona's tools connect across the stack. Examples:
- Copilot Studio agents triggering GitHub Actions workflows
- WorkIQ insights feeding into GitHub Projects planning
- Teams notifications from GitHub Advanced Security alerts
- Power BI dashboards consuming Azure Monitor data
- Microsoft Copilot summarizing GitHub pull request activity]
</output_structure>

<sdd_best_practices>
When mapping SDD artifacts and primitives, follow these patterns:

1. Spec-Kit (github.com/github/spec-kit) integration for generating and validating
   CONSTITUTION.md, SPECIFICATION.md, and IMPLEMENTATION_PLAN.md
2. Specky as the complementary open-source tool connecting to the ecosystem
3. APM (Azure Platform Management) at microsoft.github.io/apm for platform governance
4. GenAIScript patterns at microsoft.github.io/genaiscript for automation
5. Continuous AI patterns from githubnext.com/projects/continuous-ai
6. GitHub Copilot SDK and agentic workflows from github.com/githubnext/agentics
7. Security architecture for agentic workflows per GitHub blog references
8. Memory system patterns for GitHub Copilot per GitHub blog references
9. The "Advanced Business User" concept: non-developers who use GitHub Copilot
   to interact with code, specs, and DevOps artifacts through natural language,
   gaining capabilities that were previously exclusive to developers
</sdd_best_practices>

<reference_urls>
Lock ALL of the following URLs as hyperlinked references at the end of the
document. Format each as a markdown hyperlink. Group by category.

Microsoft Official:
- https://microsoft.github.io/apm/introduction/what-is-apm/
- https://github.com/microsoft/apm
- https://github.com/microsoft/work-iq
- https://microsoft.github.io/genaiscript/
- https://azure.microsoft.com/en-us/products
- https://support.microsoft.com/en-us/all-products
- https://learn.microsoft.com/pt-br/azure/api-center/overview
- https://code.visualstudio.com/blogs/2025/11/18/privatemarketplace
- https://code.visualstudio.com/docs/enterprise/extensions
- https://developer.microsoft.com/blog/spec-driven-development-spec-kit

GitHub Official:
- https://github.com/github/copilot-plugins
- https://github.com/github/spec-kit
- https://github.com/github/copilot-sdk
- https://github.com/githubnext/agentics
- https://github.com/github/gh-aw
- https://github.com/github/gh-aw-firewall
- https://github.com/github/gh-aw-actions
- https://github.com/github/gh-aw-mcpg
- https://github.github.com/gh-aw/blog/2026-01-12-welcome-to-pelis-agent-factory/
- https://github.com/actions/ai-inference
- https://github.com/continuous-copilot/modernize-legacy-cobol-app
- https://docs.github.com/en/copilot/tutorials/coding-agent/get-the-best-results
- https://docs.github.com/en/copilot/tutorials/vibe-coding
- https://docs.github.com/en/billing/reference/product-and-sku-names

GitHub Blog:
- https://github.blog/ai-and-ml/github-copilot/continuous-ai-for-accessibility-how-github-transforms-feedback-into-inclusion/
- https://github.blog/ai-and-ml/github-copilot/the-era-of-ai-as-text-is-over-execution-is-the-new-interface/
- https://github.blog/ai-and-ml/generative-ai/under-the-hood-security-architecture-of-github-agentic-workflows/
- https://github.blog/ai-and-ml/github-copilot/building-an-agentic-memory-system-for-github-copilot/
- https://githubnext.com/projects/continuous-ai
- https://github.blog/ai-and-ml/github-copilot/how-we-automated-accessibility-compliance-in-five-hours-with-github-copilot/
- https://github.blog/ai-and-ml/github-copilot/from-idea-to-pull-request-a-practical-guide-to-building-with-github-copilot-cli/

Anthropic Engineering:
- https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- https://www.anthropic.com/engineering/writing-tools-for-agents
- https://www.anthropic.com/engineering/building-effective-agents
- https://code.claude.com/docs/en/common-workflows#use-plan-mode-for-safe-code-analysis

SDD and Spec-Driven Development:
- https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html
- https://medium.com/@visrow/comprehensive-guide-to-spec-driven-development-kiro-github-spec-kit-and-bmad-method-5d28ff61b9b1
- https://levelup.gitconnected.com/why-spec-driven-development-made-me-5x-more-productive-af260b2c2bd4
- https://medium.com/@dave-patten/spec-driven-development-designing-before-you-code-again-21023ac91180
</reference_urls>

<formatting_rules>
1. Write everything in English
2. Use markdown format throughout
3. Never use em dashes; use commas, periods, colons, or semicolons instead
4. Always write "GitHub Copilot" (full name), never just "Copilot" alone
5. All product names must match official Microsoft/GitHub naming exactly
6. References at the end must be clickable markdown hyperlinks: [Title](URL)
7. Group references by: Microsoft Official | GitHub Official | GitHub Blog |
   Anthropic Engineering | SDD Resources
8. If output exceeds single response, split by persona groups:
   Group A (Personas 1-6), Group B (7-12), Group C (13-18), Group D (19-24)
9. Each persona section must include ALL subsections from the output_structure;
   do not skip any subsection for any persona
</formatting_rules>
```

---

## 7. Design Notes

### 7.1 Why XML Structure with Named Sections

Each `<section>` serves a distinct purpose (source documents, output structure, references, formatting rules), allowing the model to process them independently. This follows Anthropic's official recommendation for complex prompts with multiple content types (Anthropic Docs: "Use XML Tags").

### 7.2 Why Explicit Output Template Per Persona

The detailed table structure for each persona prevents the model from giving shallow coverage of later personas due to attention degradation. Claude 4.x follows precise format instructions closely, so the template ensures every persona gets identical depth of coverage.

### 7.3 Why "Advanced Business User" as a Dedicated Section

This is the key differentiator: non-developer personas gaining "superpowers" through GitHub Copilot. Making it a mandatory section per persona (with examples) ensures the model never skips it or treats it as optional. This directly addresses the user's requirement to show how GitHub Copilot adds superpowers to business users and how it integrates with the rest of the M365/Azure stack.

### 7.4 Why Locked Reference URLs in Their Own Section

By providing all URLs upfront in `<reference_urls>`, the model validates and formats them correctly rather than inventing or misformatting links. The grouping instruction ensures the final document has a clean, organized references section.

### 7.5 Why Split Strategy is Built In

The formatting rules include explicit guidance to split by persona groups if the output exceeds context limits. This prevents incomplete output where the model runs out of tokens at persona 18 and stops.

### 7.6 Why "think hard" Trigger Word

Per Claude Code documentation, "think" < "think hard" < "think harder" < "ultrathink" map to increasing thinking budgets. This task needs deeper reasoning than standard but is not at the "ultrathink" level (which is for the hardest problems like security architecture or novel algorithm design).

### 7.7 Why System and User Prompts are Separated

The system prompt contains identity, constraints, and behavioral rules that would apply regardless of the specific task. The user prompt contains the specific task, source documents, output structure, and references. If the user later wants to analyze a different set of personas or generate a different document type, only the user prompt changes; the system prompt remains the same.

---

## 8. Prompt Chain Strategy (Alternative)

If the single-prompt approach produces insufficient depth per persona, use this 4-step chain:

| Step | Purpose | Model | Input | Output |
|------|---------|-------|-------|--------|
| **Chain 1** | Extract 24 persona definitions | Sonnet 4.6 | HTML presentation file | Structured list of 24 personas with SDLC phase and role |
| **Chain 2** | Generate Group A (Personas 1-6) | Opus 4.6 + ET | Chain 1 output + all source docs + URLs | Complete markdown for 6 personas |
| **Chain 3** | Generate Group B-D | Opus 4.6 + ET | Chain 1 output + all source docs + URLs (repeat for each group) | Complete markdown for remaining personas |
| **Chain 4** | Compile + validate | Sonnet 4.6 | All group outputs | Final consolidated document with validated product names and hyperlinks |

**When to use chaining over single prompt**: If the single-prompt output starts degrading quality after persona 12-15 (shorter sections, missing subsections, generic tool recommendations), switch to the chaining approach. The trade-off: chaining loses cross-referencing ability between persona groups but gains depth within each group.

---

## 9. Anti-Patterns Avoided

This prompt was designed to avoid the following common mistakes identified in Anthropic's official documentation and academic research:

| Anti-Pattern | How This Prompt Avoids It |
|--------------|--------------------------|
| **Over-prompting with CRITICAL/MUST** | Uses normal language throughout; Claude 4.x is more steerable and does not need aggressive capitalization |
| **Vague success criteria** | Explicit output template with required subsections per persona |
| **Ignoring model strengths** | Opus 4.6 selected for synthesis (correct), not Haiku (insufficient) or Sonnet (borderline for this complexity) |
| **Skipping context/motivation** | System prompt explains WHY the role exists and WHAT expertise is needed |
| **Negative instructions only** | Uses positive instructions ("Write GitHub Copilot full name") rather than only negatives |
| **Thinking sensitivity** | Uses "think hard" explicitly at the start of user prompt; avoids ambiguous "think" in other contexts |
| **Contradictory examples** | No examples provided that could conflict with instructions; output template is the example |
| **Extended thinking on iterative tasks** | Correctly applies ET here (open synthesis task, no feedback loop) per Primitive 02 research showing ET harms iterative tasks by -30% quality |

---

## References

### Anthropic Official Documentation
- [Prompting Best Practices (Claude 4.x)](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices)
- [Extended Thinking](https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking)
- [Adaptive Thinking](https://docs.anthropic.com/en/docs/build-with-claude/adaptive-thinking)
- [Prompt Engineering Overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
- [Use XML Tags](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags)
- [Be Clear and Direct](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/be-clear-and-direct)
- [Use Examples (Multishot)](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/multishot-prompting)
- [Chain Complex Prompts](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-prompts)
- [Long Context Tips](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/long-context-tips)
- [Extended Thinking Tips](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/extended-thinking-tips)

### Anthropic Engineering Blog
- [The "Think" Tool: Enabling Claude to Stop and Think](https://www.anthropic.com/engineering/claude-think-tool)
- [Effective Context Engineering for AI Agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents)
- [Writing Tools for Agents](https://www.anthropic.com/engineering/writing-tools-for-agents)

### Anthropic Tutorials
- [Interactive Prompt Engineering Tutorial (GitHub)](https://github.com/anthropics/prompt-eng-interactive-tutorial)
- [Claude Code Best Practices](https://code.claude.com/docs/en/best-practices)

### Academic Papers
- [Schulhoff et al. (2024). "The Prompt Report: A Systematic Survey of Prompting Techniques." arXiv:2406.06608](https://arxiv.org/abs/2406.06608)
- [Sahoo et al. (2024). "A Systematic Survey of Prompt Engineering in Large Language Models." arXiv:2402.07927](https://arxiv.org/abs/2402.07927)
- [Vatsal & Dubey (2024). "A Survey of Prompt Engineering Methods in LLMs for Different NLP Tasks." arXiv:2407.12994](https://arxiv.org/abs/2407.12994)
- [TechRxiv (2025). "A Comprehensive Survey of Prompt Engineering Techniques in Large Language Models."](https://www.techrxiv.org/users/898487/articles/1274333-a-comprehensive-survey-of-prompt-engineering-techniques-in-large-language-models)

### Source Material (Paula Silva)
- Paula Silva (2026). "Modelo Certo, Tarefa Certa: LLM Routing Baseado em Evidencias ao Longo do SDLC"
- Paula Silva (2026). "AI-Native SDLC Framework: 6 Primitives" (01-context-engineering through 06-multi-agent-orchestration)
- Paula Silva (2026). "Agentic DevOps SDLC Persona AI Impact" (presentation)

### Community Resources
- [Learn Prompting: The Prompt Report Companion](https://learnprompting.org/blog/the_prompt_report)
- [Prompt Engineering Guide (DAIR.AI)](https://www.promptingguide.ai/papers)
- [Claude Prompt Engineering Handbook (Community)](https://github.com/ThamJiaHe/claude-prompt-engineering-guide)
