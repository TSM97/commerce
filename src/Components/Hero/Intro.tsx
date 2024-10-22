import Background from '../../assets/HeroSectionImg.webp';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Intro() {
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);

  return (
    <div id='Home' className='h-screen overflow-hidden'>
      <motion.div style={{ y }} className='relative h-full'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto text-5xl xl:text-[6dvw] font-extrabold text-center text-white tracking-wider'>
          <div>ATHENIAN</div>
          <div>BEES</div>
        </div>
        <img
          src={Background}
          alt='Atheenian Bees'
          style={{
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
