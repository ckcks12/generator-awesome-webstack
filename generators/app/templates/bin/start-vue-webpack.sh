#!/bin/bash

docker run -it --rm \
    --name webpack \
    --net=host \
    -v `pwd`/vue:/code \
    node:10 \
    npm --prefix /code run build
