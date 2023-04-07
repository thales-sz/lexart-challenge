import { type Dispatch, createContext, type SetStateAction } from 'react'
import { type IProduct } from './Provider'

export interface IContext {
  products: IProduct[]
  setState?: Dispatch<SetStateAction<IContext>>
}

const defaultState = {
  web: '',
  category: '',
  image: '',
  description: ''
}

export const Context = createContext<Partial<IContext>>({ products: [defaultState] })
