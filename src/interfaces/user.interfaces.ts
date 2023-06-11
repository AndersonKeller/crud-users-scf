import { z } from "zod";
import {
  createUserSchema,
  userSchema,
  updateUserSchema,
  returnUserSchema,
} from "../schemas/user.schemas";

export type iCreateUser = z.infer<typeof createUserSchema>;
export type iUser = z.infer<typeof userSchema>;
export type iUpdateUser = z.infer<typeof updateUserSchema>;
export type iReturnUser = z.infer<typeof returnUserSchema>;
