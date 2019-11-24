import { Tutor } from "./tutor.model";

export interface Course {
  name: string;
  ects: Number;
  semester: Number;
  formOfCourse: string;
  grade: Number;
  imageUrl: string;
  description: string;
  tutors: Tutor[];
  comments: Comment[];
}
