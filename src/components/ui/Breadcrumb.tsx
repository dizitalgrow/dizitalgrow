import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const schemaItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://dizitalgrow.in",
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: item.name,
      ...(item.href ? { item: `https://dizitalgrow.in${item.href}` } : {}),
    })),
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaItems,
  };

  return (
    <nav aria-label="Breadcrumb" className={`mb-6 ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-mono text-[#B0B0B0]">
        <li className="flex items-center gap-1.5 sm:gap-2">
          <Link
            href="/"
            className="hover:text-white transition-colors focus-cyber rounded-[2px]"
          >
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-[rgba(213,255,64,0.4)] shrink-0" />
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1.5 sm:gap-2">
              {item.href && !isLast ? (
                <>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors focus-cyber rounded-[2px]"
                  >
                    {item.name}
                  </Link>
                  <ChevronRight className="h-3 w-3 text-[rgba(213,255,64,0.4)] shrink-0" />
                </>
              ) : (
                <span
                  className="text-[#D5FF40] font-bold uppercase truncate max-w-[240px] sm:max-w-none"
                  aria-current="page"
                >
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

