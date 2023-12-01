import { envs } from './config'
import { AppRoutes } from './presentation/routes'
import { Server } from './presentation/server'
require('dotenv').config()
;(() => {
  main()
})()

async function main() {
  //!!todo: database connect

  new Server({
    port: envs.PORT,
    router: AppRoutes.routes
  }).start()
}
