'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import { NAVIGATION_ITEMS } from '@/constants/data';
import ThemeToggle from '@/components/ui/ThemeToggle';

const LOGO = { ar: 'عبدالعزيز', en: 'Abdulaziz' }; // TODO: review EN copy

const controlClass =
  'flex size-10 shrink-0 items-center justify-center rounded-control border border-line bg-surface transition-colors hover:border-muted';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const bookLabel = language === 'ar' ? 'احجز استشارة' : 'Book a Consultation';

  return (
    // Transparent at the top of the page (as in the design), solid once content scrolls underneath.
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled || isMenuOpen ? 'bg-nav backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-nav max-w-page items-center justify-between px-gutter">
        {/* Latin text gets Instrument Sans italic; Arabic falls back to Plex upright, as in the design. */}
        <Link
          href="/"
          onClick={closeMenu}
          className="font-display text-18 tracking-[0.02em] text-fg italic [font-synthesis:none]"
        >
          {t(LOGO)}
        </Link>

        <nav aria-label={language === 'ar' ? 'التنقل الرئيسي' : 'Main navigation'} className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.href}>
                {/* Underline grows from the start edge on hover, in the text colour. */}
                <Link
                  href={item.href}
                  className="relative text-13 font-medium tracking-label text-muted transition-colors after:absolute after:start-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-[width] hover:text-fg hover:after:w-full"
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden rounded-control bg-accent px-5 py-2.5 text-12 font-semibold tracking-label text-on-accent transition hover:brightness-110 active:scale-[0.98] sm:block"
          >
            {bookLabel}
          </Link>

          <ThemeToggle className={controlClass} />

          <button
            type="button"
            onClick={toggleLanguage}
            className={controlClass}
            aria-label={language === 'ar' ? 'English' : 'العربية'}
            title={language === 'ar' ? 'English' : 'العربية'}
          >
            {/* Figma icon used as a mask so it takes the theme's muted color. */}
            <span
              aria-hidden="true"
              className="block size-[21.5px] bg-muted [mask:url(/icons/language.svg)_center/contain_no-repeat]"
            />
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`${controlClass} lg:hidden`}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={language === 'ar' ? 'القائمة' : 'Menu'}
          >
            <span className="relative block h-3 w-4.5" aria-hidden="true">
              <span
                className={`absolute inset-x-0 h-px bg-muted transition-transform ${isMenuOpen ? 'top-1.5 rotate-45' : 'top-0'}`}
              />
              <span
                className={`absolute inset-x-0 top-1.5 h-px bg-muted transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`absolute inset-x-0 h-px bg-muted transition-transform ${isMenuOpen ? 'top-1.5 -rotate-45' : 'top-3'}`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Stacked menu below lg. */}
      <nav
        id="mobile-menu"
        aria-label={language === 'ar' ? 'التنقل الرئيسي' : 'Main navigation'}
        className={`${isMenuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col border-b border-line bg-ink px-gutter pb-6 motion-safe:animate-drop lg:hidden`}
      >
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            className="border-b border-line py-4 text-16 font-medium text-muted transition-colors hover:text-fg"
          >
            {t(item.label)}
          </Link>
        ))}
        <Link
          href="/#contact"
          onClick={closeMenu}
          className="mt-6 rounded-control bg-accent py-3.5 text-center text-13 font-semibold tracking-label text-on-accent sm:hidden"
        >
          {bookLabel}
        </Link>
      </nav>
    </header>
  );
}
