export interface NavLink {
  label: string;
  href: string;
}

export const MAIN_NAV_ITEMS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const NAV_LINKS = MAIN_NAV_ITEMS;

export const FOOTER_NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Our Process", href: "/process" },
  { label: "Meta Conversions API", href: "/meta-capi" },
  { label: "Blog", href: "/blog" },
  { label: "About DizitalGrow", href: "/about" },
  { label: "Discuss Your Project", href: "/contact" },
];


export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export const VERIFIED_EMAIL = "contact@dizitalgrow.in";
export const WHATSAPP_CHANNEL_URL =
  "https://whatsapp.com/channel/0029VbDnyoKFHWq92fKIGj2N";
export const VERIFIED_WHATSAPP_PHONE =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "+91 91871 26193";
export const VERIFIED_WHATSAPP_RAW = "919187126193";


