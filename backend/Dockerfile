FROM node:20-alpine

WORKDIR /app

# Copy package.js and install dependencies
COPY package*.json ./
RUN npm ci --silent

# Copy all files
COPY . .

# Generate prisma client and run pending migrations then start

ENV NODE_ENV=production

CMD npx prisma generate && npx prisma migrate deploy --preview-feature || true && node src/index.js
