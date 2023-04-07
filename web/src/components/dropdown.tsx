import React from 'react'

interface DropdownProps {
  name: string
  itens: string[]
  selected: string
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

function Dropdown ({ name, itens, selected, handleChange }: DropdownProps): JSX.Element {
  return (
    <div className="w-1/5 text-center">
      <label htmlFor="underline_select" className="sr-only" />
      <select id="underline_select" className="block py-2.5 px-0 w-auto text-xl text-gray-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer mx-10"
      name={name === 'web' ? 'web' : 'category'}
      value={selected}
      onChange={handleChange}>
        <option hidden>
          {name === 'web' ? 'Selecionar site' : 'Selecionar categoria'}
          {' '}
          ↴
        </option>
        {itens.map((item, index) => <option value={item} key={index}>{item}</option>)}
      </select>
    </div>
  )
}

export default Dropdown
