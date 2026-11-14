"use client";

import React, { useState } from "react";
import {
  Share2,
  Link as LinkIcon,
  Check,
  MessageCircle,
} from "lucide-react";
import {
  LinkedInIcon,
  XIcon,
  FacebookIcon,
} from "@/components/ui/Icons";

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  variant?: "desktop-vertical" | "mobile-horizontal" | "inline";
}

export function SocialShareButtons({
  url,
  title,
  description = "",
  variant = "desktop-vertical",
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=dizitalgrow`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  };

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(false);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          text: description || title,
          url,
        });
      } catch {
        // User cancelled or share failed, fallback
      }
    } else {
      handleCopyLink();
    }
  };

  const canNativeShare =
    typeof navigator !== "undefined" && typeof navigator.share === "function";

  if (variant === "desktop-vertical") {
    return (
      <aside
        aria-label="Share article"
        className="hidden lg:flex flex-col items-center gap-2 sticky top-28 z-20 py-3 px-1.5 bg-[#0A0A0A] border border-[rgba(213,255,64,0.18)] rounded-[2px]"
      >
        <span className="font-mono text-[9px] uppercase tracking-widest text-[#B0B0B0] font-bold py-1">
          SHARE
        </span>

        {/* LinkedIn */}
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share this article on LinkedIn"
          className="h-9 w-9 flex items-center justify-center rounded-[2px] bg-[#141414] text-[#B0B0B0] hover:text-[#D5FF40] hover:bg-[#1a1a1a] border border-transparent hover:border-[rgba(213,255,64,0.3)] transition-colors focus-cyber"
        >
          <LinkedInIcon className="h-4 w-4" />
        </a>

        {/* X / Twitter */}
        <a
          href={shareLinks.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share this article on X"
          className="h-9 w-9 flex items-center justify-center rounded-[2px] bg-[#141414] text-[#B0B0B0] hover:text-[#D5FF40] hover:bg-[#1a1a1a] border border-transparent hover:border-[rgba(213,255,64,0.3)] transition-colors focus-cyber"
        >
          <XIcon className="h-4 w-4" />
        </a>

        {/* WhatsApp */}
        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share this article on WhatsApp"
          className="h-9 w-9 flex items-center justify-center rounded-[2px] bg-[#141414] text-[#B0B0B0] hover:text-[#D5FF40] hover:bg-[#1a1a1a] border border-transparent hover:border-[rgba(213,255,64,0.3)] transition-colors focus-cyber"
        >
          <MessageCircle className="h-4 w-4" />
        </a>

        {/* Facebook */}
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share this article on Facebook"
          className="h-9 w-9 flex items-center justify-center rounded-[2px] bg-[#141414] text-[#B0B0B0] hover:text-[#D5FF40] hover:bg-[#1a1a1a] border border-transparent hover:border-[rgba(213,255,64,0.3)] transition-colors focus-cyber"
        >
          <FacebookIcon className="h-4 w-4" />
        </a>

        {/* Copy Link */}
        <button
          type="button"
          onClick={handleCopyLink}
          aria-label="Copy article link to clipboard"
          className={`h-9 w-9 flex items-center justify-center rounded-[2px] transition-colors focus-cyber ${
            copied
              ? "bg-[#D5FF40] text-[#050505]"
              : "bg-[#141414] text-[#B0B0B0] hover:text-[#D5FF40] hover:bg-[#1a1a1a] border border-transparent hover:border-[rgba(213,255,64,0.3)]"
          }`}
          title={copied ? "Link Copied!" : "Copy Link"}
        >
          {copied ? <Check className="h-4 w-4" /> : <LinkIcon className="h-4 w-4" />}
        </button>

        {copied && (
          <span className="font-mono text-[8px] uppercase tracking-wider text-[#D5FF40] font-bold text-center">
            COPIED
          </span>
        )}
      </aside>
    );
  }

  // Mobile or inline presentation
  return (
    <div
      aria-label="Share article"
      className="flex flex-wrap items-center gap-2 py-3 px-3 bg-[#0A0A0A] border border-[rgba(213,255,64,0.18)] rounded-[2px]"
    >
      <span className="font-mono text-xs uppercase tracking-wider text-[#B0B0B0] font-bold mr-1 flex items-center gap-1.5">
        <Share2 className="h-3.5 w-3.5 text-[#D5FF40]" />
        Share
      </span>

      {canNativeShare && (
        <button
          type="button"
          onClick={handleNativeShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider bg-[#D5FF40] text-[#050505] rounded-[2px] hover:bg-[#c2ea36] transition-colors focus-cyber min-h-[44px]"
        >
          <Share2 className="h-3.5 w-3.5" />
          <span>Share</span>
        </button>
      )}

      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="h-11 w-11 flex items-center justify-center rounded-[2px] bg-[#141414] text-[#B0B0B0] hover:text-[#D5FF40] border border-[rgba(213,255,64,0.15)] transition-colors focus-cyber"
      >
        <LinkedInIcon className="h-4 w-4" />
      </a>

      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className="h-11 w-11 flex items-center justify-center rounded-[2px] bg-[#141414] text-[#B0B0B0] hover:text-[#D5FF40] border border-[rgba(213,255,64,0.15)] transition-colors focus-cyber"
      >
        <MessageCircle className="h-4 w-4" />
      </a>

      <a
        href={shareLinks.x}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="h-11 w-11 flex items-center justify-center rounded-[2px] bg-[#141414] text-[#B0B0B0] hover:text-[#D5FF40] border border-[rgba(213,255,64,0.15)] transition-colors focus-cyber"
      >
        <XIcon className="h-4 w-4" />
      </a>

      <button
        type="button"
        onClick={handleCopyLink}
        aria-label="Copy link"
        className={`h-11 px-3 flex items-center gap-1.5 rounded-[2px] font-mono text-xs uppercase tracking-wider transition-colors focus-cyber ${
          copied
            ? "bg-[#D5FF40] text-[#050505] font-bold"
            : "bg-[#141414] text-[#B0B0B0] hover:text-white border border-[rgba(213,255,64,0.15)]"
        }`}
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-[#050505]" />
            <span className="font-bold">Copied!</span>
          </>
        ) : (
          <>
            <LinkIcon className="h-4 w-4" />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
}
