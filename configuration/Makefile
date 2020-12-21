default: location.sql outcode.sql jwks

location.sql: etrust.sql epraccur.sql scotorg.sql
	cat $^ > $@

etrust.csv:
	curl https://files.digital.nhs.uk/assets/ods/current/etrust.zip -O
	unzip etrust.zip
etrust.sql: etrust.csv etrust.js
	node etrust.js

epraccur.csv:
	curl https://files.digital.nhs.uk/assets/ods/current/epraccur.zip -O
	unzip epraccur.zip
epraccur.sql: epraccur.csv epraccur.js
	node epraccur.js

outcode.csv:
	curl https://www.freemaptools.com/download/outcode-postcodes/postcode-outcodes.csv -o outcode.csv
outcode.sql: outcode.csv outcode.js
	node outcode.js

scotorg.csv:
	curl https://files.digital.nhs.uk/assets/ods/current/scotorg.zip -O
	unzip scotorg.zip
scotorg.sql: scotorg.csv scotorg.js
	node scotorg.js

jwks.json:
	curl https://notsafenotfair.eu.auth0.com/.well-known/jwks.json -O
jwks: jwks.json
	node jwks.js
