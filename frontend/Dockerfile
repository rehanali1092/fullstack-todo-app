<<<<<<< HEAD
# Stage 1: Build the React application
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Pass the backend URL as a build argument
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx config (to support React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
=======
# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json for npm install
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the frontend files into the container
COPY . .

# Expose port 3000 for the frontend
EXPOSE 3000

# Start the frontend application
CMD ["npm", "start"]
>>>>>>> 14ce64eb513b29b3c7ef325765c59590c858231b
