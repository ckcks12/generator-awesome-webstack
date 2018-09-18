#!/bin/bash

i="-i"
t="-t"
name="--name express"
rm="--rm"
net="--net=host"
v="-v `pwd`/express:/code"
e=""
w="-w /code/express"
img="node:alpine"
cmd="echo command goes here"

if [ "$1" = dev ]; then
    cmd="yarn && yarn dev"
elif [ "$1" = test ]; then
    cmd="yarn && yarn test"
else
    cmd="yarn && yarn start"
fi

docker run $i $t $name $net $v $e $w $img sh -c "$cmd"
