/**
 * Category utility functions for clean URLs and consistent matching
 */

export function categoryToSlug(category: string): string {
  if (!category) return "general";
  return category
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function slugToCategoryDisplayName(slug: string, existingCategories: string[] = []): string {
  if (!slug) return "All Articles";

  // Check if there is an exact match in existing categories
  const match = existingCategories.find((cat) => categoryToSlug(cat) === slug.toLowerCase());
  if (match) return match;

  // Otherwise format from slug
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(/\bAnd\b/g, "&");
}
