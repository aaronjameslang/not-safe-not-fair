default: etrust.sql outcode.sql

etrust.csv:
	curl https://s3.eu-west-2.amazonaws.com/files.nhsd.io/assets/ods/current/etrust.zip -O
	tar -xf etrust.zip
etrust.sql: etrust.csv etrust.js
	node etrust.js

outcode.csv:
	curl https://www.freemaptools.com/download/outcode-postcodes/postcode-outcodes.csv -o outcode.csv
outcode.sql: outcode.csv outcode.js
	node outcode.js
