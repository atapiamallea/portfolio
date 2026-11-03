// Fuente de verdad de los textos: el tipo `Dictionary` se deduce de este objeto.
// Los títulos con una palabra resaltada son objetos `title: { start, highlight, end }`
// que pinta el componente HighlightedText, así el JSX no contiene texto.
export const es = {
  meta: {
    title: 'Andrea — Full Stack Developer',
    description:
      'Portfolio de Andrea, desarrolladora Full Stack: aplicaciones con React, Java, Spring Boot y PostgreSQL.',
  },
  // Textos que usan varias secciones.
  common: {
    newTabNotice: 'se abre en una pestaña nueva',
    // Las claves coinciden con SocialNetwork de shared/config/site.ts.
    networkNames: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Correo',
    },
  },
  localeSwitcher: {
    groupLabel: 'Idioma',
  },
  themeToggle: {
    label: 'Modo oscuro',
  },
  navigation: {
    label: 'Principal',
    menuButton: 'Menú',
    skipLink: 'Saltar al contenido',
    links: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      skills: 'Skills',
      contact: 'Contacto',
    },
  },
  footer: {
    text: 'Hecho con React, café y mucho CSS.',
  },
  marquee: {
    label: 'Tecnologías',
    pause: 'Pausar la cinta',
  },
  hero: {
    title: { start: 'Hola, soy ', highlight: 'Andrea', end: '' },
    subtitle:
      'Desarrolladora Full Stack con React y Java. Construyo interfaces con personalidad y APIs que funcionan.',
    primaryAction: 'Ver proyectos ↓',
    secondaryAction: 'Hablemos',
  },
  about: {
    label: '01 — Sobre mí',
    title: { start: 'De la claqueta ', highlight: 'al commit', end: '.' },
    paragraphs: [
      'Desarrolladora Full Stack con Java y React. Vengo del mundo del marketing digital y esa experiencia me ayuda a pensar más allá del código: qué necesita el cliente, qué tiene sentido para el negocio y cómo construirlo de forma simple y escalable.',
      'En proyectos reales he trabajado con Scrum en equipo y también he sacado adelante uno individual de principio a fin: diseño, frontend, backend y tests.',
    ],
    badge: {
      role: 'Full Stack Developer',
      flipButton: 'Dar la vuelta a la credencial',
      socialLabel: 'Redes',
    },
    // Reverso de la credencial: lo personal, fuera del código.
    personal: {
      title: 'Fuera del código',
      // "Desde 2021" y no "hace 5 años": así el texto no caduca.
      origin: 'De La Paz, Bolivia. En Barcelona desde 2021.',
      factsLabel: 'Datos curiosos',
      facts: [
        // Explica el título de la sección, "De la claqueta al commit".
        'De la claqueta al commit: 4 años en un canal de televisión, luego marketing digital y ahora desarrollo.',
        'Mi hobby: el maquillaje artístico y de efectos especiales.',
        'Diseño y hago mis propios pendientes.',
        'Me encanta todo lo creativo, dentro y fuera de la pantalla.',
      ],
    },
  },
  projects: {
    label: '02 — Proyectos',
    title: { start: 'Trabajos ', highlight: 'seleccionados', end: '' },
    // Las claves coinciden con ProjectTeamType y RepositoryKind de features/projects.
    teamTypeTags: {
      team: 'Grupal',
      solo: 'Individual',
    },
    technologiesLabel: 'Tecnologías usadas',
    demoLink: 'Demo',
    repositoryLinks: {
      frontend: 'Código frontend',
      backend: 'Código backend',
    },
  },
  skills: {
    label: '03 — Skills',
    title: { start: 'Lo que ', highlight: 'sé hacer', end: '' },
    // Las claves son los SkillCategoryId: si falta una categoría, SkillCard no compila.
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Bases de datos',
      testing: 'Testing',
      tools: 'Herramientas',
      methodologies: 'Metodologías',
      marketing: 'Marketing digital',
      learning: 'Siempre aprendiendo',
    },
  },
  contact: {
    label: '04 — Contacto',
    title: { start: '¿Trabajamos ', highlight: 'juntos', end: '?' },
    intro: '¿Tienes un proyecto o una vacante? Escríbeme y hablamos.',
    // El texto del botón cambia con el estado de la copia (CopyStatus).
    copyButton: {
      idle: 'Copiar correo',
      copied: '¡Copiado!',
      failed: 'No se pudo copiar',
    },
    linksLabel: 'Otros enlaces',
    cv: 'CV (PDF)',
    cvNotice: 'descarga un PDF',
  },
}

/** La forma que deben cumplir todos los diccionarios. `typeof` convierte un valor en su tipo. */
export type Dictionary = typeof es
