'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { CONTACT_INFO, SOCIAL_LINKS, CONSULTATION_TYPES } from '@/constants/data';
import MaterialIcon from '@/components/ui/MaterialIcon';
import { submitConsultationRequest, validateConsultationRequest } from '@/lib/api';

export default function ContactSection() {
  const { language, t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    const requestData = {
      fullname: formData.get('fullname') as string,
      email: formData.get('email') as string,
      consultation_type: formData.get('consultation_type') as string,
      request_details: formData.get('request_details') as string,
    };

    // Validate data
    const validation = validateConsultationRequest(requestData);
    if (!validation.valid) {
      setError(
        language === 'ar'
          ? 'يرجى التأكد من صحة البيانات المدخلة'
          : validation.errors[0]
      );
      setIsSubmitting(false);
      return;
    }

    // Submit to API
    const result = await submitConsultationRequest(requestData);

    if (result.success) {
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        (e.target as HTMLFormElement).reset();
      }, 3000);
    } else {
      setError(
        language === 'ar'
          ? 'حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.'
          : result.error || 'An error occurred while submitting. Please try again.'
      );
    }

    setIsSubmitting(false);
  };

  return (
    <section className="contact-bg" id="contact">
      <div className="contact-glow top-[-100px] right-[-100px] w-[500px] h-[500px]" />
      <div className="contact-glow bottom-[-100px] left-[-100px] w-[500px] h-[500px]" />
      
      <div className="container relative z-[2]">
        <div className="text-center mb-12">
          <span className="section-label text-gold-light">
            {language === 'ar' ? 'ابق على تواصل' : 'Stay in Touch'}
          </span>
          <h2 className="section-title section-title1 text-white">
            {language === 'ar' ? 'تواصل معي' : 'Get in Touch'}
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="contact-grid">
          <div className="contact-info-card">
            <div className="contact-info-title">
              <MaterialIcon icon="contact_page" className="text-[1.2rem] text-gold" />
              <span>{language === 'ar' ? 'معلومات التواصل' : 'Contact Info'}</span>
            </div>

            {CONTACT_INFO.map((info, index) => (
              <div key={index} className="contact-row">
                <div className="contact-icon">
                  <MaterialIcon icon={info.icon} className="text-[1.1rem]" />
                </div>
                <div>
                  <div className="contact-lbl">{t(info.label)}</div>
                  <div className="contact-val">
                    {info.icon === 'location_on' 
                      ? (language === 'ar' ? info.value : 'Riyadh, Saudi Arabia')
                      : info.value
                    }
                  </div>
                </div>
              </div>
            ))}

            <div className="social-row">
              {SOCIAL_LINKS.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title={social.platform}
                >
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="booking-card">
            <div className="booking-title">
              {language === 'ar' ? 'حجز استشارة' : 'Book a Consultation'}
            </div>
            <p className="booking-sub">
              {language === 'ar'
                ? 'املأ النموذج وسيتم التواصل معك خلال 24 ساعة'
                : 'Fill in the form and we\'ll get back to you within 24 hours'
              }
            </p>

            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fname">
                  {language === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fullname"
                  required
                  placeholder={language === 'ar' ? 'عبدالعزيز السبيعي' : 'Your full name'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="femail">
                  {language === 'ar' ? 'البريد الإلكتروني *' : 'Email Address *'}
                </label>
                <input
                  type="email"
                  id="femail"
                  name="email"
                  required
                  placeholder="example@domain.com"
                />
              </div>

              <div className="form-group full">
                <label htmlFor="fservice">
                  {language === 'ar' ? 'نوع الاستشارة' : 'Consultation Type'}
                </label>
                <select id="fservice" name="consultation_type">
                  {CONSULTATION_TYPES.map((type, index) => (
                    <option key={index} value={t(type)}>
                      {t(type)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group full">
                <label htmlFor="fmsg">
                  {language === 'ar' ? 'تفاصيل الطلب' : 'Request Details'}
                </label>
                <textarea
                  id="fmsg"
                  name="request_details"
                  placeholder={
                    language === 'ar'
                      ? 'أخبرني كيف يمكنني مساعدتك...'
                      : 'Tell me how I can help you achieve your goals...'
                  }
                />
              </div>

              {error && (
                <div className="form-group full">
                  <div className="error-message" style={{
                    padding: '0.75rem',
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    borderRadius: '0.5rem',
                    color: '#ef4444',
                    fontSize: '0.875rem',
                    textAlign: 'center'
                  }}>
                    {error}
                  </div>
                </div>
              )}

              <div className="form-group full">
                <button 
                  type="submit" 
                  className="btn-submit" 
                  disabled={isSubmitting}
                  style={isSuccess ? { background: '#2D6A4F' } : {}}
                >
                  <span>
                    {isSubmitting
                      ? (language === 'ar' ? 'جارٍ الإرسال...' : 'Sending...')
                      : isSuccess
                      ? (language === 'ar' ? 'تم إرسال طلبك بنجاح!' : 'Request sent successfully!')
                      : (language === 'ar' ? 'إرسال طلب الاستشارة' : 'Send Consultation Request')
                    }
                  </span>
                  <MaterialIcon 
                    icon={isSuccess ? 'check_circle' : isSubmitting ? 'hourglass_empty' : 'send'} 
                    className="text-[1.1rem]" 
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
