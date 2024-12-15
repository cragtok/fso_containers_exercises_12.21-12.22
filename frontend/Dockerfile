FROM node:20

WORKDIR /usr/src/app

COPY . .

EXPOSE 5173

RUN npm install

CMD ["npm", "run", "dev", "--", "--host"]
