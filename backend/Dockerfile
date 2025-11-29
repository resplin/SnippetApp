# Use Node.js base image
FROM node:22

# Install OpenSSL (Prisma requires libssl)
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package.js and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Generate Prisma client before runtime
RUN npx prisma generate

# Expose port 5000
EXPOSE 5000

# Automatically run migrations and start the app
CMD ["sh", "-c", "npm run prisma:migrate && npm start"]
