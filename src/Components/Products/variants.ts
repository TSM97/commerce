export const productDescItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Staggered delay per item
      duration: 0.5,
    },
  }),
};
