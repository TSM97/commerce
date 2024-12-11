import { motion } from "framer-motion";

type chipType = {
  text: string;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const Chip = ({ text, selected, setSelected }: chipType) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected ? "text-white" : "text-black-250 hover:bg-primary-100"
      } text-md md:text-lg lg:text-2xl m-2 transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-primary-500 to-primary-750 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default Chip;
