import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import CustomInput from "../Common/Input/CustomInput";
import { useContactFormStore } from "../../stores/useContactFormStore";
import ContactOutline from "../../svgs/ContactOutline";
import ContactOrderImg from "../../assets/ContactOrderImg.webp";
import Contact_Q from "../../assets/Contact_Q.webp";
import Checkbox from "../Common/CheckBox/CheckBox";
import CustomButton from "../Common/CustomButton";
import Spinner from "../Common/Spinner/Spinner";
import { contactImgVariant } from "./variants";
import useScreenSize from "../../hooks/UseScreenSize";
import ArrowDoodle from "../../svgs/ArrowDoodle";
import { ATHENIAN_EMAIL, emailRegex } from "../../config";

export default function Contact() {
  const { formData, setField } = useContactFormStore();
  const [isLoading, setIsLoading] = useState(false);
  const { isMobile, isTablet, isLaptop } = useScreenSize();
  const { t } = useTranslation();
  const [validatedEmail, setValidatedEmail] = useState(true);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    const email = formData.get("email");

    if (!email || !emailRegex.test(email as string)) {
      setValidatedEmail(false);
      setIsLoading(false);
      return;
    }

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        event.target.reset();
        window.location.href = "https://web3forms.com/success";
      } else {
        console.log("Error", data);
      }
    } catch (error) {
      console.log("Error:", error);
    }

    setIsLoading(false);
  };

  return (
    <section
      id="Contact"
      className={`min-h-[100vh] flex flex-col items-center justify-center border-b-4 border-dashed border-primary-100`}
    >
      <section className="md:w-4/5 xl:w-3/5 p-8 min-h-[450px] relative border-4 border-dashed border-primary-100 text-lg md:flex">
        <div className="md:w-1/2 md:h-[100%] md:px-7 border-dashed border-primary-100">
          <form onSubmit={handleSubmit}>
            {/* -- Custom Subject -- */}
            <input
              type="hidden"
              name="subject"
              value={`${
                formData?.isPurchase ? "Purchase" : "Question"
              } - from ${formData?.name}`}
            />
            <h2 className="font-extrabold mb-4 text-3xl md:text-[1.3vw]">
              Contact Us
            </h2>
            <CustomInput
              ClassName="mb-4"
              Name="name"
              Label={t("name")}
              Type="text"
              Id="name"
              OnChange={(e) => setField(e.target.name, e.target.value)}
              value={formData?.name}
            />
            <CustomInput
              Name="email"
              Label="Email"
              Type="email"
              Id="email"
              OnChange={(e) => {
                setField(e.target.name, e.target.value);
                setValidatedEmail(true);
              }}
              value={formData?.email}
            />
            <div className="h-[25px] py-1 text-red-500 text-sm">
              {!validatedEmail && "Το email δεν είναι συμβατό"}
            </div>
            <div className=" flex flex-col gap-2 mb-4">
              <Checkbox
                isChecked={formData?.isPurchase}
                handleCheck={() => setField("isPurchase", true)}
                label="I would like to buy..."
              />
              <Checkbox
                isChecked={!formData?.isPurchase}
                handleCheck={() => setField("isPurchase", false)}
                label="I would like to mention..."
              />
            </div>
            <div className="relative mb-4">
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder=" "
                value={formData?.message}
                required
                onChange={(e) => setField(e.target.name, e.target.value)}
                className="peer shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-honey"
              />
              <label
                htmlFor="message"
                className={`absolute left-3 top-2 bg-white px-1 text-gray-500 text-sm font-bold transition-all peer-placeholder-shown:cursor-text peer-focus:cursor-default peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base ${
                  formData?.message != ""
                    ? " top-[-11px]"
                    : "peer-focus:top-[-11px] "
                } peer-focus:text-honey peer-focus:text-sm`}
              >
                Message
              </label>
            </div>
            <div className="flex flex-col items-center">
              <CustomButton
                type="submit"
                className={`w-full ${
                  isLoading ? "scale-0 opacity-0" : "scale-100 opacity-100"
                } transition-transform duration-500`}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send"}
              </CustomButton>
              <div
                className={`scale-0 ${
                  isLoading ? "scale-100 opacity-100" : "scale-0 opacity-0"
                } transition-transform duration-500 text-center`}
              >
                {isLoading && (
                  <div className="mt-4">
                    <p>
                      Please wait, we are processing your request. This might
                      take a few seconds. Don't close or refresh the page.
                    </p>
                    <Spinner ClassName="absolute top-0 left-1/2" />
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
        {!isMobile && (
          <div className="md:w-1/2 px-7">
            <div className="relative flex justify-center">
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={formData?.isPurchase ? ContactOrderImg : Contact_Q}
                    variants={contactImgVariant}
                    whileInView="visible"
                    initial={"hidden"}
                    animate="visible"
                    exit="exit"
                    className="object-cover h-[350px] lg:h-[350px] lg:w-[350px] mr-4 none"
                    loading="lazy"
                    alt="Article's image"
                    style={{
                      borderRadius: "74% 26% 76% 24% / 59% 60% 40% 41% ",
                    }}
                    src={formData?.isPurchase ? ContactOrderImg : Contact_Q}
                  />
                </AnimatePresence>
              </div>
              <div
                className={`absolute top-0 ${
                  isTablet ? "h-[350px] w-[340px]" : "h-[410px] w-[410px]"
                } ${
                  !formData?.isPurchase ? "rotate-45 scale-110" : ""
                } transition-transform duration-700`}
              >
                <ContactOutline />
              </div>
            </div>
          </div>
        )}

        <div className="text-primary-100 text-nowrap px-4 text-2xl md:text-4xl font-extrabold -bottom-[18px] transform left-1/2 translate-x-[-50%]  absolute bg-white">
          ATHENIAN BEES
        </div>
      </section>
      <div className="mt-5 flex flex-col text-black-250 text-center">
        {isLaptop ? (
          <div className="pb-2">
            Για απευθειάς επικοινωνία μπορείτε να στείλετε στη διεύθυνση
            <i> " honeymakerapp@gmail.com "</i> ή να μας βρείτε στα Social
          </div>
        ) : (
          <>
            {" "}
            <div>
              Για απευθειάς επικοινωνία μπορείτε να στείλετε στη διεύθυνση
              <i> " {ATHENIAN_EMAIL} "</i>
            </div>
            <div>ή</div>
            <div className="pb-3">Να μας βρείτε στα Social</div>
          </>
        )}

        <ArrowDoodle className="self-center fill-black-250" />
      </div>
    </section>
  );
}
