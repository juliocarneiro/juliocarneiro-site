import * as S from './Main.styles'
import { HEADER } from 'theme/defaultTheme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faMedium,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

const Main = () => (
  <S.Wrapper>
    <div>
      <S.Title>{HEADER.title}</S.Title>
    </div>
    <div>
      <S.Description>
        <a
          href="https://github.com/juliocarneiro"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://medium.com/@juliocarneiro"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faMedium} />
        </a>
        <a
          href="https://linkedin.com/in/juliocarneiro"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </S.Description>
    </div>
  </S.Wrapper>
)

export default Main
