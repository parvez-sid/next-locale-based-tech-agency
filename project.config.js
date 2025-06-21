const localeMapper = {
  "en-US": {
    locale: "en-US",
  },

  "en-GE": {
    locale: "en-GE",
  },
};

const locales = Object.keys(localeMapper);

export const defaultLocale = locales[0];

export const i18nConfig = { locales, defaultLocale };
