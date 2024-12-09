import { motion } from "framer-motion";
import i18n from "../../../Utils/i18n";
import { useState } from "react";

import { languages } from "../../../config";
import Earth from "../../../svgs/Earth";
import EnglishFlag from "../../../svgs/EnglishFlag";
import GreekFlag from "../../../svgs/GreekFlag";
import { itemVariants, parentVariant, wrapperVariants } from "./variants";
const LocalSwitcher = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={parentVariant}
      initial={parentVariant.closed}
      animate={open ? "open" : "closed"}
      className="relative flex items-center justify-center"
    >
      <div
        className="cursor-pointer"
        tabIndex={-1}
        onClick={() => setOpen((pv) => !pv)}
      >
        <Earth />
      </div>
      <motion.div
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        animate={open ? "open" : "closed"}
        className="absolute top-[120%] left-[50%] rounded-full bg-white w-3 h-3"
      />
      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col gap-2 py-2 px-4 rounded-lg bg-white shadow-xl absolute top-[150%] left-0 w-fit overflow-hidden"
      >
        {languages.map((language) => (
          <motion.li
            key={language?.code}
            variants={itemVariants}
            className="flex items-center gap-2 w-full p-2 text-xl font-medium whitespace-nowrap rounded-md text-black-500 hover:bg-svgColor transition-colors cursor-pointer"
            onClick={() => {
              setOpen(false);
              i18n.changeLanguage(language?.code);
            }}
          >
            {language?.code == "en" ? <EnglishFlag /> : <GreekFlag />}
            <span className="relative z-10">{language?.name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default LocalSwitcher;
