import { iLogin } from "../../interfaces/login.interfaces";
import jwt from "jsonwebtoken";
import { fakeData } from "../../database/fakeData";
import { iUser } from "../../interfaces/user.interfaces";
import { AppError } from "../../../errors";
export function createLoginService(loginData: iLogin): string {
  const data: iUser[] = fakeData;
  const user: iUser | undefined = data.find(
    (user) => user.email === loginData.email
  );
  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }
  const passwordMatch: boolean = loginData.password === user!.password;

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }
  //gera o token com uma chave secreta e seta as infos di usuario logado para permissões
  const token: string = jwt.sign(
    {
      admin: user!.admin,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(user!.id),
    }
  );
  return token;
}
