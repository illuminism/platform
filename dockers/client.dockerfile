FROM node:8.4.0
ENV HOME /var/www
WORKDIR ${HOME}

COPY client/package.json client/package-lock.json client/tsconfig.json client/protractor.conf.js client/karma.conf.js client/.angular-cli.json $HOME/
COPY client e23/ $HOME/

RUN npm install

EXPOSE 4200

CMD [ "npm", "start" ]
