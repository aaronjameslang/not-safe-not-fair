CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "user" (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  email_address varchar(255)  NOT NULL
);


CREATE TABLE report (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES "user"(id),
  position point NOT NULL,
  comment text NOT NULL,
  ctime timestamp NOT NULL DEFAULT NOW()
);

CREATE TABLE report_x_reason (
  report_id uuid NOT NULL REFERENCES report(id),
  reason_name varchar(15) NOT NULL REFERENCES report_reason(name)
);
