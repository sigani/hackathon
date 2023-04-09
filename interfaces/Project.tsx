export type Project = {
  name: string;
  type: string;
  startDate?: Date;
  endDate?: Date;
  languages: string[];
  description: string;
  owner: string; // id
  members: string[]; // array of ids of current participants
  teamSize: number; // how many team members they are looking for
  openForApplications: boolean;
  completed: boolean;
  photos: [];
  likes: string[];
  website: string;
};
