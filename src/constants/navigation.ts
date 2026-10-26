export interface NavLink {
  label: string;
  href: string;
}

export const MAIN_NAV_ITEMS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const NAV_LINKS = MAIN_NAV_ITEMS;

export const FOOTER_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services & Capabilities", href: "/#services" },
  { label: "Meta Conversions API", href: "/#tracking" },
  { label: "Our 5-Stage Process", href: "/#process" },
  { label: "Growth Guides & Articles", href: "/blog" },
  { label: "About DizitalGrow", href: "/#about" },
  { label: "Frequently Asked Questions", href: "/#faq" },
  { label: "Discuss Your Project", href: "/contact" },
];

export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export const VERIFIED_EMAIL = "contact@dizitalgrow.in";
