'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { IMPACT_STATS } from '@/constants/data';
import CountUp from '@/components/motion/CountUp';

// lg: four columns divided by vertical rules; the first column has no end padding, as in Figma.
// Below lg: 2×2 with a vertical rule between columns and a horizontal rule between rows.
const cellClass = (index: number) =>
  [
    'flex flex-col items-start border-line lg:min-h-[147px] lg:border-t-0 lg:py-0 lg:ps-12',
    index % 2 === 0 ? 'border-e pe-5' : 'ps-5',
    index >= 2 ? 'border-t pt-8' : 'pb-8',
    index === 0 ? 'lg:pe-0' : 'lg:pe-12',
    index < 3 ? 'lg:border-e' : 'lg:border-e-0',
  ].join(' ');

export default function ImpactSection() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-line py-section-lg">
      <div className="mx-auto grid max-w-page grid-cols-2 px-gutter lg:grid-cols-4">
        {IMPACT_STATS.map((stat, index) => (
          <div key={stat.value} className={cellClass(index)}>
            {/* The cell (with its rule) stays put; only the content rises in. */}
            <div data-reveal>
              <p className="font-display text-75 leading-[0.9] font-semibold tracking-[-0.04em] whitespace-nowrap text-fg">
                {/* Keeps "+ 15" in LTR order inside the RTL layout. */}
                <span dir="ltr">
                  <CountUp value={stat.value} delay={250 + index * 120} />
                </span>
              </p>
              <p className="mt-4 text-13 leading-4 font-medium tracking-label text-accent">{t(stat.label)}</p>
              <p className="mt-2 text-13 leading-[1.5] text-muted">{t(stat.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
