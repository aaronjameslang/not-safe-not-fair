default: outcode.sql

outcode.csv:
	curl https://www.freemaptools.com/download/outcode-postcodes/postcode-outcodes.csv -o outcode.csv
outcode.sql: outcode.csv outcode.js
	node outcode.js
