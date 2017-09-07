FROM node:8.4.0

EXPOSE 8191
ENV HOME /var/www
VOLUME .:$HOME
WORKDIR ${HOME}
COPY package.json $HOME/package.json
RUN npm install
CMD [ "npm", "start" ]



