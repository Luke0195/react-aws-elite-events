import styled from 'styled-components'

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
