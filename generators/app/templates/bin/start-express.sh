#!/bin/bash

i="-i"
t="-t"
name="--name express"
rm="--rm"
net="--net=host"
v="-v `pwd`/express:/code"
e="-e"
img="node:alpine"
cmd="echo command goes here"

if [ "$1" = dev ]; then
    cmd="npm --prefix /code run dev"
elif [ "$1" = test ]; then
    cmd="npm --prefix /code run test"
else
    cmd="npm --prefix /code run start"
fi

docker run $i $t $name $rm $net $e $v $img $cmd
