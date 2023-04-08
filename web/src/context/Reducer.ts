import { type IContext } from './Context'

interface IDispatch {
  type: ActionTypes
  payload: any
}

export enum ActionTypes {
  toggleProducts = 'toggleProducts',
  toggleLoading = 'toggleLoading'
}

export const contextReducer = (state: IContext, { payload, type }: IDispatch): any => {
  switch (type) {
    case ActionTypes.toggleProducts:
      return {
        ...state,
        products: [...payload]
      }
    case ActionTypes.toggleLoading:
      return {
        ...state,
        loading: payload
      }
    default:
      throw new Error('Unknown action')
  }
}
