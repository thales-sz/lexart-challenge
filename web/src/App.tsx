import React, { useContext, useEffect, useState } from 'react'
import Header from './components/header'
import { Context } from './context/Context'
import { type IProduct } from './context/Provider'
import ProductCard from './components/productCard'
import Loading from './components/loading'
import Footer from './components/footer'

function App (): JSX.Element {
  const { products, loading } = useContext(Context)
  const [state, setState] = useState<IProduct[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleFilter = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>): void => {
    setSearchTerm(value)
  }

  useEffect(() => {
    if ((products[1]) != null) {
      setState(products.slice(1))
    }
  }, [products])

  const filteredProducts = state.filter((product) => {
    return product.description
      .toLowerCase()
      .includes(searchTerm.toLocaleLowerCase())
  })

  return (
    <main className="bg-gray-300 w-full min-h-screen text-white">
        <Header handleFilter={handleFilter} input={searchTerm}/>
        <section className='w-10/12 flex gap-4 flex-wrap mx-auto mt-8 justify-center'>
          {state[0] != null
            ? loading ? <Loading /> : filteredProducts.map((product, index) => <ProductCard key={index} {...product}/>)
            : <div className='text-gray-600 mt-20 flex flex-col justify-center text-center'>
                <h2 className='font-bold text-6xl'>Bem vindo(a)!</h2>
                <span className='font-semibold text-2xl mt-3'>Selecione o site de pesquisa, categoria e digite o filtro no menu acima!</span>
              </div>}
        </section>
        <Footer />
    </main>
  )
}

export default App
