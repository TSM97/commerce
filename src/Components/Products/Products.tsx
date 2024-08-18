import Product from '../../assets/HoneyProduct1.webp';
import WaveBG from '../../svgs/WaveBG.svg';
import { benefitsList } from './data';
import CustomButton from '../CustomButton';
import TiltCard from './Components/TiltCard';

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
      <section className='py-[2dvw] px-[4dvw] min-w-[50%] xl:w-1/2 flex flex-col items-center'>
        <TiltCard />
        <div>testing Testbranch</div>
        {/* <>
          <img
            src={Product}
            className=' lg:min-w-[30dvw] w-[300px] h-[300px] lg:h-[30dvw] object-cover rounded-full z-10'
          />
          <CustomButton className='hover:shadow-[4px_4px_0px_black] self-end'>
            Contact Now
          </CustomButton>
        </> */}
      </section>
      <section className='py-[2dvw] flex flex-col gap-6 pr-[3dvw]'>
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
