INSERT INTO "user" VALUES
('b5724ec6-b1e8-4d94-a08f-ab1755dd5fd7', 'Jeremy.Atrick@nhs.net'),
('7a62b3cc-3fdd-42e0-9d33-ea719dd9200b', 'carole.singer@nhs.net'),
('80ccf1c7-1c71-4345-8978-e8aba9eb5732', 'cole.ostamie@nhs.net'),
('e47fdba1-8792-42ad-8300-8ee05edce030', 'hywater.helen@nhs.net'),
('143065d5-f5be-4def-af21-05fba32bc2e3', 'peace_warren@nhs.net'),
('f89a25b5-1766-4307-9c82-a326cc2e2c9f', 'sally-forth@nhs.net');

INSERT INTO report (id, user_id, location_code, comment, ctime) SELECT
  '7dc72673-bd44-4be5-859a-015b0e61c5a5',
  id,
  'RR860', -- Hull Royal Infirmary
  'finished 3 hours late due to PACs being down',
  '2018-05-18T12:34:56.789Z'
FROM "user" WHERE email_address LIKE '%Jeremy%';
INSERT INTO report_x_reason VALUES
('7dc72673-bd44-4be5-859a-015b0e61c5a5', 'OVER_TIME'),
('7dc72673-bd44-4be5-859a-015b0e61c5a5', 'TECH_FAILURE');

INSERT INTO report (id, user_id, location_code, comment, ctime) SELECT
  'e8a5c212-e7e5-4630-b7ed-b96e5b54cc4e',
  id,
  'RJ122', -- St Thomas’ Hospital London
  'Very busy medical take, staff member unwell',
  '2018-05-18T13:34:56.789Z'
FROM "user" WHERE email_address LIKE '%sally%';
INSERT INTO report_x_reason VALUES
('e8a5c212-e7e5-4630-b7ed-b96e5b54cc4e', 'PATIENT_LOAD'),
('e8a5c212-e7e5-4630-b7ed-b96e5b54cc4e', 'SHORT_STAFFED');

INSERT INTO report (id, user_id, location_code, comment, ctime) SELECT
  '3908904d-7708-45a4-a159-3c103338a769',
  id,
  'RA701', -- Bristol Royal Infirmary
  'Unable to attend my hospital appt despite informing rota coordinators 3 weeks ago due to short staffing on the ward and being on call',
  '2018-05-18T14:34:56.789Z'
FROM "user" WHERE email_address LIKE '%Jeremy%';
INSERT INTO report_x_reason VALUES
('3908904d-7708-45a4-a159-3c103338a769', 'ILL_HEALTH'),
('3908904d-7708-45a4-a159-3c103338a769', 'PATIENT_LOAD');

INSERT INTO report (id, user_id, location_code, comment, ctime) SELECT
  '09dbb478-1cca-40fe-a6be-e756e92a996d',
  id,
  'L83646', -- St Levan’s GP surgery, Plymouth
  'Very busy walk in clinic',
  '2018-05-18T15:34:56.789Z'
FROM "user" WHERE email_address LIKE '%carole%';
INSERT INTO report_x_reason VALUES
('09dbb478-1cca-40fe-a6be-e756e92a996d', 'PATIENT_LOAD');

INSERT INTO report (id, user_id, location_code, comment, ctime) SELECT
  'e4e34c7a-48a8-4c1d-ab9d-a2fbcb5dbddb',
  id,
  'L83646', -- St Levan’s GP surgery, Plymouth
  'Very busy walk in clinic (50 patients plus in one morning)',
  '2018-05-18T16:34:56.789Z'
FROM "user" WHERE email_address LIKE '%carole%';
INSERT INTO report_x_reason VALUES
('e4e34c7a-48a8-4c1d-ab9d-a2fbcb5dbddb', 'PATIENT_LOAD');

INSERT INTO report (id, user_id, location_code, comment, ctime) SELECT
  '3a693cc5-ee66-4ad7-9311-601c425d25cc',
  id,
  'RTH08', -- The JR, Oxford
  'I am recently back to work after a period of time off for depression I am struggling to cope and have been told I cannot work part time or reduce my oncalls',
  '2018-05-18T17:34:56.789Z'
FROM "user" WHERE email_address LIKE '%warren%';
INSERT INTO report_x_reason VALUES
('3a693cc5-ee66-4ad7-9311-601c425d25cc', 'ILL_HEALTH'),
('3a693cc5-ee66-4ad7-9311-601c425d25cc', 'NO_SUPPORT');

INSERT INTO report (id, user_id, location_code, comment, ctime) SELECT
  'b4edf4ed-ca97-4298-9c53-93ac470923ae',
  id,
  'SSC04', -- Western General, Edinburgh
  'Surgical F1, left alone to look after busy ward including sick patients. Reg in theatre and SHO in a very busy clinic. Unable to go to teaching for 5th time',
  '2018-05-18T18:34:56.789Z'
FROM "user" WHERE email_address LIKE '%cole%';
INSERT INTO report_x_reason VALUES
('b4edf4ed-ca97-4298-9c53-93ac470923ae', 'OVER_TIME'),
('b4edf4ed-ca97-4298-9c53-93ac470923ae', 'NO_SUPPORT'),
('b4edf4ed-ca97-4298-9c53-93ac470923ae', 'MISSED_TRAINING');
