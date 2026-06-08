import { useEffect, type ReactNode } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { SerifTitle } from '../../components/atoms/SerifTitle';
import { GoldLine } from '../../components/atoms/GoldLine';
import { MonoLabel } from '../../components/atoms/MonoLabel';
import { SafeImage } from '../../components/atoms/SafeImage';
import { Tag } from '../../components/atoms/Tag';
import { ProjectActionLink } from '../../components/molecules/ProjectActionLink';
import { ProjectDetailSection } from '../../components/molecules/ProjectDetailSection';
import { useProject, useNavigation } from '../../hooks';
import { ROUTES } from '../../lib/routes';
import { applySEO, getProjectSEO } from '../../lib/seo';

export const ProjectDetailPage = () => {
  const { t } = useTranslation();
  const { project, lang, caseStudy } = useProject();
  const { scrollToTop } = useNavigation();

  if (!project || !caseStudy) {
    return <Navigate to="/" replace />;
  }

  useEffect(() => {
    applySEO(
      {
        ...getProjectSEO(
          project.preview.name[lang],
          project.preview.description[lang],
          lang
        ),
        url: ROUTES.PROJECTS.DETAIL(project.slug),
        image: project.image
      }
    );
  }, [project, lang]);

  const actionLinks = [
    project.githubUrl
      ? {
          href: project.githubUrl,
          label: lang === 'es' ? 'Ver codigo' : 'View code',
          icon: Github,
          variant: 'subtle' as const
        }
      : null,
    project.demoUrl
      ? {
          href: project.demoUrl,
          label: lang === 'es' ? 'Ver demo' : 'View demo',
          icon: ExternalLink,
          variant: 'primary' as const
        }
      : null
  ].filter((link): link is NonNullable<typeof link> => link !== null);

  const sections: Array<{ id: string; title: string; content: ReactNode }> = [
    {
      id: 'context',
      title: lang === 'es' ? 'Contexto' : 'Context',
      content: <p className="text-content">{caseStudy.context[lang]}</p>
    },
    {
      id: 'problem',
      title: lang === 'es' ? 'Problema' : 'Problem',
      content: <p className="text-content">{caseStudy.problem[lang]}</p>
    },
    {
      id: 'architecture',
      title: lang === 'es' ? 'Arquitectura' : 'Architecture',
      content: <p className="text-content">{caseStudy.architecture[lang]}</p>
    },
    {
      id: 'technologies',
      title: lang === 'es' ? 'Tecnologias' : 'Technologies',
      content: (
        <div className="flex flex-wrap gap-2">
          {caseStudy.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      )
    },
    {
      id: 'challenges',
      title: lang === 'es' ? 'Retos' : 'Challenges',
      content: (
        <ul className="space-y-3">
          {caseStudy.challenges[lang].map((challenge, index) => (
            <li
              key={`${project.id}-challenge-${index}`}
              className="flex items-start gap-3 font-['DM_Mono'] text-[0.9rem] font-light leading-[1.8] text-[var(--foreground)] sm:text-[0.95rem]"
            >
              <span className="text-[var(--gold-main)]">-</span>
              {challenge}
            </li>
          ))}
        </ul>
      )
    },
    {
      id: 'solution',
      title: lang === 'es' ? 'Solucion' : 'Solution',
      content: <p className="text-content">{caseStudy.solution[lang]}</p>
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to={ROUTES.PROJECTS.INDEX}
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 mb-8 font-['DM_Mono'] text-[0.75rem] tracking-[0.1em] uppercase hover:text-[var(--gold-main)] transition-colors"
            style={{ fontWeight: 300, color: 'var(--muted)' }}
          >
            <ArrowLeft size={16} />
            {lang === 'es' ? 'Volver a proyectos' : 'Back to projects'}
          </Link>

          <div className="mb-8 sm:mb-12">
            <MonoLabel className="mb-4">
              {lang === 'es' ? 'Caso de Estudio' : 'Case Study'}
            </MonoLabel>
            <SerifTitle size="xl" italic className="mb-6">
              {project.preview.name[lang]}
            </SerifTitle>
            <MonoLabel>{project.preview.role[lang]}</MonoLabel>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            {actionLinks.map((link) => (
              <ProjectActionLink
                key={link.href}
                href={link.href}
                label={link.label}
                icon={link.icon}
                variant={link.variant}
              />
            ))}
          </div>

          <div className="mb-16 aspect-video w-full overflow-hidden rounded-2xl border border-[rgba(244,208,111,0.2)] bg-[rgba(244,208,111,0.08)]">
            <SafeImage
              src={project.image}
              alt={project.preview.name[lang]}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-16">
            {sections.map((section) => (
              <ProjectDetailSection key={section.id} title={section.title}>
                {section.content}
              </ProjectDetailSection>
            ))}
          </div>

          <GoldLine className="my-16" opacity={0.3} />

          <div className="text-center">
            <Link
              to={ROUTES.PROJECTS.INDEX}
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 font-['DM_Mono'] text-[0.8rem] tracking-[0.1em] uppercase hover:text-[var(--gold-main)] transition-colors"
              style={{ fontWeight: 300, color: 'var(--muted)' }}
            >
              {lang === 'es' ? 'Ver más proyectos' : 'View more projects'} →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
