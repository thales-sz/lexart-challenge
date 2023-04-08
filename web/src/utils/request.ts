import axios from 'axios'
import { type IProduct } from '../context/Provider'

export interface IReqBody {
  web: Web
  category: string
}

export enum Web {
  mercado_livre = 'https://api.mercadolibre.com/sites/MLB/search?q=',
  buscape = 'https://www.buscape.com.br/search?q='
}

const headers = { 'Content-Type': 'application/json' }

export const requestForm = async (body: IReqBody): Promise<IProduct[]> => {
  console.log(body)
  const { data } = await axios({
    method: 'POST',
    url: 'https://lexart-api.onrender.com/product',
    headers,
    data: {
      ...body
    }
  })
  return data
}
