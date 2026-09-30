# دليل التثبيت والتشغيل

## المتطلبات

- Node.js 20.9 أو أحدث (الحد الأدنى لـ Next.js 16)
- npm (المشروع يستخدم `package-lock.json`)
- اتصال بالإنترنت عند البناء: `next/font` يحمّل خطوط Google ويستضيفها مع الموقع

---

## الخطوات

### 1. تثبيت المكتبات
```bash
npm install
```

### 2. إعداد عنوان الـ API (اختياري)
النموذج يستخدم `https://api.vego.sa/api` افتراضياً. لتغييره أنشئ ملف `.env.local` في جذر المشروع:
```bash
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```
أعد تشغيل `npm run dev` بعد أي تغيير، لأن المتغير يُضمَّن عند التشغيل.

### 3. التشغيل
```bash
npm run dev
```
ثم افتح [http://localhost:3000](http://localhost:3000).

---

## الأوامر

| الأمر | الوظيفة |
|---|---|
| `npm run dev` | خادم التطوير (Turbopack) |
| `npm run lint` | فحص ESLint |
| `npm run build` | بناء نسخة الإنتاج |
| `npm start` | تشغيل نسخة الإنتاج بعد البناء |

---

## النشر

```bash
npm run build
npm start
```

أو على Vercel: استورد المستودع من [vercel.com](https://vercel.com)، وأضف `NEXT_PUBLIC_API_URL` في إعدادات البيئة إذا كان العنوان مختلفاً.

قبل النشر:
- [ ] `npm run lint` بدون أخطاء
- [ ] `npm run build` ينجح
- [ ] الصفحتان `/` و `/work/vego` تعملان بالعربية والإنجليزية
- [ ] `/robots.txt` و `/sitemap.xml` يعملان

---

## حل المشاكل الشائعة

**`npm install` لا يعمل**
```bash
rm -rf node_modules package-lock.json
npm install
```

**فشل البناء عند تحميل الخطوط**
تأكد من الاتصال بالإنترنت؛ `next/font/google` يحمّل الخطوط أثناء البناء.

**النموذج يعرض رسالة خطأ عند الإرسال محلياً**
هذا متوقع: الـ API يرفض الطلبات القادمة من `localhost` (CSRF، رمز 419). اختبر النموذج بخادم وهمي كما في [API-INTEGRATION.md](API-INTEGRATION.md).

**خطأ في TypeScript**
```bash
npx tsc --noEmit
```
يعرض الأخطاء بالتفصيل.
