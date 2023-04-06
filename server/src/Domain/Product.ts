import type IProduct from './Interfaces/Products.interface'

export default class Product {
  protected id?: string
  protected description: string
  protected image: string
  protected price: number
  protected category: string
  protected web: string

  constructor (product: IProduct) {
    this.description = product.description
    this.image = product.image
    this.price = product.price
    this.category = product.category
    this.web = product.web
  }
}
