import { iUser } from "./../../interfaces/user.interfaces";
import { fakeData } from "../../database/fakeData";
import { returnUserSchema } from "../../schemas/user.schemas";
export function getUserService(userId: number): iUser {
  const data: iUser[] = fakeData;
  const user: iUser | undefined = data.find(
    (user: iUser) => user.id === userId
  );
  const returnUser = returnUserSchema.parse(user);
  return returnUser;
}
