import { useTranslation } from 'react-i18next';
import { SectionShell } from '../../app/layouts/SectionShell';
import { SectionHeader } from '../molecules/SectionHeader';
import { ProcessCard } from '../molecules/ProcessCard';

export const ProcessSection = () => {
  const { t } = useTranslation();

  return (
    <SectionShell>
        <SectionHeader title={t('process.title')} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 md:gap-14 lg:gap-16">
          <ProcessCard
            title={t('process.observe.title')}
            intro={t('process.observe.intro')}
            points={t('process.observe.points', { returnObjects: true }) as string[]}
            delay={0}
          />
          <ProcessCard
            title={t('process.design.title')}
            intro={t('process.design.intro')}
            description={t('process.design.description')}
            delay={0.2}
          />
          <ProcessCard
            title={t('process.build.title')}
            intro={t('process.build.intro')}
            description={t('process.build.description')}
            delay={0.4}
          />
        </div>
    </SectionShell>
  );
};
