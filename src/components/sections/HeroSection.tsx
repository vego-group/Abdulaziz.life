'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/hooks/useLanguage';
import { HERO_STRIPS } from '@/constants/data';
import MaterialIcon from '@/components/ui/MaterialIcon';

export default function HeroSection() {
  const { language, t } = useLanguage();

  return (
    <section className="hero" id="top">
      <div className="hero-pattern" />
      <div className="hero-glow" />
      
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            <span>{language === 'ar' ? 'سفير رؤية 2030' : 'VISION 2030 AMBASSADOR'}</span>
          </div>
          
          <h1 className="hero-h1">
            {language === 'ar' ? (
              <>عبدالعزيز<br />السبيعي</>
            ) : (
              <>Abdulaziz<br />Al-Suabie</>
            )}
          </h1>
          
          <div className="hero-line" />
          
          <p className="hero-sub">
            {language === 'ar' 
              ? 'رائد أعمال | مستشار استراتيجي | شريك في تحقيق رؤية 2030'
              : 'Entrepreneur | Strategic Consultant | Vision 2030 Partner'
            }
          </p>
          
          <div className="hero-btns">
            <Link href="#contact" className="btn-primary">
              <span>{language === 'ar' ? 'حجز استشارة' : 'Book a Consultation'}</span>
              <MaterialIcon icon="arrow_forward" className="text-[1rem]" />
            </Link>
            <Link href="#projects" className="btn-outline-white">
              {language === 'ar' ? 'استعراض المشاريع' : 'View Projects'}
            </Link>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-ring">
            <Image
              src="/images/abdulaziz.png"
              alt="عبدالعزيز السبيعي"
              width={380}
              height={380}
              className="w-full h-full object-cover rounded-full"
              priority
            />
          </div>
        </div>
      </div>

      <div className="hero-strip">
        <div className="hero-strip-inner">
          {HERO_STRIPS.map((strip, index) => (
            <span key={index}>{t(strip)}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
