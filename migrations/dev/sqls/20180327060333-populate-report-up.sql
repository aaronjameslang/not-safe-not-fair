INSERT INTO "user" VALUES
(DEFAULT, 'Jeremy.Atrick@nhs.net'),
(DEFAULT, 'carole.singer@nhs.net'),
(DEFAULT, 'cole.ostamie@nhs.net'),
(DEFAULT, 'hywater.helen@nhs.net'),
(DEFAULT, 'peace_warren@nhs.net'),
(DEFAULT, 'sally-forth@nhs.net');

INSERT INTO report SELECT
  '7dc72673-bd44-4be5-859a-015b0e61c5a5',
  id,
  point(-0.356440, 53.744720), -- Hull Royal Infirmary
  'finished 3 hours late due to PACs being down'
FROM "user" WHERE email_address LIKE '%Jeremy%';
INSERT INTO report_x_reason VALUES
('7dc72673-bd44-4be5-859a-015b0e61c5a5', 'OVER_TIME'),
('7dc72673-bd44-4be5-859a-015b0e61c5a5', 'TECH_FAILURE');

INSERT INTO report SELECT
  'e8a5c212-e7e5-4630-b7ed-b96e5b54cc4e',
  id,
  point(-0.114214, 51.499742), -- St Thomas’ Hospital London
  'Very busy medical take, staff member unwell'
FROM "user" WHERE email_address LIKE '%sally%';
INSERT INTO report_x_reason VALUES
('e8a5c212-e7e5-4630-b7ed-b96e5b54cc4e', 'PATIENT_LOAD'),
('e8a5c212-e7e5-4630-b7ed-b96e5b54cc4e', 'SHORT_STAFFED');

INSERT INTO report SELECT
  '3908904d-7708-45a4-a159-3c103338a769',
  id,
  point(-2.596618, 51.458395), -- Bristol Royal Infirmary
  'Unable to attend my hospital appt despite informing rota coordinators 3 weeks ago due to short staffing on the ward and being on call'
FROM "user" WHERE email_address LIKE '%Jeremy%';
INSERT INTO report_x_reason VALUES
('3908904d-7708-45a4-a159-3c103338a769', 'ILL_HEALTH'),
('3908904d-7708-45a4-a159-3c103338a769', 'PATIENT_LOAD');

INSERT INTO report SELECT
  '09dbb478-1cca-40fe-a6be-e756e92a996d',
  id,
  point(-4.177333, 50.384287), -- St Levan’s GP surgery, Plymouth
  'Very busy walk in clinic'
FROM "user" WHERE email_address LIKE '%carole%';
INSERT INTO report_x_reason VALUES
('09dbb478-1cca-40fe-a6be-e756e92a996d', 'PATIENT_LOAD');

INSERT INTO report SELECT
  'e4e34c7a-48a8-4c1d-ab9d-a2fbcb5dbddb',
  id,
  point(-4.176818, 50.384066), -- St Levan’s GP surgery, Plymouth
  'Very busy walk in clinic (50 patients plus in one morning)'
FROM "user" WHERE email_address LIKE '%carole%';
INSERT INTO report_x_reason VALUES
('e4e34c7a-48a8-4c1d-ab9d-a2fbcb5dbddb', 'PATIENT_LOAD');

INSERT INTO report SELECT
  '3a693cc5-ee66-4ad7-9311-601c425d25cc',
  id,
  point(-1.221628, 51.765151), -- The JR, Oxford
  'I am recently back to work after a period of time off for depression I am struggling to cope and have been told I cannot work part time or reduce my oncalls'
FROM "user" WHERE email_address LIKE '%warren%';
INSERT INTO report_x_reason VALUES
('3a693cc5-ee66-4ad7-9311-601c425d25cc', 'ILL_HEALTH'),
('3a693cc5-ee66-4ad7-9311-601c425d25cc', 'NO_SUPPORT');

INSERT INTO report SELECT
  'b4edf4ed-ca97-4298-9c53-93ac470923ae',
  id,
  point(-3.234525, 55.963250), -- Edinburgh General
  'Surgical F1, left alone to look after busy ward including sick patients. Reg in theatre and SHO in a very busy clinic. Unable to go to teaching for 5th time'
FROM "user" WHERE email_address LIKE '%cole%';
INSERT INTO report_x_reason VALUES
('b4edf4ed-ca97-4298-9c53-93ac470923ae', 'OVER_TIME'),
('b4edf4ed-ca97-4298-9c53-93ac470923ae', 'NO_SUPPORT'),
('b4edf4ed-ca97-4298-9c53-93ac470923ae', 'MISSED_TRAINING');
