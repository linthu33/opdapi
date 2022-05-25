FROM node:16-alpine

WORKDIR /OPDService

COPY package.*json .

RUN npm install

COPY . .

CMD ["npm","run","dev:start"]