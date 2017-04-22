FROM node:6.9-alpine

RUN mkdir /watcher-app

WORKDIR /watcher-app

ADD package.json /watcher-app/package.json

RUN npm install
RUN npm cache clean

ADD . /watcher-app
