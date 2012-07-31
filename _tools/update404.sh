#!/bin/sh

URL="http://ypcs.fi/404tpl/"
WGET=`which wget`
CURL=`which curl`
GIT=`which git`


CURDIR=`dirname "$0"`

OUTFILE="$CURDIR/../404.html"

$CURL $URL |grep -v 'property="og:' |grep -v 'Original URL' >$OUTFILE
$GIT commit -m "Updated 404 error page" $OUTFILE

