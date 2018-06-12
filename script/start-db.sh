#! /bin/sh
set -eux

if test -z ${CI-}
then cp .env.dev .env
else cp .env.ci  .env
fi

export $(cat .env | xargs)

if test -z ${CI-} && ! psql --dbname postgres -c ''
then docker-compose up -d
sleep 10 # let docker breathe
fi

psql --dbname postgres -c 'DROP DATABASE notsafenotfair' -c 'CREATE DATABASE notsafenotfair'
db-migrate up:all > migrations/log
