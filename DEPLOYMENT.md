# دليل النشر (Deployment Guide)

هذا الدليل يشرح كيفية نشر المشروع على منصات مختلفة.

---

## 🚀 النشر على Vercel (موصى به)

Vercel هي المنصة الأفضل لنشر مشاريع Next.js.

### الطريقة الأولى: عبر الموقع

1. **إنشاء حساب:**
   - اذهب إلى [vercel.com](https://vercel.com)
   - سجل دخول باستخدام GitHub

2. **رفع المشروع:**
   - اضغط "New Project"
   - اختر "Import Git Repository" أو "Upload"
   - إذا كنت تستخدم Upload، ارفع ملف ZIP

3. **الإعدادات:**
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **المتغيرات البيئية (اختياري):**
   - أضف متغيرات من ملف `.env.example` إذا لزم الأمر

5. **النشر:**
   - اضغط "Deploy"
   - انتظر حتى ينتهي (عادة 1-2 دقيقة)
   - احصل على رابط الموقع

### الطريقة الثانية: عبر CLI

```bash
# تثبيت Vercel CLI
npm install -g vercel

# تسجيل الدخول
vercel login

# النشر
vercel

# للإنتاج
vercel --prod
```

---

## 🌐 النشر على Netlify

1. **إنشاء حساب:**
   - اذهب إلى [netlify.com](https://netlify.com)
   - سجل دخول

2. **رفع المشروع:**
   - اضغط "Add new site"
   - اختر "Deploy manually"
   - اسحب مجلد `.next` بعد تشغيل `npm run build`

3. **الإعدادات:**
   - Build command: `npm run build`
   - Publish directory: `.next`

---

## ☁️ النشر على AWS Amplify

1. **إنشاء حساب AWS**

2. **فتح AWS Amplify:**
   - اذهب إلى AWS Console
   - ابحث عن Amplify
   - اضغط "New app"

3. **رفع المشروع:**
   - اختر "Deploy without Git provider"
   - ارفع ملف ZIP

4. **الإعدادات:**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
   ```

---

## 🐳 النشر باستخدام Docker

### إنشاء Dockerfile

```dockerfile
FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### البناء والتشغيل

```bash
# بناء الصورة
docker build -t abdulaziz-portfolio .

# تشغيل الحاوية
docker run -p 3000:3000 abdulaziz-portfolio
```

---

## 🔧 إعداد Domain مخصص

### على Vercel

1. اذهب إلى Project Settings
2. اختر "Domains"
3. أضف Domain الخاص بك
4. اتبع التعليمات لإعداد DNS

### DNS Settings

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 📊 مراقبة الأداء

### Vercel Analytics

```bash
npm install @vercel/analytics
```

```tsx
// في app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Google Analytics

```tsx
// components/GoogleAnalytics.tsx
import Script from 'next/script';

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
```

---

## ✅ قائمة التحقق قبل النشر

- [ ] تشغيل `npm run build` محلياً والتأكد من عدم وجود أخطاء
- [ ] اختبار جميع الروابط
- [ ] التأكد من عمل تبديل اللغة
- [ ] التأكد من عمل الثيم الداكن
- [ ] اختبار النموذج
- [ ] التأكد من تحميل الصور بشكل صحيح
- [ ] اختبار على موبايل
- [ ] إضافة favicon.ico
- [ ] إضافة robots.txt
- [ ] إضافة sitemap.xml
- [ ] تحديث metadata في layout.tsx
- [ ] إعداد Google Analytics (اختياري)
- [ ] إعداد Domain مخصص (اختياري)

---

## 🔒 الأمان

### Headers الأمان

```ts
// في next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

---

## 📈 تحسين الأداء

### Image Optimization

الصور محسنة تلقائياً بواسطة Next.js Image component.

### Font Optimization

الخطوط محمّلة من Google Fonts مع optimization.

### Code Splitting

Next.js يقوم بـ code splitting تلقائياً.

---

## 🆘 المساعدة

إذا واجهت مشاكل في النشر:

1. راجع سجلات البناء (Build Logs)
2. تأكد من إصدار Node.js (18+)
3. تأكد من تثبيت جميع dependencies
4. تحقق من ملف `.env` إذا كنت تستخدم متغيرات بيئية

---

**بالتوفيق في النشر! 🚀**
