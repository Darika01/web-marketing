import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from 'locales/en';
import pl from 'locales/pl';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: { translation: en },
    pl: { translation: pl }
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources,
        debug: false,
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
