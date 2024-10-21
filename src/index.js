import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React, { createContext } from 'react';
import UserStore from "./store/UserStore";
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const Context = createContext(null);

const LANG_LOCAL_STORAGE_KEY = 'lang';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    lng: 'RUS', // Устанавливаем язык по умолчанию
    fallbackLng: 'KZ',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: LANG_LOCAL_STORAGE_KEY,
    },
    // debug: true, // Включаем отладочный режим для расширенного логирования
    // // Функция логгирования
    // logger: {
    //   log: (level, namespace, key, args) => {
    //     const value = i18n.t(key); // Получаем значение ключа
    //     console.log(`[${level}] [${namespace}] Key: ${key}, Value: ${value}`); // Выводим в консоль расширенное сообщение
    //   }
    // }
  });

export const changeLanguage = (language) => {
  i18n.changeLanguage(language);
  localStorage.setItem(LANG_LOCAL_STORAGE_KEY, language);
};

const restoreLanguage = () => {
  const lang = localStorage.getItem(LANG_LOCAL_STORAGE_KEY);
  if (lang) {
    i18n.changeLanguage(lang);
  }
};

restoreLanguage();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18n}>
    <Context.Provider value={{
      user: new UserStore(),
    }}>
      <App changeLanguage={changeLanguage} />
    </Context.Provider>
  </I18nextProvider>
);

reportWebVitals();