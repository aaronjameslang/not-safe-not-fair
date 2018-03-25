CREATE TABLE report_reason (
  name  varchar(15)  NOT NULL,
  label varchar(255) NOT NULL,
  PRIMARY KEY (name)
);

INSERT INTO report_reason VALUES (
  'OVER_TIME',
  'I worked beyond my rostered hours'
);
INSERT INTO report_reason VALUES (
  'SHORT_STAFFED',
  'Short staffing, despite planned rota'
);
INSERT INTO report_reason VALUES (
  'POOR_ROTA',
  'Short staffing, poorly planned rota'
);
INSERT INTO report_reason VALUES (
  'PATIENT_LOAD',
  'Patient load exceeded capacity'
);
INSERT INTO report_reason VALUES (
  'NO_SUPPORT',
  'My colleagues were unable to support me appropriately due to their own workload'
);
INSERT INTO report_reason VALUES (
  'TECH_FAILURE',
  'There was a technical failure (IT, radiology etc)'
);
INSERT INTO report_reason VALUES (
  'ILL_HEALTH',
  'I have a health condition (mental/physical) and am not adequately supported'
);
INSERT INTO report_reason VALUES (
  'MISSED_TRAINING',
  'I missed a teaching session important to my training'
);
INSERT INTO report_reason VALUES (
  'UNDER_QUALIFIED',
  'I had to work above my level of competency because no other support was available to me'
);
