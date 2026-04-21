'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { BIO_INFO, TIMELINE, LANGUAGES, STATS } from '@/constants/data';
import MaterialIcon from '@/components/ui/MaterialIcon';

export default function AboutSection() {
  const { language, t } = useLanguage();

  return (
    <section className="section-about" id="about">
      <div className="container">
        <div className="about-grid">
          <div>
            <span className="section-label">{language === 'ar' ? 'نبذة عني' : 'About Me'}</span>
            <h2 className="section-title">
              {language === 'ar' ? (
                <>مسيرة من الإنجاز<br />ورؤية طموحة</>
              ) : (
                <>A Journey of Achievement<br />& Ambitious Vision</>
              )}
            </h2>
            <div className="section-divider" />
            
            <p className="about-para mt-6">
              {language === 'ar' 
                ? 'رائد أعمال يمتلك خبرة تمتد لأكثر من 15 عاماً في قيادة الابتكار وإدارة المشاريع التحويلية ضمن قطاعات الطاقة، والمقاولات، والتقنية المالية. أهتم بالتركيز على توظيف التقنيات المتقدمة في تطوير نماذج أعمال مستدامة وفعّالة، تسهم في تحقيق أهداف رؤية السعودية 2030، وتعزيز القدرة التنافسية، ودفع مسيرة النمو نحو مستقبل أكثر ازدهاراً واستدامة.'
                : 'An entrepreneur with over 15 years of experience leading innovation and managing transformative projects across the energy, contracting, and financial technology sectors. I focus on leveraging advanced technologies to develop sustainable, efficient business models that contribute to Saudi Vision 2030 goals, strengthen competitiveness, and drive growth toward a more prosperous and sustainable future.'
              }
            </p>

            <div className="bio-grid">
              <div>
                <span className="bio-lbl">{language === 'ar' ? 'الاسم: ' : 'Name: '}</span>
                <span className="bio-val">{t(BIO_INFO.name)}</span>
              </div>
              <div>
                <span className="bio-lbl">{language === 'ar' ? 'الإقامة: ' : 'Location: '}</span>
                <span className="bio-val">{t(BIO_INFO.location)}</span>
              </div>
              <div>
                <span className="bio-lbl">{language === 'ar' ? 'التخصص: ' : 'Specialty: '}</span>
                <span className="bio-val">{t(BIO_INFO.specialty)}</span>
              </div>
              <div>
                <span className="bio-lbl">{language === 'ar' ? 'الجامعة: ' : 'University: '}</span>
                <span className="bio-val">{t(BIO_INFO.university)}</span>
              </div>
              <div className="col-span-2">
                <span className="bio-lbl">{language === 'ar' ? 'البريد: ' : 'Email: '}</span>
                <a href={`mailto:${BIO_INFO.email}`} className="bio-link">{BIO_INFO.email}</a>
              </div>
              <div className="col-span-2">
                <span className="bio-lbl">{language === 'ar' ? 'الهاتف: ' : 'Phone: '}</span>
                <a href={`tel:${BIO_INFO.phone}`} className="bio-link" dir="ltr">{BIO_INFO.phone}</a>
              </div>
            </div>

            <div className="timeline">
              {TIMELINE.map((item, index) => (
                <div key={index} className="tl-item">
                  <div className={`tl-dot ${item.active ? 'active' : 'past'}`} />
                  <div className="tl-title">{t(item.title)}</div>
                  {item.subtitle && <div className="tl-sub">{t(item.subtitle)}</div>}
                  <div className={`tl-date ${item.active ? 'text-gold' : 'text-on-surface-variant'}`}>
                    {item.date}
                  </div>
                </div>
              ))}
            </div>

            <div className="langs">
              {LANGUAGES.map((lang, index) => (
                <span key={index} className="lang-badge">{t(lang)}</span>
              ))}
            </div>
          </div>

          <div className="stats-grid">
            {STATS.map((stat, index) => (
              <div key={index} className={`stat-card ${stat.wide ? 'stat-wide' : ''}`}>
                {stat.wide ? (
                  <>
                    <div>
                      <div className="stat-num text-[1.4rem] mb-1">
                        {language === 'ar' ? 'مؤسس شركة فيجو' : 'Founder of Vego'}
                      </div>
                      <div className="stat-label text-gold font-bold">{t(stat.label)}</div>
                    </div>
                    <MaterialIcon icon={stat.icon} className="text-[2.8rem] text-gold" />
                  </>
                ) : (
                  <>
                    <div className="stat-icon">
                      <MaterialIcon icon={stat.icon} />
                    </div>
                    <div className="stat-num">{stat.value}</div>
                    <div className="stat-label">{t(stat.label)}</div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
