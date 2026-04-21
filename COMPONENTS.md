# توثيق المكونات (Components Documentation)

هذا الملف يشرح كل مكون في المشروع وكيفية استخدامه.

---

## 🎨 UI Components

### MaterialIcon
**المسار:** `src/components/ui/MaterialIcon.tsx`

**الوصف:** مكون لعرض أيقونات Google Material Symbols

**الاستخدام:**
```tsx
<MaterialIcon icon="home" className="text-gold" />
<MaterialIcon icon="mail" filled={true} />
```

**Props:**
- `icon: string` - اسم الأيقونة
- `className?: string` - فئات CSS إضافية
- `filled?: boolean` - إذا كانت الأيقونة مملوءة

---

## 🏗️ Layout Components

### Header
**المسار:** `src/components/layout/Header.tsx`

**الوصف:** رأس الصفحة مع القائمة والأزرار

**المميزات:**
- قائمة التنقل الرئيسية
- زر تبديل اللغة
- زر تبديل الثيم
- زر حجز استشارة
- قائمة موبايل متجاوبة

**لا يحتاج props**

---

### Footer
**المسار:** `src/components/layout/Footer.tsx`

**الوصف:** تذييل الصفحة

**المميزات:**
- الشعار
- حقوق النشر
- روابط التنقل
- أزرار التواصل

**لا يحتاج props**

---

## 📄 Section Components

### HeroSection
**المسار:** `src/components/sections/HeroSection.tsx`

**الوصف:** القسم البطل في أعلى الصفحة

**المحتوى:**
- Badge (شارة رؤية 2030)
- العنوان الرئيسي
- الوصف
- أزرار Call-to-Action
- الصورة الشخصية
- شريط المهارات

---

### AboutSection
**المسار:** `src/components/sections/AboutSection.tsx`

**الوصف:** قسم "نبذة عني"

**المحتوى:**
- نص تعريفي
- المعلومات الشخصية (Bio Grid)
- Timeline التعليم
- شارات اللغات
- بطاقات الإحصائيات

---

### ServicesSection
**المسار:** `src/components/sections/ServicesSection.tsx`

**الوصف:** قسم الخدمات الاستشارية

**المحتوى:**
- شبكة من بطاقات الخدمات
- كل بطاقة تحتوي على:
  - أيقونة
  - عنوان
  - وصف

**البيانات:** من `SERVICES` في `src/constants/data.ts`

---

### ProjectsSection
**المسار:** `src/components/sections/ProjectsSection.tsx`

**الوصف:** قسم المشاريع

**المحتوى:**
- مشروع مميز (Featured Project)
  - صورة كبيرة
  - شعار
  - وصف مفصل
  - Tags
  - رابط المشروع
- مشاريع ثانوية (Grid)
  - صورة
  - عنوان
  - وصف مختصر

**البيانات:** من `PROJECTS` في `src/constants/data.ts`

---

### ContactSection
**المسار:** `src/components/sections/ContactSection.tsx`

**الوصف:** قسم التواصل

**المحتوى:**
- بطاقة معلومات التواصل
  - الموقع
  - البريد الإلكتروني
  - الهاتف
  - روابط السوشيال ميديا
- نموذج حجز استشارة
  - الاسم الكامل
  - البريد الإلكتروني
  - نوع الاستشارة
  - تفاصيل الطلب

**المميزات:**
- Form validation
- رسالة نجاح بعد الإرسال
- تفريغ النموذج تلقائياً

---

## 🪝 Custom Hooks

### useLanguage
**المسار:** `src/hooks/useLanguage.tsx`

**الوصف:** Hook لإدارة اللغة

**الاستخدام:**
```tsx
const { language, toggleLanguage, t } = useLanguage();

// قراءة اللغة الحالية
console.log(language); // 'ar' or 'en'

// تبديل اللغة
<button onClick={toggleLanguage}>تبديل</button>

// ترجمة نص
const text = t({ ar: 'مرحبا', en: 'Hello' });
```

**Returns:**
- `language: 'ar' | 'en'` - اللغة الحالية
- `toggleLanguage: () => void` - دالة تبديل اللغة
- `t: (translation: Translation) => string` - دالة الترجمة

---

### useTheme
**المسار:** `src/hooks/useTheme.tsx`

**الوصف:** Hook لإدارة الثيم (فاتح/داكن)

**الاستخدام:**
```tsx
const { theme, toggleTheme } = useTheme();

// قراءة الثيم الحالي
console.log(theme); // 'light' or 'dark'

// تبديل الثيم
<button onClick={toggleTheme}>
  {theme === 'dark' ? '🌞' : '🌙'}
</button>
```

**Returns:**
- `theme: 'light' | 'dark'` - الثيم الحالي
- `toggleTheme: () => void` - دالة تبديل الثيم

---

## 📊 Data Structure

### Translation Object
```typescript
interface Translation {
  ar: string;
  en: string;
}
```

**مثال:**
```typescript
const title: Translation = {
  ar: 'مرحباً',
  en: 'Hello'
};
```

---

## 🎯 كيفية إضافة مكون جديد

### 1. إنشاء المكون

```tsx
// src/components/sections/NewSection.tsx
'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function NewSection() {
  const { language, t } = useLanguage();
  
  return (
    <section className="py-20" id="new-section">
      <div className="container">
        <h2>{language === 'ar' ? 'عنوان جديد' : 'New Title'}</h2>
      </div>
    </section>
  );
}
```

### 2. إضافته للصفحة الرئيسية

```tsx
// src/app/page.tsx
import NewSection from '@/components/sections/NewSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ... */}
        <NewSection />
      </main>
      <Footer />
    </>
  );
}
```

### 3. إضافة البيانات (اختياري)

```typescript
// src/constants/data.ts
export const NEW_DATA = [
  {
    title: { ar: 'عنوان', en: 'Title' },
    description: { ar: 'وصف', en: 'Description' }
  }
];
```

---

## 💡 نصائح

1. **استخدم TypeScript:** لتجنب الأخطاء
2. **فصل البيانات:** ضع البيانات في `constants/data.ts`
3. **استخدم Hooks:** لإعادة استخدام المنطق
4. **Component-Based:** كل قسم مكون مستقل
5. **Clean Code:** اكتب كود نظيف وقابل للقراءة

---

**تم إنشاؤه بواسطة Claude AI 🤖**
