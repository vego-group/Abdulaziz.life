// Theme: follows the visitor's system setting until they use the header toggle, which stores an
// explicit choice and sets <html data-theme="light|dark">. The CSS side lives in globals.css.

export type Theme = 'light' | 'dark';

// New key on purpose: the previous site saved "theme=light" for every visitor automatically.
export const THEME_STORAGE_KEY = 'color-theme';

// Inlined in <head> so a stored choice applies before the first paint (no flash of the other theme).
export const themeInitScript = `try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`;

export function getActiveTheme(): Theme {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === 'light' || chosen === 'dark') return chosen;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function toggleTheme() {
  const next: Theme = getActiveTheme() === 'light' ? 'dark' : 'light';
  const apply = () => {
    document.documentElement.dataset.theme = next;
  };
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // Storage blocked: the choice lasts for this page view only.
  }

  // Cross-fade between themes where View Transitions exist (styled in globals.css); instant otherwise.
  if (document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.startViewTransition(apply);
  } else {
    apply();
  }
}
