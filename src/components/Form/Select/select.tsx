import { EventData } from '@/components/Main/components/CreateEvent/components/Form/protocols'
import React from 'react'
import { UseFormRegister } from 'react-hook-form'

interface SelectProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  options: any[]
  name: 'event_name' | 'event_type' | 'event_date'
  register: UseFormRegister<EventData>
}

export function Select(props: SelectProps) {
  const { options, name, register } = props
  return (
    <>
      <select
        {...register(name)}
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
