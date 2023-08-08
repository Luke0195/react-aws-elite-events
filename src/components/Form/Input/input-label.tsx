import React from 'react'

interface InputLabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  children: React.ReactNode
}

export function InputLabel(props: InputLabelProps) {
  const { children, ...rest } = props
  return <label {...rest}>{children}</label>
}
