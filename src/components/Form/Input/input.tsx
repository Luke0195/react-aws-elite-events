import { EventData } from '@/components/Main/components/Modal/CreateEvent/components/Form/protocols'
import React from 'react'
import { UseFormRegister } from 'react-hook-form'

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: 'event_name' | 'event_type' | 'event_date'
  type: string
  register: UseFormRegister<EventData>
  error: boolean
}
export function Input(props: InputProps) {
  const { register, name, type, placeholder, error, ...rest } = props
  return (
    <input
      type={type}
      placeholder={placeholder || ''}
      {...register(name)}
      {...rest}
      className={`h-11 border-solid border  w-full radi rounded pl-2 font-normal ${
        error
          ? 'border-red-500  placeholder-red-500'
          : 'border-gray-300 placeholder-gray-300'
      }`}
    />
  )
}
