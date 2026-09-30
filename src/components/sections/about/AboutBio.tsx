'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { ABOUT, SOCIAL_LINKS } from '@/constants/data';

const indexLabel = (index: number) => String(index + 1).padStart(2, '0');

export default function AboutBio() {
  const { t } = useLanguage();
  const [building, leading, creating] = ABOUT.pillars;
  const linkedIn = SOCIAL_LINKS.find((link) => link.platform === 'LinkedIn');

  return (
    <div className="border-b border-line">
      <div className="mx-auto grid max-w-page lg:min-h-[650.5px] lg:grid-cols-2">
        <div className="border-b border-line px-gutter py-16 lg:border-e lg:border-b-0 lg:ps-gutter-lg lg:pe-18 lg:pt-[140px] lg:pb-section">
          <p className="text-40 leading-[1.2047] tracking-[-0.02em] text-fg">
            {t(building)} <span className="whitespace-nowrap text-muted opacity-70">{t(leading)}</span>
            <br />
            {t(creating)}
          </p>

          <ol className="mt-14 border-t border-line">
            {ABOUT.roles.map((role, index) => (
              <li key={role.ar} className="flex items-center justify-between gap-4 border-b border-line py-3.5">
                <span className="text-13 leading-[1.5] font-light text-muted">{t(role)}</span>
                <span className="font-geist text-10 leading-[1.5] tracking-label text-line">{indexLabel(index)}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Bottom-aligned; min heights keep the Figma spacing between blocks and let longer copy grow. */}
        <div className="flex flex-col justify-end px-gutter py-16 lg:ps-18 lg:pe-gutter-lg lg:py-section">
          <p className="mb-6 text-18 leading-[34px] font-light text-muted lg:min-h-[153px]">{t(ABOUT.bio[0])}</p>
          <p className="mb-13 text-18 leading-[34px] font-light text-muted lg:min-h-[92px]">{t(ABOUT.bio[1])}</p>
          <blockquote className="mb-13 border-s-2 border-accent-soft ps-6 text-17 leading-[29.45px] text-fg">
            {t(ABOUT.quote)}
          </blockquote>
          <a
            href={linkedIn?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start border-b border-fg pb-1 text-13 leading-[19.5px] font-medium tracking-label text-fg transition-colors hover:border-accent-soft hover:text-accent-soft"
          >
            {t(ABOUT.moreLink)}
          </a>
        </div>
      </div>
    </div>
  );
}
