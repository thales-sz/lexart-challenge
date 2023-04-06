import Product from '../Product'
import type IProduct from '../Interfaces/Products.interface'
import ProductODM from '../../Models/'
import type { IReqBody } from '../Interfaces/Products.interface'

export default class ProductService {
  private productDomain (product: IProduct): Product {
    return new Product(product)
  }

  public async getProduct (body: IReqBody): Promise<Product[]> {
    const productODM = new ProductODM()

    const response = await productODM.getProducts(body)
    console.log(response)
    if (response[0]) {
      const productsList = response.map((product: IProduct) => this.productDomain(product))

      return productsList
    }

    const newResponse = await productODM.fetchWeb(body)

    return newResponse
  }
}
