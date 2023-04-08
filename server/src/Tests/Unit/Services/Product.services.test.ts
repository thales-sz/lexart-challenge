import sinon from 'sinon'
import { Model } from 'mongoose'
import { expect, describe, afterAll, it } from 'vitest'
import { productMock } from '../../Mocks/Produc.mock'
import ProductService from '../../../Domain/Services'
import Product from '../../../Domain/Product'

const mercadoRequest = {
  web: 'https://api.mercadolibre.com/sites/MLB/search?q=',
  category: 'computador'
}

const buscapeRequest = {
  web: 'https://www.buscape.com.br/search?q=',
  category: 'geladeira'
}

const instance = new Product(productMock)

describe('Service layer testing', () => {
  afterAll(function () {
    sinon.restore()
  })

  it('Should be able to return a list of products when called with correct parameters', async () => {
    sinon.stub(Model, 'find').resolves([productMock, productMock, productMock])

    const service = new ProductService()

    const result = await service.getProduct(mercadoRequest)

    expect(result).toEqual([instance, instance, instance])
  })

  it('Should be able to return a list of products when called with correct parameters', async () => {
    const service = new ProductService()

    const result = await service.getProduct(buscapeRequest)

    expect(result).toEqual([instance, instance, instance])
  })
})
