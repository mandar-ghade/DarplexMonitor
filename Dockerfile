FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 1000

ENV ADDRESS=0.0.0.0 PORT=1000

CMD ["npm", "start"]