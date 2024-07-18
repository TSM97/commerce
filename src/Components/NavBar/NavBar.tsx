import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const linkList: string[] = ["item1", "item1", "item1", "item1", "item1"];

const parentVariants = {
  visible: { opacity: 1, y: 0, backgroundColor: "rgba(255, 255, 255, 1)" },
  hidden: { opacity: 0, y: "-4rem", backgroundColor: "rgba(255, 255, 255, 0)" },
  initial: {
    opacity: 1,
    y: 0,
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
};

const childVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-2rem" },
};

export default function NavBar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState<boolean | "initial">("initial");
  const [prevScroll, setPrevScroll] = useState(0);

  function update(latest: number, prev: number): void {
    console.log(latest);
    console.log(hidden);

    if (latest != 0 && latest < prev) {
      setHidden(false);
    } else if (latest > 100 && latest > prev) {
      setHidden(true);
    } else if (latest == 0 && latest < prev) {
      setHidden("initial");
    }
  }

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    update(latest, prevScroll);
    setPrevScroll(latest);
  });

  return (
    <motion.nav
      className={`flex sm:justify-around justify-between items-center p-5 text-3xl fixed left-0 w-[100vw] z-50 rounded-b-[50px]`}
      variants={parentVariants}
      // style={{ backgroundColor: background }}
      animate={hidden === "initial" ? "initial" : hidden ? "hidden" : "visible"}
      transition={{
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.6,
      }}
    >
      <p>Logo</p>
      <div className="flex gap-5">
        {linkList.map((item, i) => (
          <motion.a
            key={i}
            variants={childVariants}
            initial={{ opacity: 1, y: 0 }}
            transition={{
              ease: [0.1, 0.25, 0.3, 2],
              duration: 0.4,
            }}
          >
            {item}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}
