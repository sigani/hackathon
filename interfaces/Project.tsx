export type Project = {
  id: string | null;
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
};

// export default class Project {
//   constructor(
//     public name: string,
//     public type: string,
//     public languages: string[],
//     public description: string,
//     public owner: string,
//     public startDate: Date,
//     public endDate?: Date,
//     public id?: ObjectId
//   ) {}
// }
