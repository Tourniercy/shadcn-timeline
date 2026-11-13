# syntax=docker/dockerfile:1

# ---- Build stage: Next.js static export ----
FROM node:26.13.1-alpine AS build

WORKDIR /app

# pnpm 10 (lockfile v9) — corepack is no longer bundled with Node 26
RUN npm install -g pnpm@10

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

# ---- Final stage: nginx with patched system libs ----
# apk upgrade purges vulnerable brotli-libs / libxslt versions shipped in the
# base image (KEV CVE-2026-111497, KEV CVE-2026-125350).
FROM nginx:alpine

RUN apk upgrade --no-cache

COPY --from=build /app/out/ /usr/share/nginx/html/

# SPA-safe config: static files first, fallback to index.html for client routes.
# /healthz keeps being served as a plain static file from the export.
RUN <<'EOF'
cat > /etc/nginx/conf.d/default.conf <<'CONF'
server {
    listen 80;
    server_name _;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
CONF
EOF

EXPOSE 80
