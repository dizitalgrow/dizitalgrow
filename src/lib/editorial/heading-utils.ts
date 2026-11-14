import type { PortableTextBlock } from "@/lib/sanity";
import type { TocItem } from "@/components/blog/TableOfContents";

/**
 * Cleanly convert heading text to a stable URL-safe anchor slug
 */
export function slugifyHeading(text: string): string {
  if (!text || typeof text !== "string") return "";

  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // remove non-word chars
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // collapse duplicate hyphens
}

/**
 * Extract plain text from a Portable Text block's children
 */
export function extractBlockText(block: PortableTextBlock): string {
  if (!block || !block.children || !Array.isArray(block.children)) {
    return "";
  }

  return block.children
    .map((child) => child.text || "")
    .join("")
    .trim();
}

/**
 * Extract H2 and H3 items from an array of Portable Text blocks
 * to power Table of Contents and jump links
 */
export function extractTocFromBlocks(blocks?: PortableTextBlock[]): TocItem[] {
  if (!blocks || !Array.isArray(blocks)) return [];

  const toc: TocItem[] = [];
  const seenIds = new Set<string>();

  for (const block of blocks) {
    if (block._type === "block" && (block.style === "h2" || block.style === "h3")) {
      const text = extractBlockText(block);
      if (!text) continue;

      let baseId = slugifyHeading(text);
      if (!baseId) baseId = `section-${toc.length + 1}`;

      // Handle duplicate headings with incremental suffix
      let uniqueId = baseId;
      let counter = 1;
      while (seenIds.has(uniqueId)) {
        uniqueId = `${baseId}-${counter}`;
        counter++;
      }
      seenIds.add(uniqueId);

      toc.push({
        id: uniqueId,
        text,
        level: block.style === "h2" ? 2 : 3,
      });
    }
  }

  return toc;
}
