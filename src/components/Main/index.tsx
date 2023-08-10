import { MainHeader, EventCard, Calendar } from './components'

import * as S from './styles'
import { data } from './mocks/events.json'

export function Main() {
  return (
    <S.Container>
      <div className="flex-1 flex flex-col  px-32   overflow-hidden ">
        <MainHeader />
        <div className="flex flex-row  bg-blue w-full mt-2 ">
          <div className="h-full flex-2">
            <div className="grid w-full grid-cols-3 gap-3">
              {data.map((item) => (
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
