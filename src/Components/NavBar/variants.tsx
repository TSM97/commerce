export const parentVariants = {
  isActivePhone: {
    opacity: 1,
    height: '45vh',
    backgroundColor: 'var(--background-transparent-color)',
    color: 'rgb(0, 0, 0)',
    fill: 'rgb(0, 0, 0)',
  },
  visible: {
    opacity: 1,
    height: '13vh',
    y: 0,
    backgroundColor: 'var(--background-transparent-color)',
    color: 'rgb(0, 0, 0)',
    fill: 'rgb(0, 0, 0)',
  },
  hidden: {
    opacity: 0,
    height: '13vh',
    y: '-4rem',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'var(--background-color)',
    fill: 'var(--background-color)',
  },
};

export const menuSlide = {
  initial: { y: 'calc(-100vh)' },

  enter: {
    y: '0',
    transition: { duration: 0.7, ease: [0.76, 0, 0.1, 1.3] },
  },

  exit: {
    y: 'calc(100px)',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const childVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: '-2rem' },
};
