export type Language = 'ar' | 'en';

export interface Translation {
  ar: string;
  en: string;
}

export interface NavigationItem {
  href: string;
  label: Translation;
}

export interface TimelineItem {
  title: Translation;
  subtitle?: Translation;
  date: string;
}

export interface SocialLink {
  platform: string;
  url: string;
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

export interface WorkProject {
  id: string;
  title: Translation;
  category: Translation;
  tagline: Translation;
  description: Translation;
  tags: Translation[];
  image: string;
  logo?: { src: string; width: number; height: number };
  caseStudy?: string;
}

export interface Insight {
  title: Translation;
  category: Translation;
  year: string;
}
