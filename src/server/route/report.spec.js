import assert from 'assert'
import execute from '../../../test/execute'
import jwt from 'jsonwebtoken'
import sinon from 'sinon'
import { afterEach, describe, it } from 'mocha'
import { deleet, select } from '../repo/report'
import { existsWhereEmailAddressEquals } from '../repo/user'

const authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5ERkVPREF3T1VNeFFUTkZPRE0xTnpVek1UZ3hNVVE1TjBFMU9ESTBNamRETWpJMVFURkZNdyJ9.eyJuaWNrbmFtZSI6ImFhcm9uamFtZXNsYW5nIiwibmFtZSI6ImFhcm9uamFtZXNsYW5nQGdvb2dsZW1haWwuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyLzJjZjI3MzVlZmE0MDllMDhlYzViOTEzNWUyZDdjMGEzP3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGYWEucG5nIiwidXBkYXRlZF9hdCI6IjIwMTgtMDUtMTVUMDY6NTc6MDIuNDQ5WiIsImVtYWlsIjoiYWFyb25qYW1lc2xhbmdAZ29vZ2xlbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9ub3RzYWZlbm90ZmFpci5ldS5hdXRoMC5jb20vIiwic3ViIjoiZW1haWx8NWFlMDZjOTQzMDIwNTAxY2Q0YTEyNGIyIiwiYXVkIjoiUDRWTmxtclZwRmtPVGZpMnhNN3ROb0VEOVY5bzJDQXYiLCJpYXQiOjE1MjYzNjc0MjIsImV4cCI6MTUyNjQwMzQyMiwiYXRfaGFzaCI6ImFHUTdlbElZZG9uNFY4STBvZzRqS2ciLCJub25jZSI6ImdneTNYeUF5T0x1MEFERFpCZV92aWRmcFEtN0V2eWtoIn0.bJItsHwBMi94rcSWnFR2BE11J1BgP1L8h_aY_Ouw9DuWsz5-LP5Oj3Ll3-pxRp-j_ped47st9mVmjmNDhyIb4qPYUtD60GMfMZvY4MGcJ9dBtWfsqIRJXGrjbeQ_VPFf8JFnFMNA16V61t-rgoRDZmxKZrZEg7WrUaXysM-mkqqdoQmKWHmvaVvA1j-VJpQNIE7wlcpjSvucpJfhOfwzr1QgckrkwmaIKbi5PVtpSxY26c8b3A0XIACXnH6gn9B_L8v1T8Kbl8JJmj244vdpKpp5nmV44m1EMQE853_c6ru1K51LFYEnXVdOWOgQex9rhElSc2h48BBtjujUOtdcZQ'

describe(__filename.split('/').pop(), () => {
  afterEach(::sinon.restore)

  it('GET /report', () => execute('GET', '/report'))

  it('POST /report 201', () => {
    sinon.stub(jwt, 'verify').returns({email: 'legit@nhs.net'})
    return execute(
      'POST', '/report', 201, {authorization},
      {locationCode: 'R0A16', comment: 'This is a test comment'}
    ).then(({body: {id}}) => { // test needs reasons
      // TODO expect to see user in db
      assert(id)
      assert.equal(typeof id, 'string')
      assert.equal(id.length, 36)
      return Promise.all([id, select()])
    }).then(([id, reports]) => {
      const report = reports.find(r => r.id === id)
      assert.equal(report.comment, 'This is a test comment')
      assert.equal(report.locationCode, 'R0A16')
      return deleet(id)
    }).then(() =>
      existsWhereEmailAddressEquals('legit@nhs.net')
    ).then(exists => assert(exists))
  })

  it('POST /report 401 No token', () =>
    execute('POST', '/report', 401))

  it('POST /report 401 Expired', () =>
    execute('POST', '/report', 401, {authorization}))

  it('POST /report 403', () => {
    sinon.stub(jwt, 'verify').returns({ email: 'rando@nhs.not' })
    return execute('POST', '/report', 403, {authorization})
  })
})
