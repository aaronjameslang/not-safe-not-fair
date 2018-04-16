CREATE SCHEMA configuration;
CREATE TABLE configuration.location (
  code char(5) NOT NULL PRIMARY KEY,
  name varchar(35) NOT NULL,
  addres varchar(35) NOT NULL,
  postcode varchar(8) NOT NULL
);
