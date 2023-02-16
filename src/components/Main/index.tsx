import * as S from './Main.styles'
import { HEADER } from 'theme/defaultTheme'
import { motion } from 'framer-motion'

const Main = () => (
  <S.Wrapper>
    <motion.div
      className="box"
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{ duration: 3, type: 'spring', stiffness: 150 }}
    >
      <S.Title>{HEADER.title}</S.Title>
    </motion.div>
    <motion.div
      className="box"
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{ duration: 3, type: 'spring', stiffness: 150 }}
    >
      <S.Description>
        <a href={HEADER.description}>{HEADER.description}</a>
      </S.Description>
    </motion.div>
  </S.Wrapper>
)

export default Main
