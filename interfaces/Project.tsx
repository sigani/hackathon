export type Project = {
  id: number;
  name: string;
  type: string;
  startDate: Date;
  endDate?: Date;
  languages: string[];
  description: string;
  owner: number; // id
  members: number[]; // array of ids of current participants
  teamSize: number; // how many team members they are looking for
  completed: boolean;
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
