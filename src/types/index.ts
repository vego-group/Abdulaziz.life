export type Language = 'ar' | 'en';

export interface Translation {
  ar: string;
  en: string;
}

export interface NavigationItem {
  href: string;
  label: Translation;
}

export interface ProjectCard {
  id: string;
  name: Translation;
  description: Translation;
  image: string;
  tags: Translation[];
  link?: string;
  featured?: boolean;
}

export interface TimelineItem {
  title: Translation;
  subtitle?: Translation;
  date: string;
}

export interface ContactInfo {
  icon: string;
  label: Translation;
  value: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ImpactStat {
  value: string;
  label: Translation;
  description: Translation;
}

export interface ExpertiseArea {
  title: Translation;
  subtitle: Translation;
  description: Translation;
}
