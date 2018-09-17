#!/bin/bash

echo ==============================
if [ "$1" = dev ]; then
    echo development
elif [ "$1" = test ]; then
    echo test
else
    echo production
fi
echo ==============================
