export type Language = 'ar' | 'en';

export interface Translation {
  ar: string;
  en: string;
}

export interface NavigationItem {
  href: string;
  label: Translation;
}

export interface ServiceCard {
  icon: string;
  title: Translation;
  description: Translation;
  wide?: boolean;
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
  active?: boolean;
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

export interface StatCard {
  icon: string;
  value: string;
  label: Translation;
  wide?: boolean;
}
