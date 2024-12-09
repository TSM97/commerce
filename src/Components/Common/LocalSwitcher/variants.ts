export const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    },
  },
};

export const parentVariant = {
  open: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    scale: 0.8,
    opacity: 0.8,
    transition: {
      duration: 0.3,
    },
  },
};

export const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: 'afterChildren',
    },
  },
};
