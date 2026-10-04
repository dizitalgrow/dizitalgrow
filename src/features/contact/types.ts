import type { ContactFormData } from "./schemas";

export interface ContactActionResult {
  success: boolean;
  message?: string;
  errors?: Partial<Record<keyof ContactFormData, string[]>>;
}
