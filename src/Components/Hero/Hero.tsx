import { useScroll, useTransform, motion } from "framer-motion";
import Background from "../../assets/BeekeepingClose.webp";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const { t } = useTranslation();

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-[90vh] overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-50 w-full h-full p-5 md:p-10 lg:p-20 flex flex-col justify-between text-white">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 0.7))",
          }}
        ></div>
        <div className="relative w-[90dvw] lg:w-[65dvw] text-[6dvw] md:text-[5dvw] lg:text-[4dvw] xl:text-[2vw] lg:self-end leading-normal">
          <p>{t("honey_info")}</p>
        </div>
        <div className="relative text-4xl lg:text-[5vw]">
          <p>{t("based_in_athens")}</p>
        </div>
      </div>
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src={Background}
            alt="Hive Image"
            style={{
              // position: 'absolute',
              // top: 0,
              // left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              overflow: "hidden",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
