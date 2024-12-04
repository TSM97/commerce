import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../locales/en/translation.json';
import elTranslation from '../locales/el/translation.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  el: {
    translation: elTranslation,
  },
};

i18n
  .use(initReactI18next) // passes i18n instance to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en', // Default language if none is detected
    interpolation: {
      escapeValue: false, //react already safes from xss
    },
  });

export default i18n;
