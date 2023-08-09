import { WarningMessageWrapperProps } from '@/components/WarningMessage/shared/protocols'

export function WarningMessageContent(props: WarningMessageWrapperProps) {
  const { children } = props
  return <p className="text-red-500">{children} </p>
}
