import { DM_Mono, Geist, IBM_Plex_Sans_Arabic, Instrument_Sans } from 'next/font/google';

// Exposed as CSS variables and mapped to Tailwind font families in globals.css.
export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--ff-plex-arabic',
});

export const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--ff-instrument-sans',
});

export const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--ff-dm-mono',
});

export const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--ff-geist',
});

export const fontVariables = [plexArabic, instrumentSans, dmMono, geist]
  .map((font) => font.variable)
  .join(' ');
