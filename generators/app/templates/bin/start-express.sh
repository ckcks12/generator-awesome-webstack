#!/bin/bash

docker run -it \
    --name express \
    --rm \
    --net=host \
    -v `pwd`/express:/code \
    node:alpine \
    npm --prefix /code run dev
