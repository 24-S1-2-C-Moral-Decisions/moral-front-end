FROM node:20.11-slim

# Create app directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Install app dependencies
RUN npm run build

# set environment variables
ARG FRONTEND_PORT=3000
ENV PORT=${FRONTEND_PORT}

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

ARG NEXT_PUBLIC_SURVEY_URL
ENV NEXT_PUBLIC_SURVEY_URL=${NEXT_PUBLIC_SURVEY_URL}

# Expose port and start application
EXPOSE $PORT
CMD ["npm", "start"]
