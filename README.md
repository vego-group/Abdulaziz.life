# عبدالعزيز السبيعي — abdulaziz.life

الموقع الشخصي لعبدالعزيز السبيعي، رائد أعمال ومستشار استراتيجي. مبني بـ Next.js وفق تصميم Figma «عبدالعزيز بورتفوليو»: عربي أولاً (RTL) مع نسخة إنجليزية، وبوضعين داكن وفاتح يتبعان إعداد جهاز الزائر (الوضع الفاتح مشتق من ألوان التصميم الداكن في Figma).

## الصفحات

| المسار | المحتوى |
|---|---|
| `/` | الصفحة الرئيسية: البطل، الأرقام، نبذة، الخبرات، الأعمال، الرؤية، المقالات، التواصل |
| `/work/vego` | دراسة حالة فيجو (VEGO) |
| `/robots.txt` ، `/sitemap.xml` | من `src/app/robots.ts` و `src/app/sitemap.ts` |

## التقنيات

- Next.js 16 (App Router، Turbopack) و React 19 و TypeScript
- Tailwind CSS v4، والـ design tokens (الألوان، الخطوط، المسافات) في `src/styles/globals.css`
- الخطوط عبر `next/font`: IBM Plex Sans Arabic و Instrument Sans و DM Mono و Geist

## التشغيل

يتطلب Node.js 20.9 أو أحدث.

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint
npm run build && npm start
```

التفاصيل وحل المشاكل في [INSTALLATION.md](INSTALLATION.md)، والنشر على Vercel في [DEPLOYMENT.md](DEPLOYMENT.md).

## هيكل المشروع

```
src/
├── app/               # الصفحات، الخطوط، robots.ts، sitemap.ts
├── components/
│   ├── layout/        # Header، Footer
│   ├── sections/      # أقسام الصفحة الرئيسية (و about/)
│   ├── case-study/    # VegoCaseStudy
│   └── ui/            # SectionIntro، Tag، OutlineNumerals، ThemeToggle
├── constants/data.ts  # كل النصوص (عربي/إنجليزي) والبيانات
├── hooks/useLanguage.tsx
├── lib/               # api.ts (طلبات الاستشارة)، theme.ts (الوضع الداكن/الفاتح)
├── styles/globals.css # Tailwind و design tokens
└── types/index.ts
public/                # الصور والشعارات والأيقونات ونمط الشبكة
```

## تعديل المحتوى

- كل النصوص في `src/constants/data.ts` بصيغة `{ ar, en }`. النصوص الإنجليزية التي تنتظر المراجعة معلّمة بـ `// TODO: review EN copy`.
- الألوان والأحجام والمسافات tokens في `src/styles/globals.css`؛ استخدمها بدل القيم الثابتة.
- شرح كل مكون وبياناته في [COMPONENTS.md](COMPONENTS.md).

## نموذج التواصل

يرسل النموذج إلى `https://api.vego.sa/api/consultation-requests` (يمكن تغيير العنوان بـ `NEXT_PUBLIC_API_URL`). الحقول والردود وطريقة الاختبار في [API-INTEGRATION.md](API-INTEGRATION.md). لا ترسل طلبات اختبار إلى الـ API الحقيقي، فكل طلب ناجح يُنشئ سجلاً فعلياً.

## التواصل

contact@abdulaziz.life · +966 55 507 1670

الترخيص: راجع ملف [LICENSE](LICENSE).
