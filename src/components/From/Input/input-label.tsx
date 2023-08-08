import React from 'react'

interface InputLabelProps {
  children: React.ReactNode
}

export function InputLabel(props: InputLabelProps) {
  const { children } = props
  return <label className="w-full my-2 ">{children}</label>
}
