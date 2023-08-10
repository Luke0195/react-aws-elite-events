import { MainHeader, EventCard, Calendar } from './components'
import { MainContext } from './context'
import { useContext } from 'react'
import * as S from './styles'

export function Main() {
  const {
    eventUseCases: { events },
  } = useContext(MainContext)
  console.log('events', events)
  return (
    <S.Container>
      <div className="flex-1 flex flex-col  px-32   overflow-hidden ">
        <MainHeader />
        <div className="flex flex-row  bg-blue w-full mt-2 justify-between bg-red">
          <div className="h-full flex-2">
            <div className="grid w-full grid-cols-3 gap-3">
              {events.map((item) => (
                <EventCard key={item.eventId} event={item} />
              ))}
            </div>
          </div>
          <div className="h-full flex-1 flex items-center justify-center">
            <Calendar />
          </div>
        </div>
      </div>
    </S.Container>
  )
}
