import config from './config'
import fs from 'fs'
import report from './report'
import user from './user'

export default api => {
  config(api)
  report(api)
  user(api)

  api.get('/',
    () => Promise.resolve(fs.readFileSync(process.env.HTML_URL, 'utf8')), // TODO sync?
    { success: { contentType: 'text/html' } }
  )
}
