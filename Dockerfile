# Build stage
FROM node:12.20.2-alpine3.10 AS builder

WORKDIR /app

COPY tsconfig.json tsconfig.build.json ./
COPY package.json yarn.lock ./
RUN yarn install

COPY src /app/src
RUN yarn run build && \
    npm prune --production

# Runtime stage
FROM node:12.20.2-alpine3.10

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "dist/main"]