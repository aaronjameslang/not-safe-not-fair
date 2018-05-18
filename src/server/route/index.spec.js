import assert from 'assert'
import { describe, it } from 'mocha'
import { execute } from 'lambda-local'
import snapshot from 'snap-shot-it'

describe(__filename, () => {
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

  it('GET /report', () =>
    execute({
      event: {
        requestContext: {
          httpMethod: 'GET',
          resourcePath: '/report'
        }
      },
      lambdaPath: 'src/server/index',
      timeoutMs: 30000
    }).then(snapshot)
  )
})
