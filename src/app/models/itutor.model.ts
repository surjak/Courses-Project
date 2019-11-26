import { IComment } from "./icomment.model";

export interface ITutor {
  _id: string;
  imageUrl: string;
  telephone: string;
  mail: string;
  personalPage: string;
  learningSkills?: IComment[];
  xxx?: IComment[];
  yyy?: IComment[];
}
