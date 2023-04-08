import React from 'react'
import { type IProduct } from '../context/Provider'

function ProductCard ({ web, category, price, description, image }: IProduct): JSX.Element {
  return (
    <div className='text-black w-1/6 bg-white text-center justify-center flex flex-col rounded-xl m-5 p-2 border-4 border-gray-200'>
      <img alt={description} src={image} />
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-3 bg-gray-200 border-0 rounded" />
          <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900" />
      </div>
      <p>{description}</p>
      <p>R$ {price}</p>
      <p>Categoria: {category}</p>
      <a className='text-gray-200 flex w-1/2 mx-auto p-1 justify-around text-xl text-center border rounded-md bg-gray-600 hover:bg-gray-500 mt-1'
      target="_blank"
      rel="noreferrer"
      href={web}>
        Ir para web
      </a>
    </div>
  )
}

export default ProductCard
