import { iUser } from "./../../interfaces/user.interfaces";
import { fakeData } from "../../database/fakeData";
import { returnUserSchema } from "../../schemas/user.schemas";
export function getUserService(userId: number): iUser {
  const data = fakeData;
  const user: iUser | null = data.find((user) => user.id === userId);
  const returnUser = returnUserSchema.parse(user);
  return returnUser;
}
