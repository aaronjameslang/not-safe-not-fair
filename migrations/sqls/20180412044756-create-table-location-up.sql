CREATE SCHEMA configuration;

CREATE TABLE configuration.outcode (
  code varchar(4) NOT NULL PRIMARY KEY,
  position point NOT NULL
);

CREATE TABLE configuration.location (
  code varchar(6) NOT NULL PRIMARY KEY,
  name varchar(100) NOT NULL,
  address varchar(35) NOT NULL,
  postcode varchar(8) NOT NULL,
  outcode varchar(4) NOT NULL
);

ALTER TABLE report
DROP COLUMN position,
 ADD COLUMN location_code varchar(6) NOT NULL REFERENCES configuration.location(code);
