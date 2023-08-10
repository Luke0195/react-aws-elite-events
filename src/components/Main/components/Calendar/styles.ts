import styled from 'styled-components'
import ReactCalendar from 'react-calendar'

export const StyledCalendar = styled(ReactCalendar)`
  border: 0;
  width: 500px;
  border: 1px solid #ccc;

  .react-calendar {
    font-family: Arial, Helvetica, sans-serif;
  }
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

  .event_type0 {
    color: green;
    background-color: #fff;
  }
  .event_type1 {
    color: #fff;
    background-color: yellow;
  }
  .event_type2 {
    color: #fff;
    background-color: red;
  }
  .event_type3 {
    color: #fff;
    background-color: gray;
  }
`
