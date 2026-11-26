export type Language = "es" | "en";
export interface ContactLink {
  id: "email" | "github" | "linkedin" | "location";
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
}

export interface WorkPillar {
  id: "systems" | "ui" | "ownership";
  code: string;
  title: string;
  subtitle: string;
  description: string;
  proofPoints: string[];
}

export interface HowIWorkSectionData {
  eyebrow: string;
  heading: string;
  intro: string;
  pillars: WorkPillar[];
}

export interface HeroSectionData {
  statusBadge: string;
  name: string;
  roleTitle: string;
  tagline: string;
  primaryCta: string;
  secondaryCta: string;
  copiedFeedback: string;
  copyTooltip: string;
  contacts: ContactLink[];
}

export interface DossierContent {
  hero: HeroSectionData;
  howIWork: HowIWorkSectionData;
}