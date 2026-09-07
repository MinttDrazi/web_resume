export type Education = {
  school: string;
  specialization: string;
  from: number;
  to: number | "současnost";
  level: "Maturita" | "Bakalář" | "Inženýr";
};

export type Employment = {
  company: string;
  position: string;
  from: number;
  to: number | "současnost";
  duties: string[];
};

export type Project = {
  year: number;
  name: string;
  image: string;
  text: string;
  techstack: string[];
  links?: { url: string; text: string }[];
};
