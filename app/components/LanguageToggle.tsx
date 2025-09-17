'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 bg-white hover:bg-gray-50 text-gray-800 font-bold py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
      aria-label={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <div className="flex items-center gap-2">
        <span className="text-lg">
          {language === 'ar' ? '🇺🇸' : '🇪🇬'}
        </span>
        <span className="text-sm font-medium">
          {language === 'ar' ? 'EN' : 'عربي'}
        </span>
      </div>
    </button>
  );
}
