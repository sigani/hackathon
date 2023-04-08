export type Project = {
  name: string;
  type: string;
  startDate: Date;
  endDate?: Date;
  languages: string[];
  description: string;
  owner: string; // email of user
};
