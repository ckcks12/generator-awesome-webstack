#!/bin/bash

i="-i"
t="-t"
name="--name vue"
rm="--rm"
net="--net=host"
v="-v `pwd`:/code"
e=""
w="-w /code/vue"
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
