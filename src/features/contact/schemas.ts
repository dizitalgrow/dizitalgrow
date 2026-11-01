import { z } from "zod";

export const GOAL_OPTIONS = [
  "Build a website",
  "Develop an application",
  "Grow through advertising",
  "Improve online visibility",
  "Set up analytics and conversion tracking",
  "Improve lead generation",
  "Explore a digital growth strategy",
  "Something else",
] as const;

export const BUDGET_OPTIONS = [
  "Flexible / Need recommendation",
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,50,000",
  "₹2,50,000+",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Please enter your name (at least 2 characters)" })
    .max(100, { message: "Name cannot exceed 100 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  phoneOrWhatsApp: z
    .string()
    .min(7, { message: "Please enter a valid phone or WhatsApp number" })
    .max(20, { message: "Phone number too long" })
    .regex(/^[+0-9\s-()]+$/, {
      message: "Please enter a valid phone format (e.g. +91 98765 43210)",
    }),
  businessOrOrg: z.string().max(120).optional().or(z.literal("")),
  goal: z
    .string()
    .min(1, { message: "Please select what you are looking to achieve" }),
  description: z
    .string()
    .min(10, {
      message:
        "Please provide a brief description of your requirements (at least 10 characters)",
    })
    .max(3000, { message: "Description cannot exceed 3000 characters" }),
  budget: z.string().optional().or(z.literal("")),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must accept our privacy policy to submit",
  }),
  // Honeypot spam trap
  websiteHoneypot: z.string().max(0, { message: "Spam detected" }).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Backward compatibility alias for legacy components
export const HELP_WITH_OPTIONS = GOAL_OPTIONS;
