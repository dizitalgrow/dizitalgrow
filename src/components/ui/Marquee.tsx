"use client";

import { TICKER_ITEMS } from "@/constants/site-data";

export function Marquee() {
  // Duplicate array for seamless infinite looping
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="border-y border-border bg-surface py-6 overflow-hidden select-none">
      <div className="flex w-max animate-marquee">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-10 px-5 shrink-0"
          >
            <span className="font-display text-xl sm:text-2xl text-foreground/85 whitespace-nowrap font-medium tracking-tight">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-lime shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
