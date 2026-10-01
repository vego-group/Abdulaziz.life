'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/hooks/useLanguage';
import { BIO_INFO, HERO } from '@/constants/data';
import { enterDelay } from '@/lib/motion';

// Entrance timing (ms): headline words, then intro, buttons and the location badge.
const WORD_START = 200;
const WORD_STEP = 120;

export default function HeroSection() {
  const { t } = useLanguage();
  const words = t(HERO.title).split(' ');
  const afterTitle = WORD_START + words.length * WORD_STEP;

  return (
    // Desktop: fills the viewport below the nav, between the design's min height (708px) and its
    // 856px frame height. Below lg the photo stacks under the text.
    <section className="grid lg:min-h-[clamp(708px,calc(100svh_-_var(--spacing-nav)),856px)] lg:grid-cols-2">
      <div className="flex flex-col justify-center px-gutter py-16 lg:py-20 lg:pe-15">
        {/* Words rise one after another; inline-block keeps the same line breaks as plain text. */}
        <h1 className="mb-9.5 text-100 leading-[1.15] font-semibold tracking-[-0.03em] text-balance text-fg">
          {words.map((word, index) => (
            <Fragment key={`${word}-${index}`}>
              {index > 0 && ' '}
              <span className="inline-block motion-safe:animate-rise" style={enterDelay(WORD_START + index * WORD_STEP)}>
                {word}
              </span>
            </Fragment>
          ))}
        </h1>

        {/* Figma box is 522px; the first line measures 521.9px in Chrome, so 520px reproduces the Figma line break. */}
        <p
          className="mb-12 max-w-[520px] text-18 leading-[1.7] font-medium text-muted motion-safe:animate-rise"
          style={enterDelay(afterTitle + 150)}
        >
          {t(HERO.intro)}
        </p>

        <div className="flex flex-wrap items-center gap-4 motion-safe:animate-rise" style={enterDelay(afterTitle + 300)}>
          <Link
            href="/#work"
            className="rounded-control bg-accent px-7 py-3.5 text-13 font-semibold text-on-accent transition hover:brightness-110 active:scale-[0.98]"
          >
            {t(HERO.primaryCta)}
          </Link>
          <Link
            href="/#contact"
            className="rounded-control border border-muted px-7 py-3.5 text-center text-13 font-medium text-muted transition hover:border-fg hover:text-fg active:scale-[0.98] sm:w-45 sm:px-0"
          >
            {t(HERO.secondaryCta)}
          </Link>
        </div>
      </div>

      <div className="relative aspect-[4/5] overflow-hidden bg-surface sm:aspect-[4/3] lg:aspect-auto">
        {/* Crop matches the Figma frame: image scaled to the column height, offset 35.6% from the left. */}
        <Image
          src="/images/abdulaziz.png"
          alt={t(BIO_INFO.name)}
          fill
          preload
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-[35.6%_center] motion-safe:animate-settle sm:object-[35.6%_22%] lg:object-[35.6%_center]"
        />
        {/* Entrance cover that fades off the photo. The photo itself is never hidden, so it still counts as
            the first large paint (LCP). Not rendered when the visitor prefers reduced motion. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden bg-surface motion-safe:block motion-safe:animate-unveil" />

        <div
          className="absolute start-5 bottom-5 rounded-badge border border-white/8 bg-glass px-6 py-4 backdrop-blur-md motion-safe:animate-rise lg:start-10 lg:bottom-10.5"
          style={enterDelay(afterTitle + 500)}
        >
          <p className="font-mono text-10 tracking-[1.2px] text-white/50 uppercase">{t(HERO.locationLabel)}</p>
          <p className="pt-1 text-12 leading-[22.4px] font-medium whitespace-nowrap text-on-media">{t(HERO.location)}</p>
        </div>
      </div>
    </section>
  );
}
