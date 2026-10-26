import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names with Tailwind CSS classes cleanly.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Builds a valid wa.me WhatsApp direct chat URL from an international phone number.
 * Strips non-digit characters and appends an optional pre-filled message.
 */
export function formatWhatsAppUrl(phoneNumber: string, message?: string): string {
  const digits = phoneNumber.replace(/[^0-9]/g, "");
  if (!digits) return "";
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${query}`;
}

