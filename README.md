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
├── app/               # الصفحات، الخطوط، robots.ts، sitemap.ts، manifest.ts، الأيقونات وصورة المشاركة
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

## الشعار والأيقونات وصورة المشاركة

| الملف | الاستخدام |
|---|---|
| `public/logos/abdulaziz-mark.svg` | الأصل: «عبدالعزيز» بالخط الكوفي المربع على شبكة 20×17 وحدة (الخطوط وحدتان والفراغات وحدة). كل الأيقونات مأخوذة منه، وأيقونات الشاشة الرئيسية (آيفون وأندرويد) على مربع أخضر لأن الأنظمة لا تقبل خلفية شفافة |
| `src/app/icon.svg` | أيقونة التاب: الشعار بالأخضر بدون خلفية (`--color-accent`)، ويصبح `--color-accent-bright` حين يكون المتصفح داكناً |
| `src/app/favicon.ico` | 16 و 32 و 48 بكسل، للمتصفحات التي لا تدعم SVG |
| `src/app/apple-icon.png` | 180×180 للآيفون، بدون زوايا مدورة (iOS يدوّرها) |
| `public/app-icons/` | 192 و 512 و 512 maskable لأندرويد، معرّفة في `src/app/manifest.ts` |
| `src/app/opengraph-image.jpg` | 1200×630، تظهر عند مشاركة الرابط (واتساب، لينكدإن، X). النص البديل في `opengraph-image.alt.txt` |

عند تصدير مقاس جديد: اجعل وحدة الشبكة عدداً كاملاً من البكسل (1px عند 32، 2px عند 48، 6px عند 180 و 192، 16px عند 512، 14px لـ maskable) حتى تبقى الحواف حادة. صورة المشاركة ملف ثابت لأن مولّد الصور في Next (`next/og`) يعكس ترتيب الكلمات العربية.

## تعديل المحتوى

- كل النصوص في `src/constants/data.ts` بصيغة `{ ar, en }`. النصوص الإنجليزية التي تنتظر المراجعة معلّمة بـ `// TODO: review EN copy`.
- الألوان والأحجام والمسافات tokens في `src/styles/globals.css`؛ استخدمها بدل القيم الثابتة.
- شرح كل مكون وبياناته في [COMPONENTS.md](COMPONENTS.md).

## نموذج التواصل

يرسل النموذج إلى `https://api.vego.sa/api/consultation-requests` (يمكن تغيير العنوان بـ `NEXT_PUBLIC_API_URL`). الحقول والردود وطريقة الاختبار في [API-INTEGRATION.md](API-INTEGRATION.md). لا ترسل طلبات اختبار إلى الـ API الحقيقي، فكل طلب ناجح يُنشئ سجلاً فعلياً.

## التواصل

contact@abdulaziz.life · +966 55 507 1670

الترخيص: راجع ملف [LICENSE](LICENSE).
