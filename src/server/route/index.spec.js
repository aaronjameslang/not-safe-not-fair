import assert from 'assert'
import execute from '../../../test/execute'
import { describe, it } from 'mocha'

describe(__filename, () => {
  it('GET /', () =>
    execute('GET', '/').then(res => {
      assert.equal(res.statusCode, 200)
      assert.equal(res.headers['Content-Type'], 'text/html')
      assert(res.body)
      assert.equal(typeof res.body, 'string')
    })
  )
})
