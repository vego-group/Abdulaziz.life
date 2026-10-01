'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { ABOUT, BIO_INFO, TIMELINE } from '@/constants/data';

const linkClass = 'transition-colors hover:text-accent-soft';

export default function AboutProfileEducation() {
  const { t } = useLanguage();
  const fields = ABOUT.profileFields;

  const profile = [
    { label: fields.name, value: t(BIO_INFO.name) },
    { label: fields.location, value: t(BIO_INFO.location) },
    { label: fields.specialty, value: t(BIO_INFO.specialty) },
    {
      label: fields.email,
      value: (
        <a href={`mailto:${BIO_INFO.email}`} className={linkClass}>
          {BIO_INFO.email}
        </a>
      ),
    },
    {
      label: fields.phone,
      value: (
        <a href={`tel:${BIO_INFO.phone.replace(/\s/g, '')}`} dir="ltr" className={linkClass}>
          {BIO_INFO.phone}
        </a>
      ),
    },
  ];

  return (
    <div className="border-b border-line">
      <div className="mx-auto grid max-w-page lg:grid-cols-2">
        <div className="border-b border-line px-gutter py-16 lg:border-e lg:border-b-0 lg:ps-gutter-lg lg:pe-18 lg:pt-section lg:pb-[116px]">
          <p data-reveal className="text-13 leading-4 font-medium tracking-[1px] text-muted uppercase">
            {t(ABOUT.profileLabel)}
          </p>
          <dl data-reveal className="mt-8 border-t border-line">
            {profile.map((row) => (
              <div key={row.label.en} className="flex items-center justify-between gap-4 border-b border-line py-[18px]">
                <dt className="font-mono text-11 leading-[14.4px] tracking-[1px] text-accent uppercase">{t(row.label)}</dt>
                <dd className="text-14 font-medium text-fg">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="px-gutter py-16 lg:ps-20 lg:pe-18 lg:pt-section lg:pb-[116px]">
          <div data-reveal className="lg:mx-auto lg:max-w-[499.5px]">
            <p className="font-mono text-10 leading-4 tracking-[2.2px] text-muted uppercase">{t(ABOUT.educationLabel)}</p>
            <ol className="mt-8">
              {TIMELINE.map((item) => (
                <li
                  key={item.date}
                  className={`flex justify-between gap-8 border-b border-line py-7 last:border-b-0 ${
                    item.subtitle ? 'items-start' : 'items-center'
                  }`}
                >
                  <div>
                    <p className="text-14 leading-[20.3px] font-semibold text-fg">{t(item.title)}</p>
                    {item.subtitle && (
                      <p className="mt-1.5 font-mono text-10 leading-4 tracking-[1px] text-muted">{t(item.subtitle)}</p>
                    )}
                  </div>
                  <span className="font-display text-38 leading-none font-bold tracking-[-0.04em] text-line">
                    {item.date}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
