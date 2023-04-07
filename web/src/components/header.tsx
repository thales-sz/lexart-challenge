import React, { useContext, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import Dropdown from './dropdown'
import { Context } from '../context/Context'

const itensSite = ['Mercado Livre', 'Buscapé']
const itensCategories = ['Geladeira', 'TV', 'Celular']

export default function Header (): JSX.Element {
  const value = useContext(Context)
  const [form, setForm] = useState({ web: '', category: '', inputText: '' })

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault()
    
  }

  const handleChange = ({ currentTarget: { name, value } }: React.FormEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleChangeProp = ({ currentTarget: { name, value } }: React.ChangeEvent<HTMLSelectElement>): void => {
    console.log('handleChangeProp', name, value)
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <header className="bg-white rounded-b flex items-center justify-between">
      <nav className="flex items-center justify-between p-6">
        <a href="https://www.linkedin.com/in/thales-sz/" target="_blank" rel="noreferrer">
          <span className="text-xl font-semibold leading-3 text-gray-600">Thales Chagas - Lexart Challenge</span>
        </a>
      </nav>
      <form className='flex gap-6 justify-between text-center w-3/4 text-black' onSubmit={handleSubmit}>
        <label htmlFor="underline_input" className="sr-only" />
        <input type='text' id='underline_input' className="mx-10 block py-2.5 px-0 w-full text-xl text-gray-600 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300  peer" placeholder='Buscar produtos, marcas e muito mais...'
        onChange={handleChange}
        value={form.inputText}
        name="inputText"/>
        <Dropdown name='web' itens={itensSite} selected={form.web} handleChange={handleChangeProp}/>
        <Dropdown name='category' itens={itensCategories} selected={form.category} handleChange={handleChangeProp}/>
        <button className=' text-white flex w-60 justify-around text-xl text-center border rounded-md bg-gray-300 hover:bg-gray-500' type='submit'>
          <span className='mt-2 mx-3'>Pesquisar</span>
          <BiSearchAlt size={32} className='mt-2'/>
        </button>
      </form>
    </header>
  )
}
