#!/bin/sh

webassets -q -c _assets.yml build
`dirname "$0"`/dev-media.sh
