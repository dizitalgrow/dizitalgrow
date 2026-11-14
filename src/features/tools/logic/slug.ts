export function generateSlug(input: string): string {
  if (!input || typeof input !== "string") return "";

  return input
    .normalize("NFD") // Decompose accented characters (e.g., é -> e + ´)
    .replace(/[\u0300-\u036f]/g, "") // Remove accent marks
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // Remove all non-alphanumeric except spaces & hyphens
    .replace(/[\s_]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/-+/g, "-") // Collapse consecutive hyphens
    .replace(/^-+|-+$/g, ""); // Trim leading and trailing hyphens
}

