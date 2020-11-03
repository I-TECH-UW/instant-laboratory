#!/bin/bash

composeFilePath=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

if [ "$1" == "init" ]; then
    # docker-compose -p healthworker -f "$composeFilePath"/docker-compose-mongo.yml up -d

    docker-compose -p healthworker -f "$composeFilePath"/docker-compose.hapi.yml up -d
    docker-compose -p healthworker -f "$composeFilePath"/docker-compose.hapi.config.yml up
    docker-compose -p healthworker -f "$composeFilePath"/docker-compose.ihris.config.yml up
    docker-compose -p healthworker -f "$composeFilePath"/docker-compose.ihris.data.yml up
    docker-compose -p healthworker -f "$composeFilePath"/docker-compose.elastic.yml up -d
    docker-compose -p healthworker -f "$composeFilePath"/docker-compose.ihris.yml up
    # need way to clear existed config stuff


elif [ "$1" == "up" ]; then

    # Wait for mongo replica set to be set up
    # sleep 20

    docker-compose -p healthworker -f "$composeFilePath"/docker-compose.hapi.yml up -d
    docker-compose -p healthworker -f "$composeFilePath"/docker-compose.elastic.yml up -d
    docker-compose -p healthworker -f "$composeFilePath"/docker-compose.ihris.yml up -d

elif [ "$1" == "down" ]; then

    docker-compose -p healthworker -f "$composeFilePath"/docker-compose.hapi.yml stop
    docker-compose -p healthworker -f "$composeFilePath"/docker-compose.elastic.yml stop
    docker-compose -p healthworker -f "$composeFilePath"/docker-compose.ihris.yml stop


elif [ "$1" == "destroy" ]; then

    docker-compose -p healthworker -f "$composeFilePath"/docker-compose-mongo.yml -f "$composeFilePath"/docker-compose.yml -f "$composeFilePath"/docker-compose.dev.yml -f "$composeFilePath"/importer/docker-compose.config.yml down -v

    docker-compose -p healthworker -f "$composeFilePath"/docker-compose.hapi.yml down -v
    docker-compose -p healthworker -f "$composeFilePath"/docker-compose.elastic.yml down -v
    docker-compose -p healthworker -f "$composeFilePath"/docker-compose.ihris.yml down -v

    docker-compose -p healthworker -f "$composeFilePath"/docker-compose.hapi.config.yml down -v
    docker-compose -p healthworker -f "$composeFilePath"/docker-compose.ihris.config.yml down -v
    docker-compose -p healthworker -f "$composeFilePath"/docker-compose.ihris.data.yml down -v

else
    echo "Valid options are: init, up, down, or destroy"
fi