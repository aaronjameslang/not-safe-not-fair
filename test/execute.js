import { execute } from 'lambda-local'

export default (httpMethod, resourcePath) =>
  execute({
    environment: {
      HTML_URL: 'dist/index.html'
    },
    event: {
      headers: {},
      requestContext: {
        httpMethod,
        resourcePath
      }
    },
    verboseLevel: 0,
    lambdaPath: 'src/server/index',
    timeoutMs: 30000
  })
