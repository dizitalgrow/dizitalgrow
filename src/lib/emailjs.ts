import emailjs from "@emailjs/browser";

export interface ContactEmailPayload {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  solution: string;
  budget?: string;
  details: string;
}

export const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
export const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
export const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";

/**
 * Sends a contact inquiry email via EmailJS browser SDK.
 */
export async function sendEmailEnquiry(data: ContactEmailPayload) {
  const serviceId = EMAILJS_SERVICE_ID;
  const publicKey = EMAILJS_PUBLIC_KEY;
  const templateId = EMAILJS_TEMPLATE_ID;

  if (!serviceId || !publicKey || !templateId) {
    throw new Error(
      "EmailJS configuration missing. Please verify Service ID, Template ID, and Public Key."
    );
  }

  const templateParams: Record<string, unknown> = {
    name: data.name,
    email: data.email,
    company: data.company || "N/A",
    phone: data.phone || "N/A",
    solution: data.solution,
    budget: data.budget || "N/A",
    details: data.details,
  };

  return await emailjs.send(serviceId, templateId, templateParams, publicKey);
}
