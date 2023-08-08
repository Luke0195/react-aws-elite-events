import { EventData } from '../protocols'

export const parsedData = (data: EventData): EventData => {
  return {
    event_date: data.event_date === null ? '' : data.event_date,
    event_name: data.event_name === null ? '' : data.event_name,
    event_type: data.event_type === null ? '' : data.event_type,
  }
}
