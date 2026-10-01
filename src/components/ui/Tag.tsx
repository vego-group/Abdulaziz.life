import type { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  // "panel" on dark text panels, "overlay" on photos (Work), "hero" on the case-study hero photo.
  tone?: 'panel' | 'overlay' | 'hero';
  className?: string;
}

const TONES = {
  panel: 'border-line px-2.5 py-1 text-9 leading-[14.4px] tracking-label text-muted uppercase',
  overlay: 'border-on-media/15 px-2.5 py-[5px] text-9 leading-[14.4px] tracking-label text-on-media/90 uppercase',
  hero: 'border-on-media/15 px-3 py-[5px] text-11 leading-[17.6px] text-on-media/50',
};

export default function Tag({ children, tone = 'panel', className = '' }: TagProps) {
  return <span className={`inline-block border ${TONES[tone]} ${className}`}>{children}</span>;
}
