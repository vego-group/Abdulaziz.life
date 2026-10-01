'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { VISION } from '@/constants/data';
import OutlineNumerals from '@/components/ui/OutlineNumerals';

// Same rules as Impact: 4 columns on lg, 2×2 below, rules between cells.
const pillarClass = (index: number) =>
  [
    'flex flex-col items-start border-line px-8 py-10',
    index % 2 === 0 ? 'border-e' : '',
    index >= 2 ? 'border-t lg:border-t-0' : '',
    index < 3 ? 'lg:border-e' : 'lg:border-e-0',
  ].join(' ');

export default function VisionSection() {
  const { t } = useLanguage();

  return (
    <section id="vision" className="relative isolate border-t border-line lg:pb-[42px]">
      {/* Figma grid pattern at its natural size (114px columns), anchored top-left like the frame.
          Used as a mask so the lines take the theme's grid color. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:url(/patterns/vision-grid.svg)] [mask-position:top_left] [mask-repeat:repeat]"
      />
      <div className="mx-auto max-w-page px-gutter pt-section">
        {/* Figma centers the 365px heading block in the 474px below the top padding. */}
        <div className="relative lg:flex lg:min-h-[474px] lg:items-center">
          <OutlineNumerals className="absolute end-0 top-1/2 -translate-y-1/2 max-lg:hidden" />
          <h2 className="max-w-[946px] text-80 leading-[1.338] font-bold tracking-[-0.05em] text-balance text-fg lg:min-h-[365px] lg:pb-11 lg:text-wrap">
            {t(VISION.heading)}
          </h2>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 border-t border-line lg:mt-20 lg:grid-cols-4">
        {VISION.pillars.map((pillar, index) => (
          <div key={pillar.title.en} className={pillarClass(index)}>
            <p className="font-geist text-10 leading-[15px] tracking-[1.5px] text-accent-soft uppercase">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="pt-4 text-24 leading-[39px] font-bold tracking-[-0.13px] text-fg">{t(pillar.title)}</h3>
            <p className="pt-3 text-14 leading-[23.1px] font-semibold text-muted">{t(pillar.description)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
