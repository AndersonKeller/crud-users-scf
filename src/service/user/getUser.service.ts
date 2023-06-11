import { iReturnUser, iUser } from "./../../interfaces/user.interfaces";
import { fakeData } from "../../database/fakeData";
import { returnUserSchema } from "../../schemas/user.schemas";
import { countAcess } from "../user/countAcess.service";
export function getUserService(userId: number): iReturnUser {
  const data: iUser[] = fakeData;
  countAcess(userId, true);
  const user: iUser | undefined = data.find(
    (user: iUser) => user.id === userId
  );
  const returnUser = returnUserSchema.parse(user);
  return returnUser;
}
