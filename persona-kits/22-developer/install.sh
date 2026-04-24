#!/usr/bin/env bash
set -euo pipefail

# Developer Persona Kit Installer
# Copies agent, prompt, and instruction files into the target project.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET="${1:-.}"

echo "Installing Developer persona kit into: $TARGET"

# Create directories
mkdir -p "$TARGET/.github/agents"
mkdir -p "$TARGET/.github/prompts"
mkdir -p "$TARGET/.github/instructions"

# Copy agent
cp "$SCRIPT_DIR/.github/agents/implementer.agent.md" "$TARGET/.github/agents/"

# Copy prompts
for prompt in implement tdd fix-bug refactor; do
  cp "$SCRIPT_DIR/.github/prompts/${prompt}.prompt.md" "$TARGET/.github/prompts/"
done

# Copy instructions
for instr in typescript tests sql; do
  cp "$SCRIPT_DIR/.github/instructions/${instr}.instructions.md" "$TARGET/.github/instructions/"
done

# Copy MCP config (merge if exists)
if [ -f "$TARGET/mcp.json" ]; then
  echo "⚠️  mcp.json already exists in target. Manual merge required."
  echo "   Source: $SCRIPT_DIR/mcp.json"
else
  cp "$SCRIPT_DIR/mcp.json" "$TARGET/"
fi

# Copy hooks config
if [ -f "$TARGET/hooks.json" ]; then
  echo "⚠️  hooks.json already exists in target. Manual merge required."
else
  cp "$SCRIPT_DIR/hooks.json" "$TARGET/"
fi

echo "✅ Developer persona kit installed successfully."
echo ""
echo "Next steps:"
echo "  1. Review .github/agents/implementer.agent.md"
echo "  2. Customize .github/instructions/ for your stack"
echo "  3. Validate mcp.json servers are accessible"
echo "  4. Run: git add .github/ mcp.json hooks.json"
