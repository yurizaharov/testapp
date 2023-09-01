FROM node:19.3.0-alpine3.17

ARG APP_NAME

RUN apk add tzdata curl && \
    ln -s /usr/share/zoneinfo/Europe/Madrid /etc/localtime && \
    rm -rf /var/cache/apk/* && \
    addgroup -g 1001 appgroup && \
    adduser -u 1001 -G appgroup -D appuser

USER appuser

WORKDIR /opt/${APP_NAME}

ADD ./src/ /opt/${APP_NAME}

RUN npm i

EXPOSE 8080
