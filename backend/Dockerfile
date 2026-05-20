# ============================================================
# Stage 1 - Build TypeScript application
# ============================================================

FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first for layer caching
COPY package*.json ./

# Install all dependencies including devDependencies
RUN npm ci

# Copy source code
COPY . .

# Build TypeScript → dist/
RUN npm run build

# ============================================================
# Stage 2 - Production image
# ============================================================

FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ONLY production dependencies
RUN npm ci --only=production

# Copy compiled dist folder from builder stage
COPY --from=builder /app/dist ./dist

# App Service will route traffic to this port
EXPOSE 3001

# Environment
ENV NODE_ENV=production
ENV PORT=3001

# Start backend server
CMD ["node", "dist/server.js"]