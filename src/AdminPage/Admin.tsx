import { motion } from "framer-motion";
import { NavHashLink } from "react-router-hash-link";

import Logo from "../assets/ATHBees.webp";
import ChipTabs from "../Components/Common/ChipTabs/ChipTabs";
import { useState } from "react";
import ArticlesUploadForm from "./ArticlesUploadForm";
import ProductManagementForm from "./ProductManagementForm";
import { ARTICLE_TABS } from "./data";

export default function Admin() {
  const [selected, setSelected] = useState<string>("Upload article");

  return (
    <section className="container m-auto min-h-screen pt-3">
      <div className="flex flex-col md:flex-row justify-between pb-10 items-center">
        <NavHashLink to={"/"}>
          <motion.img
            initial={{ opacity: 0, y: -150 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 0.5,
              scale: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
            src={Logo}
            className="h-[30dvw] sm:h-[16dvw] md:h-[12dvw] lg:h-[10dvw] xl:h-[6dvw] cursor-pointer"
            alt="AthenianBees Logo"
          />
        </NavHashLink>
        <div></div>
        <div className="md:w-1/2 border-b-2 border-black-250 border-dashed">
          <ChipTabs
            selected={selected}
            setSelected={setSelected}
            tabs={ARTICLE_TABS}
          />
        </div>
      </div>
      {selected === "Upload article" ? (
        <ArticlesUploadForm />
      ) : selected === "Products Management" ? (
        <ProductManagementForm />
      ) : null}
    </section>
  );
}
