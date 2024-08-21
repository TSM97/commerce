import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

import { products, includesOneProduct, SPRING_OPTIONS } from './data';
import Dots from './Components/Dots';
import CustomButton from '../CustomButton';

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
          if (pv === products.length - 1) {
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

    if (x <= -DRAG_BUFFER && imgIndex < products.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <section className='w-full lg:min-w-[50%] h-full flex flex-col items-center justify-center lg:w-1/2 py-[2dvw]'>
      <div className='w-3/4 md:w-[65%] h-full relative overflow-hidden pb-8'>
        <motion.div
          drag={includesOneProduct ? false : 'x'}
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
          draggable={!includesOneProduct}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className={`flex ${
            !includesOneProduct && 'cursor-grab active:cursor-grabbing'
          } h-[90%] w-full items-center`}
        >
          {products.map((product, idx) => {
            return (
              <div
                key={idx}
                className='min-w-[97%] relative lg:h-full mx-[1.5%] bg-white shadow-md rounded-3xl duration-500 hover:shadow-lg'
              >
                <img
                  draggable='false'
                  className='aspect-square object-cover w-full h-1/2 lg:h-3/4 rounded-xl bg-neutral-800'
                  src={product?.img}
                />
                <div className='px-4 py-3 full'>
                  <span className='text-gray-400 mr-3 uppercase text-xs'>
                    {product?.subtitle}
                  </span>
                  <p className='text-lg font-bold text-black capitalize'>
                    {product?.title}
                  </p>
                  <div className='flex items-center'>
                    <p className='text-lg font-semibold text-black cursor-auto my-3'>
                      {product?.lastPrice}
                    </p>
                    <del>
                      <p className='text-sm text-gray-600 cursor-auto ml-2'>
                        {product?.firstPrice}
                      </p>
                    </del>
                  </div>
                </div>
                <CustomButton
                  className='absolute bottom-3 right-3'
                  onClick={() => console.log('epatha klik')}
                >
                  Contact
                </CustomButton>
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
