import { IUser } from "./iuser.model";

export interface IComment {
  description: string;
  user: IUser;
}
