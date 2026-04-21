
# عبدالعزيز السبيعي - Portfolio Website

موقع شخصي احترافي مبني بـ Next.js و TypeScript مع دعم كامل للغة العربية والإنجليزية.

## 🚀 التقنيات المستخدمة

- **Next.js 15** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling (مع CSS مخصص للتصميم الكامل)
- **Context API** - إدارة الحالة (اللغة والثيم)
- **Font Awesome** - الأيقونات
- **Google Fonts** - الخطوط (Cairo, Tajawal, Inter)
- **Material Symbols** - أيقونات Google

## 📁 هيكل المشروع

```
abdulaziz-portfolio/
├── src/
│   ├── app/                    # Next.js App Directory
│   │   ├── layout.tsx         # Root Layout
│   │   └── page.tsx           # الصفحة الرئيسية
│   ├── components/
│   │   ├── layout/            # مكونات التخطيط
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/          # أقسام الصفحة
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/                # مكونات UI قابلة لإعادة الاستخدام
│   │       └── MaterialIcon.tsx
│   ├── hooks/                 # Custom Hooks
│   │   ├── useLanguage.tsx   # إدارة اللغة
│   │   └── useTheme.tsx      # إدارة الثيم
│   ├── constants/             # البيانات الثابتة
│   │   └── data.ts
│   ├── types/                 # TypeScript Types
│   │   └── index.ts
│   └── styles/                # ملفات الأنماط
│       └── globals.css
├── public/
│   └── images/                # الصور
└── package.json
```

## 🎨 المميزات

### ✅ دعم متعدد اللغات
- تبديل سلس بين العربية والإنجليزية
- حفظ تفضيل اللغة في localStorage
- تبديل اتجاه الصفحة (RTL/LTR) تلقائياً

### ✅ الوضع الداكن/الفاتح
- تبديل بين الثيمات
- حفظ التفضيل في localStorage
- انتقالات سلسة

### ✅ تصميم متجاوب
- يعمل على جميع الأجهزة
- قائمة موبايل منفصلة
- تجربة مستخدم محسنة

### ✅ أقسام متكاملة
1. **Hero** - قسم البطل مع صورة شخصية
2. **About** - نبذة تعريفية، Timeline التعليم، الإحصائيات
3. **Services** - الخدمات الاستشارية
4. **Projects** - المشاريع (مشروع مميز + مشاريع ثانوية)
5. **Contact** - نموذج التواصل

### ✅ أفضل الممارسات
- **TypeScript** للتحقق من الأنواع
- **Component-Based** architecture
- **Custom Hooks** لإعادة استخدام المنطق
- **Separation of Concerns** - فصل البيانات عن العرض
- **Clean Code** - كود نظيف وقابل للصيانة

## 🚀 التشغيل

### التثبيت

```bash
npm install
```

### التشغيل في وضع التطوير

```bash
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000) في المتصفح.

### البناء للإنتاج

```bash
npm run build
npm start
```

## 📝 إضافة الصور

ضع الصور التالية في مجلد `public/images/`:

1. `abdulaziz.png` - الصورة الشخصية
2. `vego-group.webp` - صورة مشروع فيجو
3. `digital-real-estate.jpg` - صورة مشروع العقارات
4. `energy-efficiency-industry.jpg` - صورة مشروع الطاقة

## 🔧 التخصيص

### تعديل البيانات
جميع البيانات موجودة في ملف واحد: `src/constants/data.ts`

### تعديل الألوان
الألوان محددة في CSS Variables في `src/styles/globals.css`:

```css
:root {
  --gold: #C6A15B;
  --gold-light: #F5E6CA;
  --surface: #fef9f1;
  /* ... */
}
```

### إضافة قسم جديد
1. أنشئ مكون جديد في `src/components/sections/`
2. أضفه إلى `src/app/page.tsx`
3. أضف البيانات في `src/constants/data.ts`

## 📦 النشر

يمكن نشر المشروع على:
- **Vercel** (موصى به لـ Next.js)
- **Netlify**
- **AWS Amplify**
- أي خدمة استضافة تدعم Next.js

### Vercel
```bash
npm install -g vercel
vercel
```

## 🤝 المساهمة

هذا مشروع شخصي، لكن اقتراحاتك مرحب بها!

## 📄 الترخيص

جميع الحقوق محفوظة © 2024 عبدالعزيز السبيعي

## 📧 التواصل

- **البريد الإلكتروني:** contact@abdulaziz.life
- **الهاتف:** +966 55 507 1670
- **الموقع:** [vego.sa](https://www.vego.sa/)

---

تم البناء بـ ❤️ باستخدام Next.js و TypeScript

