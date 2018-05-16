import config from './config'
import fs from 'fs'
import report from './report'
import user from './user'

export default api => {
  config(api)
  report(api)
  user(api)

  api.get('/',
    () => fs.readFileSync('./static/index.html', 'utf8'), // TODO sync?
    { success: { contentType: 'text/html' } }
  )
}
