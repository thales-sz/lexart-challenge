import Product from '../Product'
import type IProduct from '../Interfaces/Products.interface'
import ProductODM from '../../Models/ProductsODM'

export default class ProductService {
  private productDomain (product: IProduct): Product {
    return new Product(product)
  }

  public async create (newProduct: IProduct): Promise<Product> {
    const productODM = new ProductODM()

    const response = await productODM.create(newProduct)

    const product = this.productDomain(response)

    return product
  }

  public async get (): Promise<Product[]> {
    const productODM = new ProductODM()

    const response = await productODM.get()

    const productsList = response.map((Product) => this.productDomain(Product))

    return productsList
  }

  public async getById (id: string): Promise<Product | boolean> {
    const productODM = new ProductODM()

    const response = await productODM.getById(id)

    if (!response) throw new Error('NotFoundError')

    const product = this.productDomain(response)
    return product
  }
}
