import { motion } from 'framer-motion';

import Logo from '../../../assets/ATHBees.webp';
import News1 from '../../../assets/News1.webp';
import News2 from '../../../assets/News2.webp';

export default function Description() {
  return (
    //Left Partial
    <div className='flex gap-16 sm:flex-row flex-col justify-center items-center sm:items-start min-h-[80dvh] my-10'>
      <div className='flex flex-col justify-center text-[3vw] text-center  max-w-[40vw] leading-none gap-[3vw]'>
        <motion.img
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src={Logo}
          className='h-[18dvh] object-contain'
          alt='AthenianBees Logo'
        />
        <motion.div
          className=' border-t-2 border-[#e8772e] pt-5'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Latest Updates in <span className='text-[#e8772e]'>Beekeeping</span>{' '}
          and <span className='text-[#e8772e]'>Honey</span> Production
        </motion.div>
      </div>
      {/* Right Partial */}
      <article className='text-left h-full p-4 max-w-[40vw]'>
        <header className='font-bold text-3xl pb-4'>News</header>
        <body>
          <div className='p-6 flex border-gray-800 rounded-lg shadow-md mb-4'>
            <img
              className='object-cover w-1/2 mr-4'
              style={{ borderRadius: '30% 70% 41% 59% / 74% 14% 86% 26%' }}
              src={News1}
            />
            <section>
              <a href='#'>
                <h5 className='mb-2 font-bold tracking-tight'>
                  Lorem ipsum dolor sit amet consectetur.
                </h5>
              </a>
              <p className='mb-3 font-normal'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate explicabo nisi ipsam!
              </p>
              <div className='flex w-full justify-end'>
                <button className='rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#e8772e] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>
                  Read more
                </button>
              </div>
            </section>
          </div>
          <div className='p-6 flex border-gray-800 rounded-lg shadow-md mb-4'>
            <img
              className='object-cover w-1/2 mr-4'
              style={{ borderRadius: '30% 70% 41% 59% / 74% 14% 86% 26%' }}
              src={News2}
            />
            <section>
              <a href='#'>
                <h5 className='mb-2 font-bold tracking-tight'>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h5>
              </a>
              <p className='mb-3 font-normal'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                aut corporis ratione quod. Quas, neque?
              </p>
              <div className='flex w-full justify-end'>
                <button className='rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#e8772e] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>
                  Read more
                </button>
              </div>
            </section>
          </div>
        </body>
      </article>
    </div>
  );
}
