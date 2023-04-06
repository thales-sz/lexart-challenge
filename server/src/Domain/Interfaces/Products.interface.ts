export default interface IProduct extends IReqBody {
  id?: number
  image: string
  description: string
  price: number
}

export interface IReqBody {
  web: string
  category: string
}
