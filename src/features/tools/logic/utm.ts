export interface UtmParameters {
  source: string;
  medium: string;
  campaign: string;
  content?: string;
  term?: string;
}

export function buildUtmUrl(baseUrl: string, params: UtmParameters): string {
  if (!baseUrl || typeof baseUrl !== "string") return "";

  let cleanedUrl = baseUrl.trim();
  if (!/^https?:\/\//i.test(cleanedUrl)) {
    cleanedUrl = `https://${cleanedUrl}`;
  }

  try {
    const url = new URL(cleanedUrl);

    if (params.source?.trim()) {
      url.searchParams.set("utm_source", params.source.trim().toLowerCase().replace(/\s+/g, "-"));
    }
    if (params.medium?.trim()) {
      url.searchParams.set("utm_medium", params.medium.trim().toLowerCase().replace(/\s+/g, "-"));
    }
    if (params.campaign?.trim()) {
      url.searchParams.set("utm_campaign", params.campaign.trim().toLowerCase().replace(/\s+/g, "-"));
    }
    if (params.content?.trim()) {
      url.searchParams.set("utm_content", params.content.trim().toLowerCase().replace(/\s+/g, "-"));
    }
    if (params.term?.trim()) {
      url.searchParams.set("utm_term", params.term.trim().toLowerCase().replace(/\s+/g, "-"));
    }

    return url.toString();
  } catch {
    return "";
  }
}

