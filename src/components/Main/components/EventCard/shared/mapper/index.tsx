import { EventProps } from '../protocols'

export function parsedData(event: EventProps): EventProps {
  return {
    eventId: event.eventId,
    eventName: event.eventName === null ? '-' : event.eventName,
    eventDate: event.eventDate === null ? '-' : event.eventDate,
    eventType: event.eventType === null ? 0 : event.eventType,
  }
}
