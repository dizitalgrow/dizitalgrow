import emailjs from "@emailjs/browser";

export interface ContactEmailPayload {
  name: string;
  email: string;
  businessName?: string;
  websiteUrl?: string;
  helpWith: string;
  challenge: string;
  budget?: string;
}

export const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
export const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
export const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";

/**
 * Checks if EmailJS is properly configured via environment variables.
 */
export function isEmailJSConfigured(): boolean {
  return Boolean(
    EMAILJS_SERVICE_ID && EMAILJS_PUBLIC_KEY && EMAILJS_TEMPLATE_ID
  );
}

/**
 * Sends a contact inquiry email via EmailJS browser SDK.
 */
export async function sendEmailEnquiry(data: ContactEmailPayload) {
  const serviceId = EMAILJS_SERVICE_ID;
  const publicKey = EMAILJS_PUBLIC_KEY;
  const templateId = EMAILJS_TEMPLATE_ID;

  if (!serviceId || !publicKey || !templateId) {
    throw new Error(
      "Email service is currently offline. Please email contact@dizitalgrow.in directly."
    );
  }

  const templateParams: Record<string, unknown> = {
    name: data.name,
    email: data.email,
    business_name: data.businessName || "N/A",
    company: data.businessName || "N/A",
    website_url: data.websiteUrl || "N/A",
    help_with: data.helpWith,
    solution: data.helpWith,
    challenge: data.challenge,
    details: data.challenge,
    budget: data.budget || "Not specified",
  };

  return await emailjs.send(serviceId, templateId, templateParams, publicKey);
}
