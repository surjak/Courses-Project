import { ITutor } from "./itutor.model";
import { IComment } from "./icomment.model";

export interface ICourse {
  name: string;
  ects: Number;
  semester: Number;
  formOfCourse: string;
  grade: Number;
  imageUrl: string;
  description: string;
  tutors: ITutor[];
  comments?: IComment[];
}
