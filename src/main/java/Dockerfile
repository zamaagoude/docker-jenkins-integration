FROM alpine:latest
RUN apk add --no-cache nodejs npm


WORKDIR /app


COPY package.json /home/package.json
COPY main.js /home/main.js


RUN npm install


EXPOSE 9005


ENTRYPOINT ["node"]

CMD ["main.js"]
