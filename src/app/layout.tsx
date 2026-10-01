import type { Metadata, Viewport } from 'next';
import { LanguageProvider } from '@/hooks/useLanguage';
import { themeInitScript } from '@/lib/theme';
import { fontVariables } from './fonts';
import '@/styles/globals.css';

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f3f4f1' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0d0c' },
  ],
};

export const metadata: Metadata = {
  title: 'عبدالعزيز السبيعي | مستشار استراتيجي | رؤية 2030',
  description:
    'رائد أعمال يمتلك خبرة تمتد لأكثر من 15 عاماً في قيادة الابتكار وإدارة المشاريع التحويلية',
  keywords: [
    'عبدالعزيز السبيعي',
    'رؤية 2030',
    'استشارات استراتيجية',
    'التنقل الكهربائي',
    'فيجو',
    'فيغو',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: the theme script and the language provider set attributes on <html>.
    <html lang="ar" dir="rtl" className={fontVariables} suppressHydrationWarning>
      <head>
        {/* Applies a theme the visitor chose earlier before the first paint. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      {/* Browser extensions (e.g. ColorZilla) add attributes to <body> before hydration. */}
      <body suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
