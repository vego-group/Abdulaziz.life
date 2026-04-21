'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import { NAVIGATION_ITEMS } from '@/constants/data';
import MaterialIcon from '@/components/ui/MaterialIcon';

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer>
      <div className="footer-inner">
        <div className="text-center">
          <div className="footer-logo">
            {language === 'ar' ? (
              <>عبدالعزيز <span>السبيعي</span></>
            ) : (
              <>Abdul<span>aziz</span> Al-Suabie</>
            )}
          </div>
          <div className="footer-copy">
            {language === 'ar' ? '© 2026 جميع الحقوق محفوظة' : '© 2026 All Rights Reserved'}
          </div>
        </div>

        <nav className="footer-nav">
          {NAVIGATION_ITEMS.map((item) => (
            <Link key={item.href} href={item.href}>
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="footer-actions">
          <a 
            href="mailto:contact@abdulaziz.life" 
            className="footer-icon-btn"
            aria-label="Email"
          >
            <MaterialIcon icon="mail" className="text-[1.1rem]" />
          </a>
          <a 
            href="https://wa.me/966555071670" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-icon-btn"
            aria-label="WhatsApp"
          >
            <MaterialIcon icon="chat" className="text-[1.1rem]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
