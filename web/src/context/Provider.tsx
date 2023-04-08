import React, { type ReactNode, useCallback, useReducer } from 'react'
import { Context } from './Context'
import { ActionTypes, contextReducer } from './Reducer'

export interface IProduct {
  web: string
  category: string
  image: string
  description: string
  price: number
}

interface IProps {
  children: ReactNode
}

export const defaultState = {
  web: '',
  category: '',
  image: '',
  description: '',
  price: 0
}

function Provider ({ children }: IProps): JSX.Element {
  const [state, dispatch] = useReducer(contextReducer, { products: [defaultState], loading: false })

  console.log(state)

  const toggleProducts = useCallback((body: IProduct[]) => {
    dispatch({
      type: ActionTypes.toggleProducts,
      payload: body
    })
  }, [dispatch])

  const toggleLoading = useCallback((bol: boolean) => {
    dispatch({
      type: ActionTypes.toggleLoading,
      payload: bol
    })
  }, [dispatch])

  console.log(state)
  return (
    <Context.Provider value={{ ...state, toggleLoading, toggleProducts }}>
      {children}
    </Context.Provider>
  )
}

export default Provider
