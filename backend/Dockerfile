# Stage 1: Build stage
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy rest of the application source code
COPY . .

# Run TypeScript build to generate the dist folder
RUN npm run build

# Stage 2: Production stage (smaller final image)
FROM node:18-alpine
WORKDIR /app

# Copy package files and install only production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy built code from the builder stage
COPY --from=builder /app/dist ./dist

# Expose the port the app runs on
EXPOSE 3001

# Start the application
CMD ["node", "dist/server.js"]
