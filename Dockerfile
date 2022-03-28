# syntax=docker/dockerfile:1

FROM node:14.16.0
# ENV NODE_ENV=production

EXPOSE 4000

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci

COPY . .

CMD ["node", "server.js"]