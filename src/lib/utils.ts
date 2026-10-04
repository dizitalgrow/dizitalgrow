import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names with Tailwind CSS classes cleanly.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
