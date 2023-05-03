export const slideVariants = {
  open: {
    opacity: 1,
    width: '100%',
    transition: { duration: 0.4 }
  },
  closed: {
    opacity: 1,
    width: 0,
    transition: { duration: 0.4 },
    transitionEnd: {
      display: 'none'
    }
  }
}

export const opacityVariants = {
  open: {
    opacity: 1,
    height: '200px',
    transition: {
      duration: 0.2
    },
    display: 'block'
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.2
    },
    transitionEnd: {
      display: 'none'
    }
  }
}

export const topVariants = {
  open: {
    opacity: 1,
    height: 'auto',
    width: '100%',
    transition: {
      duration: 0.4,
      delayChildren: 0.5
    },
    display: 'flex'
  },
  closed: {
    width: '100%',
    opacity: 1,
    height: 0,
    transition: {
      duration: 0.4,
      delayChildren: 0.5
    },
    transitionEnd: {
      display: 'none'
    }
  }
}
