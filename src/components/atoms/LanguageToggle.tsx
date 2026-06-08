import { useTranslation } from 'react-i18next';

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="font-['DM_Mono'] text-[0.75rem] tracking-[0.12em] uppercase px-4 py-2 transition-all duration-300 hover:scale-105 rounded-lg"
      style={{
        fontWeight: 300,
        color: 'var(--foreground)',
        border: '1px solid rgba(244, 208, 111, 0.28)',
        background: 'rgba(10, 10, 8, 0.88)',
        backdropFilter: 'blur(12px)'
      }}
      aria-label={`Switch to ${currentLang === 'es' ? 'English' : 'Español'}`}
    >
      {currentLang === 'es' ? 'EN' : 'ES'}
    </button>
  );
};
