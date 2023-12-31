import { WarningMessageWrapperProps } from '@/components/WarningMessage/shared/protocols'

export function WarningMessageWrapper(props: WarningMessageWrapperProps) {
  const { children } = props
  return (
    <div
      className={
        'p-2 flex w-full items-center justify-center bg-red-200 mt-2 rounded'
      }>
      {children}
    </div>
  )
}
