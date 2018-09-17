#!/bin/bash

docker run -it --rm \
    --name vue-webpack \
    --net=host \
    -v `pwd`/vue:/code \
    node:alpine \
    npm --prefix /code run build
