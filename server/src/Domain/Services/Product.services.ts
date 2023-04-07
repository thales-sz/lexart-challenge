import Product from '../Product'
import type IProduct from '../Interfaces/Products.interface'
import ProductODM from '../../Models/'
import { load } from 'cheerio'

export default class ProductService {
  private productDomain (product: IProduct): Product {
    return new Product(product)
  }

  public async getProduct (body: IProduct): Promise<Product[]> {
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

  public async mercadoLivreQuery (productODM: ProductODM, body: IProduct): Promise<Product[]> {
    const fetchResponse = await productODM.fetchMercadoLivre(body)

    const result = await productODM.create(fetchResponse)

    return result.map((product: IProduct) => this.productDomain(product))
  }

  public async buscapeQuery (productODM: ProductODM, body: IProduct): Promise<Product[]> {
    const productList: IProduct[] = []
    const fetchResponse = await productODM.fetchBuscape(body)

    const page = load(fetchResponse)

    page('[data-testid="product-card"]').each((_index, item) => {
      console.log(page(item).html())
      const price = parseFloat(page(item).find('[data-testid="product-card::price"]').text().replace('R$', '').replace(',', '.'))
      const description = page(item).find('[data-testid="product-card::name"]').text()
      const image = page(item).find('span > img').attr('src')

      productList.push({ price, image, description, web: body.web, category: body.category })
    })

    const result = await productODM.create(productList.slice(0, 6))

    return result.map((product: IProduct) => this.productDomain(product))
  }
}
