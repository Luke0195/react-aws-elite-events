import React from 'react'

interface SelectProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  options: any[]
}

export function Select(props: SelectProps) {
  const { options } = props
  return (
    <>
      <select
        placeholder="Select Option"
        className="w-full h-11 border-solid border border-gray-300 w-full radi rounded pl-2 font-normal">
        {options.map((item) => (
          <option
            className="w-full"
            key={item.id}
            value={item.value.toString()}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  )
}
