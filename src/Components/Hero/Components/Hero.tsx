import { useScroll, useTransform, motion } from "framer-motion";
import Background from "../../../assets/BeekeepingClose.webp";
import { useRef } from "react";

export default function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-[90dvh] overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-50 w-full h-full p-20 flex flex-col justify-between text-white">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 0.7))",
          }}
        ></div>
        <div className="relative w-[65vw] text-[2vw] self-end">
          <p>
            Discover the true taste of local honey, harvested with care from our
            very own beehives. Each jar reflects our passion for beekeeping and
            commitment to quality.
          </p>
        </div>
        <div className="relative text-[5vw]">
          <p>Based in Athens, Greece</p>
        </div>
      </div>
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src={Background}
            alt="image"
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
