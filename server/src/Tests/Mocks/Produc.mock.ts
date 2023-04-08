import type IProduct from '../../Domain/Interfaces/Products.interface'
import { Web } from '../../Domain/Interfaces/Products.interface'

export const productMock: IProduct = {
  category: 'Product',
  description: 'Product description',
  price: 780,
  web: Web.mercado_livre,
  image: 'imagem bela'
}
