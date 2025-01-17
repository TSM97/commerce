import { useState } from "react";
import { useContactFormStore } from "../../stores/useContactFormStore";

export default function Contact() {
  const { formData, setField, resetForm } = useContactFormStore();

  console.log(formData.name);
  return (
    <section
      id="Contact"
      className="min-h-[90vh] flex justify-center items-start"
    >
      <section className="w-3/4 relative border-4 border-dashed border-primary-100 items-center flex">
        <div className="w-1/2 p-7 border-r-4 border-dashed border-primary-100">
          <form>
            <h2 className="font-extrabold text-[1.3vw]">CONTACT US</h2>
            <div className="relative mb-4">
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setField(e.target.name, e.target.value)}
                placeholder=" "
                className="peer shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-honey"
                required
              />
              <label
                htmlFor="name"
                className={`absolute left-3 top-2 peer-placeholder-shown:top-2.5 bg-white px-1 text-gray-500 text-sm font-bold transition-all  peer-placeholder-shown:text-gray-700 peer-placeholder-shown:text-base ${
                  formData.name != ""
                    ? " top-[-10px]"
                    : "peer-focus:top-[-10px] "
                } peer-focus:text-honey peer-focus:text-sm`}
              >
                Name
              </label>
            </div>
          </form>
        </div>
        <div className="w-1/2 p-7"></div>
        <div className="text-primary-100 px-4 text-3xl font-extrabold -bottom-[18px] transform left-1/4 translate-x-[-50%]  absolute bg-white">
          ATHEENIAN BEES
        </div>
      </section>
    </section>
  );
}
