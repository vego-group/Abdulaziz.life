# توثيق المكونات (Components Documentation)

هذا الملف يشرح نظام التصميم وكل مكون في المشروع وكيفية استخدامه.
التصميم مأخوذ من ملف Figma «عبدالعزيز بورتفوليو» (عرض التصميم 1369px)، وللموقع وضعان داكن وفاتح يتبعان إعداد جهاز الزائر، وهو ثنائي اللغة (عربي RTL / إنجليزي LTR).

---

## 🎨 نظام التصميم (Design Tokens)

**المسار:** `src/styles/globals.css` (داخل `@theme` في Tailwind v4)، والخطوط في `src/app/fonts.ts`.

كل القيم معرّفة كمتغيرات CSS. القيم الأساسية هي الوضع الداكن من Figma، وقيم الوضع الفاتح (غير موجودة في Figma، ومشتقة من نفس الألوان) معرّفة مرة واحدة داخل `@variant light` في نفس الملف.

**الوضع الفاتح والداكن:**
- الموقع يتبع إعداد جهاز الزائر (`prefers-color-scheme`). زر التبديل في الشريط العلوي يحفظ اختيار الزائر في localStorage (المفتاح `color-theme`) ويضع `data-theme="light|dark"` على `<html>`.
- سكربت صغير في `<head>` (من `src/lib/theme.ts`) يطبّق الاختيار المحفوظ قبل أول عرض للصفحة، فلا يظهر الوضع الآخر للحظة.
- في الكود استخدم الـ variant ‏`light:` (مثل `light:hidden`) عند الحاجة لاختلاف بين الوضعين.
- النصوص والحدود فوق الصور تستخدم `on-media`، والنص فوق الأزرار الخضراء يستخدم `on-accent`؛ الاثنان فاتحان في الوضعين لأن الصور وطبقاتها الداكنة لا تتغير.
- الأيقونات (اللغة، الثيم، سهم القائمة) ونمط الشبكة في Vision تُعرض كـ CSS mask بلون من الـ tokens، فتتبع الوضعين بنفس ملفات Figma.

| النوع | الأمثلة | الاستخدام |
|---|---|---|
| الألوان | `ink` `card` `surface` `media` `line` `line-strong` `fg` `muted` `accent` `accent-soft` `accent-bright` `scrim` `glass` `nav` `danger` `on-media` `on-accent` `grid` | `bg-ink` ، `text-muted` ، `border-line` ، `from-scrim/65` ، `text-on-media` |
| أحجام الخط الثابتة | `text-9` … `text-22` | نصوص الواجهة الصغيرة (ارتفاع السطر الافتراضي 1.6) |
| أحجام الخط المتجاوبة | `text-24` … `text-200` | العناوين؛ تساوي قيمة Figma عند 1369px وتصغر على الشاشات الأصغر |
| المسافات | `px-gutter` (40) ، `gutter-md` (48) ، `gutter-lg` (80) ، `py-section` (100) ، `section-lg` (120) ، `section-xl` (140) ، `h-nav` (64) | متجاوبة بنفس الطريقة |
| الحاوية | `max-w-page` (1440px) | |
| الزوايا | `rounded-control` (8) ، `rounded-badge` (2) ، `rounded-submit` (1) | |
| أخرى | `tracking-label` (0.5px) ، `text-stroke` (نص محدّد بخط فقط) | |
| الحركة | `ease-out-soft` ، `animate-rise` ، `animate-settle` ، `animate-unveil` ، `animate-drop` | انظر «الحركة» أدناه |

**الحركة (غير موجودة في Figma):** هادئة (حوالي ثانية)، بمنحنى واحد `ease-out-soft` (easeOutCubic).
- انتقالات hover الافتراضية 300ms (`transition` و `transition-colors` بدون `duration-*`).
- حركات الدخول: `motion-safe:animate-rise` (صعود مع ظهور)، `animate-settle` (صورة تستقر من تكبير 1.06)، `animate-unveil` (غطاء يختفي فوق الصورة)، `animate-drop` (قائمة الموبايل). للتأخير استخدم `style={enterDelay(ms)}` من `src/lib/motion.ts`.
- الظهور مع التمرير: أضف `data-reveal` للعنصر، و`RevealObserver` (في `layout.tsx`) يتكفل بالباقي. لا تضعه على عنصر عنده `transition-*` خاص به (الرابط مثلاً) أو حدوده مشتركة مع جيرانه (خانات الشبكة)؛ لفّ المحتوى بـ `div` وضع عليه `data-reveal`.
- عدّاد الأرقام: `<CountUp value="+ 15" />` من `src/components/motion/CountUp.tsx`.
- كل ذلك يتوقف مع `prefers-reduced-motion`، ولا يُخفى شيء بدون JavaScript أو للعناصر الظاهرة عند فتح الصفحة.
- تبديل الوضع يمر بانتقال ناعم (View Transitions) في `toggleTheme`، ومدته في `globals.css`.

**الخطوط:** `font-sans` (IBM Plex Sans Arabic، الافتراضي) ، `font-display` (Instrument Sans) ، `font-mono` (DM Mono) ، `font-geist` (Geist). الخطوط اللاتينية تعود تلقائياً إلى IBM Plex Sans Arabic للحروف العربية.

**الاتجاه (RTL):** استخدم الخصائص المنطقية دائماً (`ps-*` / `pe-*` ، `ms-*` / `me-*` ، `start-*` / `end-*` ، `border-s` / `border-e`) حتى ينعكس التصميم تلقائياً في الإنجليزية.

---

## 🧩 UI Components

### SectionIntro
**المسار:** `src/components/ui/SectionIntro.tsx`

**الوصف:** افتتاحية القسم: عنوان كبير (80px) في جهة البداية وملاحظة قصيرة في الطرف الآخر أسفل العنوان. مستخدم في Expertise و Work.

```tsx
<SectionIntro heading={t(WORK.heading)} note={t(WORK.note)} />
```

**Props:**
- `heading: string` - العنوان
- `note?: string` - الملاحظة الجانبية
- `headingWidthClass?: string` - عرض العنوان (الافتراضي `max-w-[946px]`)

---

### Tag
**المسار:** `src/components/ui/Tag.tsx`

**الوصف:** وسم بإطار رفيع.

```tsx
<Tag>استشارات</Tag>
<Tag tone="overlay">تنقل</Tag>
```

**Props:**
- `children: ReactNode`
- `tone?: 'panel' | 'overlay' | 'hero'` - على اللوحات الداكنة / فوق الصور / في رأس دراسة الحالة
- `className?: string`

---

### ThemeToggle
**المسار:** `src/components/ui/ThemeToggle.tsx`

**الوصف:** زر التبديل بين الوضع الداكن والفاتح (في الشريط العلوي). يعرض الشمس (من Figma) في الوضع الداكن والقمر في الوضع الفاتح؛ التبديل بين الأيقونتين بالـ CSS فقط. المنطق في `src/lib/theme.ts`.

```tsx
<ThemeToggle className={controlClass} />
```

**Props:**
- `className?: string`

---

### OutlineNumerals
**المسار:** `src/components/ui/OutlineNumerals.tsx`

**الوصف:** الرقمان «20 / 30» بخط محدّد (زخرفي، `aria-hidden`). مستخدم في About و Vision، ويُخفى تحت 1024px.

```tsx
<OutlineNumerals className="absolute end-18 top-[108px] max-lg:hidden" />
```

**Props:**
- `className?: string` - للتموضع

---

## 🏗️ Layout Components

### Header
**المسار:** `src/components/layout/Header.tsx`

**المميزات:**
- شريط ثابت بارتفاع 64px، شفاف أعلى الصفحة ويصبح داكناً مع التمرير
- الشعار الكوفي (`public/logos/abdulaziz-mark.svg` كـ mask بلون الوضع) بمقاس 40×34px حتى تقع كل وحدة من شبكته على 2px، بدون اسم ظاهر بجانبه (الاسم موجود كنص مخفي لقارئ الشاشة)
- روابط التنقل من `NAVIGATION_ITEMS`، مع خط يمتد تحتها عند hover
- زر تبديل اللغة وزر تبديل الوضع (داكن/فاتح) وزر «احجز استشارة»
- قائمة موبايل تحت 1024px

**لا يحتاج props**

---

### Footer
**المسار:** `src/components/layout/Footer.tsx`

**المميزات:** الاسم والتعريف، روابط التنقل (`FOOTER.nav`)، روابط التواصل (لينكدإن، البريد، واتساب)، وشريط سفلي بحقوق النشر.

**لا يحتاج props**

---

## 📄 Section Components (بترتيب الصفحة الرئيسية)

| المكون | المسار | المحتوى | البيانات |
|---|---|---|---|
| HeroSection | `sections/HeroSection.tsx` | العنوان، الوصف، الأزرار، الصورة الشخصية وشارة «مقيم في» | `HERO` |
| ImpactSection | `sections/ImpactSection.tsx` | أربعة أرقام بفواصل | `IMPACT_STATS` |
| AboutSection (`#about`) | `sections/AboutSection.tsx` | العنوان والمقدمة، ثم `about/AboutBio` و `about/AboutProfileEducation` و `about/AboutSectors` | `ABOUT` ، `BIO_INFO` ، `TIMELINE` ، `SECTORS` |
| ExpertiseSection (`#expertise`) | `sections/ExpertiseSection.tsx` | أربعة مجالات خبرة وشريط «ناقش متطلباتك» | `EXPERTISE` ، `EXPERTISE_AREAS` |
| WorkSection (`#work`) | `sections/WorkSection.tsx` | مشروع VEGO المميز وخمسة صفوف مشاريع بالتناوب | `WORK` ، `WORK_PROJECTS` |
| VisionSection (`#vision`) | `sections/VisionSection.tsx` | العنوان مع الشبكة والأرقام، وأربعة محاور | `VISION` |
| VisionStripe | `sections/VisionStripe.tsx` | شريط الاقتباس | `VISION.stripeQuote` |
| InsightsSection (`#insights`) | `sections/InsightsSection.tsx` | قائمة المقالات (غير قابلة للنقر حالياً) | `INSIGHTS` |
| ContactSection (`#contact`) | `sections/ContactSection.tsx` | معلومات التواصل ونموذج الاستشارة | `CONTACT` ، `BIO_INFO` ، `CONSULTATION_TYPES` |

**ملاحظات:**
- في WorkSection يظهر رابط «عرض المشروع» فقط للمشاريع التي لها `caseStudy`.
- نموذج التواصل يرسل إلى `submitConsultationRequest` في `src/lib/api.ts` مع الحقول `fullname` ، `email` ، `consultation_type` ، `request_details`. حقل «الشركة» يُضاف في بداية `request_details` لأن الـ API لا يحتوي على حقل للشركة. الرسالة مطلوبة لأن الـ API يرفض الطلب بدونها.
- الـ API يرفض الطلبات القادمة من `localhost` (CSRF 419)، لذلك اختبر النموذج محلياً بردود وهمية (mock).

---

## 📑 دراسة الحالة (Case Study)

### VegoCaseStudy
**المسار:** `src/components/case-study/VegoCaseStudy.tsx` — الصفحة: `src/app/work/vego/page.tsx` (`/work/vego`)

**المحتوى:** الرأس، المقدمة، الفكرة، معلومات المشروع، المعرض، الخلفية، التحدي، المنهجية، النتائج، والمشروع التالي.

**البيانات:** `VEGO_CASE_STUDY` (تتضمن `meta` المستخدمة في metadata الصفحة).

---

## 🎬 الحركة (Motion)

| المكون / الملف | الوصف |
|---|---|
| `src/components/motion/RevealObserver.tsx` | مركّب مرة واحدة في `layout.tsx`. بعد التحميل يخفي عناصر `data-reveal` التي تحت الشاشة فقط، ويُظهر كل عنصر مرة واحدة عند وصوله، والعناصر التي تصل معاً تتتابع بفارق 120ms. يعمل من جديد عند الانتقال بين الصفحات |
| `src/components/motion/CountUp.tsx` | `value` (مثل `"+ 15"` أو `"2030"`) و `delay?`. يعدّ الأرقام عند الظهور ويحتفظ بالرموز والأصفار البادئة؛ السنوات تعدّ آخر 30 فقط. قارئ الشاشة يقرأ القيمة النهائية |
| `src/lib/motion.ts` | `enterDelay(ms)` لتأخير حركات الدخول، و `prefersReducedMotion()` |

---

## 🪝 Custom Hooks

### useLanguage
**المسار:** `src/hooks/useLanguage.tsx`

```tsx
const { language, toggleLanguage, t } = useLanguage();

t({ ar: 'مرحبا', en: 'Hello' }); // حسب اللغة الحالية
```

**Returns:**
- `language: 'ar' | 'en'` - اللغة الحالية (تُحفظ في localStorage وتضبط `lang` و `dir` على `<html>`)
- `toggleLanguage: () => void`
- `t: (translation: Translation) => string`

> لا يوجد hook للثيم: الوضع يُطبَّق بالـ CSS، والتبديل في `src/lib/theme.ts` (انظر «الوضع الفاتح والداكن» أعلاه).

---

## 📊 البيانات (Data)

كل النصوص في `src/constants/data.ts` بصيغة `Translation`:

```typescript
interface Translation {
  ar: string;
  en: string;
}
```

- الأسهم جزء من النص: «←» للأمام في العربية و«→» في الإنجليزية.
- النصوص الإنجليزية التي تحتاج مراجعة معلّمة بـ `// TODO: review EN copy`.
- الأنواع في `src/types/index.ts`.

---

## 🎯 كيفية إضافة قسم جديد

### 1. إنشاء المكون

```tsx
// src/components/sections/NewSection.tsx
'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { NEW_SECTION } from '@/constants/data';

export default function NewSection() {
  const { t } = useLanguage();

  return (
    <section id="new-section" className="border-t border-line">
      <div className="mx-auto max-w-page px-gutter py-section">
        <h2 className="text-80 leading-[1.338] font-bold text-fg">{t(NEW_SECTION.heading)}</h2>
      </div>
    </section>
  );
}
```

### 2. إضافة البيانات

```typescript
// src/constants/data.ts
export const NEW_SECTION = {
  heading: { ar: 'عنوان جديد', en: 'New title' },
};
```

### 3. إضافته للصفحة الرئيسية

```tsx
// src/app/page.tsx
<main>
  {/* ... */}
  <NewSection />
</main>
```

---

## 💡 نصائح

1. **استخدم الـ tokens:** لا تكتب ألواناً أو أحجاماً ثابتة؛ أضف token جديداً في `globals.css` عند الحاجة
2. **الخصائص المنطقية:** `ps/pe` و `start/end` بدلاً من `pl/pr` و `left/right` (إلا لقص الصور)
3. **فصل البيانات:** ضع النصوص في `constants/data.ts` بالعربية والإنجليزية
4. **الصور:** استخدم `next/image`، و`preload` لصورة أعلى الصفحة فقط
5. **الاختبار:** لا ترسل طلبات إلى الـ API الحقيقي أثناء الاختبار؛ استخدم ردوداً وهمية
6. **الحركة:** `data-reveal` للظهور مع التمرير و `motion-safe:` لأي حركة جديدة، وخلّها هادئة (مسافة 8–24px ومدة 0.3–1.2 ثانية)

---

**تم إنشاؤه بواسطة Claude AI 🤖**
