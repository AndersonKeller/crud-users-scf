import { fakeData } from "../../database/fakeData";
import { iUpdateUser, iUser } from "../../interfaces/user.interfaces";
import { returnUserSchema } from "../../schemas/user.schemas";
export function updateUserService(
  userId: number,
  userData: iUpdateUser
): iUser {
  const data: iUser[] = fakeData;
  const findUser: iUser | undefined = data.find(
    (user: iUser) => user.id === userId
  );
  const indexUser: number | undefined = data.findIndex(
    (user: iUser) => user.id === userId
  );
  console.log(findUser);
  const updateUser: any = {
    ...findUser!,
    ...userData,
  };
  data.splice(indexUser, 1, updateUser);
  const returnUser = returnUserSchema.parse(updateUser);
  return returnUser;
}
