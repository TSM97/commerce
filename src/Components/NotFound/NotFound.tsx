import { motion } from "framer-motion";
import NotFoundPage from "../../assets/404PageNotFound.webp";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <img src={NotFoundPage} className="h-[90%] object-scale-down" />
      <motion.a
        whileHover={{ scale: 1.2 }}
        href="/"
        className="text-primary-250 text-2xl font-semibold font-martel"
      >
        {t("return_homepage")}
      </motion.a>
    </section>
  );
}
