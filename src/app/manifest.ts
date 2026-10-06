import type { MetadataRoute } from 'next';
import { BIO_INFO } from '@/constants/data';

// Icons for Android home-screen shortcuts. `display: 'browser'` keeps it a website, not an installable app.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BIO_INFO.name.ar,
    short_name: 'عبدالعزيز',
    lang: 'ar',
    dir: 'rtl',
    start_url: '/',
    display: 'browser',
    background_color: '#0a0d0c',
    theme_color: '#0a0d0c',
    icons: [
      { src: '/app-icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/app-icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/app-icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
