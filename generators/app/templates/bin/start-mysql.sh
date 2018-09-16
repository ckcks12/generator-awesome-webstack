#!/bin/bash

docker run -it --rm \
    -e MYSQL_ROOT_PASSWORD=password \
    --name mysql \
    --net=host \
    -v `pwd`/mysql/conf.d:/etc/mysql/conf.d \
    -v `pwd`/mysql/data:/var/lib/mysql \
    mysql:5.7
