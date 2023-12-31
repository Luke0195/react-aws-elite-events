import styled from 'styled-components'
import ReactCalendar from 'react-calendar'

interface CardProps {
  cardColor: string
}

export const Container = styled.div<CardProps>`
  width: 100%;
  border-radius: 8px;
  background-color: ${(props) => props.cardColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  span {
    font-size: 14px;
  }
`

export const StyledCalendar = styled(ReactCalendar)`
  border: 0;
  width: auto;
  .react-calendar__month-view__days button {
    cursor: default !important;
  }

  .react-calendar__tile {
    cursor: default;
    padding: 7px;
    :nth-child(7n) {
      border-right-width: 0px;
    }
  }

  .react-calendar__tile:hover {
    background-color: #f7f8f9;
  }

  .react-calendar__month-view__days button {
    border: 1px solid rgba(110, 110, 110, 0.1) !important;
    flex: 1;
  }

  .react-calendar__month-view__weekdays__weekday {
    font-weight: bold;
    color: #202020;
    font: normal normal bold 14px/17px Lato;
  }
  .react-calendar__navigation__label {
    font-weight: bold;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #fff !important;
  }

  .react-calendar__tile--active {
    background-color: #fcfcfc;
    width: 100%;
    height: 100%;
    border-radius: 0;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .react-calendar__tile--active:hover {
    background-color: #fcfcfc;
  }

  .react-calendar__tile--active abbr {
    color: #000 !important;
  }
  .react-calendar__tile--active::after {
    content: 'Conteudo';
    width: 23px;
    height: 28px;
    position: absolute;
    top: -17px;
    right: -17px;
    background-color: #3455ab;
    transform: rotate(40deg);
  }
`
