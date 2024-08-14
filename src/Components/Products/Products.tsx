import Product from '../../assets/HoneyProduct1.webp';
import ProductBackground from '../../svgs/ProductsBackground';
import BlobBG from '../../svgs/BlobBG.svg';
import WaveBG from '../../svgs/WaveBG.svg';

export default function Products() {
  return (
    <section
      className='min-h-screen py-[3dvw] px-[3dvw] flex flex-col xl:flex-row items-center lg:items-start lg:bg-none'
      style={{
        backgroundImage: `url(${WaveBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className='p-[4dvw] xl:w-1/2'>
        <img
          src={Product}
          className=' lg:min-w-[35dvw] w-[300px] h-[300px] lg:h-[35dvw] object-cover rounded-full z-10'
        />
        {/* <div
          className='w-[35dvw] h-[35dvw] bg-cover bg-center z-10'
          style={{
            backgroundImage: `url(${Product})`,
            clipPath: 'circle(50% at 50% 50%)',
          }}
        /> */}
      </div>
      <section className='py-[2dvw] flex flex-col gap-4'>
        <div className='font-lobster text-4xl text-honey'>Discover</div>
        <div className='font-martel text-5xl pr-[3dvw]'>
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
          <div className='p-4'>Item 1</div>
          <div className='p-4'>Item 2</div>
          <div className='p-4'>Item 3</div>
          <div className='p-4'>Item 4</div>
        </section>
      </section>
    </section>
  );
}
