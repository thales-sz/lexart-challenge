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

const deployedAPI = 'https://lexart-api.onrender.com/product'

const headers = { 'Content-Type': 'application/json' }

export const requestForm = async (body: IReqBody): Promise<IProduct[]> => {
  const { data } = await axios({
    method: 'POST',
    url: deployedAPI,
    headers,
    data: {
      ...body
    }
  })
  return data
}
