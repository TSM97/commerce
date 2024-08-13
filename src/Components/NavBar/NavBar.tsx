import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { useState } from 'react';
import Logo from '../../assets/ATHBees.webp';
import { NavHashLink } from 'react-router-hash-link';
import AnimatedHamburgerButton from './Components/HamburgerButtom';

const navList: string[] = ['Home', 'Products', 'News', 'About', 'Contact'];

const childVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: '-2rem' },
};

export default function NavBar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState<boolean | 'initial'>('initial');
  const [prevScroll, setPrevScroll] = useState(0);
  const [active, setActive] = useState(false);

  function update(latest: number, prev: number): void {
    if (latest != 0 && latest < prev) {
      setHidden(false);
    } else if (latest > 100 && latest > prev) {
      setHidden(true);
    } else if (latest == 0 && latest < prev) {
      setHidden('initial');
    }
  }

  const parentVariants = {
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

  const menuSlide = {
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

  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    update(latest, prevScroll);
    setPrevScroll(latest);
  });

  return (
    <>
      {' '}
      <motion.nav
        className={`flex lg:justify-around backdrop-blur-sm justify-between items-center p-2 text-[3vw] xl:text-[2vw] fixed left-0 w-[98vw] z-50 rounded-b-[50px]`}
        variants={parentVariants}
        animate={
          active
            ? 'isActivePhone'
            : hidden === 'initial'
            ? 'initial'
            : hidden
            ? 'hidden'
            : 'visible'
        }
        transition={{
          height: { duration: 0.4, ease: 'backOut' },
          ease: [0.1, 0.25, 0.3, 1],
          duration: 0.4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          animate={
            hidden == 'initial'
              ? { opacity: 1, y: 0 }
              : active
              ? { opacity: 1, y: 0 }
              : hidden
              ? { opacity: 1, y: -150 }
              : { opacity: 1, y: 0 }
          }
          whileHover={{ scale: 1.1 }}
          transition={{
            duration: 0.5,
            scale: {
              duration: 0.6,
              ease: 'easeInOut',
            },
          }}
        >
          <NavHashLink to={'/#Home'}>
            <img
              src={Logo}
              className='h-[13dvh] cursor-pointer'
              alt='AthenianBees Logo'
            />
          </NavHashLink>
        </motion.div>

        <div className='hidden lg:flex gap-12'>
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
        <div className='lg:hidden'>
          <AnimatedHamburgerButton setActive={setActive} active={active} />
        </div>
      </motion.nav>
      {active && (
        <AnimatePresence mode='wait'>
          <section className='fixed text-[4dvh] top-[7.5dvh] left-1/2 -translate-x-1/2 z-50'>
            {' '}
            <motion.div
              variants={menuSlide}
              initial='initial'
              animate='enter'
              exit='exit'
            >
              <div>
                {navList.map((item, i) => (
                  <motion.div
                    onClick={() => {
                      setActive(false);
                    }}
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
            </motion.div>
          </section>
        </AnimatePresence>
      )}
    </>
  );
}
