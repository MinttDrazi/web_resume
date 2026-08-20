export type Education = {
  school: string;
  specialization: string;
  from: number;
  to: number | "současnost";
  level: "Maturita" | "Bakalář" | "Inženýr";
};
