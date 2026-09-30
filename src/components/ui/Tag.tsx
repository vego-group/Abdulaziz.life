import type { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  // "overlay" sits on photos, "panel" on the dark text panels.
  tone?: 'panel' | 'overlay';
  className?: string;
}

const TONES = {
  panel: 'border-line py-1 text-muted',
  overlay: 'border-fg/15 py-[5px] text-fg/90',
};

export default function Tag({ children, tone = 'panel', className = '' }: TagProps) {
  return (
    <span className={`inline-block border px-2.5 text-9 leading-[14.4px] tracking-label uppercase ${TONES[tone]} ${className}`}>
      {children}
    </span>
  );
}
