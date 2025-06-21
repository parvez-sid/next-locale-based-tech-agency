import { defineRouting } from "next-intl/routing";
import { i18nConfig } from "../project.config.js";

export const routing = defineRouting({
  locales: i18nConfig.locales,
  defaultLocale: i18nConfig.defaultLocale,
});