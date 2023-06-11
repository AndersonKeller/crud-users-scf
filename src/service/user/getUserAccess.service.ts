import { fakeData } from "../../database/fakeData";
import { iUser } from "../../interfaces/user.interfaces";
import { countAcess } from "./countAcess.service";

export function getUserAccessService(userId: number): string {
  const data: iUser[] = fakeData;
  const user: iUser | undefined = data.find(
    (user: iUser) => user.id === userId
  );
  const access: number[] = countAcess(userId, false);
  const countAccess: number[] = access.filter(
    (user: number) => user === userId
  );
  return (
    "Usuário " + user?.name + " foi lido " + countAccess.length + " vezes."
  );
}
