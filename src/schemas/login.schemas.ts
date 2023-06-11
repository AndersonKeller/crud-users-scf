import { z } from "zod";

export const createLoginSchema = z.object({
  email: z.string(),
  password: z.string().min(4, "password must be 4 characters"),
});
