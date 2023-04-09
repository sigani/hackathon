import { Project } from "./Project";
import { Badges } from "./Badges";

export type User = {
  username: string;
  email: string;
  languages: { lang: string; skill: number }[];
  description: string;
  projects: { projID: string; project: Project }[];
  requests: { projID: string; user_email: string; user_msg: string }[];
  badges: keyof typeof Badges[];
  socials: { github: string; discord: string; linkedin: string };
};
