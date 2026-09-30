'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { VISION } from '@/constants/data';

export default function VisionStripe() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-line">
      {/* Figma places the quote 123px from the top and 83px from the bottom of the 374px band. */}
      <div className="mx-auto max-w-page px-gutter py-16 lg:pt-[123px] lg:pb-[83px]">
        <blockquote className="text-70 leading-[1.2] tracking-[-0.8px] text-fg">{t(VISION.stripeQuote)}</blockquote>
      </div>
    </section>
  );
}
