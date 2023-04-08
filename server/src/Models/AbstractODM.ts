import type { Model, Schema } from 'mongoose'
import { model, models } from 'mongoose'

import { type IMlbReturn, type IReqBody } from '../Domain/Interfaces/Products.interface'

import axios from 'axios'

abstract class AbstractODM<T> {
  protected headers = { 'Content-Type': 'application/json' }
  protected model: Model<T>
  protected schema: Schema
  protected modelName: string

  constructor (schema: Schema, modelName: string) {
    this.schema = schema
    this.modelName = modelName
    this.model = models[this.modelName] || model(this.modelName, this.schema)
  }

  public async create (obj: T[]): Promise<any> {
    return await this.model.insertMany(obj)
  }

  public async getProducts ({ category, web }: IReqBody): Promise<T[]> {
    return await this.model.find(
      { $and: [{ category }, { web }] },
      { image: 1, category: 1, web: 1, price: 1, description: 1 }
    )
  }

  public async fetchMercadoLivre ({ category, web }: IReqBody): Promise<T[]> {
    const url = `${web}/${category}`

    const { data } = await axios({
      method: 'GET',
      url,
      headers: this.headers
    })

    return data.results.map((product: IMlbReturn) => ({
      description: product.title,
      price: product.price,
      category,
      image: product.thumbnail,
      web: product.permalink
    }))
  }

  public async fetchBuscape ({ category, web }: IReqBody): Promise<string> {
    const url = `${web}/${category}`

    const { data } = await axios({
      method: 'GET',
      url,
      headers: this.headers
    })

    return data
  }
}

export default AbstractODM
