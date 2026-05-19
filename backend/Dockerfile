<<<<<<< HEAD
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
=======
# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Run TypeScript build to generate the dist folder
RUN npm run build  # Make sure this command generates the dist folder

# Expose the backend port
EXPOSE 5000

# Start the server
>>>>>>> 14ce64eb513b29b3c7ef325765c59590c858231b
CMD ["node", "dist/server.js"]
