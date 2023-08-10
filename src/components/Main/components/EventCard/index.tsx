import { getCurrentCardType } from './shared/options/eventStatusOptions'
import { numberOrDefault } from '@/utils/formatters'
import { EventProps } from './shared/protocols'
import { parsedData } from './shared/mapper'
import { Checkbox } from '@mui/material'
import * as S from './styles'

interface EventCardProps {
  event: EventProps
}

export function EventCard(props: EventCardProps) {
  const { event } = props
  const parsed = parsedData(event)
  return (
    <S.Container
      cardColor={getCurrentCardType(numberOrDefault(event.eventType))}>
      <div>
        <Checkbox />
        <strong>Event name: {parsed.eventName} </strong>
      </div>

      <span> Event type: {parsed.eventType}</span>
      <span> Data do evento: {parsed.eventDate}</span>
    </S.Container>
  )
}
