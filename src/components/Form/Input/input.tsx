import React from 'react'

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}
export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="h-11 border-solid border border-gray-300 w-full radi rounded pl-2 font-normal"
    />
  )
}
