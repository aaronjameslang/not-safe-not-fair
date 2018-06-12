exports['report.spec.js GET /report 1'] = {
  "statusCode": 200,
  "headers": {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Max-Age": "0"
  },
  "body": [
    {
      "id": "b4edf4ed-ca97-4298-9c53-93ac470923ae",
      "userId": "80ccf1c7-1c71-4345-8978-e8aba9eb5732",
      "comment": "Surgical F1, left alone to look after busy ward including sick patients. Reg in theatre and SHO in a very busy clinic. Unable to go to teaching for 5th time",
      "ctime": "2018-05-18T18:34:56.789Z",
      "locationCode": "SSC04",
      "code": "SSC04",
      "name": "WESTERN GENERAL HOSPITALS NHS TRUST",
      "address": "WESTERN GENERAL HOSPITAL",
      "postcode": "EH4 2XU",
      "outcode": "EH4",
      "locationName": "WESTERN GENERAL HOSPITALS NHS TRUST"
    },
    {
      "id": "3a693cc5-ee66-4ad7-9311-601c425d25cc",
      "userId": "143065d5-f5be-4def-af21-05fba32bc2e3",
      "comment": "I am recently back to work after a period of time off for depression I am struggling to cope and have been told I cannot work part time or reduce my oncalls",
      "ctime": "2018-05-18T17:34:56.789Z",
      "locationCode": "RTH08",
      "code": "RTH08",
      "name": "JOHN RADCLIFFE HOSPITAL",
      "address": "HEADLEY WAY",
      "postcode": "OX3 9DU",
      "outcode": "OX3",
      "locationName": "JOHN RADCLIFFE HOSPITAL"
    },
    {
      "id": "e4e34c7a-48a8-4c1d-ab9d-a2fbcb5dbddb",
      "userId": "7a62b3cc-3fdd-42e0-9d33-ea719dd9200b",
      "comment": "Very busy walk in clinic (50 patients plus in one morning)",
      "ctime": "2018-05-18T16:34:56.789Z",
      "locationCode": "L83646",
      "code": "L83646",
      "name": "ST.LEVAN SURGERY",
      "address": "ST.LEVAN SURGERY",
      "postcode": "PL2 1JR",
      "outcode": "PL2",
      "locationName": "ST.LEVAN SURGERY"
    },
    {
      "id": "09dbb478-1cca-40fe-a6be-e756e92a996d",
      "userId": "7a62b3cc-3fdd-42e0-9d33-ea719dd9200b",
      "comment": "Very busy walk in clinic",
      "ctime": "2018-05-18T15:34:56.789Z",
      "locationCode": "L83646",
      "code": "L83646",
      "name": "ST.LEVAN SURGERY",
      "address": "ST.LEVAN SURGERY",
      "postcode": "PL2 1JR",
      "outcode": "PL2",
      "locationName": "ST.LEVAN SURGERY"
    },
    {
      "id": "3908904d-7708-45a4-a159-3c103338a769",
      "userId": "b5724ec6-b1e8-4d94-a08f-ab1755dd5fd7",
      "comment": "Unable to attend my hospital appt despite informing rota coordinators 3 weeks ago due to short staffing on the ward and being on call",
      "ctime": "2018-05-18T14:34:56.789Z",
      "locationCode": "RA701",
      "code": "RA701",
      "name": "BRISTOL ROYAL INFIRMARY",
      "address": "MARLBOROUGH STREET",
      "postcode": "BS2 8HW",
      "outcode": "BS2",
      "locationName": "BRISTOL ROYAL INFIRMARY"
    },
    {
      "id": "e8a5c212-e7e5-4630-b7ed-b96e5b54cc4e",
      "userId": "f89a25b5-1766-4307-9c82-a326cc2e2c9f",
      "comment": "Very busy medical take, staff member unwell",
      "ctime": "2018-05-18T13:34:56.789Z",
      "locationCode": "RJ122",
      "code": "RJ122",
      "name": "ST THOMAS' HOSPITAL",
      "address": "WESTMINSTER BRIDGE ROAD",
      "postcode": "SE1 7EH",
      "outcode": "SE1",
      "locationName": "ST THOMAS' HOSPITAL"
    },
    {
      "id": "7dc72673-bd44-4be5-859a-015b0e61c5a5",
      "userId": "b5724ec6-b1e8-4d94-a08f-ab1755dd5fd7",
      "comment": "finished 3 hours late due to PACs being down",
      "ctime": "2018-05-18T12:34:56.789Z",
      "locationCode": "RR860",
      "code": "RR860",
      "name": "HULL ROYAL INFIRMARY",
      "address": "ANLABY ROAD",
      "postcode": "HU3 2JZ",
      "outcode": "HU3",
      "locationName": "HULL ROYAL INFIRMARY"
    }
  ]
}

exports['report.spec.js POST /report 201 1'] = {
  "statusCode": 201,
  "headers": {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Max-Age": "0"
  },
  "body": {
    "id": "[REDACTED:string:36]"
  }
}

exports['report.spec.js POST /report 401 No token 1'] = {
  "statusCode": 401,
  "headers": {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Max-Age": "0"
  },
  "body": {
    "errorMessage": "No authorization"
  }
}

exports['report.spec.js POST /report 401 Expired 1'] = {
  "statusCode": 401,
  "headers": {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Max-Age": "0"
  },
  "body": {
    "errorMessage": "jwt expired"
  }
}

exports['report.spec.js POST /report 403 1'] = {
  "statusCode": 403,
  "headers": {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Max-Age": "0"
  },
  "body": {
    "errorMessage": "Forbidden"
  }
}
