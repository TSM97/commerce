import CustomInput from '../Common/Input/CustomInput';
import { useContactFormStore } from '../../stores/useContactFormStore';

export default function Contact() {
  const { formData, setField, resetForm } = useContactFormStore();

  console.log(formData.name);
  return (
    <section
      id='Contact'
      className='min-h-[90vh] flex justify-center items-start'
    >
      <section className='w-3/4 relative border-4 border-dashed border-primary-100 items-center flex'>
        <div className='w-1/2 p-7 border-r-4 border-dashed border-primary-100'>
          <form>
            <h2 className='font-extrabold text-[1.3vw]'>CONTACT US</h2>
            <CustomInput
              ClassName='mb-4'
              Name='name'
              Label='Name'
              Type='text'
              Id='name'
              OnChange={(e) => setField(e.target.name, e.target.value)}
              value={formData?.name}
            />
            <CustomInput
              ClassName='mb-2'
              Name='email'
              Label='Email'
              Type='email'
              Id='email'
              OnChange={(e) => setField(e.target.name, e.target.value)}
              value={formData?.email}
            />
          </form>
        </div>
        <div className='w-1/2 p-7'></div>
        <div className='text-primary-100 px-4 text-3xl font-extrabold -bottom-[18px] transform left-1/4 translate-x-[-50%]  absolute bg-white'>
          ATHEENIAN BEES
        </div>
      </section>
    </section>
  );
}
