import React from 'react'
import Dropdown from './dropdown'

const itensSite = ['Mercado Livre', 'Buscapé']

export default function Example (): JSX.Element {
  return (
    <header className="bg-white rounded-b flex items-center justify-around">
      <nav className="mx-auto flex items-center justify-between p-6">
        <a href="https://www.linkedin.com/in/thales-sz/" target="_blank" rel="noreferrer" className="-m-1.5 p-1.5">
          <span className="text-xl font-semibold leading-3 text-black">Thales Chagas - Lexart Challenge</span>
        </a>
      </nav>
      <Dropdown name='Selecionar Site' itens={itensSite} />
    </header>
  )
}
