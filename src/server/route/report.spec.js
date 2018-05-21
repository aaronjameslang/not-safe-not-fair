import assert from 'assert'
import execute from '../../../test/execute'
import snapshot from 'snap-shot-it'
import { describe, it } from 'mocha'

describe(__filename, () => {
  it('GET /report', () =>
    execute('GET', '/report').then(r =>
      snapshot({ ...r, body: JSON.parse(r.body)})))
  // it('POST /report', () =>
  //   execute('POST', '/report').then(r =>
  //     snapshot({ ...r, body: JSON.parse(r.body)})))
  it('POST /report 401', () =>
    execute('POST', '/report').then(r => {
      snapshot({ ...r, body: JSON.parse(r.body)})
      assert.equal(r.statusCode, 401)
    }))
  // it('POST /report 403', () =>
  //   execute('POST', '/report').then(r =>
  //     snapshot({ ...r, body: JSON.parse(r.body)})))
})
