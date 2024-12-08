import { motion } from "framer-motion";
import i18n from "../../../Utils/i18n";
import { languages } from "../../../config";
import { useState } from "react";

const LocalSwitcher = () => {
  const [selected, setSelected] = useState<string>("en");

  return (
    <div className="relative flex w-fit items-centerrounded-full">
      {languages.map((language) => (
        <button
          key={language.code}
          className="text-2xl font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10"
          onClick={() => {
            i18n.changeLanguage(language.code);
            setSelected(language.code);
          }}
        >
          <span className="relative z-10">{language.code}</span>
        </button>
      ))}
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "el" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{
            layout: { type: "spring", damping: 30, stiffness: 250 },
          }}
          className={`w-1/2 h-full rounded-full ${
            selected === "en"
              ? "rounded-full h-full border-b-2 border-primary-250"
              : "rounded-full h-full  border-b-2 border-primary-250"
          }`}
        />
      </div>
    </div>
  );
};

export default LocalSwitcher;
