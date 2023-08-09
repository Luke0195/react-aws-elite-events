import React from 'react'

export interface WarningMessageWrapperProps {
  type: 'info' | 'success' | 'error' | 'warning'
  children: React.ReactNode
}
