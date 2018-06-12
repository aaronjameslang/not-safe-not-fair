#! /bin/sh
set -eux

script/start-db.sh

if ! test -f dist/index.html
then mkdir -p dist
echo TODO > dist/index.html
fi

eslint --ext .js,.jsx . --fix || true
mocha
eslint --ext .js,.jsx .
git diff --exit-code --text
webpack --mode=production
