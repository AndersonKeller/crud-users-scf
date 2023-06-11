import { iUser } from "../interfaces/user.interfaces";
import { getUserService } from "../service/user/getUser.service";
import { Request, Response } from "express";
export function getUserController(req: Request, res: Response) {
  const userId: number = parseInt(req.params.id);
  const user: iUser = getUserService(userId);
  return res.status(200).json(user);
}
