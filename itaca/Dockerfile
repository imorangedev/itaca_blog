# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Runtime
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4000

COPY --from=builder /app/dist/itaca ./dist/itaca

EXPOSE 4000

CMD ["node", "dist/itaca/server/server.mjs"]
