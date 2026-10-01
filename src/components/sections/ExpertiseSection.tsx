'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import { EXPERTISE, EXPERTISE_AREAS } from '@/constants/data';
import SectionIntro from '@/components/ui/SectionIntro';

export default function ExpertiseSection() {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="border-t border-line">
      <SectionIntro heading={t(EXPERTISE.heading)} note={t(EXPERTISE.note)} />

      <div className="mx-auto max-w-page px-gutter pt-12 pb-section-lg lg:pt-22">
        <ol className="border-t border-line">
          {EXPERTISE_AREAS.map((area, index) => (
            <li
              key={area.title.en}
              data-reveal
              className="group relative flex flex-col gap-4 border-b border-line py-8 lg:flex-row lg:items-center lg:gap-10 lg:py-11 lg:ps-5"
            >
              {/* Hover: accent rule on the start edge (0-width in the Figma frame), accent number, full-strength text. */}
              <span
                aria-hidden="true"
                className="absolute inset-y-0 start-0 w-0 bg-accent transition-[width] group-hover:w-0.5"
              />
              <span className="font-mono text-11 leading-[17.6px] tracking-[1.54px] text-muted transition-colors group-hover:text-accent-soft lg:pt-1.5">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="lg:w-[171px] lg:shrink-0">
                <h3 className="text-20 leading-[26.285px] font-bold tracking-label text-fg uppercase lg:whitespace-nowrap">
                  {t(area.title)}
                </h3>
                <p className="mt-2 text-13 leading-4 font-medium tracking-label text-accent uppercase opacity-60">
                  {t(area.subtitle)}
                </p>
              </div>
              {/* Figma keeps the description top-aligned in a 93.4px box, which sets the row height (182px). */}
              <p className="max-w-[678px] text-18 leading-[24.5px] font-medium text-muted opacity-70 transition-opacity group-hover:opacity-100 lg:h-[93.4px]">
                {t(area.description)}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-gutter py-6">
          <Link
            href="/#contact"
            className="text-12 font-semibold tracking-label text-accent uppercase transition-colors hover:text-accent-soft"
          >
            {t(EXPERTISE.cta)}
          </Link>
          <p className="text-10 leading-4 tracking-[1px] text-muted uppercase">{t(EXPERTISE.location)}</p>
        </div>
      </div>
    </section>
  );
}
