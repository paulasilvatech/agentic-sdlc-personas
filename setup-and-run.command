#!/usr/bin/env bash
# ============================================================================
# Agentic SDLC Personas — one-click local setup
# Double-click this file (macOS) or run: bash setup-and-run.command
# What it does:
#   1. Moves the folder out of 24-personas-primitives if still nested
#   2. Cleans any stale git lock files
#   3. Commits pending staged files
#   4. Checks Docker Desktop is running
#   5. Builds the Docker image (production profile, nginx)
#   6. Starts the site in background, opens the browser
# ============================================================================

set -e

# Pretty output
BLUE='\033[0;34m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; NC='\033[0m'

say()  { echo -e "${BLUE}==>${NC} $1"; }
ok()   { echo -e "${GREEN}✓${NC}  $1"; }
warn() { echo -e "${YELLOW}!${NC}  $1"; }
fail() { echo -e "${RED}✗${NC}  $1"; exit 1; }

SRC_NESTED="/Users/paulasilva/Documents/workshop/24-personas-primitives/agentic-sdlc-personas"
DEST="/Users/paulasilva/Documents/workshop/agentic-sdlc-personas"

echo ""
echo "============================================================"
echo "  Agentic SDLC Personas · Local Docker Setup"
echo "  Paula Silva · @paulasilvatech"
echo "============================================================"
echo ""

# ----------------------------------------------------------------------------
# 1. Move the folder out of the old workspace
# ----------------------------------------------------------------------------
say "Step 1: Locating the repository"
if [ -d "$DEST/.git" ]; then
  ok "Already at $DEST"
  cd "$DEST"
elif [ -d "$SRC_NESTED/.git" ]; then
  say "Moving from nested workspace to $DEST"
  mv "$SRC_NESTED" "$DEST"
  ok "Moved"
  cd "$DEST"
else
  fail "Could not find the repository. Expected at $DEST or $SRC_NESTED."
fi

# ----------------------------------------------------------------------------
# 2. Clean any stale git lock files from the sandbox session
# ----------------------------------------------------------------------------
say "Step 2: Cleaning stale git locks"
rm -f .git/index.lock .git/index.lock.stale* 2>/dev/null || true
ok "Clean"

# ----------------------------------------------------------------------------
# 3. Finalize the Docker commit
# ----------------------------------------------------------------------------
say "Step 3: Committing pending files"
git add -A
if git diff --cached --quiet; then
  ok "No pending changes, working tree already clean"
else
  git commit -m "feat(docker): multi-stage Dockerfile, docker compose profiles, Makefile, LOCAL_DEV guide

- site/Dockerfile: five stages (deps, dev, build, preview, production)
- site/nginx.conf: production serving with base path, cache, security headers, gzip
- site/.dockerignore
- docker-compose.yml: four profiles (dev 4321, preview 4322, prod 8080, build)
- Makefile: make dev, make preview, make prod, make build, make down, make clean
- LOCAL_DEV.md: full local development guide
- site/pages/style-guide.astro and site/pages/mcp-catalog.astro"
  ok "Committed"
fi

echo ""
say "Commit history:"
git log --oneline | head -5
echo ""

# ----------------------------------------------------------------------------
# 4. Check Docker Desktop
# ----------------------------------------------------------------------------
say "Step 4: Checking Docker Desktop"
if ! command -v docker >/dev/null 2>&1; then
  fail "Docker CLI not found. Install Docker Desktop: https://www.docker.com/products/docker-desktop/"
fi

if ! docker info >/dev/null 2>&1; then
  warn "Docker Desktop is not running. Attempting to start..."
  open -a "Docker" || fail "Could not start Docker Desktop. Open it manually and re-run."
  echo "Waiting up to 60s for Docker to come up..."
  for i in {1..60}; do
    if docker info >/dev/null 2>&1; then
      ok "Docker Desktop is running"
      break
    fi
    sleep 1
    if [ "$i" -eq 60 ]; then
      fail "Docker Desktop did not start within 60s. Open it manually and re-run."
    fi
  done
else
  ok "Docker Desktop is running ($(docker --version))"
fi

# ----------------------------------------------------------------------------
# 5. Build and start production profile (nginx, closest to GitHub Pages)
# ----------------------------------------------------------------------------
say "Step 5: Building Docker image (nginx production profile)"
echo ""
docker compose --profile prod build
echo ""
ok "Build complete"

say "Step 6: Starting container in background"
docker compose --profile prod up -d
echo ""

# ----------------------------------------------------------------------------
# 6. Open browser
# ----------------------------------------------------------------------------
URL="http://localhost:8080/agentic-sdlc-personas/"
say "Step 7: Opening $URL"
sleep 2
open "$URL" 2>/dev/null || true
echo ""

# ----------------------------------------------------------------------------
# Done
# ----------------------------------------------------------------------------
echo ""
echo "============================================================"
echo -e "  ${GREEN}Site is live locally${NC}"
echo "============================================================"
echo ""
echo "  URL:       $URL"
echo "  Container: aspd-prod"
echo "  Logs:      docker compose logs -f production"
echo "  Stop:      docker compose down"
echo ""
echo "  Dev with hot reload (port 4321): make dev"
echo "  Production preview (port 8080):  make prod"
echo "  Clean everything:                make clean"
echo ""
echo "  Repo:      $DEST"
echo ""
