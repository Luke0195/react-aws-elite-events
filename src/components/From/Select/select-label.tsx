import React from 'react'

interface SelectLabelProps {
  children: React.ReactNode
}

export function SelectLabel(props: SelectLabelProps) {
  const { children } = props
  return (
    <label htmlFor="event_type" className="my-2 font-semibold">
      {children}
    </label>
  )
}
