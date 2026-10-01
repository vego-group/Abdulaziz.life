'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import { BIO_INFO, FOOTER } from '@/constants/data';

// Muted link with the 1px underline that grows on hover (0-width bar in the Figma frame).
const linkClass =
  'relative block text-14 text-muted transition-colors hover:text-fg after:absolute after:start-0 after:bottom-0 after:h-px after:w-0 after:bg-muted after:transition-[width] hover:after:w-full';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-page grid-cols-2 gap-x-10 gap-y-12 px-gutter py-16 lg:grid-cols-[2fr_1fr_1fr] lg:gap-x-20 lg:py-18 lg:ps-gutter-lg lg:pe-gutter-md">
        <div className="col-span-2 lg:col-span-1">
          <p className="text-26 leading-[41.6px] font-bold text-fg">{t(BIO_INFO.name)}</p>
          <p className="pt-2.5 text-12 text-muted">{t(FOOTER.roles)}</p>
          <p className="pt-8 text-12 text-muted">{t(FOOTER.location)}</p>
        </div>

        <nav aria-label={t(FOOTER.navLabel)}>
          <p className="pb-2 text-9 leading-[14.4px] text-muted">{t(FOOTER.navLabel)}</p>
          <ul className="mt-3.5 flex flex-col items-start gap-3.5">
            {FOOTER.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="pb-2 text-9 leading-[14.4px] text-muted">{t(FOOTER.contactLabel)}</p>
          <ul className="mt-3.5 flex flex-col items-start gap-3.5">
            {FOOTER.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={linkClass}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {t(link.label)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-x-6 gap-y-2 px-gutter py-5 text-9 leading-[14.4px] text-muted lg:px-gutter-lg">
          <p>{t(FOOTER.tagline)}</p>
          <p>{t(FOOTER.copyright)}</p>
        </div>
      </div>
    </footer>
  );
}
