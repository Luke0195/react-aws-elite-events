import * as S from './styles'
import moment from 'moment'
import 'react-calendar/dist/Calendar.css'
export function Calendar() {
  return (
    <S.StyledCalendar
      showNavigation
      value={new Date()}
      calendarType="US"
      className="react-calendar__tile"
      showNeighboringMonth={true}
      formatShortWeekday={(locale, date) => {
        return moment(date).format('ddd').charAt(0)
      }}
      selectRange={false}
    />
  )
}
