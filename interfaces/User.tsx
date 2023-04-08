export type User = {
  name: string;
  email: string;
  languages: { lang: string; skill: number }[];
  description: string;
  projects: { proj: string; desc: string }[];
};
