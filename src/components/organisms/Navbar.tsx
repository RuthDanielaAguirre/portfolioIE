import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { LanguageToggle } from '../atoms/LanguageToggle';
import { useScrollTracking, useMobileMenu, useNavigation } from '../../hooks';
import { ROUTES } from '../../lib/routes';

const navLinks = [
  { key: 'hero', labelEs: 'Inicio', labelEn: 'Home', href: ROUTES.SECTIONS.HERO },
  { key: 'projects', labelEs: 'Proyectos', labelEn: 'Projects', href: ROUTES.SECTIONS.PROJECTS },
  { key: 'technologies', labelEs: 'Stack', labelEn: 'Stack', href: ROUTES.SECTIONS.TECHNOLOGIES },
  { key: 'origin', labelEs: 'Origen', labelEn: 'Origin', href: ROUTES.SECTIONS.ORIGIN },
  { key: 'process', labelEs: 'Proceso', labelEn: 'Process', href: ROUTES.SECTIONS.PROCESS }
];

export const Navbar = () => {
  const { i18n } = useTranslation();
  const { scrollY } = useScroll();
  const isScrolled = useScrollTracking({ threshold: 50 });
  const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu();
  const { isHomePage, scrollToSection: navigateToSection } = useNavigation();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 10, 8, 0)', 'rgba(10, 10, 8, 0.92)']
  );

  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.28]);

  const padding = useTransform(scrollY, [0, 100], ['1.5rem', '1rem']);

  const scrollToSection = (href: string) => {
    navigateToSection(href);
    closeMobileMenu();
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      scrollToSection('#hero');
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor,
          backdropFilter: isScrolled ? 'blur(20px) saturate(120%)' : 'blur(0px)',
          borderBottom: `1px solid rgba(244, 208, 111, ${borderOpacity.get()})`
        }}
      >
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex items-center justify-between"
          style={{ paddingTop: padding, paddingBottom: padding }}
        >
          <Link to="/" onClick={handleLogoClick}>
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <span
                className="font-['Cormorant_Garamond'] text-[1.1rem] sm:text-[1.2rem] italic hidden sm:block"
                style={{ fontWeight: 300, color: 'var(--foreground)' }}
              >
                Ruth Daniela Aguirre
              </span>
              <span
                className="font-['Cormorant_Garamond'] text-[1.1rem] italic sm:hidden"
                style={{ fontWeight: 300, color: 'var(--foreground)' }}
              >
                RDA
              </span>
            </motion.div>
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
            <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.key}
                  href={`${ROUTES.HOME}${link.href}`}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="group font-['DM_Mono'] text-[0.7rem] xl:text-[0.75rem] tracking-[0.1em] uppercase relative px-2 pb-2"
                  style={{ fontWeight: 300 }}
                  transition={{ duration: 0.3 }}
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  variants={{
                    rest: { color: 'var(--muted)', y: 0 },
                    hover: {
                      color: 'var(--gold-main)',
                      y: -1,
                      textShadow: '0 0 18px rgba(244, 208, 111, 0.22)'
                    }
                  }}
                >
                  <motion.div
                    className="absolute inset-x-0 top-1/2 h-8 -translate-y-1/2 rounded-full"
                    style={{ background: 'rgba(244, 208, 111, 0.08)' }}
                    variants={{
                      rest: { opacity: 0, scale: 0.92 },
                      hover: { opacity: 1, scale: 1 }
                    }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.span
                    className="relative z-10 inline-block"
                    variants={{
                      rest: { opacity: 0.86 },
                      hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    {i18n.language === 'es' ? link.labelEs : link.labelEn}
                  </motion.span>
                  <motion.div
                    className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full origin-left"
                    style={{ background: 'var(--gold-main)' }}
                    variants={{
                      rest: { scaleX: 0.2, opacity: 0 },
                      hover: { scaleX: 1, opacity: 1 }
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <LanguageToggle />
            </div>

            <motion.button
              className="lg:hidden p-2 rounded-lg"
              style={{
                border: '1px solid rgba(244,208,111,0.3)',
                background: 'rgba(10,10,8,0.6)'
              }}
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.95 }}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isMobileMenuOpen ? (
                <X size={20} style={{ color: 'var(--gold-main)' }} />
              ) : (
                <Menu size={20} style={{ color: 'var(--gold-main)' }} />
              )}
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'rgba(10, 10, 8, 0.98)',
                backdropFilter: 'blur(20px)'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative h-full flex flex-col items-center justify-center px-6"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav id="mobile-navigation" aria-label="Mobile navigation" className="flex flex-col items-center gap-8 mb-12">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.key}
                    href={`${ROUTES.HOME}${link.href}`}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="font-['Cormorant_Garamond'] text-[2rem] sm:text-[2.5rem] italic"
                    style={{ fontWeight: 300, color: 'var(--foreground)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ color: 'var(--gold-main)', x: 10 }}
                  >
                    {i18n.language === 'es' ? link.labelEs : link.labelEn}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <LanguageToggle />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
