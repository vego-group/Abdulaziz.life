import type { CSSProperties } from 'react';

// Delay for entrance animations (`motion-safe:animate-rise` and friends, see globals.css).
export const enterDelay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
