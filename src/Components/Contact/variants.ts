export const contactImgVariant = {
  hidden: {
    x: -30,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.7,
      ease: 'easeIn',
      duration: 0.5,
    },
  },
  exit: {
    x: 40,
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};
