import React from "react";
import type { VideoEmbedBlock } from "@/lib/sanity";

interface VideoEmbedProps {
  value: VideoEmbedBlock;
}

function getEmbedUrl(rawUrl: string): string | null {
  try {
    const url = new URL(rawUrl);
    // YouTube
    if (url.hostname.includes("youtube.com")) {
      const v = url.searchParams.get("v");
      if (v) return `https://www.youtube-nocookie.com/embed/${v}`;
    }
    if (url.hostname.includes("youtu.be")) {
      const v = url.pathname.replace(/^\//, "");
      if (v) return `https://www.youtube-nocookie.com/embed/${v}`;
    }
    // Vimeo
    if (url.hostname.includes("vimeo.com")) {
      const id = url.pathname.split("/").filter(Boolean).pop();
      if (id) return `https://player.vimeo.com/video/${id}`;
    }
    return rawUrl;
  } catch {
    return null;
  }
}

export function VideoEmbed({ value }: VideoEmbedProps) {
  if (!value || !value.url) return null;

  const embedUrl = getEmbedUrl(value.url);
  if (!embedUrl) return null;

  return (
    <figure className="my-8 space-y-2">
      <div className="relative aspect-video w-full overflow-hidden rounded-[2px] border border-[rgba(213,255,64,0.18)] bg-[#050505]">
        <iframe
          src={embedUrl}
          title={value.caption || "Embedded Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      {value.caption && (
        <figcaption className="text-center font-mono text-xs text-[var(--color-text-secondary)] italic">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
}
