import React, { useContext, useEffect, useState } from 'react'
import Header from './components/header'
import { Context } from './context/Context'
import { type IProduct } from './context/Provider'
import ProductCard from './components/productCard'

function App (): JSX.Element {
  const value = useContext(Context)
  const [state, setState] = useState<IProduct[]>()

  useEffect(() => {
    if ((value.products?.at(1)) != null) {
      setState(value.products?.slice(1))
    }
  }, [])

  return (
    <main className="bg-gray-300 w-full h-screen text-white">
        <Header />
        {state?.map((product, index) => {
          return <ProductCard key={index} {...product}/>
        })}
    </main>
  )
}

export default App
