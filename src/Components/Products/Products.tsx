import Product from '../../assets/HoneyProduct.webp';

export default function Products() {
  return (
    <section className='h-screen bg-primary-250'>
      <section className='container'>
        <div className='w-1/2 h-1/2'>
          <img className='object-contain w-full h-full' src={Product} />
        </div>
      </section>
    </section>
  );
}
