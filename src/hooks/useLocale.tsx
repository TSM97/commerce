import ArticleType from "../types/articleType";
import { useTranslation } from "react-i18next";
export default function useLocale() {
  const { i18n } = useTranslation();
  const isGreek = i18n.language === "el";
  const isEnglish = i18n.language === "en";
  const dynamicLocale = (data: ArticleType) => {
    return isGreek && data?.el?.fullDescription?.plainText ? "el" : "en";
  };

  return { isGreek, isEnglish, dynamicLocale };
}
