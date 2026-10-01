'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { toggleTheme } from '@/lib/theme';

interface ThemeToggleProps {
  className?: string;
}

// Icons are swapped with CSS (`light:` variant), so the server and client render the same markup.
// Sun (Figma) in dark mode switches to light; moon (drawn to match) in light mode switches to dark.
export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { language } = useLanguage();
  const label = language === 'ar' ? 'تبديل المظهر' : 'Toggle theme'; // TODO: review EN copy

  return (
    <button type="button" onClick={toggleTheme} className={className} aria-label={label} title={label}>
      <span
        aria-hidden="true"
        className="block size-[21.5px] bg-muted [mask:url(/icons/sun.svg)_center/contain_no-repeat] light:hidden"
      />
      <span
        aria-hidden="true"
        className="hidden size-[21.5px] bg-muted [mask:url(/icons/moon.svg)_center/contain_no-repeat] light:block"
      />
    </button>
  );
}
