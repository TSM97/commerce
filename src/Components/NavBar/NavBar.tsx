import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/ATHBees.webp";
import { menuSlide, parentVariants, childVariants } from "./variants";
import AnimatedHamburgerButton from "./Components/HamburgerButtom";
import NavBee from "../../svgs/NavBee";
import LocalSwitcher from "../Common/LocalSwitcher/LocalSwitcher";
import { navList } from "../../config";

export default function NavBar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState<boolean | "initial">("initial");
  const [prevScroll, setPrevScroll] = useState(0);
  const [active, setActive] = useState(false);
  const [clickingLink, setClickingLink] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const initial = {
    opacity: 1,
    height: "13vh",
    y: 0,
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: `${
      location.pathname.includes("/article")
        ? "rgb(0, 0, 0)"
        : "var(--background-color)"
    }`,
    //this is for locale Earth svg
    fill: `${
      location.pathname.includes("/article")
        ? "rgb(0, 0, 0)"
        : "var(--background-color)"
    }`,
  };

  const parentVars = {
    ...parentVariants,
    initial,
  };

  // * +5/-5 on prev is for Mobile touch smoothness
  function update(latest: number, prev: number): void {
    if (latest != 0 && latest < prev - 5) {
      setHidden(false);
    } else if (latest > 100 && latest > prev + 5) {
      setHidden(true);
    } else if (latest == 0 && latest < prev) {
      setHidden("initial");
    }
  }

  // * Smooth scrolling and adjusting scroll position after click
  const scrollBehavior = (el: HTMLElement, item: string) => {
    const yOffset = item == "About" ? 0 : -50; // Adjust this value for 70px offset on specific SECTIONS
    const yPosition = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({
      top: yPosition,
    });
  };

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (!clickingLink) {
      update(latest, prevScroll);
      setPrevScroll(latest);
    }
  });

  function handleLinkClick(item: string) {
    if (item != "Home") {
      setClickingLink(true);
      setHidden(true);
      setActive(false);
    }

    // fast fix in order to keep navbar between article page and main page
    if (location.pathname.includes("/article") || item === "News") {
      setPrevScroll(prevScroll + 5);
    }

    // Prevent the scroll handler from triggering during navigation
    setTimeout(() => {
      setClickingLink(false);
    }, 200); // Increased timeout to allow scroll to settle
  }
  return (
    <>
      <motion.nav
        className={`flex lg:justify-around backdrop-blur-sm justify-between items-center p-2 text-[3vw] xl:text-[2vw] fixed left-0 w-[98vw] z-50 rounded-b-[50px]`}
        variants={parentVars}
        initial={initial}
        animate={
          active
            ? "isActivePhone"
            : hidden === "initial"
            ? "initial"
            : hidden
            ? "hidden"
            : "visible"
        }
        transition={{
          height: { duration: 0.4, ease: "backOut" },
          ease: [0.1, 0.25, 0.3, 1],
          duration: 0.4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          animate={
            hidden == "initial"
              ? { opacity: 1, y: 0 }
              : active
              ? { opacity: 1, y: 0 }
              : hidden
              ? { opacity: 1, y: -150 }
              : { opacity: 1, y: 0 }
          }
          whileHover={{ scale: 1.1 }}
          transition={{
            duration: 0.5,
            scale: {
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
        >
          <NavHashLink to={"/#Home"}>
            <img
              src={Logo}
              className="h-[13vh] cursor-pointer"
              alt="AthenianBees Logo"
            />
          </NavHashLink>
        </motion.div>

        <div className="hidden lg:flex gap-12 min-w-[80%] justify-center">
          {navList.map((item, i) => (
            <motion.div
              className="NavButton cursor-pointer text-nowrap"
              key={i}
              variants={childVariants}
              initial={{ opacity: 1, y: 0 }}
              transition={{
                ease: [0.1, 0.25, 0.3, 2],
                duration: 0.4,
              }}
            >
              <NavHashLink
                onClick={() => handleLinkClick(item)}
                to={`/#${item}`}
                scroll={(el) => scrollBehavior(el, item)}
              >
                <div className="group relative">
                  <NavBee className="absolute -top-0 -left-9 h-[3vw] xl:h-[2vw] w-[3vw] xl:w-[2vw]  group-hover:stroke-primary" />
                  {t(item)}
                </div>
              </NavHashLink>
            </motion.div>
          ))}
        </div>
        {!active && <LocalSwitcher />}
        <div className="lg:hidden">
          <AnimatedHamburgerButton setActive={setActive} active={active} />
        </div>
      </motion.nav>
      {active && (
        <AnimatePresence mode="wait">
          <section className="fixed text-[4vh] top-[7.5vh] left-1/2 -translate-x-1/2 z-50">
            {" "}
            <motion.div
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <div>
                {navList.map((item, i) => (
                  <motion.div
                    onClick={() => {
                      setActive(false);
                    }}
                    className="NavButton cursor-pointer text-nowrap"
                    key={i}
                    variants={childVariants}
                    initial={{ opacity: 1, y: 0 }}
                    transition={{
                      ease: [0.1, 0.25, 0.3, 2],
                      duration: 0.4,
                    }}
                  >
                    <NavHashLink to={`/#${item}`}>{t(item)}</NavHashLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        </AnimatePresence>
      )}
    </>
  );
}
