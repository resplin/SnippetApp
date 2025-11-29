FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm ci --silent

# Copy all files
COPY . .

RUN npm run build


FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist

RUN npm i -g serve

# Expose port 5173
EXPOSE 5173

# Start the application
CMD ["serve", "-s", "dist", "-l", "5173"]
