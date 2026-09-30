import type { Education, SupportedLang } from "~/types";

export const EDUCATION: Record<SupportedLang, Education[]> = {
  cs: [
    {
      school: "Vysoká škola ekonomická v Praze",
      specialization: "Vývoj informačních systémů",
      from: 2023,
      to: "současnost",
      level: "Inženýr",
    },
    {
      school: "Vysoká škola ekonomická v Praze",
      specialization: "Aplikovaná informatika",
      from: 2018,
      to: 2023,
      level: "Bakalář",
    },
    {
      school: "Obchodní akademie Dušní",
      specialization: "Ekonomické lyceum",
      from: 2014,
      to: 2018,
      level: "Maturita",
    },
  ],
  en: [
    {
      school: "Prague University of Economics and Business",
      specialization: "Information Systems Development",
      from: 2023,
      to: "present",
      level: "Master's",
    },
    {
      school: "Prague University of Economics and Business",
      specialization: "Applied Informatics",
      from: 2018,
      to: 2023,
      level: "Bachelor's",
    },
    {
      school: "Business Academy Dušní",
      specialization: "Economic Lyceum",
      from: 2014,
      to: 2018,
      level: "High School Diploma",
    },
  ],
};
