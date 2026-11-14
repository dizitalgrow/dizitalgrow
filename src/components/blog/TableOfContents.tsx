"use client";

import React, { useEffect, useState, useTransition } from "react";
import { List, ChevronDown, ChevronUp } from "lucide-react";

export interface TocItem {
  id: string;
  text: string;
  level: number; // 2 for h2, 3 for h3
}

interface TableOfContentsProps {
  items: TocItem[];
  className?: string;
}

export function TableOfContents({ items, className = "" }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(() => items?.[0]?.id || "");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    if (!items || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTransition(() => {
              setActiveId(entry.target.id);
            });
          }
        });
      },
      {
        rootMargin: "0px 0px -65% 0px",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [items, activeId]);

  if (!items || items.length === 0) {
    return null;
  }

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveId(id);
      setIsMobileOpen(false);
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav aria-label="Table of contents" className={className}>
      {/* Desktop Sticky View */}
      <div className="hidden lg:block sticky top-28 space-y-3 bg-[#0A0A0A] border border-[rgba(213,255,64,0.18)] p-5 rounded-[2px]">
        <div className="flex items-center gap-2 pb-3 border-b border-[rgba(213,255,64,0.12)]">
          <List className="h-4 w-4 text-[#D5FF40]" />
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-white">
            Table of Contents
          </span>
        </div>

        <ul className="space-y-1.5 text-xs font-mono max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li
                key={item.id}
                className={`${item.level === 3 ? "pl-4 text-[11px]" : "pl-1"}`}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleScrollTo(e, item.id)}
                  className={`block py-1 px-2 rounded-[2px] transition-colors leading-snug focus-cyber ${
                    isActive
                      ? "bg-[rgba(213,255,64,0.1)] text-[#D5FF40] font-bold border-l-2 border-[#D5FF40]"
                      : "text-[#B0B0B0] hover:text-white hover:bg-[#141414]"
                  }`}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Collapsible View */}
      <div className="lg:hidden border border-[rgba(213,255,64,0.2)] bg-[#0A0A0A] rounded-[2px] overflow-hidden">
        <button
          type="button"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-expanded={isMobileOpen}
          className="w-full flex items-center justify-between p-4 text-xs font-mono uppercase tracking-wider font-bold text-white hover:bg-[#101010] transition-colors focus-cyber"
        >
          <div className="flex items-center gap-2">
            <List className="h-4 w-4 text-[#D5FF40]" />
            <span>Table of Contents ({items.length} sections)</span>
          </div>
          {isMobileOpen ? (
            <ChevronUp className="h-4 w-4 text-[#D5FF40]" />
          ) : (
            <ChevronDown className="h-4 w-4 text-[#D5FF40]" />
          )}
        </button>

        {isMobileOpen && (
          <div className="p-4 pt-1 border-t border-[rgba(213,255,64,0.12)] bg-[#050505]">
            <ul className="space-y-1.5 text-xs font-mono">
              {items.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li
                    key={item.id}
                    className={`${item.level === 3 ? "pl-4 text-[11px]" : "pl-1"}`}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleScrollTo(e, item.id)}
                      className={`block py-1.5 px-2 rounded-[2px] leading-snug ${
                        isActive
                          ? "bg-[rgba(213,255,64,0.1)] text-[#D5FF40] font-bold border-l-2 border-[#D5FF40]"
                          : "text-[#B0B0B0] hover:text-white"
                      }`}
                    >
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
