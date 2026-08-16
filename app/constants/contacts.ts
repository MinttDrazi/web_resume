export const CONTACT_INFO = [
  {
    title: "LinkedIn",
    text: import.meta.env.VITE_FULL_NAME,
    link: "https://linkedin.com/",
  },
  {
    title: "Github",
    text: "minttdrazi",
    link: "https://github.com/",
  },
  {
    title: "E-mail",
    text: import.meta.env.VITE_EMAIL,
    link: `mailto:${import.meta.env.VITE_EMAIL}`,
  },
  {
    title: "Telefon",
    text: import.meta.env.VITE_PHONE,
    link: `tel:${import.meta.env.VITE_PHONE.replaceAll(" ", "")}`,
  },
  {
    title: "Lokalita",
    text: import.meta.env.VITE_LOCATION,
  },
];
