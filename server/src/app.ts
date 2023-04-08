import express from 'express'
import cors from 'cors'
import type { Application, Request, RequestHandler, Response } from 'express'
import { rateLimit } from 'express-rate-limit'
import ErrorHandler from './Middleware/ErrorHandler.middleware'
import ProductRouter from './Routes'

class App {
  public app: Application

  constructor () {
    this.app = express()
    this.config()
    this.app.get('/ping', (_req: Request, res: Response) => res.json({ message: 'pong' }))
    this.app.use('/product', ProductRouter)
    this.app.use(new ErrorHandler().handle)
  }

  private config (): void {
    const accessControl: RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH')
      res.header('Access-Control-Allow-Headers', '*')
      next()
    }

    const limiter = rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
      standardHeaders: true,
      legacyHeaders: false,
      message: 'Too many requests, please try again later.'
    })

    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(accessControl)
    this.app.use(limiter)
  }

  public start (PORT: string | number): void {
    this.app.listen(PORT, () => { console.log(`Running on port ${PORT}`) })
  }
}

export { App }

export const { app } = new App()
