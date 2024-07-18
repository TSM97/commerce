import Background from "../../../assets/HeroSectionImg.webp";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Intro() {
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className="h-screen overflow-hidden">
      <motion.div style={{ y }} className="relative h-full">
        <div className="absolute top-50 left-50">dasdasds</div>
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
  );
}
