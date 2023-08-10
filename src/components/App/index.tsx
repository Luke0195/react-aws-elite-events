import { Header, Main } from '@/components'
import { Context } from '@/components/Main/context'
import * as S from './styles'

export function App() {
  return (
    <Context>
      <S.Container>
        <Header />
        <Main />
      </S.Container>
    </Context>
  )
}
