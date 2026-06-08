import type { ImagePaths, ProjectLinks } from '../types';

// Configuración centralizada de imágenes del portafolio

export const images: ImagePaths = {
  profile: '/images/profile/profile.jpg',

  projects: {
    mongame: '/images/projects/mongame.png',
    lighthunt: '/images/projects/lighthunt.png',
    tudu: '/images/projects/tudu.png',
    femcoders: '/images/projects/femcoders.png',
    arcade3d: '/images/projects/arcade3d.png'
  },

  origin: [
    '/images/broellin.jpg',
    '/images/yumiko.jpg',
    '/images/videomapping.jpg',
    '/images/cyborg4.jpg',
    '/images/fgs.jpg',
    '/images/cyborg2.jpg'
  ]
};

// GitHub links para cada proyecto
export const projectLinks: ProjectLinks = {
  mongame: 'https://github.com/RuthDanielaAguirre/MonGame',
  lighthunt: 'https://github.com/RuthDanielaAguirre/GameJam',
  tudu: 'https://github.com/RuthDanielaAguirre/TUDU',
  femcoders: 'https://github.com/RuthDanielaAguirre/femCodersClub_Project',
  arcade3d: 'https://github.com/RuthDanielaAguirre/arcade-store-3d'
};
