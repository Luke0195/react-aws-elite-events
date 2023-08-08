import { EventData } from '@/components/Main/components/CreateEvent/components/Form/protocols'
import React from 'react'
import { UseFormRegister } from 'react-hook-form'

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: 'event_name' | 'event_type' | 'event_date'
  register: UseFormRegister<EventData>
}
export function Input(props: InputProps) {
  const { register, name } = props
  return (
    <input
      {...register(name)}
      className="h-11 border-solid border border-gray-300 w-full radi rounded pl-2 font-normal"
    />
  )
}
