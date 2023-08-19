import formatters from '@/utils/formatters'
import { EventProps } from '../protocols'
import moment from 'moment'

export function parsedData(event: EventProps): EventProps {
  return {
    eventId: event.eventId,
    eventName: formatters.notEmptyStringOfDefault(event.eventName),
    eventDate:
      event.eventDate !== null
        ? moment(new Date(event.eventDate)).format('dd/MM/yyyy hh:MM:ss')
        : '-',
    eventType: formatters.numberOrDefault(event.eventType),
  }
}
