import React from 'react'

interface SelectWrapperProps {
  children: React.ReactNode
}

export function SelectWrapper(props: SelectWrapperProps) {
  const { children } = props
  return <div className="flex flex-col items-start w-full my-2">{children}</div>
}
