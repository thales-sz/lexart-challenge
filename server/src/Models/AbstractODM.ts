import type { Model, Schema } from 'mongoose'
import { model, models } from 'mongoose'
import { type IReqBody } from '../Domain/Interfaces/Products.interface'

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

  public async create (obj: T): Promise<T> {
    return await this.model.create({ ...obj })
  }

  public async getProducts ({ category, web }: IReqBody): Promise<T[]> {
    return await this.model.find({
      category,
      web
    })
  }

  public async fetchWeb ({ category, web }: IReqBody): Promise<any> {
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
