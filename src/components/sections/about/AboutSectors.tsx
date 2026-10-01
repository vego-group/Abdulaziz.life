'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { ABOUT, SECTORS } from '@/constants/data';
import OutlineNumerals from '@/components/ui/OutlineNumerals';

export default function AboutSectors() {
  const { language, t } = useLanguage();

  return (
    <div className="relative mx-auto max-w-page px-gutter py-16 lg:ps-gutter-lg lg:pe-gutter-md lg:py-section">
      <OutlineNumerals className="absolute end-18 top-[108px] max-lg:hidden" />

      <h3 className="text-32 leading-4 font-medium tracking-label text-fg">{t(ABOUT.sectorsTitle)}</h3>

      <ol className="mt-12 max-w-[886px]">
        {SECTORS.map((sector, index) => (
          <li key={sector.en} className="flex items-center gap-[27px] border-y border-line px-2.5 py-[37px]">
            <span className="font-mono text-10 leading-4 tracking-[1.8px] text-muted">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="font-display text-55 leading-none font-bold tracking-[-0.04em] text-fg">{t(sector)}</span>
            <span className="text-12 leading-4 tracking-label text-muted">
              {language === 'ar' ? sector.en.toUpperCase() : sector.ar}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
