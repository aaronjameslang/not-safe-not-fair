import execute from '../../../test/execute'
import jwt from 'jsonwebtoken'
import sinon from 'sinon'
import { afterEach, describe, it } from 'mocha'

const authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5ERkVPREF3T1VNeFFUTkZPRE0xTnpVek1UZ3hNVVE1TjBFMU9ESTBNamRETWpJMVFURkZNdyJ9.eyJuaWNrbmFtZSI6ImFhcm9uamFtZXNsYW5nIiwibmFtZSI6ImFhcm9uamFtZXNsYW5nQGdvb2dsZW1haWwuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyLzJjZjI3MzVlZmE0MDllMDhlYzViOTEzNWUyZDdjMGEzP3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGYWEucG5nIiwidXBkYXRlZF9hdCI6IjIwMTgtMDUtMTVUMDY6NTc6MDIuNDQ5WiIsImVtYWlsIjoiYWFyb25qYW1lc2xhbmdAZ29vZ2xlbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9ub3RzYWZlbm90ZmFpci5ldS5hdXRoMC5jb20vIiwic3ViIjoiZW1haWx8NWFlMDZjOTQzMDIwNTAxY2Q0YTEyNGIyIiwiYXVkIjoiUDRWTmxtclZwRmtPVGZpMnhNN3ROb0VEOVY5bzJDQXYiLCJpYXQiOjE1MjYzNjc0MjIsImV4cCI6MTUyNjQwMzQyMiwiYXRfaGFzaCI6ImFHUTdlbElZZG9uNFY4STBvZzRqS2ciLCJub25jZSI6ImdneTNYeUF5T0x1MEFERFpCZV92aWRmcFEtN0V2eWtoIn0.bJItsHwBMi94rcSWnFR2BE11J1BgP1L8h_aY_Ouw9DuWsz5-LP5Oj3Ll3-pxRp-j_ped47st9mVmjmNDhyIb4qPYUtD60GMfMZvY4MGcJ9dBtWfsqIRJXGrjbeQ_VPFf8JFnFMNA16V61t-rgoRDZmxKZrZEg7WrUaXysM-mkqqdoQmKWHmvaVvA1j-VJpQNIE7wlcpjSvucpJfhOfwzr1QgckrkwmaIKbi5PVtpSxY26c8b3A0XIACXnH6gn9B_L8v1T8Kbl8JJmj244vdpKpp5nmV44m1EMQE853_c6ru1K51LFYEnXVdOWOgQex9rhElSc2h48BBtjujUOtdcZQ'

describe(__filename.split('/').pop(), () => {
  afterEach(::sinon.restore)

  it('GET /user 200', () => {
    sinon.stub(jwt, 'verify').returns({email: 'legit@nhs.net'})
    return execute('GET', '/user', 200, {authorization})
  })

  it('GET /user 401', () => {
    return execute('GET', '/user', 401, {authorization})
  })

  it('GET /user 403', () => {
    sinon.stub(jwt, 'verify').returns({email: 'nada@hotmail.com'})
    return execute('GET', '/user', 403, {authorization})
  })
})
