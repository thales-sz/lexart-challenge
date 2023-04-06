export default interface IProduct extends IReqBody {
  id?: number
  image: string
  description: string
  price: number
}

export interface IReqBody {
  web: Web
  category: string
}

enum Web {
  mercado_livre = 'https://lista.mercadolivre.com.br/',
  buscape = 'https://www.buscape.com.br/'
}
