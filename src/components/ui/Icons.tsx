import React from "react";

/**
 * Pixel-perfect social and brand icon definitions for active channels.
 * Follows 24x24 viewBox with consistent visual weights.
 */

export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m-3.53 3.42c-.2 0-.41.02-.6.1-.23.1-.73.49-.73 1.54 0 1.05.77 2.07.88 2.21.11.15 1.48 2.37 3.67 3.23 1.82.72 2.19.57 2.58.54.4-.04 1.28-.52 1.46-1.03.18-.51.18-.95.13-1.04-.05-.09-.2-.15-.42-.26-.22-.11-1.28-.63-1.48-.7-.2-.07-.35-.11-.5.11-.15.22-.58.7-.71.85-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.21-.69-1.66-.18-.43-.37-.37-.5-.38z" />
    </svg>
  );
}

export function WhatsAppChannelIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 11l13-5v12L3 13v-2z" />
      <path d="M9 14.5v3.5a2 2 0 0 0 2 2h.5" />
      <path d="M19 8.5a4 4 0 0 1 0 7" />
      <path d="M21.5 6a7 7 0 0 1 0 12" />
    </svg>
  );
}
