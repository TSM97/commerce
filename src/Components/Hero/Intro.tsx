import Background from '../../assets/img.png';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Intro() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);

  return (
    <div className='h-screen overflow-hidden'>
      <motion.div style={{ y }} className='relative h-full'>
        <img
          src={Background}
          alt='image'
          style={{
            // position: 'absolute',
            // top: 0,
            // left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            overflow: 'hidden',
          }}
        />
      </motion.div>
    </div>
  );
}
