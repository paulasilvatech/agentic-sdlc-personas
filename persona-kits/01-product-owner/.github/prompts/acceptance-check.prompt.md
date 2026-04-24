---
mode: ask
model: claude-sonnet-4-6
description: "Verify code matches SPECIFICATION.md acceptance criteria. Use during UAT or sprint review."
---

# /acceptance-check

## Steps
1. Read relevant SPECIFICATION.md section
2. Extract all Given/When/Then criteria
3. Search codebase for matching implementations
4. Search test files for coverage
5. Produce compliance report

## Output
| Criterion | Implemented | Tested | Status |
|-----------|-------------|--------|--------|
| [text]    | Yes/No      | Yes/No | Pass/Fail/Gap |
