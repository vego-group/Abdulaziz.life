# دليل النشر (Deployment)

الموقع يُنشر على Vercel مباشرة من مستودع GitHub `vego-group/Abdulaziz.life`. كل push يُنشر تلقائياً، ولا حاجة لرفع أي ملفات يدوياً.

---

## كيف يعمل النشر

| الحدث | النتيجة |
|---|---|
| push إلى أي فرع غير `main`، أو فتح Pull Request | **Preview deployment** برابط خاص (`*.vercel.app`) يظهر في الـ PR |
| الدمج (merge) في `main` | **Production deployment** على `www.abdulaziz.life` |

---

## خطوات العمل المعتادة

1. اعمل على فرع جديد:
   ```bash
   git checkout -b feature/اسم-التغيير
   ```
2. قبل الـ push تأكد أن كل شيء يعمل:
   ```bash
   npm run lint
   npm run build
   ```
3. ارفع الفرع وافتح Pull Request إلى `main`:
   ```bash
   git push -u origin feature/اسم-التغيير
   ```
4. راجع رابط الـ Preview الذي يضيفه Vercel إلى الـ PR.
5. بعد الموافقة ادمج في `main`، فينشر Vercel نسخة الإنتاج تلقائياً.

**الرجوع لإصدار سابق:** Vercel ← Deployments ← اختر نشراً سابقاً ← **Promote to Production**.

---

## إعداد المشروع على Vercel (مرة واحدة)

1. Vercel ← **Add New** ← **Project** ← استورد `vego-group/Abdulaziz.life` من GitHub.
2. **Framework Preset:** Next.js (يُكتشف تلقائياً). **Root Directory:** `./`.
3. **Install Command:** `npm ci`. المستودع يحتوي على `package-lock.json` و `pnpm-lock.yaml` معاً، وتحديد الأمر يضمن استخدام npm.
4. **Node.js Version** (Settings ← Build and Deployment): ‎20.x أو أحدث، لأن Next.js 16 يتطلب ‎20.9 على الأقل.
5. **Production Branch** (Settings ← Git): `main`.
6. **Domains:** أضف `www.abdulaziz.life` كنطاق أساسي، واجعل `abdulaziz.life` يحوّل إليه، لأن `robots.ts` و `sitemap.ts` يستخدمان `https://www.abdulaziz.life`. أضف سجلات DNS كما يعرضها Vercel.

---

## المتغيرات البيئية

تُضاف من Settings ← **Environment Variables**:

| المتغير | القيمة | الاستخدام |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | اختياري؛ الافتراضي `https://api.vego.sa/api` | عنوان API نموذج التواصل |

- كل متغير يُحدَّد لبيئة أو أكثر: **Production** و **Preview** و **Development**.
- متغيرات `NEXT_PUBLIC_` تُضمَّن في الكود وقت البناء، لذلك أي تغيير عليها يحتاج **Redeploy**.
- **تنبيه:** إذا لم يُضبط `NEXT_PUBLIC_API_URL` لبيئة Preview، فنسخ الـ Preview تستخدم الـ API الحقيقي. الـ API يرفض الطلبات القادمة من `localhost` فقط (حسب ما اختُبر)، لذلك يُرجَّح أن أي إرسال للنموذج من رابط Preview ينشئ سجلاً حقيقياً عند فريق VEGO. لا ترسل النموذج من الـ Preview بدون تنسيق، أو اضبط المتغير لبيئة Preview على خادم تجريبي.

---

## قائمة التحقق قبل الدمج في `main`

- [ ] `npm run lint` بدون أخطاء و `npm run build` ينجح
- [ ] رابط الـ Preview: `/` و `/work/vego` بالعربية والإنجليزية، على الجوال وسطح المكتب
- [ ] `/robots.txt` و `/sitemap.xml` يعملان
- [ ] لم يُرسل النموذج ببيانات تجريبية إلى الـ API الحقيقي

---

## حل المشاكل

- **فشل البناء على Vercel:** راجع Build Logs في صفحة الـ Deployment، وشغّل `npm run build` محلياً لإعادة الخطأ.
- **تغيير متغير بيئي لا يظهر:** أعد النشر (Redeploy)، فالقيم تُضمَّن وقت البناء.
- **الخطوط:** البناء يحمّل خطوط Google عبر `next/font`، ويحتاج اتصالاً بالإنترنت (متوفر على Vercel).
