import '../styles/globals.css'
import { createContext, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const duration = 0.5

const fade = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

const noFade = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 1,
  },
}

const TransitionContext = createContext();

function MyApp({ Component, pageProps, router }) {
  const [transition, setTransition] = useState(false);
  console.log(transition)

  return (
    <TransitionContext.Provider value={[transition, setTransition]}>
      <AnimatePresence>
        <motion.main
          key={router.route}
          variants={ transition ? fade :noFade}
          initial="initial"
          animate="enter"
          exit="exit"
        >

          <Component {...pageProps} />

        </motion.main>
      </AnimatePresence>
    </TransitionContext.Provider>
  )
}
export { TransitionContext }
export default MyApp
