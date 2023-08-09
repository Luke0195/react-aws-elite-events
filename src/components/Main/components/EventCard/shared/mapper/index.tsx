import { EventProps } from '../protocols'
import { notEmptyStringOfDefault, numberOrDefault } from '@/utils/formatters'

export function parsedData(event: EventProps): EventProps {
  return {
    eventId: event.eventId,
    eventName: notEmptyStringOfDefault(event.eventName),
    eventDate: notEmptyStringOfDefault(event.eventDate),
    eventType: numberOrDefault(event.eventType),
  }
}
