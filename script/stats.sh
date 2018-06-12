#! /bin/sh
set -eux

webpack --mode=production --config webpack.config.client.js --profile --json > stats.client.json &
webpack --mode=production --config webpack.config.server.js --profile --json > stats.server.json &
wait
