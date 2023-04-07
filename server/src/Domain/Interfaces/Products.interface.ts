export default interface IProduct extends IReqBody {
  id?: number
  image?: string
  description: string
  price: number
}

export interface IReqBody {
  web: Web
  category: string
}

export enum Web {
  mercado_livre = 'https://api.mercadolibre.com/sites/MLB/search?q=',
  buscape = 'https://www.buscape.com.br/search?q='
}

export interface IMlbReturn {
  id: string
  title: string
  condition: string
  thumbnail_id: string
  catalog_product_id: null
  listing_type_id: string
  permalink: string
  buying_mode: string
  site_id: string
  category_id: string
  domain_id: string
  thumbnail: string
  currency_id: string
  order_backend: number
  price: number
  original_price: null
  sale_price: null
  sold_quantity: number
  available_quantity: number
  official_store_id: boolean
  use_thumbnail_id: boolean
  accepts_mercadopago: boolean
}
