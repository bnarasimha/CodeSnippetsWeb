FROM node:boron

RUN mkdir /usr/src/codesnip
WORKDIR /usr/src/codesnip

COPY package.json /usr/src/codesnip
RUN npm install

COPY . /usr/src/codesnip

EXPOSE 8080
CMD ["npm", "start"]