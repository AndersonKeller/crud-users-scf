import { iReturnUser, iUser } from "../interfaces/user.interfaces";
import { getUserService } from "../service/user/getUser.service";

import { Request, Response } from "express";
export function getUserController(req: Request, res: Response): Response {
  const userId: number = parseInt(req.params.id);
  const user: iReturnUser = getUserService(userId);
  return res.status(200).json(user);
}
