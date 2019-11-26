import { IUser } from "./iuser.model";

export interface IComment {
  _id: string;
  description: string;
  user: IUser;
}
