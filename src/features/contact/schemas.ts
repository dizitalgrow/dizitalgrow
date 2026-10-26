import { z } from "zod";

export const HELP_WITH_OPTIONS = [
  "Website & Online Presence",
  "Search Engine Optimization (SEO)",
  "Content & Social Media Strategy",
  "Paid Advertising (Google / Meta Ads)",
  "Analytics & Conversion Tracking",
  "General Digital Growth Consultation",
  "Other / Multiple Topics",
] as const;

export const BUDGET_OPTIONS = [
  "Not sure / Need consultation",
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Flexible based on recommendation",
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
  businessName: z.string().max(120).optional().or(z.literal("")),
  websiteUrl: z
    .string()
    .max(200)
    .optional()
    .or(z.literal(""))
    .refine(
      (val) => {
        if (!val || val.trim() === "") return true;
        try {
          const withProto = /^https?:\/\//i.test(val) ? val : `https://${val}`;
          new URL(withProto);
          return true;
        } catch {
          return false;
        }
      },
      { message: "Please enter a valid website URL (e.g., example.com)" }
    ),
  helpWith: z
    .string()
    .min(1, { message: "Please select what you need help with" }),
  challenge: z
    .string()
    .min(10, {
      message:
        "Please describe your challenge and goals in a little more detail (at least 10 characters)",
    })
    .max(3000, { message: "Message cannot exceed 3000 characters" }),
  budget: z.string().optional().or(z.literal("")),
  // Honeypot spam trap: Bots usually fill this out; real users cannot see it
  websiteHoneypot: z.string().max(0, { message: "Spam detected" }).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
