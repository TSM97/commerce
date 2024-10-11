import { motion } from "framer-motion";

import Logo from "../../../assets/ATHBees.webp";

export default function LeftPartial() {
  return (
    <div className="flex flex-col justify-center text-2xl lg:text-[3vw] text-center max-w-[80dvw] xl:max-w-[40dvw] leading-none gap-[3vw]">
      <motion.img
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        src={Logo}
        className="h-[18vh] object-contain"
        alt="AthenianBees Logo"
      />
      <motion.div
        className=" border-t-2 border-primary pt-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Latest Updates in <span className="text-primary">Beekeeping</span> and{" "}
        <span className="text-primary">Honey</span> Production
      </motion.div>
    </div>
  );
}
