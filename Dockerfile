FROM node:18.16-alpine

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package*.json ./

RUN npm install


EXPOSE 5173

CMD  npm run dev:expose
