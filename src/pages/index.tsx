import About from 'components/About'
import Main from 'components/Main'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <motion.div
        className="box"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -200, opacity: 0 }}
        transition={{ duration: 3, type: 'spring', stiffness: 150 }}
      >
        <Main />
      </motion.div>
      <motion.div
        className="box"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -200, opacity: 0 }}
        transition={{ duration: 3, type: 'spring', stiffness: 150 }}
      >
        <About />
      </motion.div>
    </>
  )
}
