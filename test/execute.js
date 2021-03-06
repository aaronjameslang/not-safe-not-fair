import snapshot from 'snap-shot-it'
import assert from 'assert'
import { execute } from 'lambda-local'

export default (httpMethod, resourcePath, code = 200, headers = {}, body = undefined) =>
  execute({
    environment: {
      HTML_URL: 'dist/index.html'
    },
    event: {
      body: body && JSON.stringify(body),
      headers,
      requestContext: {
        httpMethod,
        resourcePath
      }
    },
    verboseLevel: 0,
    lambdaPath: 'src/server/index',
    timeoutMs: 30000
  }).then(response => {
    response.body = JSON.parse(response.body)
    snapshot(sanitiseResponse(response))
    assert.equal(response.statusCode, code)
    return response
  })

const sanitiseResponse = response => {
  if (!response.body.id) {
    return response
  }
  const sanitisedId = `[REDACTED:${typeof response.body.id}:${response.body.id.length}]`
  const sanitisedBody = { ...response.body, id: sanitisedId }
  const sanitisedResponse = { ...response, body: sanitisedBody }
  return sanitisedResponse
}
