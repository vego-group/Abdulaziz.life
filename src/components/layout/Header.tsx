'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import { NAVIGATION_ITEMS } from '@/constants/data';
import MaterialIcon from '@/components/ui/MaterialIcon';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link href="#top" className="nav-logo" onClick={closeMobileMenu}>
          {language === 'ar' ? (
            <>عبدالعزيز <span>السبيعي</span></>
          ) : (
            <>Abdul<span>aziz</span> Al-Suabie</>
          )}
        </Link>

        <ul className="nav-links">
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{t(item.label)}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button className="btn-lang" onClick={toggleLanguage}>
            {language === 'ar' ? 'EN' : 'عربي'}
          </button>

          <button className="btn-dark" onClick={toggleTheme} aria-label="Toggle theme">
            <MaterialIcon 
              icon={theme === 'dark' ? 'light_mode' : 'dark_mode'} 
              className="text-[1.1rem]"
            />
          </button>

          <Link href="#contact" className="btn-consult">
            <MaterialIcon icon="calendar_month" className="text-[1rem]" />
            <span>{language === 'ar' ? 'حجز استشارة' : 'Book Consultation'}</span>
          </Link>

          <button 
            className="btn-burger" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            <MaterialIcon 
              icon={isMobileMenuOpen ? 'close' : 'menu'} 
              className="text-[1.5rem]"
            />
          </button>
        </div>
      </div>

      <nav className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {NAVIGATION_ITEMS.map((item) => (
          <Link 
            key={item.href} 
            href={item.href} 
            onClick={closeMobileMenu}
          >
            {t(item.label)}
          </Link>
        ))}
        <Link 
          href="#contact" 
          onClick={closeMobileMenu}
          className="special-mobile-link"
        >
          📅 {language === 'ar' ? 'حجز استشارة' : 'Book Consultation'}
        </Link>
      </nav>
    </header>
  );
}
