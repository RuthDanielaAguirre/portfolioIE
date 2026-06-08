import { ReactNode } from 'react';

// Atom Props
export interface MonoLabelProps {
  children: ReactNode;
  className?: string;
}

export interface SerifTitleProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  italic?: boolean;
  className?: string;
}

export interface GoldLineProps {
  width?: string;
  opacity?: number;
  className?: string;
}

export interface TagProps {
  children: string;
}

export interface ImageRevealProps {
  src: string;
  alt: string;
  aspectRatio?: string;
}

// Molecule Props
export interface GlassProjectCardProps {
  slug: string;
  name: string;
  role: string;
  description: string;
  stack: string[];
  year: string;
  viewCaseLabel: string;
  githubUrl?: string;
}

export interface SectionHeaderProps {
  title: string;
  align?: 'left' | 'center';
}

export interface ProcessCardProps {
  title: string;
  intro: string;
  description?: string;
  points?: string[];
  delay?: number;
}

export interface TechCardProps {
  category: string;
  technologies: string[];
  delay?: number;
}

// Section Props
export interface SectionProps {
  title: string;
  children: ReactNode;
}
