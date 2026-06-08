export interface UseScrollTrackingOptions {
  threshold?: number;
}

export interface UseScrollVisibilityOptions {
  showAfter?: number;
}

export interface UseMobileMenuReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export interface UseNavigationReturn {
  isHomePage: boolean;
  scrollToSection: (href: string) => void;
  scrollToTop: () => void;
}

export interface UseProjectReturn {
  project: import('./project.types').ProjectData | undefined;
  lang: import('./project.types').Language;
  caseStudy: import('./project.types').ProjectCaseStudy | undefined;
}
