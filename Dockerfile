FROM node:lts-alpine

WORKDIR /usr/src

COPY ./package.json .

COPY ./yarn.lock .

RUN yarn

COPY . .

EXPOSE 5000

CMD yarn start
