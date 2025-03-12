import bgFlowees from '../../svgs/nFlowees.svg';
import { useRef } from 'react';

export default function About() {
  const container = useRef(null);
  return (
    <>
      <section>
        <section
          style={{
            backgroundImage: `url(${bgFlowees})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          ref={container}
          id='About'
          className='bg-svgColor relative h-[100vh] z-10 flex justify-center items-center'
        >
          <div className='mx-auto w-[90%] md:w-1/2 text-center text-[12dvw] md:text-[6dvw] text-black-250 tracking-tight py-14 leading-none'>
            Reveal the Unique Story Behind
            <span className='text-honey tracking-wide'> Athenian Bees</span>
          </div>
        </section>
        <div className='w-full xl:w-3/4 min-h-[80vh] text-2xl mx-auto flex md:flex-row flex-col p-6 md:p-12'>
          <div className='flex md:w-1/2 flex-col justify-around pb-2 order-2 md:order-1'>
            <p>
              <div className='text-3xl font-lobster text-honey tracking-wider pb-4'>
                .Individually
              </div>
              <div className='text-xl tracking-normal'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                odio autem inventore ratione doloribus libero veritatis. Ratione
                laudantium aut deleniti dolores vel maxime illo assumenda,
                quibusdam animi ea amet minima. Nisi dolore, eius minus maiores
                provident repellendus sapiente, at veritatis, illo assumenda
                officiis est vitae quasi culpa! Qui esse modi repudiandae eaque
                incidunt. Veniam eius asperiores error quibusdam sint. Ipsum.
              </div>
            </p>
            <p>
              <div className='text-3xl font-lobster text-honey text-right tracking-wider pb-4'>
                .The Story
              </div>
              <div className='text-xl tracking-normal'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                odio autem inventore ratione doloribus libero veritatis. Ratione
                laudantium aut deleniti dolores vel maxime illo assumenda,
                quibusdam animi ea amet minima. Nisi dolore, eius minus maiores
                provident repellendus sapiente, at veritatis, illo assumenda
                officiis est vitae quasi culpa! Qui esse modi repudiandae eaque
                incidunt. Veniam eius asperiores error quibusdam sint. Ipsum.
              </div>
            </p>
            <p>
              <div className='text-3xl font-lobster text-honey tracking-wider pb-4'>
                .Our Goal
              </div>
              <div className='text-xl tracking-normal'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                odio autem inventore ratione doloribus libero veritatis. Ratione
                laudantium aut deleniti dolores vel maxime illo assumenda,
                quibusdam animi ea amet minima. Nisi dolore, eius minus maiores
                provident repellendus sapiente, at veritatis, illo assumenda
                officiis est vitae quasi culpa! Qui esse modi repudiandae eaque
                incidunt. Veniam eius asperiores error quibusdam sint. Ipsum.
              </div>
            </p>
          </div>

          <div className='flex lg:static md:sticky top-5 justify-end h-full md:w-1/2 order-1 md:order-2'>
            <img
              src='/src/assets/kox.webp'
              className='h-full rounded-md w-full md:w-[85%] object-cover'
            />
          </div>
        </div>
      </section>
    </>
  );
}
