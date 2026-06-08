import { useTranslation } from 'react-i18next';
import { SectionShell } from '../../app/layouts/SectionShell';
import { SectionHeader } from '../molecules/SectionHeader';
import { TechCard } from '../molecules/TechCard';

const technologies = {
  frontend: [
    'React',
    'Vue',
    'Angular',
    'TypeScript',
    'Three.js',
    'R3F',
    'Tailwind'
  ],
  backend: [
    'Laravel',
    'Spring Boot',
    'FastAPI',
    'WebSockets',
    'PostgreSQL',
    'Supabase',
    'REST APIs'
  ],
  immersive: [
    'Three.js',
    'R3F',
    'MindAR',
    'WebXR',
    'Whisper AI',
    'Unity'
  ],
  devops: [
    'Docker',
    'Jenkins',
    'Linux',
    'Git'
  ]
};

export const TechnologiesSection = () => {
  const { t } = useTranslation();

  return (
    <SectionShell>
        <SectionHeader title={t('technologies.title')} />

        <p
          className="mb-12 max-w-3xl font-['DM_Mono'] text-[0.9rem] font-light leading-[1.8] text-[var(--muted)] sm:mb-14 sm:text-[0.95rem] sm:leading-[1.9] md:mb-16 md:text-[1rem]"
        >
          {t('technologies.subtitle')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          <TechCard
            category={t('technologies.categories.frontend')}
            technologies={technologies.frontend}
            delay={0}
          />
          <TechCard
            category={t('technologies.categories.backend')}
            technologies={technologies.backend}
            delay={0.1}
          />
          <TechCard
            category={t('technologies.categories.immersive')}
            technologies={technologies.immersive}
            delay={0.2}
          />
          <TechCard
            category={t('technologies.categories.devops')}
            technologies={technologies.devops}
            delay={0.3}
          />
        </div>
    </SectionShell>
  );
};
