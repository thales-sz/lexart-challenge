import React from 'react'

interface DropdownProps {
  name: string
  itens: string[]
}

function Dropdown ({ name, itens }: DropdownProps): JSX.Element {
  return (
    <div className="w-1/3">
      <select className="w-1/2 p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-gray-600">
        <option selected hidden>{name}</option>
        {itens.map((item, index) => <option value={item} key={index}>{item}</option>)}
      </select>
    </div>
  )
}

export default Dropdown
