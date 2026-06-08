export type ProjectId = 'mongame' | 'lighthunt' | 'tudu' | 'femcoders' | 'arcade3d';

export interface LocalizedText {
  es: string;
  en: string;
}

export interface ProjectPreview {
  name: LocalizedText;
  role: LocalizedText;
  description: LocalizedText;
  stack: string[];
  year: string;
}

export interface ProjectCaseStudy {
  context: LocalizedText;
  problem: LocalizedText;
  architecture: LocalizedText;
  technologies: string[];
  challenges: {
    es: string[];
    en: string[];
  };
  solution: LocalizedText;
  demo?: {
    es: string;
    en: string;
  };
}

export interface ProjectData {
  id: ProjectId;
  slug: string;
  githubUrl: string;
  demoUrl?: string;
  image: string;
  preview: ProjectPreview;
  caseStudy: ProjectCaseStudy;
}

export type Language = 'es' | 'en';
