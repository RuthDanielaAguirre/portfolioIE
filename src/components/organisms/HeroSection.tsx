import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { SectionShell } from '../../app/layouts/SectionShell';
import { MonoLabel } from '../atoms/MonoLabel';
import { ScrollIndicator } from '../atoms/ScrollIndicator';

export const HeroSection = () => {
  const { t } = useTranslation();
  const nameLines = ['Ruth /', 'Daniela /', 'Aguirre'];

  return (
    <SectionShell className="relative flex items-center justify-center overflow-hidden pt-20 md:pt-0" useContainer={false}>
      <div className="absolute inset-0 pointer-events-none">
        <svg aria-hidden="true" className="absolute inset-0 w-full h-full opacity-20">
          <motion.path
            d="M 0,300 Q 400,100 800,400 T 1600,300"
            stroke="var(--gold-main)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 3, ease: 'easeInOut' }}
          />
          <motion.path
            d="M 200,100 Q 600,500 1000,200 T 1800,600"
            stroke="var(--gold-light)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 4, delay: 0.5, ease: 'easeInOut' }}
          />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        <div className="mb-8 sm:mb-12">
          <MonoLabel>{t('hero.role')}</MonoLabel>
        </div>

        <motion.div
          className="my-12 sm:my-16 md:my-24 lg:my-32"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {nameLines.map((line) => (
            <h1
              key={line}
              className="font-['Cormorant_Garamond'] text-[15vw] font-light leading-[0.9] text-[var(--foreground)] sm:text-[12vw] sm:leading-[0.85] md:text-[10vw] lg:text-[8vw] xl:text-[7rem]"
            >
              {line}
            </h1>
          ))}
        </motion.div>

        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 font-['DM_Mono'] text-[1rem] font-light leading-[1.7] text-[var(--foreground)] sm:mb-6 sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.4rem]">
            {t('hero.tagline')}
          </p>
          <MonoLabel className="text-[0.65rem] sm:text-[0.75rem]">{t('hero.stack')}</MonoLabel>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-6 sm:bottom-12 sm:right-12 hidden sm:block">
        <ScrollIndicator />
      </div>
    </SectionShell>
  );
};
