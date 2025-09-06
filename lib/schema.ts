import { z } from "zod";

export const contactSchema = z.object({
  name: z.string(),
  email: z.email(),
  subject: z.string(),
  message: z.optional(z.string()),
});

export type Contact = z.infer<typeof contactSchema>;
