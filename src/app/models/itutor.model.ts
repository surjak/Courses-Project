import { IComment } from "./icomment.model";

export interface ITutor {
  _id: string;
  name: string;
  surname: string;
  imageUrl: string;
  telephone: string;
  mail: string;
  personalPage: string;
  learningSkills?: IComment[];
  personalSkills?: IComment[];
  softSkills?: IComment[];
}
