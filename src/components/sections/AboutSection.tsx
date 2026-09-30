'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { ABOUT } from '@/constants/data';
import AboutBio from './about/AboutBio';
import AboutProfileEducation from './about/AboutProfileEducation';
import AboutSectors from './about/AboutSectors';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-t border-line">
      {/* The heading hangs out to the page gutter; the rest of About aligns 80px in. */}
      <div className="mx-auto max-w-page px-gutter pt-section pb-16 lg:pb-20">
        <h2 className="mt-6 max-w-[1288px] text-100 leading-[1.094] font-bold tracking-[-0.04em] text-balance text-fg lg:mt-[93px] lg:text-wrap">
          {t(ABOUT.heading)}
        </h2>
        <p className="mt-8 max-w-[972px] text-16 leading-[30px] font-medium text-muted lg:ms-10 lg:mt-[84px]">
          {t(ABOUT.intro)}
        </p>
      </div>

      <AboutBio />
      <AboutProfileEducation />
      <AboutSectors />
    </section>
  );
}
