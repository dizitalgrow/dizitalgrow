import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name cannot exceed 100 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/.test(val.trim()),
      { message: "Please enter a valid phone number" }
    ),
  company: z.string().optional(),
  service: z
    .string()
    .min(1, { message: "Please select a service" }),
  details: z
    .string()
    .min(10, { message: "Please provide a little more context (at least 10 characters)" })
    .max(2000, { message: "Message is too long" }),
  budget: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
