CREATE TABLE report_reason (
  id uuid NOT NULL,
  label varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO report_reason VALUES (
  'CAB0A6EC-B7C9-459F-ACB6-DA08190FC5D0',
  'Blah blah blah'
);
INSERT INTO report_reason VALUES (
  '044947D0-146A-44A1-B826-A1BF273C3E9C',
  'Blah blah blah bleh'
);

