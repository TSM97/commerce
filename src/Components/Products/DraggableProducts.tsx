import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import Logo from '../../assets/ATHBees.webp';
import BeekeepingClose from '../../assets/BeekeepingClose.webp';
import HeroSectionImg from '../../assets/HeroSectionImg.webp';

const imgs = [HeroSectionImg, BeekeepingClose];
const includesOneProduct = imgs.length === 1;

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const DraggableProducts = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };
  console.log(imgIndex);

  return (
    <section className='container'>
      <div className='relative overflow-hidden w-1/2 h-screen py-8'>
        <motion.div
          drag='x'
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${imgIndex * 100}%`,
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className={`flex ${
            !includesOneProduct && 'cursor-grab active:cursor-grabbing'
          } h-full items-center`}
        >
          <Images imgIndex={imgIndex} />
        </motion.div>

        <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      </div>
    </section>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            draggable={includesOneProduct}
            transition={SPRING_OPTIONS}
            className='aspect-video w-full h-full shrink-0 rounded-xl bg-neutral-800 object-cover'
          />
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    !includesOneProduct && (
      <div className='mt-4 flex w-full justify-center gap-2'>
        {imgs.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setImgIndex(idx)}
              className={`h-3 w-3 rounded-full transition-colors ${
                idx === imgIndex ? 'bg-primary-750' : 'bg-neutral-400'
              }`}
            />
          );
        })}
      </div>
    )
  );
};
