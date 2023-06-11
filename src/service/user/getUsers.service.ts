import { fakeData } from "../../database/fakeData";
import { iReturnUser, iUser } from "../../interfaces/user.interfaces";
import {
  returnUserSchema,
  returnUsersSchema,
} from "../../schemas/user.schemas";
export function getUsersService(): iReturnUser[] {
  const data: iUser[] = fakeData;
  const returnData = returnUsersSchema.parse(data);
  return returnData;
}
