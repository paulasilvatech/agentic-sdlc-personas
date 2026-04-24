.PHONY: help dev preview prod build down logs clean ps

help: ## Show this help
	@awk 'BEGIN {FS = ":.*##"; printf "Agentic SDLC Personas · local targets\n\nUsage:\n  make <target>\n\nTargets:\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  %-14s %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

dev: ## Astro dev server with hot reload on http://localhost:4321
	docker compose --profile dev up --build

preview: ## Production build served by Astro preview on http://localhost:4322
	docker compose --profile preview up --build

prod: ## Production nginx image on http://localhost:8080/agentic-sdlc-personas/
	docker compose --profile prod up --build

build: ## Build the static site without starting a server
	docker compose --profile build run --rm build

down: ## Stop all containers
	docker compose down --remove-orphans

logs: ## Tail logs of all running services
	docker compose logs -f

ps: ## List running services
	docker compose ps

clean: ## Remove images and build cache
	docker compose down --remove-orphans
	docker image rm -f agentic-sdlc-personas-dev:latest agentic-sdlc-personas-preview:latest agentic-sdlc-personas-build:latest agentic-sdlc-personas:latest 2>/dev/null || true
	docker builder prune -f
