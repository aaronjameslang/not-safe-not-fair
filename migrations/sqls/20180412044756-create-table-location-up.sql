CREATE SCHEMA configuration;
CREATE TABLE configuration.location (
  code char(5) NOT NULL PRIMARY KEY,
  name varchar(100) NOT NULL,
  address varchar(35) NOT NULL,
  postcode varchar(8) NOT NULL,
  outcode varchar(4) NOT NULL
);
