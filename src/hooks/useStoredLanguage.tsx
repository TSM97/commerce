import { useEffect } from "react";
import i18n from "../Utils/i18n";

export default function useStoredLanguage() {
  useEffect(() => {
    const selectedLanguage = localStorage.getItem("selectedLanguage");
    console.log("mpika");
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
    }
  }, []);
}
