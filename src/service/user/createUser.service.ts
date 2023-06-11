import { iCreateUser, iUser } from "../../interfaces/user.interfaces";
import { fakeData } from "../../database/fakeData";
export function createUserService(userData: iCreateUser): iUser {
  const data: iUser[] = fakeData;
  const user: iUser = {
    ...userData,
    id: data[data.length - 1].id + 1,
  };
  data.push(user);
  return user;
}
