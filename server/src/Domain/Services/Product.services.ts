import Product from '../Product'
import type IProduct from '../Interfaces/Products.interface'
import ProductODM from '../../Models/'

export default class ProductService {
  private productDomain (product: IProduct): Product {
    return new Product(product)
  }

  public async getProduct (body: IProduct): Promise<Product[]> {
    const productODM = new ProductODM()

    const response = await productODM.getProducts(body)

    if (response[0]) {
      console.log('Achou resultado no DB - returnando valores do DB')
      const productsList = response.map((product: IProduct) => this.productDomain(product))

      return productsList
    }

    console.log('Não chou resultado no DB - fazendo fetch')
    const fetchResponse = await productODM.fetchWeb(body)

    await productODM.create(fetchResponse)

    const result = await productODM.getProducts(body)

    return result.map((product: IProduct) => this.productDomain(product))
  }
}
