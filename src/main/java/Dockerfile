FROM alpine:latest
RUN apk add --no-cache nodejs npm


WORKDIR /app


COPY ../../test/java /app


RUN npm install


EXPOSE 9005


ENTRYPOINT ["node"]

CMD ["main.js"]
