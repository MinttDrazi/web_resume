import type { Language, SupportedLang } from "~/types";

export const LANGUAGES: Record<SupportedLang, Language[]> = {
  cs: [
    {
      language: "Čeština",
      level: "Rodilý mluvčí",
    },
    {
      language: "Angličtina",
      level: "C1",
    },
  ],
  en: [
    {
      language: "Czech",
      level: "Native speaker",
    },
    {
      language: "English",
      level: "C1",
    },
  ],
};
