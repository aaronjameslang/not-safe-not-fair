default: location.sql outcode.sql

location.sql: etrust.sql epraccur.sql scotorg.sql
	cat $^ > $@

etrust.csv:
	curl https://s3.eu-west-2.amazonaws.com/files.nhsd.io/assets/ods/current/etrust.zip -O
	tar -xf etrust.zip
etrust.sql: etrust.csv etrust.js
	node etrust.js

epraccur.csv:
	curl https://s3.eu-west-2.amazonaws.com/files.nhsd.io/assets/ods/current/epraccur.zip -O
	tar -xf epraccur.zip
epraccur.sql: epraccur.csv epraccur.js
	node epraccur.js

outcode.csv:
	curl https://www.freemaptools.com/download/outcode-postcodes/postcode-outcodes.csv -o outcode.csv
outcode.sql: outcode.csv outcode.js
	node outcode.js

scotorg.csv:
	curl https://s3.eu-west-2.amazonaws.com/files.nhsd.io/assets/ods/current/scotorg.zip -O
	tar -xf scotorg.zip
scotorg.sql: scotorg.csv scotorg.js
	node scotorg.js
