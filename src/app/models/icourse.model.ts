import { ITutor } from "./itutor.model";
import { IComment } from "./icomment.model";

export interface ICourse {
  _id: string;
  name: string;
  ects: Number;
  semester: Number;
  formOfCourse: string;
  grade: Number;
  imageUrl: string;
  description: string;
  tutors: ITutor[];
  max: Number;
  comments?: IComment[];
  attendees?: Number;
}
