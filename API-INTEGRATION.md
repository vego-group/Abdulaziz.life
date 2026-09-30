# ربط نموذج التواصل بالـ API

نموذج «أخبرني ما الذي تبنيه» في قسم التواصل يرسل طلب استشارة إلى الـ backend.

---

## الـ Endpoint

```
POST https://api.vego.sa/api/consultation-requests
Content-Type: application/json
Accept: application/json
```

العنوان الأساسي يأتي من `NEXT_PUBLIC_API_URL`، والافتراضي `https://api.vego.sa/api` (انظر `src/lib/api.ts`).

---

## جسم الطلب

```json
{
  "fullname": "اسم المرسل",
  "email": "name@example.com",
  "consultation_type": "إنشاء الشركات",
  "request_details": "الشركة: اسم الشركة\n\nنص الرسالة"
}
```

| الحقل | من النموذج |
|---|---|
| `fullname` | الاسم الكامل |
| `email` | البريد الإلكتروني |
| `consultation_type` | «ما الذي تودّ مناقشته؟»؛ القيمة هي اسم الموضوع بلغة الصفحة الحالية (من `CONSULTATION_TYPES`) |
| `request_details` | الرسالة. إذا كُتب اسم الشركة يُضاف في البداية (`الشركة: …` أو `Company: …`) لأن الـ API لا يحتوي على حقل للشركة |

---

## التحقق قبل الإرسال

في `validateConsultationRequest` (`src/lib/api.ts`)، إضافة إلى `required` في النموذج:
- الاسم: حرفان على الأقل
- البريد: صيغة صحيحة
- الموضوع: مطلوب
- الرسالة: مطلوبة (الـ API يرفض الطلب بدونها)

---

## ردود الـ API

**نجاح — 201**
```json
{
  "status": "success",
  "message": "Consultation request submitted successfully",
  "data": { "fullname": "…", "email": "…", "consultation_type": "…", "request_details": "…", "created_at": "…", "updated_at": "…" }
}
```

**بيانات غير صحيحة — 422**
```json
{
  "message": "Please provide a valid email address. (and 1 more error)",
  "errors": { "email": ["Please provide a valid email address."], "request_details": ["The request details field is required."] }
}
```

**طلب من localhost — 419**
```json
{ "message": "CSRF token mismatch." }
```
الـ backend (Laravel Sanctum) يعامل `localhost` كواجهة أمامية تتطلب CSRF، بينما الطلبات من `abdulaziz.life` لا تتأثر. لذلك لا يعمل الإرسال الحقيقي من بيئة التطوير المحلية إلا إذا غيّر فريق الـ backend هذا الإعداد.

**CORS:** الـ API يرد بـ `Access-Control-Allow-Origin: *`.

---

## سلوك الواجهة

`src/components/sections/ContactSection.tsx`:
- أثناء الإرسال: يتعطل الزر ويظهر «جارٍ الإرسال...».
- النجاح: تظهر «تم إرسال طلبك بنجاح!» تحت الزر ويُفرَّغ النموذج.
- الفشل: تظهر رسالة خطأ واضحة وتبقى البيانات المدخلة. تفاصيل الخطأ التقنية تُسجَّل في console فقط.

---

## الاختبار

لا ترسل طلبات اختبار إلى الـ API الحقيقي: كل طلب ناجح يُنشئ سجلاً فعلياً عند فريق VEGO. اختبر بخادم وهمي محلي بدلاً من ذلك:

```js
// mock-api.mjs — شغّله بـ: node mock-api.mjs
import { createServer } from 'node:http';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'content-type,accept',
  'Access-Control-Allow-Methods': 'POST',
};

createServer((req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, cors);
    return res.end();
  }
  let body = '';
  req.on('data', (chunk) => (body += chunk));
  req.on('end', () => {
    console.log(JSON.parse(body || '{}')); // الحقول كما أرسلها النموذج
    res.writeHead(201, { ...cors, 'Content-Type': 'application/json' }); // غيّر إلى 500 لاختبار حالة الخطأ
    res.end(JSON.stringify({ status: 'success', message: 'Mock: request received' }));
  });
}).listen(4000);
```

ثم ضع `NEXT_PUBLIC_API_URL=http://localhost:4000/api` في `.env.local` وأعد تشغيل `npm run dev`. لا تضف `mock-api.mjs` إلى المستودع.
