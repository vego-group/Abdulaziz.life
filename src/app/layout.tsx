import type { Metadata } from 'next';
import { LanguageProvider } from '@/hooks/useLanguage';
import { fontVariables } from './fonts';
import '@/styles/globals.css';

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
    <html lang="ar" dir="rtl" className={fontVariables} suppressHydrationWarning>
      {/* Browser extensions (e.g. ColorZilla) add attributes to <body> before hydration. */}
      <body suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
