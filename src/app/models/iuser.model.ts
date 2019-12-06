import { ICourse } from "./icourse.model";

export interface IUser {
  email: string;
  _id: string;
  _token: string;
  tutor: boolean;
  admin: boolean;
  courses?: ICourse[];
}
