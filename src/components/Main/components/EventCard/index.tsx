import { EventProps } from './shared/protocols'
import { parsedData } from './shared/mapper'
import { Checkbox } from '@mui/material'

interface EventCardProps {
  event: EventProps
}

export function EventCard(props: EventCardProps) {
  const { event } = props
  const parsed = parsedData(event)
  return (
    <div key={event.eventId} className="p-4">
      <Checkbox />
      <span>Event name: {parsed.eventName} </span>
      <span> Event type: {parsed.eventType}</span>
      <span> Date: {parsed.eventDate}</span>
    </div>
  )
}
