import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { hasLocale } from 'next-intl';

const loadMessageBundleWithFallback = async (locale: string) => {
  const data = await import(`../messages/${locale}.json`)
    .then((m) => m.default)
    .catch(async () => {
      if (locale.indexOf('-') >= 0) {
        const [language] = locale.split('-');
        return await import(`../messages/${language}.json`)
          .then((m) => m.default)
          .catch(() => console.log(`Cannot find either ../messages/${locale}.json or ../messages/${language}.json`));
      } else {
        console.log(`Cannot find ../messages/${locale}.json`);
      }
    });

  return data || {};
};

export default getRequestConfig(async ({requestLocale}) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
 
  return {
    locale,
    messages: await loadMessageBundleWithFallback(locale)
  };
});