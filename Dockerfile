FROM node:20.11-slim

# Create app directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .
COPY .env/.env.production .env

# Install app dependencies
RUN npm run build

# set environment variables
ARG FRONTEND_PORT=3000
ENV PORT=${FRONTEND_PORT}

# Expose port and start application
EXPOSE $PORT
CMD ["npm", "start"]
