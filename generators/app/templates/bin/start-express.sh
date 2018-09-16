#!/bin/bash

docker run -it --rm --net=host -v `pwd`/express:/code node:10 npm --prefix /code run start
