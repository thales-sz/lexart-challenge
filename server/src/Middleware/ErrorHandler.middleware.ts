import type { NextFunction, Request, Response } from 'express'

export default class ErrorHandler {
  public handle (error: Error, _req: Request, res: Response, next: NextFunction): void {
    switch (error.name) {
      case 'CastError':
        res.status(422).json({ message: 'Invalid mongo id' })
        next()
        break
      case 'NotFoundError':
        res.status(404).json({ message: 'Product not found' })
        next()
        break
      default:
        res.status(500).json({ message: error.message })
        next()
        break
    }
    next()
  }
}
