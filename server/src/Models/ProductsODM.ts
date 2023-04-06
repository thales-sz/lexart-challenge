import { Schema } from 'mongoose'
import type IProduct from '../Domain/Interfaces/Products.interface'
import AbstractODM from './AbstractODM'

class ProductODM extends AbstractODM<IProduct> {
  constructor () {
    const schema = new Schema<IProduct>({
      image: { type: String, required: true },
      description: { type: String, required: true },
      web: { type: String, required: true },
      price: { type: Number, required: true },
      category: { type: String, required: true }
    })
    super(schema, 'Product')
  }
}

export default ProductODM
