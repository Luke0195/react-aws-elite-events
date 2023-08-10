import { notEmptyStringOfDefault, numberOrDefault } from '@/utils/formatters'
import { EventProps } from '../protocols'
import moment from 'moment'

export function parsedData(event: EventProps): EventProps {
  return {
    eventId: event.eventId,
    eventName: notEmptyStringOfDefault(event.eventName),
    eventDate:
      event.eventDate !== null
        ? moment(event.eventDate).format('DD/MM/YYYY hh:MM:ss')
        : '-',
    eventType: numberOrDefault(event.eventType),
  }
}
