export * from "./sanity/client";
export * from "./sanity/types";
export * from "./sanity/queries";
export * from "./sanity/api";

import { getBlogPosts } from "./sanity/api";
import type { SanityPost } from "./sanity/types";

/**
 * Backward compatibility alias for getPublishedPosts()
 */
export async function getPublishedPosts(): Promise<SanityPost[]> {
  return getBlogPosts({ limit: 6 });
}
