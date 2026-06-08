export interface EditorialImage {
  src: string;
  alt: string;
  aspectRatio: string;
}

export interface ImagePaths {
  profile: string;
  projects: Record<string, string>;
  origin: string[];
}

export interface ProjectLinks {
  mongame: string;
  lighthunt: string;
  tudu: string;
  femcoders: string;
  arcade3d: string;
}
