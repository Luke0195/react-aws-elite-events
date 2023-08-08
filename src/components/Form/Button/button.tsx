import React from 'react'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode
}

export function Button(props: ButtonProps) {
  const { children, ...rest } = props
  return <button {...rest}>{children} </button>
}
