import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';

const linkList: string[] = ['item1', 'item1', 'item1', 'item1', 'item1'];

const parentVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: '-4rem' },
};

const childVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: '-2rem' },
};

export default function NavBar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  function update(latest: number, prev: number): void {
    if (latest < prev) {
      setHidden(false);
      // console.log("visible");
    } else if (latest > 100 && latest > prev) {
      setHidden(true);
      // console.log("hidden");
    }
  }

  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    update(latest, prevScroll);
    setPrevScroll(latest);
  });

  return (
    <motion.nav
      className='flex sm:justify-around justify-between items-center p-5 text-3xl fixed left-0 w-[100vw] z-50'
      variants={parentVariants}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.6,
        // staggerChildren: 0.05,
      }}
    >
      <p>Logo</p>
      <div className='flex gap-5'>
        {linkList.map((item, i) => (
          <motion.a
            key={i}
            variants={childVariants}
            transition={{
              ease: [0.1, 0.25, 0.3, 1],
              duration: 0.4,
            }}
          >
            {item}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}
