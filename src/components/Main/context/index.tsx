import React, { createContext } from 'react'
import { Event } from '@/domain/models/event'
import { eventUseCase } from '@/services/usecases/eventUseCase'
type StateAction<T> = React.Dispatch<React.SetStateAction<T>>

interface MainContextProps {
  eventUseCases: {
    events: Event[]
    setEvents: StateAction<Event[]>
    addEvent: (event: Event) => void
  }
}

export const MainContext = createContext<MainContextProps>(
  {} as MainContextProps
)

export function Context({ children }: any) {
  return (
    <MainContext.Provider value={{ eventUseCases: eventUseCase() }}>
      {children}
    </MainContext.Provider>
  )
}
