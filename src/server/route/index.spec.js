import assert from 'assert'
import { execute } from 'lambda-local'
import { describe, it } from 'mocha'

describe(__filename.split('/').pop(), () => {
  it('GET /', () =>
    execute({
      environment: {
        HTML_URL: 'dist/index.html'
      },
      event: {
        requestContext: {
          httpMethod: 'GET',
          resourcePath: '/'
        }
      },
      verboseLevel: 0,
      lambdaPath: 'src/server/index',
      timeoutMs: 30000
    }).then(res => {
      assert.equal(res.statusCode, 200)
      assert.equal(res.headers['Content-Type'], 'text/html')
      assert(res.body)
      assert.equal(typeof res.body, 'string')
    })
  )
})
