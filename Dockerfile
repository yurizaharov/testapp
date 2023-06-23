FROM node:19.3.0-alpine3.17

RUN apk add tzdata curl && \
    ln -s /usr/share/zoneinfo/Europe/Moscow /etc/localtime && \
    rm -rf /var/cache/apk/* && \
    addgroup -S appuser && \
    adduser -S appuser -G appuser

USER appuser

WORKDIR /opt/testapp

ADD ./src/ /opt/testapp

RUN npm i

EXPOSE 8080
