import type { Translations } from "~/i18n/translations";

export const getContactInfo = (t: Translations) => [
  {
    title: "LinkedIn",
    text: import.meta.env.VITE_FULL_NAME,
    link: "https://www.linkedin.com/in/martin-ditz-3b701029a/",
  },
  {
    title: "Github",
    text: "minttdrazi",
    link: "https://github.com/MinttDrazi",
  },
  {
    title: "E-mail",
    text: import.meta.env.VITE_EMAIL,
    link: `mailto:${import.meta.env.VITE_EMAIL}`,
  },
  {
    title: t.common.location,
    text: t.common.city,
  },
];
