import { type NextFunction, type Request, type Response } from 'express'
import ProductService from '../Domain/Services'
import { IReqBody } from '../Domain/Interfaces/Products.interface'

export default class ProductController {
  private readonly service: ProductService

  constructor (private readonly req: Request, private readonly res: Response, private readonly next: NextFunction) {
    this.service = new ProductService()
  }

  public async create (): Promise<Response | undefined> {
    const body: IReqBody = this.req
    try {
      const response = await this.service.create(body)
      return this.res.status(201).json(response)
    } catch (error) {
      this.next(error)
    }
  }
}
