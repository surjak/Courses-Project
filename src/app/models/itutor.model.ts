import { IComment } from "./icomment.model";

export interface ITutor {
  imageUrl: string;
  telephone: string;
  mail: string;
  personalPage: string;
  learningSkills?: IComment[];
  xxx?: IComment[];
  yyy?: IComment[];
}
