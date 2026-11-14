"use server";

import { contactSchema, type ContactFormData } from "./schemas";
import type { ContactActionResult } from "./types";

/**
 * Server Action to validate and process a contact inquiry.
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

  const validatedData = result.data;

  // Bot honeypot check
  if (validatedData.websiteHoneypot && validatedData.websiteHoneypot.length > 0) {
    return {
      success: false,
      message: "Spam submission rejected.",
    };
  }

  console.log(
    `[Server Action] Validated contact inquiry received successfully for category: "${validatedData.goal}"`
  );

  return {
    success: true,
    message:
      "Thank you. Your inquiry has been received. We will respond with practical advice and clear scopes within one business day.",
  };
}
