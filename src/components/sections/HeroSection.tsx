'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/hooks/useLanguage';
import { BIO_INFO, HERO } from '@/constants/data';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    // Desktop: fills the viewport below the nav, between the design's min height (708px) and its
    // 856px frame height. Below lg the photo stacks under the text.
    <section className="grid lg:min-h-[clamp(708px,calc(100svh_-_var(--spacing-nav)),856px)] lg:grid-cols-2">
      <div className="flex flex-col justify-center px-gutter py-16 lg:py-20 lg:pe-15">
        <h1 className="mb-9.5 text-100 leading-[1.15] font-semibold tracking-[-0.03em] text-balance text-fg">
          {t(HERO.title)}
        </h1>

        {/* Figma box is 522px; the first line measures 521.9px in Chrome, so 520px reproduces the Figma line break. */}
        <p className="mb-12 max-w-[520px] text-18 leading-[1.7] font-medium text-muted">{t(HERO.intro)}</p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/#work"
            className="rounded-control bg-accent px-7 py-3.5 text-13 font-semibold text-fg transition hover:brightness-110"
          >
            {t(HERO.primaryCta)}
          </Link>
          <Link
            href="/#contact"
            className="rounded-control border border-muted px-7 py-3.5 text-center text-13 font-medium text-muted transition-colors hover:border-fg hover:text-fg sm:w-45 sm:px-0"
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
          className="object-cover object-[35.6%_center] sm:object-[35.6%_22%] lg:object-[35.6%_center]"
        />

        <div className="absolute start-5 bottom-5 rounded-badge border border-white/8 bg-glass px-6 py-4 backdrop-blur-md lg:start-10 lg:bottom-10.5">
          <p className="font-mono text-10 tracking-[1.2px] text-white/50 uppercase">{t(HERO.locationLabel)}</p>
          <p className="pt-1 text-12 leading-[22.4px] font-medium whitespace-nowrap text-fg">{t(HERO.location)}</p>
        </div>
      </div>
    </section>
  );
}
