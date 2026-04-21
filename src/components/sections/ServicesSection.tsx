'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { SERVICES } from '@/constants/data';
import MaterialIcon from '@/components/ui/MaterialIcon';

export default function ServicesSection() {
  const { language, t } = useLanguage();

  return (
    <section className="services-bg" id="services">
      <div className="container relative z-[2]">
        <div className="text-center max-w-[680px] mx-auto mb-2">
          <span className="section-label text-gold-light">
            {language === 'ar' ? 'الخبرات' : 'Expertise'}
          </span>
          <h2 className="section-title section-title1 text-white">
            {language === 'ar' ? 'الخدمات الاستشارية والحلول' : 'Advisory Services & Solutions'}
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-white/70 mt-4 leading-relaxed text-[0.95rem]">
            {language === 'ar'
              ? 'نقدم حلولاً متكاملة تركز على النمو المستدام وتطوير البنى التحتية للأعمال وفق رؤية مستقبلية طموحة.'
              : 'We deliver integrated solutions focused on sustainable growth and business infrastructure development aligned with an ambitious future vision.'
            }
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <div key={index} className={`service-card ${service.wide ? 'wide' : ''}`}>
              {service.wide ? (
                <div className="service-wide-inner">
                  <MaterialIcon 
                    icon={service.icon} 
                    className="text-[2.8rem] text-gold flex-shrink-0" 
                  />
                  <div>
                    <h3 className="service-title">{t(service.title)}</h3>
                    <p className="service-desc">{t(service.description)}</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="service-icon">
                    <MaterialIcon icon={service.icon} />
                  </div>
                  <h3 className="service-title">{t(service.title)}</h3>
                  <p className="service-desc">{t(service.description)}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
