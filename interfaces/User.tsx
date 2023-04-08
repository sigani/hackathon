import { Project } from "./Project";
import { Badges } from "./Badges";

export type User = {
  id: string | null;
  username: string;
  email: string;
  languages: { lang: string; skill: number }[];
  description: string;
  projects: { projID: number; project: Project }[];
  badges: keyof (typeof Badges)[];
  socials: { github: string; discord: string; linkedin: string };
};
