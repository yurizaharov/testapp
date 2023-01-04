FROM node:19.3.0-alpine3.17

ADD . /opt/webapp/testapp

RUN apk add tzdata curl && \
    ln -s /usr/share/zoneinfo/Europe/Moscow /etc/localtime && \
    rm -rf /var/cache/apk/* && \
    cd /opt/webapp/testapp && npm i

EXPOSE 8080

WORKDIR /opt/webapp/testapp
