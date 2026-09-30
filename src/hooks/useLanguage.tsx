'use client';

import { createContext, useContext, useEffect, useSyncExternalStore, ReactNode } from 'react';
import { Language, Translation } from '@/types';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (translation: Translation) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Client language store: read once from localStorage, then kept in memory (so toggling still works
// when storage is blocked). The server always renders Arabic.
const STORAGE_KEY = 'lang';
const listeners = new Set<() => void>();
let current: Language | null = null;

function notify() {
  listeners.forEach((listener) => listener());
}

function onStorage(event: StorageEvent) {
  if (event.key !== STORAGE_KEY) return;
  current = null; // changed in another tab: re-read
  notify();
}

function subscribe(listener: () => void) {
  if (listeners.size === 0) window.addEventListener('storage', onStorage);
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) window.removeEventListener('storage', onStorage);
  };
}

function getSnapshot(): Language {
  if (current === null) {
    try {
      current = localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'ar';
    } catch {
      current = 'ar';
    }
  }
  return current;
}

const getServerSnapshot = (): Language => 'ar';

function setLanguage(language: Language) {
  current = language;
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Storage unavailable: the choice lasts for this page view only.
  }
  notify();
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [language]);

  const toggleLanguage = () => setLanguage(language === 'ar' ? 'en' : 'ar');

  const t = (translation: Translation): string => translation[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
