import { MainHeader } from './components'
import * as S from './styles'
export function Main() {
  return (
    <S.Container>
      <div className="flex-1 flex flex-col  px-32 h-full bg-red-400 overflow-hidden ">
        <MainHeader />
        <div className="flex max-h-max bg-blue">
          <div className="h-auto bg-red"> ... </div>
          <div className="h-auto bg-red"> ... </div>
        </div>
      </div>
    </S.Container>
  )
}
