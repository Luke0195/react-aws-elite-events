import { Event } from '@/domain/models/event'
import { Checkbox } from '@mui/material'

interface EventCardProps {
  event: Event
}

export function EventCard(props: EventCardProps) {
  const { event } = props
  return (
    <div key={event.eventId} className="p-4">
      <Checkbox />
      <span>Event name: {event.eventName} </span>
      <span> Event type: {event.eventType}</span>
      <span> Date: {event.eventDate}</span>
    </div>
  )
}
