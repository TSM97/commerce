import Product from '../../assets/HoneyProduct1.webp';
import WaveBG from '../../svgs/WaveBG.svg';
import { benefitsList } from './data';

export default function Products() {
  return (
    <section
      id='Products'
      className='min-h-screen py-[3dvw] px-[3dvw] flex flex-col xl:flex-row items-center lg:items-start lg:bg-none'
      style={{
        backgroundImage: `url(${WaveBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <section className='p-[4dvw] xl:w-1/2'>
        <img
          src={Product}
          className=' lg:min-w-[30dvw] w-[300px] h-[300px] lg:h-[30dvw] object-cover rounded-full z-10'
        />
      </section>
      <section className='py-[2dvw] flex flex-col gap-4 pr-[3dvw]'>
        <div className='font-lobster text-4xl text-honey'>Discover</div>
        <div className='font-martel text-5xl'>
          <div>The Remarkable</div>
          <div>Benefits of Honey</div>
        </div>
        <div className='text-lg'>
          The benefits of honey extend beyond its sweet taste. It’s rich in
          antioxidants, which help fight free radicals and support overall
          health. Honey’s natural antibacterial properties make it effective for
          soothing sore throats and aiding wound healing. It also promotes
          digestive health by balancing gut bacteria and has anti-inflammatory
          effects that can alleviate seasonal allergies.
        </div>
        <section className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          {benefitsList.map((el, i) => (
            <div
              className='p-4 flex text-md font-semibold font-martel items-center gap-4'
              key={i}
            >
              {el?.icon}
              <div>{el?.text}</div>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}
