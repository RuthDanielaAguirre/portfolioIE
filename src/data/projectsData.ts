import type { ProjectData, ProjectId } from '../types';

export const projectsData: Record<ProjectId, ProjectData> = {
  mongame: {
    id: 'mongame',
    slug: 'mongame',
    githubUrl: 'https://github.com/RuthDanielaAguirre/MonGame',
    demoUrl: 'https://youtube.com/shorts/30x-3nQtL3k?feature=share',
    image: '/images/projects/mongame.png',
    preview: {
      name: { es: 'Mongame', en: 'Mongame' },
      role: {
        es: 'Fullstack Developer & Experiencias Interactivas',
        en: 'Fullstack Developer & Interactive Experiences'
      },
      description: {
        es: 'Plataforma educativa inmersiva para interacción en tiempo real en el aula.',
        en: 'Immersive educational platform for real-time classroom interaction.'
      },
      stack: ['React', 'Three.js', 'R3F', 'Laravel', 'Sanctum', 'Reverb', 'PostgreSQL'],
      year: '2026'
    },
    caseStudy: {
      context: {
        es: 'Mongame es una plataforma educativa inmersiva diseñada para transformar la manera en que los estudiantes interactúan en el aula mediante experiencias 3D en tiempo real.',
        en: 'Mongame is an immersive educational platform designed to transform the way students interact in the classroom through real-time 3D experiences.'
      },
      problem: {
        es: 'Las plataformas educativas tradicionales carecen de elementos interactivos que capturen la atención de los estudiantes y faciliten el aprendizaje colaborativo en tiempo real.',
        en: 'Traditional educational platforms lack interactive elements that capture student attention and facilitate collaborative learning in real time.'
      },
      architecture: {
        es: 'Arquitectura fullstack con React y Three.js en el frontend, Laravel como API REST, PostgreSQL para persistencia, Laravel Sanctum para autenticación y Laravel Reverb para comunicación en tiempo real mediante WebSockets.',
        en: 'Fullstack architecture with React and Three.js on the frontend, Laravel as REST API, PostgreSQL for persistence, Laravel Sanctum for authentication and Laravel Reverb for real-time communication via WebSockets.'
      },
      technologies: ['React', 'TypeScript', 'Three.js', 'R3F', 'Laravel', 'Sanctum', 'Reverb', 'PostgreSQL'],
      challenges: {
        es: [
          'Sincronización de múltiples usuarios en escenas 3D en tiempo real',
          'Optimización de rendimiento para experiencias 3D fluidas en navegadores',
          'Gestión de estado compartido entre usuarios conectados',
          'Diseño de interfaz intuitiva que combine 2D y 3D sin sacrificar usabilidad'
        ],
        en: [
          'Synchronization of multiple users in real-time 3D scenes',
          'Performance optimization for smooth 3D experiences in browsers',
          'Shared state management between connected users',
          'Intuitive interface design that combines 2D and 3D without sacrificing usability'
        ]
      },
      solution: {
        es: 'Implementé un sistema de broadcasting eficiente con Laravel Reverb que sincroniza las acciones de los usuarios en tiempo real. La arquitectura modular permite escalar tanto horizontal como verticalmente según la demanda.',
        en: 'I implemented an efficient broadcasting system with Laravel Reverb that synchronizes user actions in real time. The modular architecture allows both horizontal and vertical scaling based on demand.'
      }
    }
  },

  lighthunt: {
    id: 'lighthunt',
    slug: 'the-lighthunt',
    githubUrl: 'https://github.com/RuthDanielaAguirre/GameJam',
    demoUrl: 'https://game-h2kw0jtjv-ruthdanielaaguirres-projects.vercel.app/',
    image: '/images/projects/lighthunt.png',
    preview: {
      name: { es: 'The LightHunt', en: 'The LightHunt' },
      role: { es: 'Fullstack Developer + AR', en: 'Fullstack Developer + AR' },
      description: {
        es: 'Juego de realidad aumentada con interacción de audio espacial.',
        en: 'Augmented reality game with spatial audio interaction.'
      },
      stack: ['React', 'MindAR', 'Howler.js'],
      year: '2026'
    },
    caseStudy: {
      context: {
        es: 'The LightHunt es un juego de realidad aumentada que combina elementos visuales con interacción de audio espacial para crear una experiencia inmersiva de búsqueda.',
        en: 'The LightHunt is an augmented reality game that combines visual elements with spatial audio interaction to create an immersive hunt experience.'
      },
      problem: {
        es: 'Crear una experiencia AR accesible desde el navegador web sin necesidad de aplicaciones nativas, integrando audio espacial de manera precisa.',
        en: 'Create an accessible AR experience from the web browser without native apps, integrating spatial audio accurately.'
      },
      architecture: {
        es: 'Aplicación web progresiva construida con React, MindAR para reconocimiento de marcadores AR, y Howler.js para audio espacial 3D.',
        en: 'Progressive web application built with React, MindAR for AR marker recognition, and Howler.js for 3D spatial audio.'
      },
      technologies: ['React', 'MindAR', 'Howler.js', 'WebXR'],
      challenges: {
        es: [
          'Precisión en el tracking de marcadores AR en diferentes condiciones de iluminación',
          'Sincronización perfecta entre elementos visuales AR y audio espacial',
          'Optimización para diversos dispositivos móviles',
          'Gestión eficiente de recursos de audio y video'
        ],
        en: [
          'Accuracy in AR marker tracking under different lighting conditions',
          'Perfect synchronization between AR visual elements and spatial audio',
          'Optimization for various mobile devices',
          'Efficient management of audio and video resources'
        ]
      },
      solution: {
        es: 'Desarrollé un sistema de calibración automática que adapta el tracking según las condiciones ambientales. El audio espacial se calcula en tiempo real basándose en la posición del usuario y los objetos AR detectados.',
        en: 'I developed an automatic calibration system that adapts tracking based on environmental conditions. Spatial audio is calculated in real time based on user position and detected AR objects.'
      }
    }
  },

  tudu: {
    id: 'tudu',
    slug: 'tudu',
    githubUrl: 'https://github.com/RuthDanielaAguirre/TUDU',
    demoUrl: 'https://vimeo.com/1089235255/f7c9b7c996?share=copy&fl=sv&fe=ci',
    image: '/images/projects/tudu.png',
    preview: {
      name: { es: 'Tudu', en: 'Tudu' },
      role: { es: 'Python Developer', en: 'Python Developer' },
      description: {
        es: 'Aplicación de voz controlada con IA para gestión de tareas.',
        en: 'AI-powered voice-controlled task management application.'
      },
      stack: ['Python', 'Whisper AI', 'CustomTkinter'],
      year: '2024'
    },
    caseStudy: {
      context: {
        es: 'Tudu es una aplicación de gestión de tareas controlada por voz que utiliza IA para transcribir y organizar tareas de manera natural e intuitiva.',
        en: 'Tudu is a voice-controlled task management application that uses AI to transcribe and organize tasks naturally and intuitively.'
      },
      problem: {
        es: 'Las aplicaciones de tareas tradicionales requieren interacción manual que interrumpe el flujo de trabajo. Se necesitaba una solución que permitiera capturar tareas sin interrupciones.',
        en: 'Traditional task applications require manual interaction that interrupts workflow. A solution was needed to capture tasks without interruptions.'
      },
      architecture: {
        es: 'Aplicación de escritorio desarrollada en Python con Whisper AI de OpenAI para reconocimiento de voz, procesamiento de lenguaje natural para interpretación de comandos, y CustomTkinter para la interfaz gráfica.',
        en: 'Desktop application developed in Python with OpenAI Whisper AI for voice recognition, natural language processing for command interpretation, and CustomTkinter for the graphical interface.'
      },
      technologies: ['Python', 'Whisper AI', 'CustomTkinter', 'NLP'],
      challenges: {
        es: [
          'Precisión en el reconocimiento de voz en distintos idiomas',
          'Interpretación correcta de comandos con lenguaje natural',
          'Respuesta en tiempo real',
          'Diseño de interfaz minimalista que no distraiga'
        ],
        en: [
          'Accuracy in voice recognition in multiple languages',
          'Correct interpretation of natural language commands',
          'Real-time response',
          'Minimalist interface design that doesn\'t distract'
        ]
      },
      solution: {
        es: 'Implementé un modelo de Whisper AI fine-tuned multi idioma con un sistema de procesamiento asíncrono que mantiene la interfaz fluida. ',
        en: 'I implemented a Whisper AI model fine-tuned for multiple languages with an asynchronous processing system that keeps the interface fluid. '
      }
    }
  },

  femcoders: {
    id: 'femcoders',
    slug: 'femcoders-club',
    githubUrl: 'https://github.com/RuthDanielaAguirre/femCodersClub_Project',
    demoUrl: 'https://www.femcodersclub.com/',
    image: '/images/projects/femcoders.png',
    preview: {
      name: { es: 'Femcoders Club', en: 'Femcoders Club' },
      role: { es: 'Fullstack Developer', en: 'Fullstack Developer' },
      description: {
        es: 'Plataforma comunitaria diseñada para conectar, apoyar y empoderar mujeres en tecnología.',
        en: 'Community platform designed to connect, support and empower women in technology.'
      },
      stack: ['React', 'TypeScript', 'NestJs'],
      year: '2024'
    },
    caseStudy: {
      context: {
        es: 'Femcoders Club es una plataforma comunitaria diseñada para conectar, apoyar y empoderar mujeres en tecnología mediante recursos, networking y mentoría.',
        en: 'Femcoders Club is a community platform designed to connect, support and empower women in technology through resources, networking and mentoring.'
      },
      problem: {
        es: 'Las mujeres en tecnología a menudo carecen de espacios seguros y recursos específicos para desarrollar sus carreras y conectar con otras profesionales del sector.',
        en: 'Women in technology often lack safe spaces and specific resources to develop their careers and connect with other professionals in the field.'
      },
      architecture: {
        es: 'Aplicación web construida con React y TypeScript, Nestjs en el backend, sistema de perfiles de usuario y contenido dinámico.',
        en: 'Web application built with React and TypeScript, Nestjs for the backend, user profile system and dynamic content.'
      },
      technologies: ['React', 'TypeScript', 'Nestjs', 'MySQL'],
      challenges: {
        es: [
          'Crear un sistema de perfiles completo y flexible',
          'Implementar búsqueda y filtrado eficiente de miembros',
          'Gestionar contenido generado por usuarios de forma segura',
          'Diseñar una experiencia inclusiva y accesible'
        ],
        en: [
          'Create a complete and flexible profile system',
          'Implement efficient search and filtering of members',
          'Manage user-generated content securely',
          'Design an inclusive and accessible experience'
        ]
      },
      solution: {
        es: 'Desarrollé una arquitectura escalable con Nestjs y MySQL que permite crecimiento orgánico de la comunidad. El sistema de perfiles incluye skills, intereses y disponibilidad para mentoría. Las reglas de seguridad aseguran que solo contenido apropiado sea publicado.',
        en: 'I developed a scalable architecture with Nestjs and MySQL that allows organic community growth. The profile system includes skills, interests and mentoring availability. Security rules ensure only appropriate content is published.'
      }
    }
  },

  arcade3d: {
    id: 'arcade3d',
    slug: 'arcade-3d',
    githubUrl: 'https://github.com/RuthDanielaAguirre/arcade-store-3d',
    demoUrl: 'https://arcade-store-3d-ddxt6a227-ruthdanielaaguirres-projects.vercel.app/#/',
    image: '/images/projects/arcade3d.png',
    preview: {
      name: { es: 'Arcade 3D', en: 'Arcade 3D' },
      role: { es: 'Interactive Developer', en: 'Interactive Developer' },
      description: {
        es: 'Colección de experiencias interactivas desarrolladas para explorar gráficos 3D en tiempo real, mecánicas de juego y navegación espacial directamente en el navegador.',
        en: 'Collection of interactive experiences developed to explore real-time 3D graphics, game mechanics and spatial navigation directly in the browser.'
      },
      stack: ['Vue', 'Three.js', 'WebGL'],
      year: '2026'
    },
    caseStudy: {
      context: {
        es: 'Arcade 3D es una colección de experiencias interactivas desarrolladas para explorar gráficos 3D en tiempo real, mecánicas de juego y navegación espacial directamente en el navegador.',
        en: 'Arcade 3D is a collection of interactive experiences developed to explore real-time 3D graphics, game mechanics and spatial navigation directly in the browser.'
      },
      problem: {
        es: 'Las experiencias 3D en navegadores web tradicionalmente requieren plugins o aplicaciones nativas. Se necesitaba una solución que ofreciera gráficos 3D fluidos y mecánicas de juego complejas usando únicamente tecnologías web.',
        en: 'Browser-based 3D experiences traditionally require plugins or native applications. A solution was needed that offered smooth 3D graphics and complex game mechanics using only web technologies.'
      },
      architecture: {
        es: 'Aplicación web modular construida con Vue 3 y Three.js para renderizado WebGL, sistema de gestión de escenas 3D, física básica y controles de cámara personalizados.',
        en: 'Modular web application built with Vue 3 and Three.js for WebGL rendering, 3D scene management system, basic physics and custom camera controls.'
      },
      technologies: ['Vue', 'Three.js', 'WebGL'],
      challenges: {
        es: [
          'Optimización de rendimiento para mantener 60fps en múltiples dispositivos',
          'Implementación de controles intuitivos para navegación 3D',
          'Diseño de arquitectura modular para agregar nuevas experiencias fácilmente'
        ],
        en: [
          'Performance optimization to maintain 60fps across multiple devices',
          'Implementation of intuitive controls for 3D navigation',
          'Modular architecture design to easily add new experiences'
        ]
      },
      solution: {
        es: 'Implementé un sistema de carga dinámica que solo renderiza la escena activa, liberando recursos de experiencias anteriores. Los controles se adaptaron para funcionar tanto con mouse/teclado. El uso de instance rendering y level of detail (LOD) optimiza el rendimiento significativamente.',
        en: 'I implemented a dynamic loading system that only renders the active scene, freeing resources from previous experiences. Controls were adapted to work with both mouse/keyboard. The use of instance rendering and level of detail (LOD) significantly optimizes performance.'
      }
    }
  }
};
