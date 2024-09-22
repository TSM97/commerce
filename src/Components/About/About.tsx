export default function About() {
  return (
    <section id='About' className='bg-svgColor relative min-h-screen z-10'>
      <div className='container'>
        <div className='card w-1/3 h-[600px]'>
          <div className='card__content text-center relative p-20 transition-transform duration-1000 text-white font-bold'>
            <div className='card__front absolute top-0 bottom-0 rounded-xl right-0 left-0 p-8 bg-pink-600 flex items-center justify-center h-[400px]'>
              <h2>Front</h2>
            </div>
            <div className='card__back absolute top-0 bottom-0 rounded-xl right-0 left-0 p-8 bg-teal-500 flex items-center justify-center h-[400px]'>
              <h2>Back</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
