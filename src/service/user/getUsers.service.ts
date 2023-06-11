import { fakeData } from "../../database/fakeData";
import { iUser } from "../../interfaces/user.interfaces";
export function getUsersService(): iUser[] {
  const data: iUser[] = fakeData;
  return data;
}
