import * as S from './styles'
import moment from 'moment'
import { useContext } from 'react'
import 'react-calendar/dist/Calendar.css'
import { MainContext } from '../../context'
import { eventTypes } from './options'
export function Calendar() {
  const {
    eventUseCases: { events },
  } = useContext(MainContext)

  return (
    <S.StyledCalendar
      showNavigation
      value={new Date()}
      calendarType="US"
      className="react-calendar__tile"
      showNeighboringMonth={true}
      tileClassName={(date) => {
        const findElement = events.find(
          (item) =>
            moment(item.eventDate).utc().format('DD/MM/YYYY') ===
            moment(date.date).utc().format('DD/MM/YYYY')
        )
        if (findElement) {
          return eventTypes[findElement.eventType]
        }
        return 'default'
      }}
      formatShortWeekday={(locale, date) => {
        return moment(date).format('ddd').charAt(0)
      }}
      selectRange={false}
    />
  )
}
