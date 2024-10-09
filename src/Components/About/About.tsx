export default function About() {
  return (
    <section>
      <section
        id='About'
        className='bg-svgColor relative h-[100dvh] z-10 flex justify-center items-center'
      >
        <div className='mx-auto w-1/2 text-center text-9xl text-black-250 tracking-tighter py-14'>
          Reveal the Unique Story Behind
          <span className='text-honey'> Atheenian Bees</span>
        </div>
      </section>

      <div className='relative h-[calc(100vh+80dvh)] -top-[80vh] bg-red-500'>
        <div className='h-[80dvh] sticky top-[calc(100vh-80dvh)]'>
          <div className='w-3/4 text-2xl mx-auto grid grid-cols-2  justify-between items-end'>
            <div className=''>Sticky Footer</div>
            <div className=''>©copyright</div>
          </div>
        </div>
      </div>

      {/* <div className='fixed bottom-0 h-[80vh] w-full z-0'>
        <div className='flex justify-between items-end'>
          <h1 className='text-[14vw] leading-[0.8] mt-10'>Sticky Footer</h1>

          <p>©copyright</p>
        </div>
      </div> */}
    </section>
  );
}
