import { createContext } from 'react'
import { type IProduct } from './Provider'

export interface IContext {
  products: IProduct[]
  toggleProducts: (body: IProduct[]) => void
  loading: boolean
  toggleLoading: (bol: boolean) => void
}

const defaultState = {
  web: '',
  category: '',
  image: '',
  description: '',
  price: 0
}

export const Context = createContext<IContext>({
  products: [defaultState],
  toggleProducts: () => {},
  loading: false,
  toggleLoading: () => {}
})
