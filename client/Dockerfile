FROM node:12-alpine

RUN apk add --no-cache git

WORKDIR /app

EXPOSE 80

#COPY ./package.json *yarn* ./
#RUN yarn install

COPY . /app

CMD ["sh", "-c", "yarn install; yarn serve"]
