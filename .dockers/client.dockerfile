FROM alexsuch/angular-cli:base

LABEL authors="Matthew Harwood <matthhar12@gmail.com>, Alejandro Such <alejandro.such@gmail.com> , Mihai Bob <mihai.m.bob@gmail.com>"
RUN apk update
RUN apk add --no-cache --virtual .gyp \
  python \
  make \
  g++ \
  && yarn global add @angular/cli@1.4.1 \
  && ng set --global packageManager=yarn \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache clear \
  && yarn cache clean \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd
RUN npm rebuild node-sass --force
