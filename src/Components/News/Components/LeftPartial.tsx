import { motion } from "framer-motion";

import Logo from "../../../assets/ATHBees.webp";

export default function LeftPartial() {
  return (
    <div className="flex flex-col justify-center text-[3vw] text-center max-w-[80dvw] md:max-w-[40dvw] leading-none gap-[3vw]">
      <motion.img
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        src={Logo}
        className="h-[18dvh] object-contain"
        alt="AthenianBees Logo"
      />
      <motion.div
        className=" border-t-2 border-[#e8772e] pt-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Latest Updates in <span className="text-[#e8772e]">Beekeeping</span> and{" "}
        <span className="text-[#e8772e]">Honey</span> Production
      </motion.div>
    </div>
  );
}
