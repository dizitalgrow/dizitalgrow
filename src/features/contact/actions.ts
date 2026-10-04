"use server";

import { contactSchema, type ContactFormData } from "./schemas";
import type { ContactActionResult } from "./types";

/**
 * Server Action to validate and submit a contact enquiry.
 * Shared Zod validation ensures boundaries are strictly enforced.
 */
export async function submitContactEnquiry(
  rawInput: ContactFormData
): Promise<ContactActionResult> {
  const result = contactSchema.safeParse(rawInput);

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Validation failed. Please check the entered fields.",
      errors: fieldErrors,
    };
  }

  // Simulated server mutation / CRM forwarding / email dispatch
  const validatedData = result.data;
  console.log("[Server Action] Contact enquiry received:", validatedData.email);

  return {
    success: true,
    message: "Thank you — we have received your details.",
  };
}
