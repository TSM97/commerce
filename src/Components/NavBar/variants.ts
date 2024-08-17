export const parentVariants = {
  isActivePhone: {
    opacity: 1,
    height: '45dvh',
    backgroundColor: 'var(--background-transparent-color)',
    color: 'rgb(0, 0, 0)',
  },
  visible: {
    opacity: 1,
    height: '13dvh',
    y: 0,
    backgroundColor: 'var(--background-transparent-color)',
    color: 'rgb(0, 0, 0)',
  },
  hidden: {
    opacity: 0,
    height: '13dvh',
    y: '-4rem',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'var(--background-color)',
  },
  initial: {
    opacity: 1,
    height: '13dvh',
    y: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: `${
      location.pathname.includes('/article')
        ? 'rgb(0, 0, 0)'
        : 'var(--background-color)'
    }`,
  },
};

export const menuSlide = {
  initial: { y: 'calc(-100dvh)' },

  enter: {
    y: '0',
    transition: { duration: 0.7, ease: [0.76, 0, 0.1, 1.3] },
  },

  exit: {
    y: 'calc(100px)',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};
