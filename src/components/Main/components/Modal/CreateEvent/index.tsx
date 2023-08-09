import { Form } from './components'
import { CreateEventProps } from './shared/protocols'

export function CreateEvent(props: CreateEventProps) {
  const { onClose } = props
  return <Form onClose={onClose} />
}
