import { Request, Response } from "express";
import { createLoginService } from "../service/login/createLogin.servicec";
export function createLoginController(req: Request, res: Response): Response {
  const loginData = req.body;
  const token: string = createLoginService(loginData);
  return res.status(200).json({ token: token });
}
