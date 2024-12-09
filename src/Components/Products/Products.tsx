import { useTranslation } from "react-i18next";

import useScreenSize from "../../hooks/useScreenSize";
import { benefitsList } from "./data";
import { DraggableProducts } from "./Components/DraggableProducts";
import WaveBG from "../../svgs/WaveBG.svg";

export default function Products() {
  const { isTablet } = useScreenSize();
  const { t, i18n } = useTranslation();
  console.log(i18n.language);

  return (
    <section
      className="xl:min-h-[70vh] py-[3dvw] px-[3dvw] flex flex-col lg:flex-row items-center lg:items-start gap-[3dvw]"
      style={{
        backgroundImage: isTablet ? "" : `url(${WaveBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* <img
          src={Product}
          className=' lg:min-w-[30dvw] w-[300px] h-[300px] lg:h-[30dvw] object-cover rounded-full z-10'
        /> */}
      <DraggableProducts />
      <section className="py-[2dvw] flex flex-col gap-4 pr-[3dvw] lg:order-2 order-1">
        <div className="font-lobster text-2xl lg:text-4xl text-honey">
          {t("product_Title")}
        </div>
        <div
          className={`${
            i18n.language == "en" ? "font-martel" : "font-serif"
          } text-3xl lg:text-5xl`}
        >
          <div>{t("product_Subtitle1")}</div>
          <div>{t("product_Subtitle2")}</div>
        </div>
        <div className="text-lg">{t("product_Description")}</div>
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {benefitsList.map((el, i) => (
            <div
              className={`${
                i18n.language == "en" ? "font-martel" : "font-serif"
              } p-4 font-semibold  flex text-md items-center gap-4`}
              key={i}
            >
              {el?.icon}
              <div>{t(el?.text)}</div>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}
