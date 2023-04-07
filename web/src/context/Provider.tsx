import React, { useState } from 'react'
import { Context, type IContext } from './Context'

export interface IProduct {
  web: string
  category: string
  image: string
  description: string
}

const defaultState = {
  web: '',
  category: '',
  image: '',
  description: ''
}

function Provider ({ children }: any): JSX.Element {
  const [state, setState] = useState<IContext>({ products: [defaultState] })

  return (
    <Context.Provider value={{ products: state.products, setState }}>
      {children}
    </Context.Provider>
  )
}

export default Provider
