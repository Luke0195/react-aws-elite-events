import { EventData } from '@/components/Main/components/Modal/CreateEvent/components/Form/protocols'
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
  error: boolean
}

export function Select(props: SelectProps) {
  const { options, name, register, error } = props
  return (
    <>
      <select
        {...register(name)}
        defaultValue={'Selecione uma opção'}
        placeholder="Select Option"
        className={`w-full h-11 border-solid border border-gray-300  radius rounded pl-2 font-normal ${
          error
            ? 'border-red-500  placeholder-red-500 text-red-500'
            : 'border-gray-300 placeholder:bg-gray-300'
        }`}>
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
