/**
 * Application routes configuration
 */

export const ROUTES = {
  HOME: "/",
  PROJECTS: {
    INDEX: "/#projects",
    DETAIL_PATTERN: "/projects/:slug",
    DETAIL: (slug: string) => `/projects/${slug}`,
    MONGAME: "/projects/mongame",
    LIGHTHUNT: "/projects/the-lighthunt",
    TUDU: "/projects/tudu",
    FEMCODERS: "/projects/femcoders-club",
    ARCADE3D: "/projects/arcade-3d",
  },
  SECTIONS: {
    HERO: "#hero",
    PROJECTS: "#projects",
    TECHNOLOGIES: "#technologies",
    ORIGIN: "#origin",
    PROCESS: "#process",
  },
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];