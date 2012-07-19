#!/bin/sh

URL="http://ypcs.fi/404tpl.html"
WGET=`which wget`
GIT=`which git`


CURDIR=`dirname "$0"`

OUTFILE="$CURDIR/../404.html"

$WGET -O $OUTFILE $URL
$GIT commit -m "Updated 404 error page" $OUTFILE

