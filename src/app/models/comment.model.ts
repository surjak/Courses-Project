import { User } from "./user.model";

export interface Comment {
  description: string;
  user: User;
}
