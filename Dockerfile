FROM node:10.16.3

RUN mkdir /myapp
WORKDIR /myapp

COPY . /myapp
