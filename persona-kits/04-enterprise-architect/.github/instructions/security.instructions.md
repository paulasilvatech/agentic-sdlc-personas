---
applyTo: "src/auth/**,src/crypto/**,**/config/**"
---

# Security Conventions

## Auth: bcrypt/argon2, rate limiting, MFA for admin
## Authz: every request, least privilege, resource-level
## Input: parameterized queries, sanitize HTML, validate uploads
## Agent: no self-granted permissions, no prod DB without approval
