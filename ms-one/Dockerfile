FROM node:12-alpine

WORKDIR /server
EXPOSE 8080

COPY package*.json ./
EXPOSE 8080

RUN npm install

COPY . .

CMD npm run start
