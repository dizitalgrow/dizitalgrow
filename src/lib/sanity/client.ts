import { createClient } from "@sanity/client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hlkd9o16";
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-03-01";

if (!projectId && process.env.NODE_ENV === "development") {
  console.error(
    "[Sanity] Missing NEXT_PUBLIC_SANITY_PROJECT_ID in environment variables."
  );
}

if (!dataset && process.env.NODE_ENV === "development") {
  console.error(
    "[Sanity] Missing NEXT_PUBLIC_SANITY_DATASET in environment variables."
  );
}

/**
 * Public, read-only Sanity client.
 * Connects directly to the existing project without exposing any secret or write tokens.
 */
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const imageBuilder = createImageUrlBuilder(sanityClient);

/**
 * Image URL builder for Sanity assets with hotspot and responsive sizing support.
 */
export function urlFor(source: SanityImageSource) {
  return imageBuilder.image(source);
}
