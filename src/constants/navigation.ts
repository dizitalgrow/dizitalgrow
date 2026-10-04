import type { NavItem } from "@/types";

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "SERVICES", href: "/services" },
  { label: "WORK", href: "/work" },
  { label: "PROCESS", href: "/process" },
  { label: "ABOUT", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "CONTACT", href: "/contact" },
];

export const NAV_LINKS = MAIN_NAV_ITEMS;

export const FOOTER_QUICK_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_SERVICES: string[] = [
  "Website Development",
  "Web Applications",
  "Mobile Apps",
  "Meta Ads",
  "Google Ads",
  "Conversion Tracking",
];

export const FOOTER_CONNECT_LINKS: NavItem[] = [
  { label: "Instagram: @dizitalgrow", href: "https://instagram.com/dizitalgrow" },
  { label: "Facebook: DizitalGrow", href: "https://facebook.com/dizitalgrow" },
  { label: "Email: hello@dizitalgrow.in", href: "mailto:hello@dizitalgrow.in" },
];

export const FOOTER_CONNECT = FOOTER_CONNECT_LINKS;

export const FOOTER_LEGAL_LINKS: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];
