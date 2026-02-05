FROM node:20-slim AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT 8080
ENV HOSTNAME "0.0.0.0"

# Copy standalone output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# IMPORTANT: Public folder must be inside the app root for standalone mode
COPY --from=builder /app/public ./public

EXPOSE 8080
CMD ["node", "server.js"]
