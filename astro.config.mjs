import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: "https://fincasbarahona.com",
  integrations: [tailwind(), icon(), db()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      en: "es",
      de: "es",
    },
  },
});
