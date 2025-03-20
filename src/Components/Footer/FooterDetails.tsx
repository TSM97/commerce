import SmallDev from '../../svgs/SmallDev';
import Logo from '../../assets/ATHBees.webp';
import EmailIcon from '../../svgs/EmailIcon';
import InstagramIcon from '../../svgs/InstagramIcon';
import FacebookIcon from '../../svgs/FacebookIcon';
import YoutubeIcon from '../../svgs/YoutubeIcon';

export default function FooterDetails() {
  return (
    <section className='flex flex-col h-full justify-between p-2 pt-6'>
      <section className='flex justify-between px-[3vw]'>
        <div>asd</div>
        <div>as</div>
        <div className='self-center flex gap-6 justify-between'>
          <div className='border-[3px] group border-primary-250 hover:border-black-250 p-4 rounded-3xl transition-all duration-300 cursor-pointer'>
            <EmailIcon className='fill-primary-250 group-hover:fill-black-250 transition-all duration-300' />
          </div>
          <div className='border-[3px] group border-primary-250 hover:border-black-250 p-4 rounded-3xl transition-all duration-300 cursor-pointer'>
            <InstagramIcon className='fill-primary-250 group-hover:fill-black-250 transition-all duration-300' />
          </div>
          <div className='border-[3px] group border-primary-250 hover:border-black-250 p-4 rounded-3xl transition-all duration-300 cursor-pointer'>
            <FacebookIcon className='fill-primary-250 group-hover:fill-black-250 transition-all duration-300' />
          </div>
          <div className='border-[3px] group border-primary-250 hover:border-black-250 p-4 rounded-3xl transition-all duration-300 cursor-pointer'>
            <YoutubeIcon className='fill-primary-250 group-hover:fill-black-250 transition-all duration-300' />
          </div>
        </div>
      </section>

      <div className='flex justify-between'>
        <div className='text-3xl sm:text-5xl md:text-6xl xl:text-8xl tracking-wide font-extrabold text-primary-250'>
          ATHENIAN BEES
        </div>
        <div className='text-sm text-black-250 italic self-end flex items-center gap-1'>
          <div>© 2025 - Crafted with care</div>
          <a target='_blank' href='https://tsm97.github.io/portfolioReact/'>
            <SmallDev className='fill-primary-250' />
          </a>
        </div>
      </div>
    </section>
  );
}
