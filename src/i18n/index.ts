import german from "@/i18n/de.json";
import english from "@/i18n/en.json";
import spanish from "@/i18n/es.json";

const LANG = {
  GERMAN: "de",
  ENGLISH: "en",
  SPANISH: "es",
};

export const getI18N = ({
  currentLocale = "es",
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === LANG.GERMAN) return { ...spanish, ...german };
  if (currentLocale === LANG.ENGLISH) return { ...spanish, ...english };
  return spanish;
};
