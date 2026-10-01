'use client';

import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '@/lib/motion';

interface CountUpProps {
  // e.g. "+ 15", "03", "2030": the digits count up, prefix/suffix and zero padding are kept.
  value: string;
  delay?: number;
}

const DURATION = 2200;

// Counts the number up once it scrolls into view. The server render, reduced motion and a number
// already on screen at load all show the final value. The visible text is updated through a ref
// (React keeps rendering `value`); screen readers get the final number from the sr-only copy.
export default function CountUp({ value, delay = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    const match = value.match(/^(\D*)(\d+)(\D*)$/);
    if (!element || !match || prefersReducedMotion()) return;
    if (element.getBoundingClientRect().top < window.innerHeight) return;

    const [, prefix, digits, suffix] = match;
    const target = Number(digits);
    const from = digits.length === 4 ? target - 30 : 0; // a year counts up its last stretch only
    const format = (n: number) => `${prefix}${String(n).padStart(digits.length, '0')}${suffix}`;
    element.textContent = format(from);

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now() + delay;
        const tick = (now: number) => {
          const progress = Math.min(1, Math.max(0, (now - start) / DURATION));
          const eased = 1 - (1 - progress) ** 3;
          element.textContent = format(Math.round(from + (target - from) * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      element.textContent = value;
    };
  }, [value, delay]);

  return (
    <>
      <span ref={ref} aria-hidden="true">
        {value}
      </span>
      <span className="sr-only">{value}</span>
    </>
  );
}
