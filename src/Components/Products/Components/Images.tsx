import { motion } from 'framer-motion';

import { imgs, includesOneProduct, SPRING_OPTIONS } from '../data';

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.img
            key={idx}
            src={imgSrc}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            className='aspect-square object-cover shrink-0 rounded-xl bg-neutral-800'
          />
        );
      })}
    </>
  );
};

export default Images;
