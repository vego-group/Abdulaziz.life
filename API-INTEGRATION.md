# API Integration Guide

## 📡 ربط النموذج بالـ Backend API

تم ربط نموذج "حجز استشارة" بالـ API الخاص بك بنجاح!

---

## 🔗 API Endpoint

```
POST https://api.vego.sa/api/consultation-requests
```

---

## 📤 Request Body

```json
{
  "fullname": "John Doe",
  "email": "john@example.com",
  "consultation_type": "Legal",
  "request_details": "I need help with..."
}
```

---

## 🛠️ الملفات المعدّلة

### 1. **ContactSection.tsx**
`src/components/sections/ContactSection.tsx`

**التغييرات:**
- ✅ إضافة name attributes للـ inputs
- ✅ ربط handleSubmit بالـ API
- ✅ إضافة validation
- ✅ إضافة error handling
- ✅ إضافة loading state
- ✅ إضافة success message

### 2. **API Utility (جديد)**
`src/lib/api.ts`

**يحتوي على:**
- ✅ `submitConsultationRequest()` - دالة إرسال الطلب
- ✅ `validateConsultationRequest()` - دالة التحقق من البيانات
- ✅ `isValidEmail()` - دالة التحقق من البريد
- ✅ TypeScript interfaces
- ✅ Error handling

### 3. **Environment Variables**
`.env.example`

**تم إضافة:**
```bash
NEXT_PUBLIC_API_URL=https://api.vego.sa/api
```

---

## ⚙️ الإعداد

### 1. إنشاء ملف `.env.local`

```bash
# في المجلد الرئيسي للمشروع
cp .env.example .env.local
```

### 2. تحديث الـ API URL (اختياري)

إذا كان لديك API URL مختلف:

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://your-api-url.com/api
```

### 3. إعادة تشغيل المشروع

```bash
npm run dev
```

---

## 🎯 كيف يعمل؟

### **1. المستخدم يملأ النموذج**
```typescript
{
  fullname: "عبدالعزيز السبيعي",
  email: "contact@abdulaziz.life",
  consultation_type: "ريادة أعمال",
  request_details: "أحتاج مساعدة في..."
}
```

### **2. Validation قبل الإرسال**
```typescript
// التحقق من:
- الاسم (حد أدنى 2 حروف)
- البريد الإلكتروني (صيغة صحيحة)
- نوع الاستشارة (مطلوب)
```

### **3. إرسال الطلب للـ API**
```typescript
POST https://api.vego.sa/api/consultation-requests
Headers: {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}
Body: { ...requestData }
```

### **4. معالجة الاستجابة**

**نجاح ✅:**
```typescript
{
  success: true,
  data: { ... },
  message: "تم الإرسال بنجاح"
}
```

**فشل ❌:**
```typescript
{
  success: false,
  error: "حدث خطأ..."
}
```

---

## 🎨 UI States

### **1. حالة عادية**
```
[إرسال طلب الاستشارة] 📤
```

### **2. حالة التحميل**
```
[جارٍ الإرسال...] ⏳
disabled = true
```

### **3. حالة النجاح**
```
[تم إرسال طلبك بنجاح!] ✅
background: green
```

### **4. حالة الخطأ**
```
رسالة خطأ باللون الأحمر
```

---

## 🔒 Security

### **1. Validation**
- ✅ Client-side validation
- ✅ Email format check
- ✅ Required fields check

### **2. Error Handling**
- ✅ Try-catch blocks
- ✅ Network error handling
- ✅ API error handling

### **3. Environment Variables**
- ✅ API URL في .env
- ✅ لا يتم commit الـ .env.local

---

## 📝 استخدام الـ API Utility

### **في أي مكون آخر:**

```typescript
import { submitConsultationRequest } from '@/lib/api';

const handleSubmit = async () => {
  const result = await submitConsultationRequest({
    fullname: "John Doe",
    email: "john@example.com",
    consultation_type: "Business",
    request_details: "I need help..."
  });

  if (result.success) {
    console.log('Success!', result.data);
  } else {
    console.error('Error:', result.error);
  }
};
```

---

## 🧪 اختبار الـ API

### **1. في المتصفح**
1. افتح المشروع
2. اذهب لقسم التواصل
3. املأ النموذج
4. اضغط إرسال
5. افتح DevTools → Network → انظر الطلب

### **2. باستخدام cURL**
```bash
curl -X POST https://api.vego.sa/api/consultation-requests \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": "Test User",
    "email": "test@example.com",
    "consultation_type": "Test",
    "request_details": "Testing API"
  }'
```

### **3. باستخدام Postman**
```
Method: POST
URL: https://api.vego.sa/api/consultation-requests
Headers:
  Content-Type: application/json
  Accept: application/json
Body (JSON):
  {
    "fullname": "Test User",
    "email": "test@example.com",
    "consultation_type": "Test",
    "request_details": "Testing API"
  }
```

---

## 🐛 Troubleshooting

### **المشكلة: CORS Error**
```
Access to fetch at 'https://api.vego.sa/...' has been blocked by CORS policy
```

**الحل:**
تأكد من أن الـ backend يسمح بـ CORS من domain الخاص بك:
```javascript
// في الـ backend
app.use(cors({
  origin: ['http://localhost:3000', 'https://yourdomain.com']
}));
```

### **المشكلة: Network Error**
```
Failed to fetch
```

**الحل:**
1. تحقق من الـ API URL
2. تحقق من اتصال الإنترنت
3. تحقق من أن الـ backend يعمل

### **المشكلة: 400 Bad Request**
```
Invalid request data
```

**الحل:**
1. تحقق من أن field names صحيحة
2. تحقق من أن البيانات valid

---

## 📊 Response Examples

### **Success Response**
```json
{
  "success": true,
  "message": "Consultation request submitted successfully",
  "data": {
    "id": 123,
    "fullname": "John Doe",
    "email": "john@example.com",
    "consultation_type": "Business",
    "request_details": "...",
    "created_at": "2024-12-20T10:30:00Z"
  }
}
```

### **Error Response**
```json
{
  "success": false,
  "error": "Validation failed",
  "details": {
    "email": "Invalid email format"
  }
}
```

---

## 🔄 إضافة Features جديدة

### **1. إضافة File Upload**
```typescript
// في api.ts
export async function submitWithFile(
  data: ConsultationRequest,
  file: File
) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('data', JSON.stringify(data));
  
  // ... send formData
}
```

### **2. إضافة Rate Limiting**
```typescript
// في api.ts
let lastRequest = 0;
const MIN_INTERVAL = 3000; // 3 seconds

export async function submitConsultationRequest(data) {
  const now = Date.now();
  if (now - lastRequest < MIN_INTERVAL) {
    throw new Error('Please wait before submitting again');
  }
  lastRequest = now;
  // ... proceed
}
```

### **3. إضافة Analytics**
```typescript
// في ContactSection.tsx
const handleSubmit = async (e) => {
  // ... existing code
  
  if (result.success) {
    // Track success
    gtag('event', 'consultation_request_success', {
      consultation_type: requestData.consultation_type
    });
  }
};
```

---

## ✅ Checklist

- [x] ربط النموذج بالـ API
- [x] إضافة validation
- [x] إضافة error handling
- [x] إضافة loading states
- [x] إضافة success messages
- [x] إنشاء API utility
- [x] إضافة TypeScript types
- [x] إضافة environment variables
- [x] توثيق الـ API

---

## 📞 الدعم

إذا واجهت مشاكل:
1. راجع console للأخطاء
2. راجع Network tab في DevTools
3. تحقق من الـ API endpoint
4. تحقق من الـ backend logs

---

**تم التكامل بنجاح! ✅**
