export const LANGUAGE_STORAGE_KEY = "portfolio_language";

export const SUPPORTED_LANGUAGES = {
  es: "es",
  en: "en",
};

export const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES.es;

export const detectBrowserLanguage = () => {
  if (typeof navigator === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const browserLanguage = (navigator.language || "").toLowerCase();

  if (browserLanguage.startsWith("es")) {
    return SUPPORTED_LANGUAGES.es;
  }

  return SUPPORTED_LANGUAGES.en;
};

export const getInitialLanguage = () => {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (savedLanguage === SUPPORTED_LANGUAGES.es || savedLanguage === SUPPORTED_LANGUAGES.en) {
    return savedLanguage;
  }

  return detectBrowserLanguage();
};
