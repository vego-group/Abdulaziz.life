import type { Metadata } from 'next';
import { LanguageProvider } from '@/hooks/useLanguage';
import { ThemeProvider } from '@/hooks/useTheme';
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
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Font Awesome (اختياري لو بتستخدمه) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />

        {/* ✅ Material Symbols (حل مشكلة الأيقونات) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>

      <body>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
