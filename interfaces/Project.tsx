import { ObjectId } from "mongodb";

// export type Project = {
//   name: string;
//   type: string;
//   startDate: Date;
//   endDate?: Date;
//   languages: string[];
//   description: string;
//   owner: string; // email of user
// };

export default class Project {
  constructor(
    public name: string,
    public type: string,
    public languages: string[],
    public description: string,
    public owner: string,
    public startDate: Date,
    public endDate?: Date,
    public id?: ObjectId
  ) {}
}
