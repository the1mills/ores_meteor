#!/usr/bin/env bash

NITROUS_APP_PATH=/home/$NITROUS_USERNAME/code/ores_meteor

cd $NITROUS_APP_PATH
HOME=/home/$NITROUS_USERNAME meteor --port 0.0.0.0:$NITROUS_PREVIEW_PORT
