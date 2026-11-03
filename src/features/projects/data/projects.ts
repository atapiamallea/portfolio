import type { Project } from '../model/project'

// Para añadir un proyecto: un objeto más en esta lista. La tarjeta, su número, la etiqueta
// "Grupal" / "Individual" y las estadísticas de "Sobre mí" se actualizan solas.
// `satisfies` hace que falte lo que falte (una traducción, un campo), no compile.
export const PROJECTS = [
  {
    id: 'fundacion-verisure',
    title: 'Fundación Verisure',
    description: {
      es: 'Plataforma para gestionar el programa de voluntariado de Fundación Verisure: catálogo de actividades, inscripciones, propuestas, entidades colaboradoras y panel de impacto exportable a PDF.',
      en: "Platform to manage Fundación Verisure's volunteer program: activity catalog, registrations, proposals, partner organizations and an impact dashboard with PDF export.",
    },
    teamType: 'team',
    technologies: [
      'React',
      'React Router',
      'Sass',
      'Vitest',
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL',
    ],
    accent: 'green',
    repositories: [
      { kind: 'frontend', url: 'https://github.com/Proyecto-Fundacion-Verisure/frontend' },
      { kind: 'backend', url: 'https://github.com/Proyecto-Fundacion-Verisure/backend' },
    ],
  },
  {
    id: 'mundo-tech',
    title: 'Mundo Tech',
    description: {
      es: 'Back-office editorial para el periódico Mundo Tech: los autores escriben y envían artículos, y los editores los revisan, publican o rechazan.',
      en: 'Editorial back-office for the Mundo Tech newspaper: authors write and submit articles, and editors review, publish or reject them.',
    },
    teamType: 'team',
    technologies: ['React', 'React Router', 'Sass', 'Vitest', 'Java', 'Spring Boot', 'JPA'],
    accent: 'violet',
    repositories: [
      {
        kind: 'frontend',
        url: 'https://github.com/Periodico-Mundo-Tech-Team-3/mundo-tech-frontend',
      },
      {
        kind: 'backend',
        url: 'https://github.com/Periodico-Mundo-Tech-Team-3/mundo-tech-backend',
      },
    ],
  },
  {
    id: 'collapp',
    title: 'Collapp',
    description: {
      es: 'Plataforma de colaboración para creativos del sector audiovisual (maquillaje, fotografía, modelos y producción): publicar proyectos, encontrar oportunidades y gestionar candidaturas.',
      en: 'Collaboration platform for creatives in the audiovisual industry (makeup, photography, models and production): publish projects, find opportunities and manage applications.',
    },
    teamType: 'solo',
    technologies: [
      'React',
      'React Router',
      'Sass',
      'Vitest',
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL',
    ],
    accent: 'ink',
    repositories: [
      { kind: 'frontend', url: 'https://github.com/Collapp-Project/collapp-frontend' },
      { kind: 'backend', url: 'https://github.com/Collapp-Project/collapp-backend' },
    ],
  },
] as const satisfies readonly Project[]
