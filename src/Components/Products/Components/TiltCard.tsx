import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { useRef } from 'react';

import Product from '../../../assets/HoneyProduct1.webp';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export const TiltCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
      }}
      className='relative min-h-[60dvh] w-[70dvw] lg:w-[35dvw] rounded-xl bg-gradient-to-br from-[#efc77d] to-honey border-2 border-black'
    >
      <div
        style={{
          backgroundImage: `url(${Product})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
        className='absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg'
      >
        <p>CMON</p>
        <p
          style={{
            transform: 'translateZ(50px)',
          }}
          className='text-center text-2xl font-bold'
        >
          HOVER ME
        </p>
      </div>
    </motion.div>
  );
};

export default TiltCard;
