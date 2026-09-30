import type { Employment, SupportedLang } from "~/types";

export const EMPLOYMENT: Record<SupportedLang, Employment[]> = {
  cs: [
    {
      company: "flowstate agency s.r.o.",
      position: "Full-stack Developer & Tech lead",
      from: 2020,
      to: 2026,
      duties: [
        "Vývoj webů a webových aplikací (frontend i backend).",
        "Nasazování aplikací do produkčního prostředí.",
        "Provádění code reviews.",
        "Dohlížení nad architekturou i standardy týmového vývoje.",
        "Nastavení a údržba VPS, správa domén a DNS.",
        "Nasazení a správa interních systémů.",
        "Rozpad úkolů a příprava časových odhadů pro naceňování projektů.",
      ],
    },
    {
      company: "Rohlík.cz (VELKÁ PECKA s.r.o.)",
      position: "Analytik & IT Support",
      from: 2019,
      to: 2019,
      duties: [
        "Analýza a vyhodnocování kamerových záznamů a souvisejících incidentů.",
        "Řešení technických záležitostí a IT podpory v rámci provozu skladu.",
      ],
    },
    {
      company: "Československá obchodní banka a.s.",
      position: "Brigádník",
      from: 2018,
      to: 2018,
      duties: [
        "Zpracování dispozic a požadavků klientů.",
        "Kladení důrazu na preciznost a bezpečnost bankovních standardů.",
        "Zajištění administrativní podpory v rámci oddělení platebních karet.",
      ],
    },
    {
      company: "Korn Ferry s.r.o.",
      position: "Brigádník",
      from: 2015,
      to: 2016,
      duties: ["Poskytnutí účetní a administrativní podpory"],
    },
    {
      company: "PPF banka a.s.",
      position: "Brigádník",
      from: 2014,
      to: 2014,
      duties: ["Poskytnutí administrativní výpomoci"],
    },
  ],
  en: [
    {
      company: "flowstate agency s.r.o.",
      position: "Full-stack Developer & Tech Lead",
      from: 2020,
      to: 2026,
      duties: [
        "Developing websites and web applications (frontend and backend).",
        "Deploying applications to production environments.",
        "Conducting code reviews.",
        "Overseeing software architecture and team development standards.",
        "Configuring and maintaining VPS, managing domains and DNS.",
        "Deploying and managing internal systems.",
        "Breaking down tasks and estimating delivery times for project pricing.",
      ],
    },
    {
      company: "Rohlík.cz (VELKÁ PECKA s.r.o.)",
      position: "Analyst & IT Support",
      from: 2019,
      to: 2019,
      duties: [
        "Analyzing and evaluating CCTV footage and related security/operational incidents.",
        "Resolving technical issues and providing IT support within warehouse operations.",
      ],
    },
    {
      company: "Československá obchodní banka a.s.",
      position: "Part-time Assistant",
      from: 2018,
      to: 2018,
      duties: [
        "Processing client requests and banking instructions.",
        "Maintaining high precision and adhering to banking security standards.",
        "Providing administrative support within the Payment Cards department.",
      ],
    },
    {
      company: "Korn Ferry s.r.o.",
      position: "Part-time Assistant",
      from: 2015,
      to: 2016,
      duties: ["Providing accounting and administrative support."],
    },
    {
      company: "PPF banka a.s.",
      position: "Part-time Assistant",
      from: 2014,
      to: 2014,
      duties: ["Providing administrative assistance."],
    },
  ],
};
