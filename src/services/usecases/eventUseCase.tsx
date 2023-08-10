import { Event } from '@/domain/models/event'
import React, { useState } from 'react'

export function eventUseCase() {
  const [events, setEvents] = useState<Event[]>([])

  const addEvent = (event: Event): void => {
    setEvents((prev) => [...prev, event])
  }

  return {
    events,
    setEvents,
    addEvent,
  }
}
