# syntax=docker/dockerfile:1.7

# ---------- Stage 1: deps ----------
# Install only runtime + build dependencies for Astro + Tailwind + Pagefind
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json ./
# Use npm install (no lockfile committed yet). Switch to `npm ci` once package-lock.json exists.
RUN npm install --no-audit --no-fund

# ---------- Stage 2: dev (hot reload) ----------
FROM node:20-alpine AS dev
WORKDIR /app
ENV HOST=0.0.0.0 \
    PORT=4321 \
    NODE_ENV=development
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 4321
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ---------- Stage 3: build ----------
FROM node:20-alpine AS build
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Build Astro and generate Pagefind index
RUN npm run build

# ---------- Stage 4: preview (Node-based, simplest for local) ----------
FROM node:20-alpine AS preview
WORKDIR /app
ENV HOST=0.0.0.0 \
    PORT=4321 \
    NODE_ENV=production
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/astro.config.mjs ./astro.config.mjs
EXPOSE 4321
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]

# ---------- Stage 5: production (nginx, smallest image) ----------
FROM nginx:alpine AS production
LABEL org.opencontainers.image.title="Agentic SDLC Personas"
LABEL org.opencontainers.image.description="Static site for the Agentic SDLC Personas framework by Paula Silva"
LABEL org.opencontainers.image.source="https://github.com/paulasilvatech/agentic-sdlc-personas"
LABEL org.opencontainers.image.licenses="MIT"
COPY --from=build /app/dist /usr/share/nginx/html/agentic-sdlc-personas
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost:8080/agentic-sdlc-personas/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
