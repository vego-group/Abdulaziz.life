# Changelog - سجل التغييرات

جميع التغييرات المهمة في هذا المشروع سيتم توثيقها في هذا الملف.

---

## [2.2.0] - 2026-10-01 — الحركة

### ✨ الجديد
- دخول قسم Hero عند فتح الصفحة: كلمات العنوان تظهر واحدة بعد الأخرى، ثم الوصف والأزرار وشارة «مقيم في»، والصورة تستقر بتكبير خفيف. نفس الدخول في رأس صفحة فيجو
- ظهور المحتوى مع التمرير (`data-reveal`): صعود 24px مع ظهور تدريجي خلال 1.1 ثانية، والعناصر التي تظهر معاً تتتابع
- أرقام قسم Impact تعدّ حتى قيمتها عند ظهورها
- تفاعلات hover: خط يمتد تحت روابط الشريط العلوي، تكبير خفيف لصور المشاريع، سهم «عرض المشروع» يتحرك باتجاهه، صفوف الخبرات (خط جانبي ورقم ملوّن ونص أوضح)، دوران خفيف لأيقونة الوضع، وتكبير صورة «المشروع التالي» في فيجو
- انتقال ناعم بين الوضعين الداكن والفاتح عند الضغط على زر التبديل (View Transitions)
- قائمة الموبايل تنزل بحركة قصيرة عند فتحها

### 🔄 التغييرات
- كل انتقالات hover أصبحت 300ms بمنحنى واحد هادئ (`--default-transition-duration` و `--ease-out-soft`)
- كل الحركة تتوقف عند تفعيل «تقليل الحركة» في جهاز الزائر، ولا يُخفى أي محتوى بدون JavaScript

---

## [2.1.0] - 2026-10-01 — الوضع الفاتح

### ✨ الجديد
- وضع فاتح مشتق من ألوان التصميم (غير موجود في Figma): خلفية `#f3f4f1` ونص `#121615` مع نفس اللون الأخضر، وكل النصوص تحقق تباين WCAG AA
- الموقع يتبع إعداد جهاز الزائر (`prefers-color-scheme`) تلقائياً
- زر تبديل الوضع رجع في الشريط العلوي (مكانه في Figma)، ويحفظ اختيار الزائر (`color-theme` في localStorage) ويطبّقه قبل أول عرض للصفحة
- أيقونة قمر للوضع الفاتح بنفس أسلوب أيقونة الشمس من Figma
- `theme-color` و `color-scheme` للمتصفح حسب الوضع

### 🔄 التغييرات
- النصوص فوق الصور (`on-media`) وفوق الأزرار الخضراء (`on-accent`) تبقى فاتحة في الوضعين
- أيقونات اللغة والثيم وسهم القائمة، ونمط الشبكة في قسم الرؤية، تُعرض كـ CSS mask بلون من الـ tokens لتتبع الوضعين

---

## [2.0.0] - 2026-09-30 — إعادة التصميم

### ✨ الجديد
- تصميم جديد بالكامل من ملف Figma «عبدالعزيز بورتفوليو»: واجهة داكنة بلون أخضر مميز، وخطوط IBM Plex Sans Arabic و Instrument Sans و DM Mono و Geist عبر `next/font`
- design tokens (الألوان، أحجام الخط المتجاوبة، المسافات، الزوايا) في `@theme` الخاص بـ Tailwind v4 داخل `src/styles/globals.css`
- أقسام الصفحة الرئيسية: Hero، Impact، About (السيرة، الملف الشخصي والتعليم، القطاعات)، Expertise، Work، Vision، شريط الاقتباس، Insights، Contact، Footer
- صفحة دراسة حالة فيجو `/work/vego` مع metadata خاصة
- مكونات UI جديدة: SectionIntro و Tag و OutlineNumerals
- `/sitemap.xml` عبر `src/app/sitemap.ts`
- نموذج التواصل: حقل الشركة (يُضاف إلى `request_details`)، واختيار الموضوع والرسالة إلزاميان

### 🔄 التغييرات
- الموقع داكن فقط حالياً؛ حُذف زر تبديل الثيم و `useTheme`، والألوان متغيرات CSS لإضافة ثيم فاتح لاحقاً
- روابط التنقل بترتيب الصفحة: نبذة، الخبرات، الأعمال، المقالات، تواصل
- الشريط العلوي ثابت: شفاف أعلى الصفحة وداكن مع التمرير
- `useLanguage` يقرأ اللغة المحفوظة عبر `useSyncExternalStore`
- رسائل الخطأ في النموذج واضحة باللغتين بدل أخطاء الشبكة التقنية

### 🗑️ المحذوف
- ServicesSection و ProjectsSection و MaterialIcon، والأنماط القديمة (الذهبي والكريمي)، وروابط Font Awesome و Material Symbols، وخطوط Cairo و Tajawal و Inter
- الصور غير المستخدمة، وملفات SVG الافتراضية من create-next-app، و `public/robots.txt` المكرر
- `pnpm-lock.yaml`: المشروع يستخدم npm و `package-lock.json` فقط
- ملفات التوثيق القديمة: START-HERE.md و PROJECT-SUMMARY.md و QUICK-START.md

### 🐛 الإصلاحات
- Tailwind v4 لم يكن يولّد الـ utilities بسبب توجيهات v3 في `globals.css`
- `/robots.txt` كان يعيد خطأ 500 في وضع التطوير (تعارض بين `public/robots.txt` و `app/robots.ts`)
- `/sitemap.xml` المشار إليه في robots لم يكن موجوداً
- الـ API يرفض الطلبات بدون `request_details`؛ أصبحت الرسالة إلزامية في النموذج
- تحذير hydration بسبب إضافات المتصفح على `<body>`
- أخطاء lint في `api.ts` (`any`) و `useLanguage` (setState داخل effect)

### 📝 التوثيق
- تحديث README و INSTALLATION و API-INTEGRATION و DEPLOYMENT و COMPONENTS
- النصوص الإنجليزية المكتوبة أثناء إعادة التصميم معلّمة بـ `// TODO: review EN copy` بانتظار المراجعة

---

## [1.0.0] - 2024-12-20

### ✨ الإضافات الرئيسية

#### 🏗️ البنية الأساسية
- ✅ تم إنشاء المشروع باستخدام Next.js 15 و TypeScript
- ✅ إعداد Tailwind CSS مع CSS مخصص
- ✅ هيكلة احترافية للمجلدات والملفات
- ✅ إعداد TypeScript بشكل كامل

#### 🎨 المكونات (Components)
- ✅ Header - رأس الصفحة مع القائمة
- ✅ Footer - تذييل الصفحة
- ✅ HeroSection - القسم البطل
- ✅ AboutSection - قسم نبذة عني
- ✅ ServicesSection - قسم الخدمات
- ✅ ProjectsSection - قسم المشاريع
- ✅ ContactSection - قسم التواصل
- ✅ MaterialIcon - مكون الأيقونات

#### 🪝 Custom Hooks
- ✅ useLanguage - إدارة اللغة (عربي/إنجليزي)
- ✅ useTheme - إدارة الثيم (فاتح/داكن)

#### 🌍 المميزات
- ✅ دعم كامل للغة العربية والإنجليزية
- ✅ تبديل سلس بين RTL و LTR
- ✅ الوضع الداكن والفاتح
- ✅ حفظ التفضيلات في localStorage
- ✅ تصميم متجاوب بالكامل
- ✅ قائمة موبايل منفصلة
- ✅ أنيميشن سلسة

#### 📊 إدارة البيانات
- ✅ فصل كامل بين البيانات والعرض
- ✅ جميع البيانات في ملف constants/data.ts
- ✅ Types محددة بدقة
- ✅ سهولة التعديل والتخصيص

#### 🎯 الأقسام
1. **Hero** - قسم البطل مع صورة شخصية وأزرار CTA
2. **About** - نبذة تعريفية + Timeline + إحصائيات
3. **Services** - 5 خدمات استشارية
4. **Projects** - مشروع مميز + مشروعين إضافيين
5. **Contact** - معلومات التواصل + نموذج

#### 📱 التجاوب
- ✅ Desktop (1024px+)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (< 768px)

#### 🎨 التصميم
- ✅ نظام ألوان ذهبي أنيق
- ✅ خطوط Cairo و Tajawal للعربية
- ✅ خط Inter للإنجليزية
- ✅ Material Symbols للأيقونات
- ✅ Font Awesome للسوشيال ميديا

#### 📝 التوثيق
- ✅ README.md شامل
- ✅ INSTALLATION.md - دليل التثبيت
- ✅ COMPONENTS.md - توثيق المكونات
- ✅ تعليقات في الكود

#### ⚡ الأداء
- ✅ Next.js Image Optimization
- ✅ Static Site Generation
- ✅ Code Splitting تلقائي
- ✅ CSS مُحسّن

#### 🔒 الأمان
- ✅ TypeScript للتحقق من الأنواع
- ✅ ESLint configuration
- ✅ .gitignore محدّث

---

## [المخطط للإصدارات القادمة]

### 🔜 الإصدار 1.1.0
- [ ] إضافة Blog Section
- [ ] نظام إدارة المحتوى (CMS)
- [ ] تحسينات SEO إضافية
- [ ] Google Analytics Integration
- [ ] Form Backend Integration
- [ ] Email Notifications

### 🔮 الإصدار 2.0.0
- [ ] Admin Dashboard
- [ ] Multi-language Support (أكثر من لغتين)
- [ ] Animation Library (Framer Motion)
- [ ] Progressive Web App (PWA)
- [ ] Advanced Performance Optimization

---

## 🐛 الإصلاحات

لم يتم اكتشاف أخطاء حتى الآن.

---

## 📊 الإحصائيات

- **عدد المكونات:** 13
- **عدد الأقسام:** 5
- **اللغات المدعومة:** 2 (العربية والإنجليزية)
- **حجم المشروع:** ~500 KB (بدون node_modules)
- **عدد الأسطر:** ~3000+ سطر

---

## 🙏 شكر خاص

- Next.js Team
- Tailwind CSS Team
- TypeScript Team
- Google Fonts & Material Icons

---

**تم بناء هذا المشروع بـ ❤️ باستخدام Claude AI**
