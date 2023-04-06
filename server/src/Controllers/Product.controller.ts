import { type NextFunction, type Request, type Response } from 'express'
import ProductService from '../Domain/Services'
import type { IReqBody } from '../Domain/Interfaces/Products.interface'

export default class ProductController {
  private readonly service: ProductService

  constructor (private readonly req: Request, private readonly res: Response, private readonly next: NextFunction) {
    this.service = new ProductService()
  }

  public async getProduct (): Promise<Response | undefined> {
    const body: IReqBody = this.req.body
    try {
      const response = await this.service.getProduct(body)

      return this.res.status(200).json(response)
    } catch (error) {
      this.next(error)
    }
  }
}
