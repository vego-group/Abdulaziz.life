import type { MetadataRoute } from 'next';

// Same host as the sitemap URL in robots.ts.
const SITE_URL = 'https://www.abdulaziz.life';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/work/vego`, changeFrequency: 'yearly', priority: 0.8 },
  ];
}
