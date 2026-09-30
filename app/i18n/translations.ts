import type { SupportedLang } from "~/types";

export const cs = {
  nav: {
    resume: "Životopis",
    portfolio: "Portfolio",
  },
  locale: {
    cs: "CZ",
    en: "EN",
  },
  sections: {
    education: "Vzdělání",
    employment: "Zaměstnání",
    skills: "Dovednosti",
    techstack: "Techstack",
    languages: "Jazyky",
    contacts: "Kontakty",
  },
  common: {
    location: "Lokalita",
    city: "Praha",
  },
  portfolio: {
    title: "Portfolio",
    subtitle: "Výběr mých projektů, webů a aplikací",
    description:
      "Zde jsou ukázky webových stránek a aplikací, které jsem vyvíjel čistě sám nebo na kterých jsem se podílel. Jedná se jak o osobní projekty, tak o práce pro klienty. Ne všechny mé projekty jsou veřejně dostupné. Pokud chcete vědět více, kontaktujte mě.",
  },
  intro: {
    role: "Full-stack Developer & Tech lead",
    bio: "Jsem fullstack developer se 6 lety zkušeností v IT. Soustředím se na kompletní vývoj moderních webů a webových aplikací. Baví mě jak implementace UI/UX, tak psaní backendu. Rád se učím nové věci a zkouším nové postupy a technologie. V současnosti dokončuji magisterské studium oboru Vývoj informačních systémů na VŠE.",
  },
};

export type Translations = typeof cs;

export const en: Translations = {
  nav: {
    resume: "Resume",
    portfolio: "Portfolio",
  },
  locale: {
    cs: "CZ",
    en: "EN",
  },
  sections: {
    education: "Education",
    employment: "Employment",
    skills: "Skills",
    techstack: "Techstack",
    languages: "Languages",
    contacts: "Contact",
  },
  common: {
    location: "Location",
    city: "Prague",
  },
  portfolio: {
    title: "Portfolio",
    subtitle: "A selection of my projects, websites, and applications",
    description:
      "Here is a showcase of websites and applications I have developed independently or contributed to. These include both personal projects and client work. Not all of my projects are publicly available. If you would like to know more, feel free to contact me.",
  },
  intro: {
    role: "Full-stack Developer & Tech lead",
    bio: "I am a full-stack developer with 6 years of experience in IT. I focus on end-to-end development of modern websites and web applications. I enjoy both UI/UX implementation and backend development. I like learning new things and exploring new approaches and technologies. I am currently completing my Master's degree in Information Systems Development at the Prague University of Economics and Business (VŠE).",
  },
};

export const translations: Record<SupportedLang, Translations> = { cs, en };
