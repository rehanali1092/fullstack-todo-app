FROM node:18-alpine

WORKDIR /app
COPY package*.json ./

RUN npm ci

COPY . .

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm run build

RUN npm install -g serve

# React app serves on port 3000
EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]