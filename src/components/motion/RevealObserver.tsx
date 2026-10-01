'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { prefersReducedMotion } from '@/lib/motion';

const PENDING = 'data-reveal-pending';
const STAGGER_STEP = 120; // ms between elements that come into view together
const STAGGER_MAX = 5;

// Reveals [data-reveal] elements once each, as they scroll into view (styles in globals.css).
// Only elements fully below the fold at hydration are hidden, so nothing on screen flashes, and
// elements rendered later simply show. Runs again after client-side navigation.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const pending = [...document.querySelectorAll<HTMLElement>('[data-reveal]')].filter(
      (element) => element.getBoundingClientRect().top >= window.innerHeight,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        // Entries arrive in document order; elements arriving together rise one after another.
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, order) => {
            const element = entry.target as HTMLElement;
            element.style.setProperty('--reveal-delay', `${Math.min(order, STAGGER_MAX) * STAGGER_STEP}ms`);
            element.removeAttribute(PENDING);
            observer.unobserve(element);
          });
      },
      { rootMargin: '0px 0px -8% 0px' },
    );

    pending.forEach((element) => {
      element.setAttribute(PENDING, '');
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      pending.forEach((element) => element.removeAttribute(PENDING));
    };
  }, [pathname]);

  return null;
}
