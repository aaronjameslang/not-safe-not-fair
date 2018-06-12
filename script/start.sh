#! /bin/sh
set -eux

script/start-db.sh

export $(cat .env | xargs)
export PGHOST=db
export PGPORT=5432
sam local start-api --docker-network=netsafenetfair &
webpack --mode=development --watch &
wait
