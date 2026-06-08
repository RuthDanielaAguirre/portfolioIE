import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HeroSection } from '../../components/organisms/HeroSection';
import { ProjectsGallery } from '../../components/organisms/ProjectsGallery';
import { TechnologiesSection } from '../../components/organisms/TechnologiesSection';
import { OriginSection } from '../../components/organisms/OriginSection';
import { ProcessSection } from '../../components/organisms/ProcessSection';
import { Footer } from '../../components/organisms/Footer';
import { ROUTES } from '../../lib/routes';
import { applySEO, getDefaultSEO } from '../../lib/seo';

export const HomePage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language === 'en' ? 'en' : 'es';
    applySEO({
      ...getDefaultSEO(lang),
      url: ROUTES.HOME
    });
  }, [i18n.language]);

  return (
    <>
      <section id="hero">
        <HeroSection />
      </section>

      <section id="projects">
        <ProjectsGallery />
      </section>

      <section id="technologies">
        <TechnologiesSection />
      </section>

      <section id="origin">
        <OriginSection />
      </section>

      <section id="process">
        <ProcessSection />
      </section>

      <Footer />
    </>
  );
};
