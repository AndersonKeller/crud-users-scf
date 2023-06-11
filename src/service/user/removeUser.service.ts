import { fakeData } from "../../database/fakeData";
import { iUser } from "../../interfaces/user.interfaces";
export function removeUserService(userId: number): string {
  const data: iUser[] = fakeData;
  const findUser: number | undefined = data.findIndex(
    (user: iUser) => user.id === userId
  );
  data.splice(findUser, 1);
  return "success";
}
