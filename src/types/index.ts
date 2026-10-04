export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface ProblemItem {
  title: string;
  challenge: string;
  outcome: string;
}

export interface ProjectItem {
  title: string;
  sector: string;
  challenge: string;
  solution: string;
  outcome: string;
}

export interface ServiceItem {
  slug: string;
  name: string;
  overview: string;
  benefits: string[];
  useCases: string[];
}

export interface ProcessItem {
  no: string;
  name: string;
  copy: string;
}

export interface WhyItem {
  title: string;
  copy: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface ContactMethodItem {
  iconName: "WhatsApp" | "Mail" | "Instagram" | "LinkedIn";
  label: string;
  value: string;
  href: string;
}

export interface BeliefItem {
  title: string;
  copy: string;
}

export interface ExpectationItem {
  title: string;
  copy: string;
}
