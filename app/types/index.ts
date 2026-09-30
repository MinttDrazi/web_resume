export type SupportedLang = "cs" | "en";

export type Education = {
  school: string;
  specialization: string;
  from: number;
  to: number | string;
  level: string;
};

export type Employment = {
  company: string;
  position: string;
  from: number;
  to: number | string;
  duties: string[];
};

export type Language = {
  language: string;
  level: string;
};

export type Project = {
  year: number;
  name: string;
  image: string;
  text: string;
  techstack: string[];
  links?: { url: string; text: string }[];
};
