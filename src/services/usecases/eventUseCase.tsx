import { Event } from '@/domain/models/event'
import { useEffect, useState } from 'react'

export function eventUseCase() {
  const [events, setEvents] = useState<Event[]>(() => {
    const storagedEvents = localStorage.getItem('@elite-events:events')
    if (storagedEvents) {
      return JSON.parse(storagedEvents)
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem('@elite-events:events', JSON.stringify(events))
  }, [events])
  const addEvent = (event: Event): void => {
    setEvents((prev) => [...prev, event])
  }

  return {
    events,
    setEvents,
    addEvent,
  }
}
