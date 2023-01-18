import * as S from './Main.styles'
import { HEADER } from 'theme/defaultTheme'

const Main = () => (
  <S.Wrapper>
    <S.Title>{HEADER.title}</S.Title>
    <S.Description>{HEADER.description}</S.Description>
    <p>
      contact-me:{' '}
      <a href="mailto:juliocarneiro@gmail.com">juliocarneiro@gmail.com</a>
    </p>
  </S.Wrapper>
)

export default Main
