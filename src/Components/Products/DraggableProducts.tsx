import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

import { imgs, includesOneProduct, SPRING_OPTIONS } from './data';
import Dots from './Components/Dots';

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

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
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <section className='lg:min-w-[50%] h-full flex flex-col items-center justify-center lg:w-1/2 py-[2dvw]'>
      <div className='md:w-[65%] h-full relative overflow-hidden  pb-8'>
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
          draggable={includesOneProduct}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className={`flex ${
            !includesOneProduct && 'cursor-grab active:cursor-grabbing'
          } h-[90%] w-full items-center`}
        >
          {imgs.map((imgSrc, idx) => {
            return (
              <div
                key={idx}
                className='min-w-[97%] h-full mx-[1.5%] bg-white shadow-md rounded-3xl duration-500 hover:shadow-lg'
              >
                <img
                  draggable='false'
                  className='aspect-square object-cover w-full h-1/2 lg:h-3/4 rounded-xl bg-neutral-800'
                  src={imgSrc}
                />
                <div className='px-4 py-3 full'>
                  <span className='text-gray-400 mr-3 uppercase text-xs'>
                    Brand
                  </span>
                  <p className='text-lg font-bold text-black truncate block capitalize'>
                    Product Name
                  </p>
                  <div className='flex items-center'>
                    <p className='text-lg font-semibold text-black cursor-auto my-3'>
                      $149
                    </p>
                    <del>
                      <p className='text-sm text-gray-600 cursor-auto ml-2'>
                        $199
                      </p>
                    </del>
                    <div className='ml-auto'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        fill='currentColor'
                        className='bi bi-bag-plus'
                        viewBox='0 0 16 16'
                      >
                        <path
                          fillRule='evenodd'
                          d='M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z'
                        />
                        <path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z' />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* <div className='relative overflow-hidden w-3/4 h-3/4 py-8'>
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
      </div> */}
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </section>
  );
};
