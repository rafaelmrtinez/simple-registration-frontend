FROM node:24.18.0-trixie AS builder

WORKDIR /app

RUN apt update -y && apt upgrade -y

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview", "--", "--host"]