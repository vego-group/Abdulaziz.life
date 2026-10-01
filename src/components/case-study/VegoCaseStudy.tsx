'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import { VEGO_CASE_STUDY as CS } from '@/constants/data';
import { enterDelay } from '@/lib/motion';
import Tag from '@/components/ui/Tag';

const IMAGES = '/images/case-studies/vego';
const label = 'text-11 leading-[17.6px]';

// Project details: 4 columns on lg (first column flush with the start edge), 2×2 below.
const infoCellClass = (index: number) =>
  [
    'border-b border-line py-8 lg:px-8',
    index % 2 === 0 ? 'pe-4' : 'border-s ps-4',
    index === 0 ? 'lg:ps-0' : 'lg:border-s',
  ].join(' ');

export default function VegoCaseStudy() {
  const { language, t } = useLanguage();
  const backArrow = language === 'ar' ? '→' : '←';

  return (
    <>
      {/* Hero: same entrance as the home hero (photo settles, cover fades off, text rises in turn). */}
      <section className="relative h-[560px] overflow-hidden bg-ink sm:h-[680px] lg:h-[839px]">
        <Image
          src={`${IMAGES}/hero.jpg`}
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover motion-safe:animate-settle"
        />
        <div className="absolute inset-0 bg-linear-to-b from-scrim/38 via-scrim/25 via-40% to-scrim/72" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden bg-ink motion-safe:block motion-safe:animate-unveil" />

        <Link
          href="/#work"
          style={enterDelay(850)}
          className="absolute start-gutter top-8 flex items-center gap-2.5 text-on-media/65 transition-colors hover:text-on-media motion-safe:animate-rise lg:start-12"
        >
          <span aria-hidden="true" className="text-14 leading-[22.4px]">
            {backArrow}
          </span>
          <span className="text-10 leading-4">{t(CS.back)}</span>
        </Link>

        <div className="absolute inset-x-0 bottom-0 px-gutter pb-14 lg:ps-12 lg:pe-60">
          <div className="flex items-center gap-3.5 motion-safe:animate-rise" style={enterDelay(250)}>
            <p className="text-10 leading-4 text-accent-bright">{t(CS.eyebrow)}</p>
            <span aria-hidden="true" className="h-px w-12 bg-white/20" />
          </div>
          <h1 className="mt-7 pb-4 text-110 leading-[1.1] font-bold text-on-media motion-safe:animate-rise" style={enterDelay(450)}>
            {t(CS.name)}
          </h1>
          <ul className="flex flex-wrap gap-2 motion-safe:animate-rise" style={enterDelay(700)}>
            {CS.tags.map((tag) => (
              <li key={tag.en}>
                <Tag tone="hero">{t(tag)}</Tag>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[560px] text-17 leading-[28.9px] text-on-media/62 motion-safe:animate-rise" style={enterDelay(850)}>{t(CS.tagline)}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto grid max-w-page gap-6 px-gutter pt-16 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-x-9 lg:ps-20 lg:pe-12 lg:pt-[120px]">
        <div data-reveal>
          <p className="text-12 text-accent">{t(CS.projectLabel)}</p>
          <p className="pt-7 text-11 leading-[22px] text-muted">{t(CS.projectMeta)}</p>
        </div>
        <p data-reveal className="text-30 leading-[51px] text-fg">{t(CS.intro)}</p>
      </section>

      {/* The idea */}
      <section className="mt-16 border-y border-line lg:mt-[120px]">
        <div className="relative mx-auto max-w-page px-gutter py-16 lg:ps-20 lg:pe-12 lg:pt-[140px] lg:pb-[120px]">
          <span aria-hidden="true" className="absolute inset-y-0 start-20 w-px bg-accent opacity-25 max-lg:hidden" />
          <p data-reveal className={`${label} text-accent lg:ps-8`}>{t(CS.ideaLabel)}</p>
          <p data-reveal className="mt-12 text-70 leading-[1.6135] font-bold text-fg lg:min-h-[357.3px] lg:ps-8">{t(CS.idea)}</p>
        </div>
      </section>

      {/* Project details */}
      <section className="mx-auto max-w-page px-gutter pt-16 lg:ps-20 lg:pe-12 lg:pt-section">
        <p data-reveal className={`${label} text-muted`}>
          {t(CS.infoLabel)}
        </p>
        <dl className="mt-12 grid grid-cols-2 border-t border-line lg:grid-cols-4">
          {CS.info.map((item, index) => (
            <div key={item.label.en} className={infoCellClass(index)}>
              <dt data-reveal className="text-10 leading-4 text-accent">{t(item.label)}</dt>
              <dd data-reveal className="mt-3 text-16 leading-[22.4px] font-medium text-fg">{t(item.value)}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Gallery: narrow photo on the start side, wide photo on the end side (637.6px tall at 1369). */}
      <section className="mt-16 grid md:h-[46.57vw] md:grid-cols-[438.09fr_930.91fr] lg:mt-[120px]">
        <div className="relative aspect-[437/638] bg-surface md:aspect-auto md:border-e md:border-line">
          <Image src={`${IMAGES}/home-charger.png`} alt="" fill sizes="(min-width: 768px) 32vw, 100vw" className="object-cover" />
        </div>
        <div className="relative aspect-[931/638] bg-surface md:aspect-auto">
          <Image src={`${IMAGES}/hero.jpg`} alt="" fill sizes="(min-width: 768px) 68vw, 100vw" className="object-cover" />
        </div>
      </section>

      {/* Background */}
      <section className="grid border-t border-line md:grid-cols-[548fr_821.4fr] lg:min-h-[504.4px]">
        <div className="relative aspect-square md:aspect-auto">
          <Image
            src={`${IMAGES}/charging-station.png`}
            alt=""
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-gutter py-12 lg:px-20 lg:py-16">
          <p data-reveal className={`${label} pb-6 text-accent`}>{t(CS.backgroundLabel)}</p>
          <p data-reveal className="max-w-[662px] text-26 leading-[42.9px] font-medium text-fg">{t(CS.background)}</p>
        </div>
      </section>

      {/* Photo band */}
      <section className="relative h-[300px] overflow-hidden border-t border-line bg-surface sm:h-[380px] lg:h-[461.4px]">
        <Image src={`${IMAGES}/workshop.jpg`} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-ink/42 to-transparent" />
        <p className="absolute start-9 bottom-8 text-9 leading-[14.4px] tracking-[1.8px] text-on-media/40 uppercase">
          {t(CS.caption)}
        </p>
      </section>

      {/* The challenge */}
      <section className="relative mx-auto max-w-page px-gutter pt-16 lg:ps-[93px] lg:pe-12 lg:pt-[140px]">
        <span aria-hidden="true" className="absolute start-20 top-[220px] h-[120px] w-px bg-accent opacity-30 max-lg:hidden" />
        <p data-reveal className={`${label} text-accent`}>
          {t(CS.challengeLabel)}
        </p>
        <p data-reveal className="mt-12 text-50 leading-[1.5] font-semibold text-fg">{t(CS.challenge)}</p>
      </section>

      {/* Approach */}
      <section className="mt-16 border-t border-line lg:mt-[120px]">
        <ol className="mx-auto max-w-page px-gutter pt-12 lg:ps-20 lg:pe-12 lg:pt-[82px]">
          {CS.approach.map((step) => (
            <li
              key={step.title.en}
              data-reveal
              className="flex flex-col gap-3 border-b border-line py-9 lg:min-h-[134px] lg:flex-row lg:items-center lg:gap-6"
            >
              <div className="flex items-start gap-[39px]">
                <span className={`${label} text-muted`}>{t(step.number)}</span>
                <h3 className="text-34 leading-[54.76px] font-bold text-fg">{t(step.title)}</h3>
              </div>
              {/* Figma: rows 1–2 on one line (longest 475px in Chrome), row 3 breaks after "أهداف" — 480px keeps both. */}
              <p className="max-w-[480px] text-15 leading-[28.5px] text-muted lg:pt-1">{t(step.description)}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Results */}
      <section className="mt-16 bg-surface lg:mt-[120px]">
        <div className="mx-auto max-w-page px-gutter py-16 lg:ps-20 lg:pe-12 lg:py-[120px]">
          <p data-reveal className={`${label} text-accent`}>
            {t(CS.resultsLabel)}
          </p>
          <div className="mt-14 flex flex-col gap-8 lg:min-h-[210px] lg:flex-row lg:items-center lg:justify-between">
            <h2 data-reveal className="text-89 leading-[1.1] font-bold text-fg">
              {CS.resultsHeading.map((line) => (
                <span key={line.en} className="block lg:pb-[7px]">
                  {t(line)}
                </span>
              ))}
            </h2>
            <p data-reveal className="max-w-[360px] text-16 leading-8 text-muted">{t(CS.results)}</p>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="group relative h-[480px] overflow-hidden bg-ink sm:h-[600px] lg:h-[755px]">
        {/* The photo eases in while the link is hovered. */}
        <Image
          src={`${IMAGES}/next-business-transformation.jpg`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-1000 motion-safe:group-has-[a:hover]:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-scrim/70 to-transparent to-60%" />
        {/* Figma puts this block at the end side (left in Arabic): caption end-aligned, link start-aligned. */}
        <div data-reveal className="absolute end-gutter bottom-12 min-w-[289.7px] lg:end-12 lg:bottom-[52px]">
          <p className="text-end text-9 leading-[14.4px] tracking-[1.62px] text-on-media/30 uppercase">{t(CS.nextCaption)}</p>
          <Link
            href="/#work"
            className="mt-4 block text-28 leading-[43.8px] font-semibold text-on-media transition-colors hover:text-accent-soft"
          >
            {t(CS.nextCta)}
          </Link>
        </div>
      </section>

      {/* Pager */}
      <nav aria-label={t(CS.nextTitle)} className="border-t border-line">
        <div className="mx-auto grid max-w-page grid-cols-2 px-gutter lg:min-h-[167.2px] lg:ps-20 lg:pe-12">
          <div className="border-e border-line py-12">
            <Link href="/#work" className="text-9 leading-[14.4px] text-muted transition-colors hover:text-fg">
              {backArrow} {t(CS.back)}
            </Link>
          </div>
          <Link href="/#work" className="group flex flex-col items-end py-12 ps-12">
            <span className="pb-3 text-9 leading-[14.4px] text-muted">{t(CS.nextLabel)}</span>
            <span className="text-28 leading-[44.8px] font-bold text-fg transition-colors group-hover:text-accent-soft">
              {t(CS.nextTitle)}
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
