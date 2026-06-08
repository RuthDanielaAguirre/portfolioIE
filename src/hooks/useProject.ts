import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projectsData } from '../data/projectsData';
import type { UseProjectReturn, Language } from '../types';

export const useProject = (): UseProjectReturn => {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();

  const project = Object.values(projectsData).find((p) => p.slug === slug);
  const lang = i18n.language as Language;

  return {
    project,
    lang,
    caseStudy: project?.caseStudy
  };
};
