'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { INSIGHTS } from '@/constants/data';

export default function InsightsSection() {
  const { language, t } = useLanguage();

  return (
    <section id="insights" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-page px-gutter py-section-xl">
        <h2 className="text-75 leading-[1.2047] font-bold tracking-[-1.5px] text-fg">{t(INSIGHTS.heading)}</h2>

        {/* The rule sits right under the heading; rows start 72px below it. */}
        <ol className="border-t border-line pt-10 lg:pt-18">
          {INSIGHTS.articles.map((article, index) => (
            <li
              key={article.title.en}
              className="flex flex-col gap-3 border-b border-line py-6 lg:h-[104px] lg:flex-row lg:items-center lg:justify-between lg:py-9"
            >
              <div className="flex items-center gap-6">
                <span className="font-mono text-11 leading-[17.6px] tracking-[0.88px] text-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-22 leading-[30.8px] font-semibold tracking-[-0.2px] text-fg">{t(article.title)}</h3>
              </div>
              <div className="flex items-center gap-5 max-lg:ps-[42px]">
                <span className="text-13 leading-4 font-medium tracking-label text-accent uppercase">
                  {t(article.category)}
                </span>
                <span className="font-mono text-14 leading-4 font-medium text-muted">{article.year}</span>
                <span aria-hidden="true" className="font-display text-14 leading-[22.4px] text-muted">
                  {language === 'ar' ? '←' : '→'}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
