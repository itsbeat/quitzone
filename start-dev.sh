#!/bin/bash

ENVS=(dev stage prod)

if [ $# -lt 1 ];
then
  ENV=dev
else
  ENV=$1

  if ! [[ ${ENVS[*]} =~ "$ENV" ]];
  then
    echo "Unrecognized env: $ENV"
    exit 1
  fi
fi

#echo "Using env.$ENV..."
#cp "envs/env.$ENV" .env

echo "Starting nginx ingress container..."
docker network create proxy_network 2> /dev/null
docker-compose -p ingress -f docker-compose.ingress.yml up -d

# echo "Starting LOG containers..."
# docker-compose -f docker-compose.logging.yml up -d

echo "Stopping containers..."
docker-compose down

echo "Starting APP containers..."
docker-compose -f docker-compose.yml up -d

echo "APP Containers status:"
docker-compose -f docker-compose.yml ps
