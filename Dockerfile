FROM node:8.4.0

ENV HOME=/home
ENV CLIENT=$HOME/client
ENV ADMIN=$HOME/admin
ENV SERVER=$HOME/server
WORKDIR $HOME

RUN npm install yarn -g
RUN yarn add nodemon -g
RUN yarn add typescript -g
RUN yarn add ts-node -g
RUN yarn add @angular/cli -g

COPY server/ $SERVER
COPY admin/ $ADMIN
COPY client/ $CLIENT

EXPOSE 4200
