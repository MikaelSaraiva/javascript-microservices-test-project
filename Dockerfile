FROM node:12.13-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app/

RUN npm install 

COPY . /app

CMD ["npm", "start"]