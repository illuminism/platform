FROM node:8.4.0

ENV HOME /var/www
WORKDIR ${HOME}
COPY package.json $HOME/package.json
RUN npm install
EXPOSE 8191
CMD [ "npm", "start" ]



