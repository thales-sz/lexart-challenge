import Product from '../Product'
import type IProduct from '../Interfaces/Products.interface'
import ProductODM from '../../Models/'
import { load } from 'cheerio'
import { type IReqBody } from '../Interfaces/Products.interface'

export default class ProductService {
  private productDomain (product: IProduct): Product {
    return new Product(product)
  }

  public async getProduct (body: IReqBody): Promise<Product[]> {
    const productODM = new ProductODM()

    const response = await productODM.getProducts(body)

    if (response[0]) {
      const productsList = response.map((product: IProduct) => this.productDomain(product))

      return productsList
    }

    if (body.web.includes('mercado')) {
      return await this.mercadoLivreQuery(productODM, body)
    }
    return await this.buscapeQuery(productODM, body)
  }

  public async mercadoLivreQuery (productODM: ProductODM, body: IReqBody): Promise<Product[]> {
    const fetchResponse = await productODM.fetchMercadoLivre(body)

    const result = await productODM.create(fetchResponse)

    return result.map((product: IProduct) => this.productDomain(product))
  }

  public async buscapeQuery (productODM: ProductODM, body: IReqBody): Promise<Product[]> {
    const productList: IProduct[] = []
    const fetchResponse = await productODM.fetchBuscape(body)

    const page = load(fetchResponse)

    page('[data-testid="product-card"]').each((_index, item) => {
      const price = parseFloat(page(item).find('[data-testid="product-card::price"]').text().replace('R$', '').replace(',', '.'))
      const description = page(item).find('[data-testid="product-card::name"]').text()
      const image = page(item).find('span > img').attr('src')
      const link = page(item).find('[data-testid="product-card::card"]').attr('href') ?? ''

      productList.push({ price, image, description, web: `${body.web.replace('/search?q=', '')}${link}`, category: body.category })
    })

    const result = await productODM.create(productList.slice(0, 7))

    return result.map((product: IProduct) => this.productDomain(product))
  }
}
