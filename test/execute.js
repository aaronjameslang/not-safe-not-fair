import { execute } from 'lambda-local'

export default (httpMethod, resourcePath, headers = {}, body = undefined) =>
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
  })
