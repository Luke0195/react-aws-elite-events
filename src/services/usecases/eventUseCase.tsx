import { Event } from '@/domain/models/event'
import { useState } from 'react'

export function eventUseCase() {
  const [events, setEvents] = useState<Event[]>([])

  const addEvent = (event: Event): void => {
    const copyEvents = Array.from(events)
    const findElement = copyEvents.findIndex(
      (item) => item.eventId === event.eventId
    )
    if (findElement) {
      copyEvents.splice(findElement, 1)
    }
    copyEvents.splice(0, 0, event)
    setEvents(copyEvents)
  }

  return {
    events,
    setEvents,
    addEvent,
  }
}
