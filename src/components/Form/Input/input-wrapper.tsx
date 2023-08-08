import React from 'react'

interface InputWrapperProps {
  children: React.ReactNode
}

export function InputWrapper(props: InputWrapperProps) {
  const { children } = props
  return (
    <div className="flex flex-col items-start w-full my-2 font-semibold">
      {children}
    </div>
  )
}
