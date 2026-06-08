import { useTranslation } from 'react-i18next';
import { SectionShell } from '../../app/layouts/SectionShell';
import { SectionHeader } from '../molecules/SectionHeader';
import { GlassProjectCard } from '../molecules/GlassProjectCard';
import { projectsData } from '../../data/projectsData';
import type { ProjectId } from '../../types';

export const ProjectsGallery = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'es';

  const projects: ProjectId[] = ['mongame', 'lighthunt', 'arcade3d', 'tudu', 'femcoders'];

  return (
    <SectionShell>
        <SectionHeader title={t('projects.title')} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((key) => (
            <GlassProjectCard
              key={key}
              slug={projectsData[key].slug}
              name={projectsData[key].preview.name[lang]}
              role={projectsData[key].preview.role[lang]}
              description={projectsData[key].preview.description[lang]}
              stack={projectsData[key].preview.stack}
              year={projectsData[key].preview.year}
              viewCaseLabel={t('projects.viewCase')}
              githubUrl={projectsData[key].githubUrl}
            />
          ))}
        </div>
    </SectionShell>
  );
};
