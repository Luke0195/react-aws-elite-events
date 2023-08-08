import {
  ButtonProps as MuiButtonProps,
  Button as MuiButton,
} from '@mui/material'
import React from 'react'

interface ButtonProps extends MuiButtonProps {
  children: React.ReactNode
}

export function Button(props: ButtonProps) {
  const { children, ...rest } = props
  return <MuiButton {...rest}>{children} </MuiButton>
}
