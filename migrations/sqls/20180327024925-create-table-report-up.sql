CREATE TABLE "user" (
  id uuid  NOT NULL PRIMARY KEY,
  email_address varchar(255)  NOT NULL
);

CREATE TABLE report (
  id uuid NOT NULL PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES "user"(id),
  location point NOT NULL,
  comments text NOT NULL,
  ctime timestamp NOT NULL
);

CREATE TABLE report_x_reason (
  report_id uuid NOT NULL REFERENCES report(id),
  reason_name varchar(15) NOT NULL REFERENCES report_reason(name)
);
