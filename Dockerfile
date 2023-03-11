FROM node:19.3.0-alpine3.17

RUN apk add tzdata curl && \
    ln -s /usr/share/zoneinfo/Europe/Moscow /etc/localtime && \
    rm -rf /var/cache/apk/* &&\
    mkdir -p /opt/webapp/testapp

COPY ./src/package.json ./src/common ./src/router /opt/webapp/testapp/

RUN cd /opt/webapp/testapp && npm i

EXPOSE 8080

WORKDIR /opt/webapp/testapp
