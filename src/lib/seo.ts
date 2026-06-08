/**
 * SEO utilities and metadata configuration
 */

export interface SEOConfig {
  title: string;
  description: string;
  url?: string;
  image?: string;
  locale?: string;
  type?: 'website' | 'article';
}

const trimTrailingSlash = (value: string): string => value.replace(/\/$/, '');

export const getSiteUrl = (): string => {
  const envUrl = import.meta.env.VITE_SITE_URL;

  if (typeof envUrl === 'string' && envUrl.length > 0) {
    return trimTrailingSlash(envUrl.startsWith('http') ? envUrl : `https://${envUrl}`);
  }

  if (typeof window !== 'undefined' && window.location.origin) {
    return trimTrailingSlash(window.location.origin);
  }

  return 'https://your-domain.com';
};

export const toAbsoluteUrl = (value: string): string => {
  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value;
  }

  return `${getSiteUrl()}${value.startsWith('/') ? value : `/${value}`}`;
};

export const getDefaultSEO = (lang: 'es' | 'en'): SEOConfig => ({
  title:
    lang === 'es'
      ? 'Ruth Daniela Aguirre | Fullstack Developer y creadora de experiencias'
      : 'Ruth Daniela Aguirre | Fullstack Developer & Product Builder',
  description:
    lang === 'es'
      ? 'Portfolio de Ruth Daniela Aguirre, desarrolladora fullstack especializada en producto, interfaces narrativas y experiencias digitales con identidad visual fuerte.'
      : 'Portfolio of Ruth Daniela Aguirre, fullstack developer focused on products, narrative interfaces, and technically intentional digital experiences.',
  url: '/',
  image: toAbsoluteUrl('/images/projects/mongame.png'),
  locale: lang === 'es' ? 'es_ES' : 'en_US',
  type: 'website'
});

export const getProjectSEO = (projectName: string, description: string, lang: 'es' | 'en'): SEOConfig => ({
  title:
    lang === 'es'
      ? `${projectName} | Caso de estudio | Ruth Daniela Aguirre`
      : `${projectName} | Case Study | Ruth Daniela Aguirre`,
  description,
  image: toAbsoluteUrl('/images/projects/mongame.png'),
  locale: lang === 'es' ? 'es_ES' : 'en_US',
  type: 'article'
});

/**
 * Generate page title with site name
 */
export const getPageTitle = (pageTitle?: string, lang: 'es' | 'en' = 'es'): string => {
  if (!pageTitle) return getDefaultSEO(lang).title;
  return `${pageTitle} | Ruth Daniela Aguirre`;
};

/**
 * Update document title
 */
export const updateDocumentTitle = (title: string): void => {
  if (typeof document !== 'undefined') {
    document.title = title;
  }
};

/**
 * Update meta description
 */
export const updateMetaDescription = (description: string): void => {
  if (typeof document !== 'undefined') {
    const meta = document.querySelector('meta[name="description"]');
    if (meta instanceof HTMLMetaElement) {
      meta.setAttribute('content', description);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }
  }
};

const upsertMetaTag = (selector: string, attribute: 'name' | 'property', key: string, value: string): void => {
  if (typeof document === 'undefined') {
    return;
  }

  const meta = document.querySelector(selector);
  if (meta instanceof HTMLMetaElement) {
    meta.setAttribute('content', value);
    return;
  }

  const newMeta = document.createElement('meta');
  newMeta.setAttribute(attribute, key);
  newMeta.content = value;
  document.head.appendChild(newMeta);
};

const upsertCanonicalLink = (href: string): void => {
  if (typeof document === 'undefined') {
    return;
  }

  const existingLink = document.querySelector('link[rel="canonical"]');
  if (existingLink instanceof HTMLLinkElement) {
    existingLink.href = href;
    return;
  }

  const link = document.createElement('link');
  link.rel = 'canonical';
  link.href = href;
  document.head.appendChild(link);
};

export const applySEO = ({ title, description, image, url = '/', locale = 'es_ES', type = 'website' }: SEOConfig): void => {
  const absoluteUrl = toAbsoluteUrl(url);

  updateDocumentTitle(title);
  updateMetaDescription(description);
  upsertCanonicalLink(absoluteUrl);
  upsertMetaTag('meta[property="og:url"]', 'property', 'og:url', absoluteUrl);
  upsertMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
  upsertMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
  upsertMetaTag('meta[property="og:type"]', 'property', 'og:type', type);
  upsertMetaTag('meta[property="og:locale"]', 'property', 'og:locale', locale);
  upsertMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
  upsertMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  upsertMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');

  if (image) {
    const absoluteImage = toAbsoluteUrl(image);
    upsertMetaTag('meta[property="og:image"]', 'property', 'og:image', absoluteImage);
    upsertMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', absoluteImage);
  }
};
