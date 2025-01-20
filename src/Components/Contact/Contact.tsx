import CustomInput from "../Common/Input/CustomInput";
import { useContactFormStore } from "../../stores/useContactFormStore";
import ContactOutline from "../../svgs/ContactOutline";
import Background from "../../assets/BeekeepingClose.webp";
import Checkbox from "../Common/CheckBox/CheckBox";
import CustomButton from "../Common/CustomButton";
import { useState } from "react";

export default function Contact() {
  const { formData, setField, resetForm } = useContactFormStore();
  const [isPurchase, setIsPurchase] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    e.target.submit();
  };

  return (
    <section
      id="Contact"
      className="min-h-[90vh] flex flex-col justify-center items-center"
    >
      <section className="w-3/5 p-8 min-h-[450px] relative border-4 border-dashed border-primary-100 text-lg xl:flex">
        <div className="w-1/2 h-[100%] px-7 border-dashed border-primary-100">
          <form
            action="https://formsubmit.co/1a2b754bda3989be48a8ba06c5c57e96"
            method="POST"
            onSubmit={handleSubmit}
          >
            <h2 className="font-extrabold mb-4 text-[1.3vw]">Contact Us</h2>
            <CustomInput
              ClassName="mb-4"
              Name="name"
              Label="Name"
              Type="text"
              Id="name"
              OnChange={(e) => setField(e.target.name, e.target.value)}
              value={formData?.name}
            />
            <CustomInput
              ClassName="mb-4"
              Name="email"
              Label="Email"
              Type="email"
              Id="email"
              OnChange={(e) => setField(e.target.name, e.target.value)}
              value={formData?.email}
            />
            {/* Reply to */}
            <input type="hidden" name="_replyto" value="email@example.com" />
            {/* email template */}
            <input type="hidden" name="_template" value="table" />
            {/* redirect after submit */}
            <input type="hidden" name="_next" value="http://localhost:5173/" />
            {/* autoresponse input */}
            <input
              type="hidden"
              name="_autoresponse"
              value={`Thanks for you Contact, We will send you really soon to talk about ${
                isPurchase
                  ? "What would you  like to order"
                  : "what would you like to learn"
              }! --- ATHEENIAN BEES ---`}
            />
            {/* Email Subject */}
            <input
              type="hidden"
              name="_subject"
              value={`${isPurchase ? "Purchase" : "Question"} - from ${
                formData?.name
              }`}
            />
            <input type="text" name="_honey" style={{ display: "none" }} />
            <div className=" flex flex-col gap-2 mb-4">
              <Checkbox
                isChecked={isPurchase}
                handleCheck={() => setIsPurchase(!isPurchase)}
                label="I would like to buy..."
              />
              <Checkbox
                isChecked={!isPurchase}
                handleCheck={() => setIsPurchase(!isPurchase)}
                label="I would like to mention..."
              />
            </div>

            <div className="relative mb-4">
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder=" "
                required
                onChange={(e) => setField(e.target.name, e.target.value)}
                className="peer shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-honey"
              />
              <label
                htmlFor="message"
                className={`absolute left-3 top-2 bg-white px-1 text-gray-500 text-sm font-bold transition-all peer-placeholder-shown:cursor-text peer-focus:cursor-default peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base ${
                  formData?.message != ""
                    ? " top-[-11px]"
                    : "peer-focus:top-[-10px] "
                } peer-focus:text-honey peer-focus:text-sm`}
              >
                Message
              </label>
            </div>
            <CustomButton
              type="submit"
              className="w-full text-sm mb-4"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send"}
            </CustomButton>
          </form>
        </div>
        <div className="w-1/2 px-7">
          <div className="relative flex justify-center">
            <img
              className="object-cover h-[350px] lg:h-[350px] lg:w-[350px] mr-4 none"
              loading="lazy"
              alt="Article's image"
              style={{ borderRadius: "74% 26% 76% 24% / 59% 60% 40% 41% " }}
              src={Background}
            />
            <div className="absolute top-0 h-[410px] w-[410px]">
              <ContactOutline />
            </div>
          </div>
        </div>
        <div className="text-primary-100 text-nowrap px-4 text-4xl font-extrabold -bottom-[18px] transform left-1/2 translate-x-[-50%]  absolute bg-white">
          ATHEENIAN BEES
        </div>
      </section>
      <div className="mt-5 text-black-250 text-center">
        <div>
          {" "}
          Για απευθειάς επικοινωνία μπορείτε να στείλετε στη διεύθυνση
          AtheenianBees@gmail.com
        </div>
        <div>ή</div>
        <div>Να μας βρείτε στα Social</div>
      </div>
    </section>
  );
}
