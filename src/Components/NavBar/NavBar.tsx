import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import Logo from '../../assets/ATHBees.webp';
import { NavHashLink } from 'react-router-hash-link';

const navList: string[] = ['Home', 'News', 'Products', 'About', 'Contact'];

const parentVariants = {
  visible: {
    opacity: 1,
    y: 0,
    backgroundColor: 'var(--background-transparent-color)',
    color: 'rgb(0, 0, 0)',
  },
  hidden: {
    opacity: 0,
    y: '-4rem',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'var(--background-color)',
  },
  initial: {
    opacity: 1,
    y: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'var(--background-color)',
  },
};

const childVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: '-2rem' },
};

export default function NavBar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState<boolean | 'initial'>('initial');
  const [prevScroll, setPrevScroll] = useState(0);

  function update(latest: number, prev: number): void {
    if (latest != 0 && latest < prev) {
      setHidden(false);
    } else if (latest > 100 && latest > prev) {
      setHidden(true);
    } else if (latest == 0 && latest < prev) {
      setHidden('initial');
    }
  }

  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    update(latest, prevScroll);
    setPrevScroll(latest);
  });

  return (
    <motion.nav
      className={`flex sm:justify-around backdrop-blur-sm justify-between items-center p-2 max-h-[13dvh] text-[2vw] fixed left-0 w-[98vw] z-50 rounded-b-[50px]`}
      variants={parentVariants}
      animate={hidden === 'initial' ? 'initial' : hidden ? 'hidden' : 'visible'}
      transition={{
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.4,
      }}
    >
      <motion.img
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{
          duration: 0.5,
          scale: {
            duration: 0.6,
            ease: 'easeInOut',
          },
        }}
        src={Logo}
        className='h-[13dvh] cursor-pointer'
        alt='AthenianBees Logo'
      />
      <div className='flex gap-12'>
        {navList.map((item, i) => (
          <motion.div
            className='NavButton cursor-pointer text-nowrap'
            key={i}
            variants={childVariants}
            initial={{ opacity: 1, y: 0 }}
            transition={{
              ease: [0.1, 0.25, 0.3, 2],
              duration: 0.4,
            }}
          >
            <NavHashLink to={`/#${item}`}>
              <div>
                <sup>&#8226; </sup>
                {item}
              </div>
            </NavHashLink>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}
