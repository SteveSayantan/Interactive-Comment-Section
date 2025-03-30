FROM node:22.14.0-slim

WORKDIR /app/

COPY package.json .

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev"]