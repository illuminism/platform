FROM node:8.4.0

ENV HOME /var/www
WORKDIR ${HOME}

# Install yarn
COPY server/package.json server/tsconfig.json server/nodemon.json $HOME/
RUN npm install
EXPOSE 8191
CMD [ "npm", "start" ]
