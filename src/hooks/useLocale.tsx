import ArticleType from "../types/articleType";
import productType from "../types/productType";
import i18n from "../Utils/i18n";

export default function useLocale() {
  const isGreek = i18n.language === "el";
  const isEnglish = i18n.language === "en";
  const dynamicLocale = (data: ArticleType) => {
    return isGreek && data?.el ? "el" : "en";
  };

  return { isGreek, isEnglish, dynamicLocale };
}
