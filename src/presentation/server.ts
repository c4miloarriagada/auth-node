import express, { Router } from 'express'

interface Options {
  port: number
  router: Router
}

export class Server {
  public readonly app = express()
  private readonly port: number
  private readonly router: Router
  constructor(options: Options) {
    const { port = 3100, router } = options
    this.port = port
    this.router = router
  }

  async start() {
    this.app.use(this.router)
    this.app.listen(this.port, () => {
      console.log(`Server Runnning on port ${this.port}`)
    })
  }
}
