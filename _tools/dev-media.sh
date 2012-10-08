#!/bin/sh

DEV_CSS="media/gen/styles-dev.css"
NEWEST_CSS=`ls -t media/gen/styles-????????.css |head -n 1`

rm $DEV_CSS
cp $NEWEST_CSS $DEV_CSS

DEV_JS="media/gen/scripts-dev.js"
NEWEST_JS=`ls -t media/gen/scripts-????????.js |head -n 1`

rm $DEV_JS
cp $NEWEST_JS $DEV_JS
