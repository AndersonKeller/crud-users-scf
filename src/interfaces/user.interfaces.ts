import { z } from "zod";
import { createUserSchema, returnUserSchema } from "../schemas/user.schemas";

export type iCreateUser = z.infer<typeof createUserSchema>;
export type iUser = z.infer<typeof returnUserSchema>;
